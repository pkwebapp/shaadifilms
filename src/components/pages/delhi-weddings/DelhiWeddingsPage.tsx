"use client";

import React from "react";
import WeddingLocationPage from "@/components/pages/wedding-location/WeddingLocationPage";
import { delhiContent } from "@/components/pages/wedding-location/content/delhi";

const DelhiWeddingsPage = () => {
  return <WeddingLocationPage content={delhiContent} />;
};

export default DelhiWeddingsPage;
