"use client";

import { useState } from "react";
import Image from "next/image";
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
  onSave,
}: {
  slide: HeroSlide;
  onSave: (id: string, data: { title: string; description: string }) => void;
}) => {
  const [title, setTitle] = useState(slide.title);
  const [description, setDescription] = useState(slide.description);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(slide.id, { title, description });
      toast({ title: "Success", description: "Slide updated successfully." });
    } catch {
      toast({
        title: "Error",
        description: "Could not update slide.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <Image
          src={slide.imageUrl}
          alt={slide.description}
          width={400}
          height={225}
          className="object-cover aspect-video rounded-t-lg"
        />
      </CardContent>
      <CardHeader className="p-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-lg font-bold mb-2"
        />
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-sm"
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
  onSave: (id: string, data: { description: string }) => void;
}) => {
  const [description, setDescription] = useState(work.description);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSave(work.id, { description });
      toast({ title: "Success", description: "Work updated successfully." });
    } catch {
      toast({
        title: "Error",
        description: "Could not update work.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-0">
        <Image
          src={work.imageUrl}
          alt={work.description}
          width={400}
          height={300}
          className="object-cover aspect-[4/3] rounded-t-lg"
        />
      </CardContent>
      <CardHeader className="p-4">
        <Input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
    data: { title?: string; description?: string }
  ) => {
    if (type === "hero") {
      await updateHeroSlide(id, data as { title: string; description: string });
      mutate("heroSlides");
    } else if (type === "featured") {
      await updateFeaturedWork(id, {
        description: data.description as string,
      });
      mutate("featuredWorks");
    }
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Website Content
        </h1>
        <p className="mt-1 text-muted-foreground">
          Update hero slides and featured works on the homepage.
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
                heroSlides.map((slide: HeroSlide) => (
                  <EditableHeroSlide
                    key={slide.id}
                    slide={slide}
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
