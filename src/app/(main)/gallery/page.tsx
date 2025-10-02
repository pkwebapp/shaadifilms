'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from "next/image";
import { PageHeader } from "@/components/common/page-header";
import { Button } from '@/components/ui/button';
// import { Download } from 'lucide-react';
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

  // Fetch initial images or when category changes
  useEffect(() => {
    setImages([]);
    setOffset(0);
    setHasMore(true);
    setLoading(true);
    fetchGalleryImages(activeCategory, 0, PAGE_SIZE).then(newImages => {
      setImages(newImages);
      setHasMore(newImages.length === PAGE_SIZE);
      setLoading(false);
    });
  }, [activeCategory]);

  // Fetch more images when offset increases
  useEffect(() => {
    if (offset === 0) return;
    setLoading(true);
    fetchGalleryImages(activeCategory, offset, PAGE_SIZE).then(newImages => {
      setImages(prev => [...prev, ...newImages]);
      setHasMore(newImages.length === PAGE_SIZE);
      setLoading(false);
    });
  }, [offset, activeCategory]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!hasMore || loading) return;
    const observer = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setOffset(prev => prev + PAGE_SIZE);
      }
    }, { threshold: 1 });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore, loading]);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={400}
                height={400}
                loading="lazy"
                className="object-cover w-full h-full aspect-square transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <p className="text-white text-sm font-semibold mb-2">{image.description}</p>
                {/* <Button variant="outline" size="icon" className="text-white bg-white/20 border-white/50 hover:bg-white/30"> */}
                  {/* <Download className="w-5 h-5"/> */}
                {/* </Button> */}
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <div ref={loaderRef} className="flex justify-center py-8">
            <span className="text-muted-foreground">Loading more images...</span>
          </div>
        )}
      </div>
    </>
  );
}