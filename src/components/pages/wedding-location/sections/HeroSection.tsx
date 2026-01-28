import React from "react";
import Link from "next/link";
import type { HeroContent } from "../types";

interface HeroSectionProps {
  content: HeroContent;
}

const HeroSection = ({ content }: HeroSectionProps) => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-gradient-to-b from-[#3d3d3d] via-[#2a2a2a] to-[#1a1a1a]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        <source src="/videos/hero.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 bg-black/35" aria-hidden />
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
