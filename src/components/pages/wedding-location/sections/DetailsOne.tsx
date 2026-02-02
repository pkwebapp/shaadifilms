import React from "react";
import type { DetailsOneContent } from "../types";

interface DetailsOneProps {
  content: DetailsOneContent;
}

const DetailsOne = ({ content }: DetailsOneProps) => {
  return (
    <section className="w-full bg-card py-20 md:py-28 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
          {content.title}
        </h2>
        <p className="mt-6 mx-auto max-w-4xl text-base md:text-lg leading-relaxed text-[#666666] font-normal">
          Welcome to <strong className="font-semibold text-[#666666]">{content.welcomeBrand ?? "Shaadifilms"}</strong>, {content.paragraph}
        </p>
      </div>
    </section>
  );
};

export default DetailsOne;
