"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import type { ClientsSaysContent } from "../types";

interface ClientsSaysProps {
  content: ClientsSaysContent;
}

const ClientsSays = ({ content }: ClientsSaysProps) => {
  const swiperRef = React.useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#fbf7f2] py-20 md:py-24 px-6 overflow-hidden select-none">
      <div className="max-w-4xl mx-auto text-center mb-14 md:mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#2b2420] mb-4 md:mb-5 leading-tight">
          {content.title}
        </h2>
        <p className="text-[#6b778a] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {content.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative px-4">
        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous testimonial"
          className="clients-swiper-prev absolute left-0 top-1/2 z-30 -translate-y-1/2 w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-[#b84b6a] hover:text-white hover:border-[#b84b6a] transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <Swiper
          onSwiper={(swiper: SwiperType) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={false}
          grabCursor
          className="!overflow-visible py-4"
          style={{ overflow: "hidden" }}
        >
          {content.testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.06)] flex flex-col items-center text-center min-h-[420px] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
                <p className="text-[#4b5c80] leading-[1.8] text-[15px] md:text-[16px] mb-auto max-w-xl mx-auto">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-8 flex flex-col items-center">
                  <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden border-2 border-[#b84b6a] flex-shrink-0 mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-headline text-lg md:text-xl font-bold text-[#2b2420] mb-1">
                    {item.name}
                  </h4>
                  <p className="text-[#b84b6a] text-sm font-medium">
                    {item.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next testimonial"
          className="clients-swiper-next absolute right-0 top-1/2 z-30 -translate-y-1/2 w-11 h-11 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-[#b84b6a] hover:text-white hover:border-[#b84b6a] transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ClientsSays;
