"use client";

import dynamic from "next/dynamic";
import { PageHeader } from "@/components/common/page-header";

const AlbumPageClient = dynamic(
  () => import("./AlbumPageClient").then((m) => ({ default: m.AlbumPageClient })),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-full relative flex flex-col items-center justify-center gap-6 py-16"
        style={{ backgroundColor: "#F8F5F1" }}
      >
        <PageHeader
          title="Explore Our Digital Albums"
          description="Experience the elegance of a Shaadifilms digital album with our interactive demo, or access your personal wedding album below."
        />
        <div className="flex min-h-[280px] w-full max-w-2xl items-center justify-center rounded-xl border border-gray-200 bg-white/80">
          <p className="text-muted-foreground">Loading album…</p>
        </div>
      </div>
    ),
  }
);

export default function AlbumPage() {
  return <AlbumPageClient />;
}
