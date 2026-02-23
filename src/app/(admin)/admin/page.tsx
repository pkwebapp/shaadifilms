"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Menu,
  ImageIcon,
  Pencil,
  LayoutGrid,
} from "lucide-react";
import useSWR from "swr";
import { getAllGalleryImages } from "@/services/gallery.service";

const servicePages = [
  {
    href: "/admin/content",
    title: "Wedding Photography & Videography",
    category: "Weddings & Events",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop",
    imageAlt: "Wedding photography",
  },
  {
    href: "/admin/content",
    title: "Pre-Wedding & Candid Shoots",
    category: "Pre-Wedding",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop",
    imageAlt: "Pre-wedding shoot",
  },
  {
    href: "/admin/content",
    title: "Event Photography and Videography",
    category: "Events",
    imageUrl: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=200&h=200&fit=crop",
    imageAlt: "Event coverage",
  },
];

export default function AdminPage() {
  const { data: galleryImages } = useSWR("galleryImages", getAllGalleryImages);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your website content, gallery, and service pages from one place.
        </p>
      </div>

      {/* Manage Homepage */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <Home className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-xl font-bold tracking-tight">Manage Homepage</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Update the main hero section and category card images on your homepage.
        </p>
        <Card className="bg-card border rounded-lg shadow-sm">
          <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-base">Hero Section & Category Images</CardTitle>
              <CardDescription>
                Update background media, text, and category card thumbnails.
              </CardDescription>
            </div>
            <Button asChild variant="outline" size="sm" className="shrink-0">
              <Link href="/admin/content" className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                Edit Homepage
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Manage Service Pages */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <Menu className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-xl font-bold tracking-tight">Manage Service Pages</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Update all images for your individual service pages.
        </p>
        <div className="space-y-3">
          {servicePages.map((service) => (
            <Card key={service.title} className="bg-card border rounded-lg shadow-sm">
              <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-muted shrink-0">
                    <Image
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0">
                    <CardTitle className="text-base truncate">{service.title}</CardTitle>
                    <CardDescription>{service.category}</CardDescription>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm" className="shrink-0">
                  <Link href={service.href} className="flex items-center gap-2">
                    <Pencil className="h-4 w-4" />
                    Edit Page Images
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Manage Gallery - Shaadifilms Gallery */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <ImageIcon className="h-6 w-6 text-muted-foreground" />
          <h2 className="text-xl font-bold tracking-tight">Shaadifilms Gallery</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Manage the public gallery by adding image links. Add, edit, or remove media for the gallery page.
        </p>
        <Card className="bg-card border rounded-lg shadow-sm">
          <CardContent className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-base flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                Gallery Images
              </CardTitle>
              <CardDescription>
                Add new images by link (URL), set category and description. These appear on the public Gallery page.
              </CardDescription>
              {typeof galleryImages?.length === "number" && (
                <p className="text-xs text-muted-foreground mt-1">
                  {galleryImages.length} image{galleryImages.length !== 1 ? "s" : ""} in gallery
                </p>
              )}
            </div>
            <Button asChild variant="outline" size="sm" className="shrink-0">
              <Link href="/admin/gallery" className="flex items-center gap-2">
                <Pencil className="h-4 w-4" />
                Edit Gallery
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
