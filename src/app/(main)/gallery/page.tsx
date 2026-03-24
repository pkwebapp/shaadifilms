'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { PageHeader } from "@/components/common/page-header";
import { Loader2 } from "lucide-react";

const API_URL = "https://pk.thetechthingy.com/api/v1/wedding-pages/gallery";

interface GalleryImage {
  id: string;
  imageUrl: string;
  description: string;
  imageHint?: string;
}

export default function GalleryPage() {
  const [header, setHeader] = useState({
    title: "Wedding Photography Gallery",
    description: "Explore our portfolio of candid wedding photography, pre-wedding photoshoots, and cinematic films captured in Mumbai and beyond."
  });
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("API request failed");
        
        const json = await response.json();
        if (json.success && json.data) {
          const apiData = json.data;
          
          // Use first item from imagesWithContent for header
          if (apiData.imagesWithContent?.[0]) {
            setHeader({
              title: apiData.imagesWithContent[0].title,
              description: apiData.imagesWithContent[0].description
            });
          }

          // Map imagesWithOptionalText to images
          if (apiData.imagesWithOptionalText) {
            const mappedImages = apiData.imagesWithOptionalText.map((item: any, idx: number) => ({
              id: item._id || `api-img-${idx}`,
              imageUrl: item.image,
              description: item.text || "",
              imageHint: item.text || "Wedding Gallery Image"
            }));
            setImages(mappedImages);
          }
        }
      } catch (err) {
        console.error("Failed to fetch gallery data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImageError = (id: string) => {
    setBroken(s => ({ ...s, [id]: true }));
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <Loader2 className="h-12 w-12 animate-spin text-[#b84b6a]" />
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={header.title}
        description={header.description}
      />
      <div className="px-5">
        <div className="masonry-container" aria-live="polite">
          {images.map((image) => (
            <figure
              key={image.id}
              className="masonry-item relative group overflow-hidden rounded-lg mb-4"
              style={{ breakInside: "avoid", pageBreakInside: "avoid" }}
              aria-describedby={`${image.id}-caption`}
            >
              <div className="relative w-full">
                <Image
                  src={broken[image.id] ? "/fallback.jpg" : image.imageUrl}
                  alt={image.description || "Gallery image"}
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImageError(image.id)}
                  data-ai-hint={image.imageHint}
                  unoptimized={true}
                />
              </div>

              <figcaption
                id={`${image.id}-caption`}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center"
                >
                <p className="text-white text-sm font-semibold mb-2">{image.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style jsx>{`
        .masonry-container {
          column-gap: 1rem;
          column-width: 280px;
        }
        @media (min-width: 640px) {
          .masonry-container {
            column-width: 320px;
          }
        }
        @media (min-width: 1024px) {
          .masonry-container {
            column-width: 300px;
          }
        }
        .masonry-item img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}