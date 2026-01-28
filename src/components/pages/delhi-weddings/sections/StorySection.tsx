import React from "react";
import Link from "next/link";

const StorySection = () => {
  return (
    <section className="bg-[#fbf7f2] py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Title */}
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Let’s Capture Your Grand Delhi Wedding Story
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6c7a89] md:text-lg">
          Your wedding deserves to be documented with a blend of royal elegance
          and modern cinematic flair. Contact the best wedding photographer in
          Delhi to get a custom quote for our photography, cinematography, and
          drone coverage.
        </p>

        {/* Button - goes to Book a Consultation page */}
        <div className="mt-10">
          <Link
            href="/book"
            className="inline-block rounded-lg bg-[#7a2e46] px-10 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#68273c]"
          >
            Book Your Delhi Wedding Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
