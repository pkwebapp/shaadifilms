"use client";

import React from "react";
import WeddingLocationPage from "@/components/pages/wedding-location/WeddingLocationPage";
import { goaContent } from "@/components/pages/wedding-location/content/goa";

const GoaWeddingsPage = () => {
  return <WeddingLocationPage content={goaContent} />;
};

export default GoaWeddingsPage;
