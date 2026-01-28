"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

type VenueCategory = "hotels" | "farmhouses";

interface Venue {
  id: number;
  name: string;
  location: string;
  image: string;
}

const luxuryHotels: Venue[] = [
  {
    id: 1,
    name: "ITC Maurya",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    name: "The Leela Palace",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Taj Palace",
    location: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Roseate House",
    location: "Aerocity, New Delhi",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    name: "JW Marriott",
    location: "Aerocity, New Delhi",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop",
  },
];

const farmhousesResorts: Venue[] = [
  {
    id: 6,
    name: "Chhatarpur Farmhouse",
    location: "South Delhi",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Andaz Delhi",
    location: "Aerocity",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    name: "The Manor",
    location: "Friends Colony",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    name: "Lodhi Hotel",
    location: "Lodhi Road",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  },
  {
    id: 10,
    name: "The Oberoi",
    location: "Dr. Zakir Hussain Marg",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
  },
];

const WeddingVenues = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<VenueCategory>("hotels");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const venues = activeTab === "hotels" ? luxuryHotels : farmhousesResorts;

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
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2420] leading-tight">
            Delhi NCR&apos;s Most Popular Wedding Venues
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-[#6b778a]">
            We are proud to be a preferred photography and videography partner
            for many of the most sought-after luxury hotels and farmhouses
            across Delhi, Gurgaon, and Noida.
          </p>
        </div>

        {/* Tabs: Luxury Hotels | Farmhouses & Resorts */}
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
            Luxury Hotels
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
            Farmhouses & Resorts
          </button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-[1200px] mx-auto px-2 md:px-4">
          {/* Previous slide */}
          <button
            type="button"
            onClick={() => scrollByButton("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow border border-gray-100"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
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

          {/* Next slide */}
          <button
            type="button"
            onClick={() => scrollByButton("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow border border-gray-100"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default WeddingVenues;
