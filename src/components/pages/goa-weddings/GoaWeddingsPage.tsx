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

  const getItem = (index: number) => items[index] || null;

  const hero = getItem(0);
  const details = getItem(1);
  const whyHeader = getItem(2);
  const whyItem1 = getItem(3);
  const whyItem2 = getItem(4);
  const whyItem3 = getItem(5);
  const venuesHeader = getItem(6);
  const gallery = getItem(7);
  const clientsHeader = getItem(8);

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
      paragraph: details?.description || goaContent.detailsOne.paragraph,
      welcomeBrand: goaContent.detailsOne.welcomeBrand,
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
      luxuryHotels: goaContent.weddingVenues.luxuryHotels,
      farmhousesResorts: goaContent.weddingVenues.farmhousesResorts,
    },

    photographyPortfolio: goaContent.photographyPortfolio,

    clientsSays: {
      title: clientsHeader?.title || goaContent.clientsSays.title,
      subtitle: clientsHeader?.description || goaContent.clientsSays.subtitle,
      testimonials: goaContent.clientsSays.testimonials,
    },

    faqSection: goaContent.faqSection,
    storySection: goaContent.storySection,

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
