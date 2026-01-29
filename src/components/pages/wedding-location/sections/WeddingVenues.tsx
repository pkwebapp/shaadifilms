"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import type { WeddingVenuesContent } from "../types";

type VenueCategory = "hotels" | "farmhouses";

interface WeddingVenuesProps {
  content: WeddingVenuesContent;
}

const WeddingVenues = ({ content }: WeddingVenuesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<VenueCategory>("hotels");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const venues = activeTab === "hotels" ? content.luxuryHotels : content.farmhousesResorts;

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const scrollByButton = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardEl = scrollRef.current.querySelector("[data-venue-card]");
      const cardWidth = cardEl?.clientWidth || 320;
      const gap = 24;
      const moveAmount =
        direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
      scrollRef.current.scrollBy({ left: moveAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#fbf7f2]">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2420] leading-tight">
            {content.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-[#6b778a]">
            {content.subtitle}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 md:mb-12">
          <button
            type="button"
            onClick={() => setActiveTab("hotels")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "hotels"
                ? "bg-[#b84b6a] text-white shadow-md"
                : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#b84b6a] hover:text-white hover:shadow-md"
            }`}
          >
            {content.tabHotelsLabel}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("farmhouses")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === "farmhouses"
                ? "bg-[#b84b6a] text-white shadow-md"
                : "bg-[#f1f5f9] text-[#64748b] hover:bg-[#b84b6a] hover:text-white hover:shadow-md"
            }`}
          >
            {content.tabFarmhousesLabel}
          </button>
        </div>

        <div className="relative max-w-[1200px] mx-auto px-2 md:px-4">
          <button
            type="button"
            onClick={() => scrollByButton("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow border border-gray-100"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            className="flex gap-6 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing py-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {venues.map((venue) => (
              <div
                key={venue.id}
                data-venue-card
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[340px] flex-shrink-0 snap-center"
              >
                <div className="overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={venue.image}
                      alt={venue.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 280px, (max-width: 768px) 300px, 340px"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-headline text-xl md:text-2xl font-bold text-[#2b2420]">
                      {venue.name}
                    </h3>
                    <p className="mt-1 text-[#6b778a] text-sm md:text-base">
                      {venue.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByButton("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow border border-gray-100"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WeddingVenues;
