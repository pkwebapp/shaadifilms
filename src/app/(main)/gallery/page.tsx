'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { PageHeader } from "@/components/common/page-header";
import { Button } from '@/components/ui/button';
import { galleryCategories } from '@/lib/gallery-categories';
import { getAllGalleryImages, GalleryImage } from '@/services/gallery.service';

const PAGE_SIZE = 16;

async function fetchGalleryImages(category: string, offset: number, limit: number): Promise<GalleryImage[]> {
  const allImages = await getAllGalleryImages();
  const filtered = category === "All"
    ? allImages
    : allImages.filter(img => img.category === category.toLowerCase().replace(' ', '-'));
  return filtered.slice(offset, offset + limit);
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  // Fetch initial images or when category changes
  useEffect(() => {
    let mounted = true;
    setImages([]);
    setOffset(0);
    setHasMore(true);
    setLoading(true);
    fetchGalleryImages(activeCategory, 0, PAGE_SIZE).then(newImages => {
      if (!mounted) return;
      setImages(newImages);
      setHasMore(newImages.length === PAGE_SIZE);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [activeCategory]);

  // Fetch more images when offset increases
  useEffect(() => {
    if (offset === 0) return;
    let mounted = true;
    setLoading(true);
    fetchGalleryImages(activeCategory, offset, PAGE_SIZE).then(newImages => {
      if (!mounted) return;
      setImages(prev => [...prev, ...newImages]);
      setHasMore(newImages.length === PAGE_SIZE);
      setLoading(false);
    });
    return () => { mounted = false; };
  }, [offset, activeCategory]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore || loading) return;
    const node = loaderRef.current;
    if (!node) return;

    const observer = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setOffset(prev => prev + PAGE_SIZE);
      }
    }, { threshold: 1 });

    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [hasMore, loading]);

  const handleImageError = (id: string) => {
    setBroken(s => ({ ...s, [id]: true }));
  };

  return (
    <>
      <PageHeader
        title="Wedding Photography Gallery"
        description="Explore our portfolio of candid wedding photography, pre-wedding photoshoots, and cinematic films captured in Mumbai and beyond."
      />
      <div className="container py-16">
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {galleryCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry container using CSS columns */}
        <div className="masonry-container" aria-live="polite">
          {images.map((image) => (
            <figure
              key={image.id}
              className="masonry-item relative group overflow-hidden rounded-lg mb-4"
              style={{ breakInside: "avoid", WebkitColumnBreakInside: "avoid", pageBreakInside: "avoid" }}
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
                <p className="text-white text-sm font-semibold mb-2">{image.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {hasMore && (
          <div ref={loaderRef} className="flex justify-center py-8">
            <span className="text-muted-foreground">{loading ? "Loading more images..." : "Scroll to load more"}</span>
          </div>
        )}
      </div>

      {/* Masonry CSS (scoped) */}
      <style jsx>{`
        .masonry-container {
          column-gap: 1rem;
          /* column-width controls column count responsively */
          column-width: 280px;
        }

        /* Increase column width on larger screens to get more columns */
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

        /* Improve image rendering */
        .masonry-item img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}