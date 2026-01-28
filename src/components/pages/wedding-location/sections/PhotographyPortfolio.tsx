"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { PhotographyPortfolioContent } from "../types";

interface PhotographyPortfolioProps {
  content: PhotographyPortfolioContent;
}

const PhotographyPortfolio = ({ content }: PhotographyPortfolioProps) => {
  const router = useRouter();

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#2b2420]">
          {content.title}
        </h2>
        <p className="text-[#6b778a] md:text-lg mt-4 max-w-3xl mx-auto leading-relaxed">
          {content.subtitle}
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute top-4 left-4 text-[13px] text-gray-800 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium shadow-sm">
                {photo.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <button
          type="button"
          onClick={() => router.push("/gallery")}
          className="
            px-12 py-4
            border border-[#e2e8f0]
            text-[#4a5568]
            text-base font-medium
            rounded-lg
            bg-[#fcfcfc]
            transition-all duration-300 ease-in-out
            hover:bg-[#b84b6a]
            hover:text-white
            hover:border-[#b84b6a]
            hover:shadow-lg
          "
        >
          View Full Gallery
        </button>
      </div>
    </section>
  );
};

export default PhotographyPortfolio;
