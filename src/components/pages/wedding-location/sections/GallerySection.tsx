"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAllGalleryImages, GalleryImage } from "@/services/gallery.service";

const PAGE_SIZE = 16;

async function fetchGalleryImages(
  category: string,
  offset: number,
  limit: number
): Promise<GalleryImage[]> {
  const allImages = await getAllGalleryImages();
  const filtered =
    category === "All"
      ? allImages
      : allImages.filter(
          (img) => img.category === category.toLowerCase().replace(" ", "-")
        );
  return filtered.slice(offset, offset + limit);
}

interface GallerySectionProps {
  title?: string;
  description?: string;
}

export default function GallerySection({
  title = "Our Gallery",
  description,
}: GallerySectionProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let mounted = true;
    setImages([]);
    setOffset(0);
    setHasMore(true);
    setLoading(true);
    fetchGalleryImages("All", 0, PAGE_SIZE).then((newImages) => {
      if (!mounted) return;
      setImages(newImages);
      setHasMore(newImages.length === PAGE_SIZE);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (offset === 0) return;
    let mounted = true;
    setLoading(true);
    fetchGalleryImages("All", offset, PAGE_SIZE).then((newImages) => {
      if (!mounted) return;
      setImages((prev) => [...prev, ...newImages]);
      setHasMore(newImages.length === PAGE_SIZE);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [offset]);

  useEffect(() => {
    if (!hasMore || loading) return;
    const node = loaderRef.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setOffset((prev) => prev + PAGE_SIZE);
        }
      },
      { threshold: 1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasMore, loading]);

  const handleImageError = (id: string) => {
    setBroken((s) => ({ ...s, [id]: true }));
  };

  return (
    <section className="bg-[#fbf7f2] py-12 md:py-16" aria-labelledby="gallery-section-title">
      <div className="container px-5 mx-auto">
        <header className="mx-auto max-w-4xl px-6 text-center mb-10">
          <h2
            id="gallery-section-title"
            className="font-headline text-3xl md:text-4xl font-bold"
          >
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6c7a89] md:text-lg">
              {description}
            </p>
          )}
        </header>

        <div
          className="masonry-container gallery-section-masonry"
          aria-live="polite"
        >
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
                  alt={image.description || image.imageHint || "Gallery image"}
                  width={800}
                  height={600}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImageError(image.id)}
                  data-ai-hint={image.imageHint}
                />
              </div>
              <figcaption
                id={`${image.id}-caption`}
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center"
              >
                <p className="text-white text-sm font-semibold mb-2">
                  {image.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        {hasMore && (
          <div
            ref={loaderRef}
            className="flex justify-center py-8"
            aria-hidden="true"
          >
            <span className="text-muted-foreground">
              {loading ? "Loading more images..." : "Scroll to load more"}
            </span>
          </div>
        )}
      </div>

      <style jsx>{`
        .gallery-section-masonry.masonry-container {
          column-gap: 1rem;
          column-width: 280px;
        }
        @media (min-width: 640px) {
          .gallery-section-masonry.masonry-container {
            column-width: 320px;
          }
        }
        @media (min-width: 1024px) {
          .gallery-section-masonry.masonry-container {
            column-width: 300px;
          }
        }
        .gallery-section-masonry .masonry-item img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </section>
  );
}
