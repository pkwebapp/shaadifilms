"use client";

import React from "react";
import HeroSection from "./sections/HeroSection";
import DetailsOne from "./sections/DetailsOne";
import WhyShaadifilms from "./sections/WhyShaadifilms";
import WeddingVenues from "./sections/WeddingVenues";
import ClientsSays from "./sections/ClientsSays";
import FaqSection from "./sections/FaqSection";
import StorySection from "./sections/StorySection";
import GallerySection from "./sections/GallerySection";
import type { WeddingLocationContent } from "./types";

interface WeddingLocationPageProps {
  content: WeddingLocationContent;
}

const WeddingLocationPage = ({ content }: WeddingLocationPageProps) => {
  return (
    <div>
      <HeroSection content={content.hero} />
      <DetailsOne content={content.detailsOne} />
      <WhyShaadifilms content={content.whyShaadifilms} />
      <WeddingVenues content={content.weddingVenues} />
      <GallerySection
        title="Wedding Photography Gallery"
        description="Explore our portfolio of candid wedding photography, pre-wedding photoshoots, and cinematic films captured in Mumbai and beyond."
      />
      <ClientsSays content={content.clientsSays} />
      <FaqSection content={content.faqSection} />
      <StorySection content={content.storySection} />
    </div>
  );
};

export default WeddingLocationPage;
