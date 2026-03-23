"use client";

import React, { useState, useEffect } from "react";
import WeddingLocationPage from "@/components/pages/wedding-location/WeddingLocationPage";
import { goaContent } from "@/components/pages/wedding-location/content/goa";
import type { WeddingLocationContent } from "@/components/pages/wedding-location/types";

const API_URL = "https://pk.thetechthingy.com/api/v1/wedding-pages/goa";

/**
 * Maps the API's imagesWithContent array to the page sections.
 *
 * API imagesWithContent index mapping:
 * [0] → Hero section (title, description, image)
 * [1] → DetailsOne section (title, description)
 * [2] → WhyShaadifilms section header (title, description)
 * [3] → WhyShaadifilms item 1 (title, description, image)
 * [4] → WhyShaadifilms item 2 (title, description, image)
 * [5] → WhyShaadifilms item 3 (title, description, image)
 * [6] → WeddingVenues section header (title, description)
 * [7] → GallerySection (title, description)
 * [8] → ClientsSays section header (title, description)
 */
function mergeApiData(apiData: any): WeddingLocationContent {
  const items = apiData.imagesWithContent || [];
  const optionalText = apiData.imagesWithOptionalText || [];

  const getItem = (index: number) => items[index] || null;

  const hero = getItem(0);
  const details = getItem(1);
  const whyHeader = getItem(2);
  const whyItem1 = getItem(3);
  const whyItem2 = getItem(4);
  const whyItem3 = getItem(5);
  const venuesHeader = getItem(6);

  // Flexible lookup for the remaining sections based on keywords
  const remainingItems = items.slice(7);
  const findItem = (keywords: string[]) => 
    remainingItems.find((item: any) => 
      keywords.some(k => item.title?.toLowerCase().includes(k))
    ) || null;

  const gallery = findItem(["gallery", "portfolio"]);
  const clientsHeader = findItem(["client", "say", "couple", "testimonial"]);
  const faqsHeader = findItem(["faq", "question"]);
  const storyHeader = findItem(["story", "capture", "create", "availability"]);

  // Map Hotels (Indices 11-16 in Goa sample)
  const apiHotels = items.slice(11, 17).map((item: any, idx: number) => ({
    id: idx + 1,
    name: item.title,
    location: item.description,
    image: item.image,
  }));

  // Map FAQs (Starting from index 17 in Goa sample)
  const apiFaqs = items.slice(17).filter((item: any) => item.title?.includes("?")).map((item: any) => ({
    question: item.title,
    answer: item.description,
  }));

  // Handle DetailsOne paragraph: try to extract and avoid "Welcome to" duplication
  let refinedParagraph = details?.description || goaContent.detailsOne.paragraph;
  let welcomeBrand = goaContent.detailsOne.welcomeBrand;

  if (details?.description?.toLowerCase().startsWith("welcome to")) {
    const match = details.description.match(/welcome to\s+([^,]+),\s*(.*)/i);
    if (match) {
      welcomeBrand = match[1].trim();
      refinedParagraph = match[2].trim();
    }
  }

  const fallbackItems = goaContent.whyShaadifilms.items;
  const whyItems = [whyItem1, whyItem2, whyItem3].map((apiItem, idx) => {
    const fallback = fallbackItems[idx];
    if (!apiItem && !fallback) return null;
    return {
      title: apiItem?.title || fallback?.title || "",
      desc: apiItem?.description || fallback?.desc || "",
      iconKey: fallback?.iconKey || "users" as const,
      img: apiItem?.image || fallback?.img || "",
      alt: apiItem?.title || fallback?.alt || "",
    };
  }).filter(Boolean) as typeof fallbackItems;

  return {
    videoLink: apiData.videoLink || goaContent.videoLink,

    hero: {
      tagline: goaContent.hero.tagline,
      title: hero?.title || goaContent.hero.title,
      description: hero?.description || goaContent.hero.description,
    },

    detailsOne: {
      title: details?.title || goaContent.detailsOne.title,
      paragraph: refinedParagraph,
      welcomeBrand: welcomeBrand,
    },

    whyShaadifilms: {
      title: whyHeader?.title || goaContent.whyShaadifilms.title,
      subtitle: whyHeader?.description || goaContent.whyShaadifilms.subtitle,
      items: whyItems.length > 0 ? whyItems : goaContent.whyShaadifilms.items,
    },

    weddingVenues: {
      title: venuesHeader?.title || goaContent.weddingVenues.title,
      subtitle: venuesHeader?.description || goaContent.weddingVenues.subtitle,
      tabHotelsLabel: goaContent.weddingVenues.tabHotelsLabel,
      tabFarmhousesLabel: goaContent.weddingVenues.tabFarmhousesLabel,
      luxuryHotels: apiHotels.length > 0 ? apiHotels : goaContent.weddingVenues.luxuryHotels,
      farmhousesResorts: goaContent.weddingVenues.farmhousesResorts,
    },

    photographyPortfolio: {
      title: gallery?.title || goaContent.photographyPortfolio.title,
      subtitle: gallery?.description || goaContent.photographyPortfolio.subtitle,
      photos: optionalText.length > 0 
        ? optionalText.map((item: any, idx: number) => ({
            id: idx + 1,
            src: item.image,
            alt: item.text || "Goa Wedding Photography",
          }))
        : goaContent.photographyPortfolio.photos,
    },

    clientsSays: {
      title: clientsHeader?.title || goaContent.clientsSays.title,
      subtitle: clientsHeader?.description || goaContent.clientsSays.subtitle,
      testimonials: goaContent.clientsSays.testimonials,
    },

    faqSection: {
      title: faqsHeader?.title || goaContent.faqSection.title,
      subtitle: faqsHeader?.description || goaContent.faqSection.subtitle,
      faqs: apiFaqs.length > 0 ? apiFaqs : goaContent.faqSection.faqs,
    },

    storySection: {
      title: storyHeader?.title || goaContent.storySection.title,
      description: storyHeader?.description || goaContent.storySection.description,
      ctaText: goaContent.storySection.ctaText,
    },

    gallerySection: {
      title: gallery?.title || goaContent.gallerySection?.title || "Wedding Photography Gallery",
      description: gallery?.description || goaContent.gallerySection?.description || "",
    },
  };
}

const GoaWeddingsPage = () => {
  const [content, setContent] = useState<WeddingLocationContent>(goaContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("API request failed");

        const json = await response.json();
        if (json.success && json.data) {
          setContent(mergeApiData(json.data));
        }
      } catch (err) {
        console.error("Failed to fetch Goa wedding data, using fallback:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b84b6a] mx-auto" />
          <p className="mt-4 text-white/60 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return <WeddingLocationPage content={content} />;
};

export default GoaWeddingsPage;
