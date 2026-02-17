"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { PageHeader } from "@/components/common/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize2,
  QrCode,
} from "lucide-react";

const PDF_URL = "/Pdf/Sagar and Pratiksha_compressed (1).pdf";
const VIDEO_EFFECT_URL = "/20260204-1122-21.2650973.mp4";
const ALBUMS_API_BASE = "https://pk.thetechthingy.com/api/v1";

type AlbumResponse = {
  _id: string;
  name: string;
  event_date: string;
  userId: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Configure PDF.js worker (required for react-pdf) – only in browser
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

// PDF page dimensions (same for all pages) for fit-to-container scaling
type PdfPageDimensions = { width: number; height: number };

// PDF page wrapper for react-pageflip (needs forwardRef so library can attach to DOM)
const PDFFlipPage = React.forwardRef<
  HTMLDivElement,
  {
    pageNumber: number;
    width: number;
    height: number;
    pdfPageDimensions: PdfPageDimensions | null;
  }
>(({ pageNumber, width, height, pdfPageDimensions }, ref) => {
  // Scale so the full PDF page fits inside the container (one page = full visible area)
  const scale = pdfPageDimensions
    ? Math.min(
        width / pdfPageDimensions.width,
        height / pdfPageDimensions.height
      )
    : 1;
  const renderWidth = pdfPageDimensions
    ? pdfPageDimensions.width * scale
    : width;

  return (
    <div
      ref={ref}
      className="w-full h-full flex items-start justify-start overflow-hidden bg-[#f5f2ee] rounded-lg"
      style={{
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div className="w-full h-full flex items-start justify-start overflow-hidden">
        <Page
          pageNumber={pageNumber}
          width={renderWidth}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="shadow-sm"
        />
      </div>
    </div>
  );
});
PDFFlipPage.displayName = "PDFFlipPage";

export function AlbumPageClient() {
  const [albumId, setAlbumId] = useState("");
  const [coupleName, setCoupleName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [email, setEmail] = useState("");
  const [isFinding, setIsFinding] = useState(false);
  const [albumData, setAlbumData] = useState<AlbumResponse | null>(null);
  const [findError, setFindError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [shareUrl, setShareUrl] = useState("");
  const [isFlipping, setIsFlipping] = useState(false);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfPageDimensions, setPdfPageDimensions] =
    useState<PdfPageDimensions | null>(null);
  const [pageWidth, setPageWidth] = useState(560);
  const [pageHeight, setPageHeight] = useState(420);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void } }>(null);
  const pinchRef = useRef<{ distance: number; zoom: number } | null>(null);

  const getTouchDistance = (touches: React.TouchList | TouchList) =>
    Math.hypot(
      touches[1].clientX - touches[0].clientX,
      touches[1].clientY - touches[0].clientY
    );

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchRef.current = {
        distance: getTouchDistance(e.touches),
        zoom,
      };
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) pinchRef.current = null;
  };

  useEffect(() => {
    setShareUrl(typeof window !== "undefined" ? window.location.href : "");
  }, []);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0]?.contentRect ?? {};
      if (typeof width === "number" && width > 0) setPageWidth(width);
      if (typeof height === "number" && height > 0) setPageHeight(height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const getDistance = (touches: TouchList) =>
      Math.hypot(
        touches[1].clientX - touches[0].clientX,
        touches[1].clientY - touches[0].clientY
      );
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const distance = getDistance(e.touches);
        const scale = distance / pinchRef.current.distance;
        const newZoom = Math.min(
          2,
          Math.max(0.5, pinchRef.current.zoom * scale)
        );
        setZoom(newZoom);
        pinchRef.current = { distance, zoom: newZoom };
      }
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

  const totalPages = numPages ?? 1;

  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(typeof e.data === "number" ? e.data + 1 : 1);
  }, []);

  const onFlipState = useCallback((e: { data: string }) => {
    setIsFlipping(e.data === "flipping");
  }, []);

  const goPrev = () => {
    if (currentPage <= 1 || isFlipping) return;
    bookRef.current?.pageFlip()?.flipPrev();
  };

  const goNext = () => {
    if (currentPage >= totalPages || isFlipping) return;
    bookRef.current?.pageFlip()?.flipNext();
  };
  const zoomIn = () => setZoom((z) => Math.min(2, z + 0.25));
  const zoomOut = () => setZoom((z) => Math.max(0.5, z - 0.25));

  const toggleFullscreen = () => {
    if (!viewerRef.current) return;
    if (!document.fullscreenElement) {
      viewerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const handleFindAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    setFindError(null);
    const eventName = (albumId.trim() || coupleName.trim()) || undefined;
    if (!eventName) {
      setFindError("Please enter an Album ID or the couple's name.");
      return;
    }
    if (!email.trim()) {
      setFindError("Please enter your email.");
      return;
    }
    setIsFinding(true);
    try {
      const res = await fetch(`${ALBUMS_API_BASE}/albums/getAlbum`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event_name: eventName,
          email: email.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFindError(data?.message || "Could not find your album. Please check your details.");
        setAlbumData(null);
        return;
      }
      setAlbumData(data as AlbumResponse);
    } catch {
      setFindError("Something went wrong. Please try again.");
      setAlbumData(null);
    } finally {
      setIsFinding(false);
    }
  };

  return (
    <div
      className="min-h-full relative"
      style={{ backgroundColor: "#F8F5F1" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-[0.12]"
          aria-hidden
        >
          <source src={VIDEO_EFFECT_URL} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(to bottom, #F8F5F1 0%, transparent 30%, transparent 70%, #F8F5F1 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10">
        <PageHeader
          title="Explore Our Digital Albums"
          description="Experience the elegance of a Shaadifilms digital album with our interactive demo, or access your personal wedding album below."
        />

        <div className="px-4 py-12 md:py-16 space-y-16">
        <div className="container max-w-6xl">
          <div className="rounded-lg border bg-card text-card-foreground p-4 sm:p-6 md:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">
              <div className="flex-1 min-w-0 overflow-hidden">
                {albumData ? (
                  <>
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div>
                        <h2 className="font-headline text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-foreground">
                          Your Album: {albumData.name}
                        </h2>
                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-snug">
                          {albumData.event_date
                            ? `Event date: ${new Date(albumData.event_date).toLocaleDateString()}`
                            : "Your personal album."}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setAlbumData(null)}
                      >
                        View demo album
                      </Button>
                    </div>
                    <div className="mt-4 sm:mt-6 flex flex-col items-start gap-3 sm:gap-4">
                      <div
                        className="relative w-full aspect-[3/2] max-h-[320px] sm:max-h-[400px] md:max-h-[480px] rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm flex items-center justify-center"
                        style={{
                          boxShadow:
                            "0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)",
                        }}
                      >
                        {albumData.url.toLowerCase().endsWith(".pdf") ? (
                          <Document
                            file={albumData.url}
                            className="w-full h-full"
                            loading={
                              <div className="flex h-full min-h-[200px] items-center justify-center bg-muted text-muted-foreground">
                                Loading album…
                              </div>
                            }
                            error={
                              <div className="flex h-full min-h-[200px] items-center justify-center bg-destructive/10 text-destructive">
                                Failed to load album.
                              </div>
                            }
                          >
                            <Page
                              pageNumber={1}
                              width={Math.min(560, typeof window !== "undefined" ? window.innerWidth * 0.8 : 560)}
                              renderTextLayer={false}
                              renderAnnotationLayer={false}
                            />
                          </Document>
                        ) : (
                          <img
                            src={albumData.url}
                            alt={`Album: ${albumData.name}`}
                            className="max-w-full max-h-full w-auto h-auto object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="font-headline text-xl sm:text-2xl font-semibold leading-tight tracking-tight text-foreground">
                      Our Demo Album: Sagar & Pratiksha
                    </h2>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-snug">
                      Flip through the pages to see how we preserve your timeless
                      memories in a beautiful, interactive format.
                    </p>
                    <div className="mt-4 sm:mt-6 flex flex-col items-start gap-3 sm:gap-4">
                      <div
                        ref={viewerRef}
                        className="relative w-full aspect-[3/2] max-h-[320px] sm:max-h-[400px] md:max-h-[480px] rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm touch-none"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                      >
                    {isFullscreen && (
                      <Button
                        type="button"
                        variant="secondary"
                        size="icon"
                        onClick={toggleFullscreen}
                        aria-label="Exit fullscreen"
                        className="absolute top-3 right-3 z-20 h-10 w-10 rounded-full bg-white/95 shadow-md hover:bg-white"
                      >
                        <Minimize2 className="h-5 w-5 text-gray-700" />
                      </Button>
                    )}
                    <div
                      className="absolute inset-0 origin-top-left cursor-pointer flex items-center justify-center"
                      style={{
                        width: `${100 / zoom}%`,
                        height: `${100 / zoom}%`,
                        transform: `scale(${zoom})`,
                        transformOrigin: "top left",
                      }}
                      onClick={() => goNext()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          goNext();
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label="Go to next page"
                    >
                      <div className="relative w-full h-full overflow-hidden">
                      <Document
                        file={PDF_URL}
                        onLoadSuccess={(pdf) => {
                          setNumPages(pdf.numPages);
                          pdf.getPage(1).then((page) => {
                            const v = page.getViewport({ scale: 1 });
                            setPdfPageDimensions({
                              width: v.width,
                              height: v.height,
                            });
                          });
                        }}
                        loading={
                          <div className="flex h-full min-h-[200px] items-center justify-center bg-muted text-muted-foreground">
                            Loading album…
                          </div>
                        }
                        error={
                          <div className="flex h-full min-h-[200px] items-center justify-center bg-destructive/10 text-destructive">
                            Failed to load PDF.
                          </div>
                        }
                        className="w-full! h-full overflow-hidden"
                      >
                        {numPages != null && numPages > 0 && (
                          <HTMLFlipBook
                            ref={bookRef}
                            width={pageWidth}
                            height={pageHeight}
                            minWidth={pageWidth}
                            maxWidth={pageWidth}
                            minHeight={pageHeight}
                            maxHeight={pageHeight}
                            size="fixed"
                            showCover={false}
                            drawShadow={true}
                            flippingTime={600}
                            usePortrait={true}
                            startPage={0}
                            startZIndex={0}
                            autoSize={true}
                            maxShadowOpacity={1}
                            mobileScrollSupport={true}
                            clickEventForward={true}
                            useMouseEvents={true}
                            swipeDistance={30}
                            showPageCorners={true}
                            disableFlipByClick={false}
                            onFlip={onFlip}
                            onChangeState={onFlipState}
                            className="w-full! h-full rounded-xl overflow-hidden [&>div]:!w-full [&>div]:!h-full"
                            style={{
                              // Give flip book 2× width so it positions at left=0; parent overflow shows one page
                              width: pageWidth * 2,
                              height: pageHeight,
                            }}
                          >
                            {Array.from({ length: numPages }, (_, i) => (
                              <PDFFlipPage
                                key={i}
                                pageNumber={i + 1}
                                width={pageWidth}
                                height={pageHeight}
                                pdfPageDimensions={pdfPageDimensions}
                              />
                            ))}
                            </HTMLFlipBook>
                        )}
                      </Document>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-center gap-1.5 sm:gap-4 py-2 px-3 sm:py-3 sm:px-4 rounded-full border border-gray-200 bg-gray-100/80 shadow-sm w-full"
                    role="toolbar"
                    aria-label="Album controls"
                  >
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={goPrev}
                      disabled={currentPage <= 1 || isFlipping}
                      aria-label="Previous page"
                      className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 hover:bg-gray-200 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5"
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={zoomOut}
                      aria-label="Zoom out"
                      className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 hover:bg-gray-200 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5"
                    >
                      <ZoomOut />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={zoomIn}
                      aria-label="Zoom in"
                      className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 hover:bg-gray-200 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5"
                    >
                      <ZoomIn />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={toggleFullscreen}
                      aria-label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                      className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 hover:bg-gray-200 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5"
                    >
                      {isFullscreen ? (
                        <Minimize2 />
                      ) : (
                        <Maximize />
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={goNext}
                      disabled={currentPage >= totalPages || isFlipping}
                      aria-label="Next page"
                      className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 hover:bg-gray-200 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5"
                    >
                      <ChevronRight />
                    </Button>
                  </div>
                </div>
                  </>
                )}
              </div>

              <div className="lg:w-[320px] shrink-0">
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <QrCode className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-headline text-lg font-bold text-foreground">
                        Share Demo
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Scan the code to view on another device.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center pt-4">
                    {shareUrl ? (
                      <div className="inline-flex rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shareUrl)}`}
                          alt="QR code to view album on another device"
                          width={200}
                          height={200}
                          className="rounded"
                        />
                      </div>
                    ) : (
                      <div className="h-[200px] w-[200px] rounded border border-gray-200 bg-muted animate-pulse" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-4xl px-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                Find Your Personal Album
              </CardTitle>
              <CardDescription>
                Enter your Album ID, or the couple&apos;s name and event date to
                access your album.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFindAlbum} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="albumId">Album ID</Label>
                  <Input
                    id="albumId"
                    placeholder="e.g. ALB-XXXX"
                    value={albumId}
                    onChange={(e) => setAlbumId(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex-1 h-px bg-border" aria-hidden />
                  <span className="text-sm text-muted-foreground shrink-0">OR</span>
                  <span className="flex-1 h-px bg-border" aria-hidden />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="coupleName">Couple&apos;s Name</Label>
                    <Input
                      id="coupleName"
                      placeholder="e.g. Priya & Rohan"
                      value={coupleName}
                      onChange={(e) => setCoupleName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="e.g. you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {findError && (
                  <p className="text-sm text-destructive" role="alert">
                    {findError}
                  </p>
                )}
                <Button type="submit" disabled={isFinding}>
                  {isFinding ? "Searching…" : "Find My Album"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </div>
  );
}
