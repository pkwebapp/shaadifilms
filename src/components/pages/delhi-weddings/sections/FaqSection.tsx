"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "What is the starting cost for wedding photography in Delhi?",
      answer:
        "Our luxury wedding photography packages in Delhi NCR are tailored to your needs. Candid photography packages start from approximately ₹1,50,000 for a single day event. For a detailed quote including cinematography and multi-day events, please get in touch.",
    },
    {
      question:
        "How big is your team for a typical big fat Indian wedding in Delhi?",
      answer:
        "For a large-scale Delhi wedding, our team typically consists of 4-6 members, including candid photographers, traditional photographers, cinematographers, and a drone operator, to ensure comprehensive coverage of all rituals and moments.",
    },
    {
      question:
        "Do you travel within Delhi NCR (Gurgaon, Noida) and are there extra charges?",
      answer:
        "We cover the entire Delhi NCR region, including Gurgaon, Noida, Faridabad, and Ghaziabad. Travel within this region is included in our packages, so there are no hidden charges.",
    },
    {
      question: "What are your deliverables and how long does it take?",
      answer:
        "Deliverables typically include a curated set of high-resolution edited photos, a cinematic highlight film, and a full-length traditional video. You can expect a sneak peek within a week, and the final delivery of photos and films within 10-14 weeks.",
    },
    {
      question: "How do we book you for our Delhi wedding?",
      answer:
        "The process is simple. Start by filling out our booking form. We'll schedule a consultation to discuss your vision, follow up with a customized proposal, and secure your date with a retainer and a signed contract.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 md:py-28 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Main title - serif, large, bold, dark blue-gray, centered */}
        <h2 className="font-headline text-[2.5rem] md:text-5xl font-bold text-[#2b3149] text-center mb-4">
          Delhi Wedding Photography FAQs
        </h2>
        {/* Subtitle - sans-serif, muted gray, centered */}
        <p className="font-body text-base md:text-lg font-normal text-[#5c677f] text-center mb-14 md:mb-16">
          Your questions about booking a wedding photographer in Delhi NCR
          answered.
        </p>

        {/* Accordion - thin separators between items */}
        <div className="border-t border-[#e0e0e0]">
          {faqs.map((faq, index) => (
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
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
