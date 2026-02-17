"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageIcon, FileText, Newspaper, ArrowRight } from "lucide-react";
import useSWR from "swr";
import { getAllGalleryImages } from "@/services/gallery.service";
import { getAllBlogPosts } from "@/services/blog.service";
import { getAllHeroSlides } from "@/services/hero-slides.service";
import { getAllFeaturedWorks } from "@/services/featured-work.service";

const links = [
  {
    href: "/admin/gallery",
    title: "Gallery",
    description: "Manage Shaadifilms gallery images. Add, edit, or remove media for the public gallery page.",
    icon: ImageIcon,
  },
  {
    href: "/admin/content",
    title: "Content",
    description: "Update homepage hero slides and featured works carousel.",
    icon: FileText,
  },
  {
    href: "/admin/blog",
    title: "Blog & Journal",
    description: "Create, edit, and delete blog posts for your journal.",
    icon: Newspaper,
  },
];

export default function AdminPage() {
  const { data: galleryImages } = useSWR("galleryImages", getAllGalleryImages);
  const { data: blogPosts } = useSWR("blogPosts", getAllBlogPosts);
  const { data: heroSlides } = useSWR("heroSlides", getAllHeroSlides);
  const { data: featuredWorks } = useSWR("featuredWorks", getAllFeaturedWorks);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your website content, gallery, and blog from one place.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {links.map((item) => (
          <Card key={item.href} className="flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-3">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1.5">
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="mt-auto pt-0">
              <Button asChild variant="secondary" className="w-full sm:w-auto">
                <Link href={item.href}>
                  Manage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Gallery images</CardDescription>
            <CardTitle className="text-3xl">
              {galleryImages?.length ?? "—"}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Blog posts</CardDescription>
            <CardTitle className="text-3xl">
              {blogPosts?.length ?? "—"}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Hero slides</CardDescription>
            <CardTitle className="text-3xl">
              {heroSlides?.length ?? "—"}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Featured works</CardDescription>
            <CardTitle className="text-3xl">
              {featuredWorks?.length ?? "—"}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
