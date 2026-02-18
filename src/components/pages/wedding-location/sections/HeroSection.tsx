"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { getYouTubeEmbedUrl } from "@/lib/utils";
import type { HeroContent } from "../types";

const HERO_VIDEO_URL = "https://www.youtube.com/watch?v=Hx-t1NOsTJE";

interface HeroSectionProps {
  content: HeroContent;
}

const HeroSection = ({ content }: HeroSectionProps) => {
  const embedSrc = useMemo(() => getYouTubeEmbedUrl(HERO_VIDEO_URL), []);

  return (
    <section className="relative h-[92vh] w-full overflow-hidden text-white">
      {/* Background video (iframe) - same as homepage */}
      {embedSrc && (
        <div className="absolute inset-0 -z-20">
          <iframe
            src={embedSrc}
            title="Shaadifilms hero video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "100vw",
              height: "56.25vw",
              minHeight: "100vh",
              minWidth: "177.77vh",
              border: 0,
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-0 bg-black/40" aria-hidden />
        </div>
      )}
      <div className="absolute inset-0 z-10 flex items-center justify-center py-20 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-6 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#b84b6a] md:text-sm">
            {content.tagline}
          </p>
          <h1 className="font-headline text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {content.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-white/95">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/book"
              className="rounded-lg bg-[#b84b6a] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:brightness-110 inline-block"
            >
              Check Availability
            </Link>
            <Link
              href="/packages"
              className="rounded-lg border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-white/10"
            >
              Get Wedding Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
