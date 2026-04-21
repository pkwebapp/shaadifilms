"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import {
  getAllFeaturedWorks,
  updateFeaturedWork,
  FeaturedWork,
} from "@/services/featured-work.service";
import {
  getAllHeroSlides,
  updateHeroSlide,
  HeroSlide,
} from "@/services/hero-slides.service";
import useSWR, { mutate } from "swr";
import { Loader2 } from "lucide-react";

const EditableHeroSlide = ({
  slide,
  isFirst,
  onSave,
}: {
  slide: HeroSlide;
  isFirst: boolean;
  onSave: (id: string, data: { title: string; description: string; imageUrl?: string; videoUrl?: string }) => void;
}) => {
  const [title, setTitle] = useState(slide.title);
  const [description, setDescription] = useState(slide.description);
  const [videoUrl, setVideoUrl] = useState(slide.videoUrl ?? "");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const displayImageUrl = previewUrl || slide.imageUrl;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      let imageUrl: string | undefined;
      if (imageFile) {
        const formData = new FormData();
        formData.set("file", imageFile);
        formData.set("folder", "hero");
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const body = await res.json();
        if (!res.ok) throw new Error(body.error ?? "Upload failed");
        imageUrl = body.imageUrl;
      }
      await onSave(slide.id, {
        title,
        description,
        ...(imageUrl && { imageUrl }),
        videoUrl: videoUrl.trim() || undefined,
      });
      toast({ title: "Success", description: "Slide updated successfully." });
      setImageFile(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    } catch (err) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Could not update slide.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative aspect-video rounded-t-lg overflow-hidden bg-muted">
          <Image
            src={displayImageUrl}
            alt={slide.description}
            width={400}
            height={225}
            className="object-cover w-full h-full"
          />
        </div>
      </CardContent>
      <CardHeader className="p-4 space-y-3">
        <div className="space-y-2">
          <label className="text-sm font-medium">Slide image</label>
          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleFileChange}
            className="cursor-pointer file:mr-2 file:py-1.5 file:px-2 file:rounded file:border-0 file:text-xs file:bg-primary file:text-primary-foreground"
          />
        </div>
        {isFirst && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Cover video URL (hero background)</label>
            <Input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
            />
            <p className="text-xs text-muted-foreground">YouTube link used as homepage hero background.</p>
          </div>
        )}
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-lg font-bold"
          placeholder="Title"
        />
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-sm"
          placeholder="Description"
        />
      </CardHeader>
      <CardFooter className="p-4">
        <Button
          className="w-full"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Update Slide
        </Button>
      </CardFooter>
    </Card>
  );
};

const EditableFeaturedWork = ({
  work,
  onSave,
}: {
  work: FeaturedWork;
  onSave: (id: string, data: { description: string; imageUrl?: string }) => void;
}) => {
  const [description, setDescription] = useState(work.description);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const displayImageUrl = previewUrl || work.imageUrl;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      let imageUrl: string | undefined;
      if (imageFile) {
        const formData = new FormData();
        formData.set("file", imageFile);
        formData.set("folder", "featured");
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const body = await res.json();
        if (!res.ok) throw new Error(body.error ?? "Upload failed");
        imageUrl = body.imageUrl;
      }
      await onSave(work.id, {
        description,
        ...(imageUrl && { imageUrl }),
      });
      toast({ title: "Success", description: "Work updated successfully." });
      setImageFile(null);
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    } catch (err) {
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Could not update work.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden bg-muted">
          <Image
            src={displayImageUrl}
            alt={work.description}
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </CardContent>
      <CardHeader className="p-4 space-y-3">
        <div className="space-y-2">
          <label className="text-sm font-medium">Image</label>
          <Input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            onChange={handleFileChange}
            className="cursor-pointer file:mr-2 file:py-1.5 file:px-2 file:rounded file:border-0 file:text-xs file:bg-primary file:text-primary-foreground"
          />
        </div>
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </CardHeader>
      <CardFooter className="p-4">
        <Button
          className="w-full"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          Update Work
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function AdminContentPage() {
  const { data: featuredWorks, isLoading: featuredLoading } = useSWR(
    "featuredWorks",
    getAllFeaturedWorks
  );
  const { data: heroSlides, isLoading: heroLoading } = useSWR(
    "heroSlides",
    getAllHeroSlides
  );

  const handleContentSave = async (
    type: "hero" | "featured",
    id: string,
    data: { title?: string; description?: string; imageUrl?: string; videoUrl?: string }
  ) => {
    if (type === "hero") {
      await updateHeroSlide(id, {
        title: data.title as string,
        description: data.description as string,
        ...(data.imageUrl && { imageUrl: data.imageUrl }),
        ...(data.videoUrl !== undefined && { videoUrl: data.videoUrl }),
      });
      mutate("heroSlides");
    } else if (type === "featured") {
      await updateFeaturedWork(id, {
        description: data.description as string,
        ...(data.imageUrl && { imageUrl: data.imageUrl }),
      });
      mutate("featuredWorks");
    }
  };

  return (
    <>
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
          <Link href="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Admin
          </Link>
        </Button>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Edit Homepage Content
        </h1>
        <p className="mt-1 text-muted-foreground">
          Update the background media, text, and category thumbnails for the main page.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Manage Website Content</CardTitle>
          <CardDescription>
            Edit images and text for the homepage hero carousel and featured works section.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Homepage Hero Slides
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {heroLoading && (
                <p className="text-muted-foreground">Loading slides...</p>
              )}
              {heroSlides &&
                heroSlides.map((slide: HeroSlide, index: number) => (
                  <EditableHeroSlide
                    key={slide.id}
                    slide={slide}
                    isFirst={index === 0}
                    onSave={handleContentSave.bind(null, "hero")}
                  />
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Featured Works Carousel
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredLoading && (
                <p className="text-muted-foreground">Loading works...</p>
              )}
              {featuredWorks &&
                featuredWorks.map((work: FeaturedWork) => (
                  <EditableFeaturedWork
                    key={work.id}
                    work={work}
                    onSave={handleContentSave.bind(null, "featured")}
                  />
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
