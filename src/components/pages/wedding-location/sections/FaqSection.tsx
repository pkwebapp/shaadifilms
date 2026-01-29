"use client";

import React, { useState } from "react";
import type { FaqSectionContent } from "../types";

interface FaqSectionProps {
  content: FaqSectionContent;
}

const FaqSection = ({ content }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 md:py-28 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-[2.5rem] md:text-5xl font-bold text-[#2b3149] text-center mb-4">
          {content.title}
        </h2>
        <p className="font-body text-base md:text-lg font-normal text-[#5c677f] text-center mb-14 md:mb-16">
          {content.subtitle}
        </p>

        <div className="border-t border-[#e0e0e0]">
          {content.faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#e0e0e0]">
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full py-5 md:py-6 px-0 flex items-center justify-between text-left cursor-pointer transition-colors hover:bg-gray-50/50"
              >
                <span className="font-body text-base md:text-lg font-semibold text-[#2b3149] pr-6 flex-1">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#2b3149] flex-shrink-0 transition-transform duration-300 ease-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 md:pb-8 pt-0 text-[#5c677f] leading-relaxed text-base md:text-lg font-normal">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
