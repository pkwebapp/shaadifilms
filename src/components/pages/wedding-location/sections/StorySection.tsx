import React from "react";
import Link from "next/link";
import type { StorySectionContent } from "../types";

interface StorySectionProps {
  content: StorySectionContent;
}

const StorySection = ({ content }: StorySectionProps) => {
  return (
    <section className="bg-[#fbf7f2] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          {content.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6c7a89] md:text-lg">
          {content.description}
        </p>
        <div className="mt-10">
          <Link
            href="/book"
            className="inline-block rounded-lg bg-[#7a2e46] px-10 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#68273c]"
          >
            {content.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
