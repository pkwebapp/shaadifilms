"use client";

import React, { useState, useEffect } from "react";
import WeddingLocationPage from "@/components/pages/wedding-location/WeddingLocationPage";
import { delhiContent } from "@/components/pages/wedding-location/content/delhi";
import type { WeddingLocationContent } from "@/components/pages/wedding-location/types";

const API_URL = "https://pk.thetechthingy.com/api/v1/wedding-pages/delhi";

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

  // Helper to safely get an item by index
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

  // Build WhyShaadifilms items from API, merging images from API with fallback data
  const fallbackItems = delhiContent.whyShaadifilms.items;
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
    videoLink: apiData.videoLink || delhiContent.videoLink,

    hero: {
      tagline: delhiContent.hero.tagline,
      title: hero?.title || delhiContent.hero.title,
      description: hero?.description || delhiContent.hero.description,
    },

    detailsOne: {
      title: details?.title || delhiContent.detailsOne.title,
      paragraph: details?.description || delhiContent.detailsOne.paragraph,
      welcomeBrand: delhiContent.detailsOne.welcomeBrand,
    },

    whyShaadifilms: {
      title: whyHeader?.title || delhiContent.whyShaadifilms.title,
      subtitle: whyHeader?.description || delhiContent.whyShaadifilms.subtitle,
      items: whyItems.length > 0 ? whyItems : delhiContent.whyShaadifilms.items,
    },

    weddingVenues: {
      title: venuesHeader?.title || delhiContent.weddingVenues.title,
      subtitle: venuesHeader?.description || delhiContent.weddingVenues.subtitle,
      tabHotelsLabel: delhiContent.weddingVenues.tabHotelsLabel,
      tabFarmhousesLabel: delhiContent.weddingVenues.tabFarmhousesLabel,
      luxuryHotels: delhiContent.weddingVenues.luxuryHotels,
      farmhousesResorts: delhiContent.weddingVenues.farmhousesResorts,
    },

    photographyPortfolio: delhiContent.photographyPortfolio,

    clientsSays: {
      title: clientsHeader?.title || delhiContent.clientsSays.title,
      subtitle: clientsHeader?.description || delhiContent.clientsSays.subtitle,
      testimonials: delhiContent.clientsSays.testimonials,
    },

    faqSection: delhiContent.faqSection,
    storySection: delhiContent.storySection,

    gallerySection: {
      title: gallery?.title || delhiContent.gallerySection?.title || "Wedding Photography Gallery",
      description: gallery?.description || delhiContent.gallerySection?.description || "",
    },
  };
}

const DelhiWeddingsPage = () => {
  const [content, setContent] = useState<WeddingLocationContent>(delhiContent);
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
        console.error("Failed to fetch Delhi wedding data, using fallback:", err);
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

export default DelhiWeddingsPage;
