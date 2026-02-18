"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, Trash2, Pencil, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  getAllGalleryImages,
  createGalleryImage,
  deleteGalleryImage,
  updateGalleryImage,
  GalleryImage,
} from "@/services/gallery.service";
import { galleryCategories } from "@/lib/gallery-categories";
import useSWR, { mutate } from "swr";

const GalleryEditorDialog = ({
  trigger,
  image,
  onSave,
}: {
  trigger: React.ReactNode;
  image?: GalleryImage;
  onSave: () => void;
}) => {
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    const formData = new FormData(event.currentTarget);
    const data = {
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      imageHint: formData.get("imageHint") as string,
    };

    try {
      if (image?.id) {
        await updateGalleryImage(image.id, data);
        toast({ title: "Success", description: "Image updated successfully." });
      }
      onSave();
      setIsOpen(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Media</DialogTitle>
          <DialogDescription>
            Make changes to the image details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="edit-media-description">Title / Description</Label>
            <Input
              id="edit-media-description"
              name="description"
              defaultValue={image?.description}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-media-category">Category</Label>
            <Select name="category" defaultValue={image?.category}>
              <SelectTrigger id="edit-media-category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {galleryCategories
                  .filter((c) => c !== "All")
                  .map((category) => (
                    <SelectItem
                      key={category}
                      value={category.toLowerCase().replace(" ", "-")}
                    >
                      {category}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-media-hint">AI Image Hint</Label>
            <Input
              id="edit-media-hint"
              name="imageHint"
              defaultValue={image?.imageHint}
              placeholder="e.g., wedding beach"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <PlusCircle className="mr-2 h-4 w-4" />
              )}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default function AdminGalleryPage() {
  const { toast } = useToast();
  const { data: allImages, error: imagesError, isLoading: imagesLoading } =
    useSWR("galleryImages", getAllGalleryImages);
  const [isUploading, setIsUploading] = useState(false);

  const refetchGalleryImages = () => {
    mutate("galleryImages");
  };

  const handleNewMediaSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsUploading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      imageUrl: formData.get("media-url") as string,
      description: formData.get("media-description") as string,
      category: formData.get("media-category") as string,
      imageHint: formData.get("media-hint") as string,
    };

    if (!data.imageUrl || !data.description || !data.category) {
      toast({
        title: "Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      setIsUploading(false);
      return;
    }

    try {
      await createGalleryImage(data);
      toast({ title: "Success", description: "Media uploaded successfully." });
      refetchGalleryImages();
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Could not upload media.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteImage = async (id: string) => {
    if (confirm("Are you sure you want to delete this image?")) {
      try {
        await deleteGalleryImage(id);
        refetchGalleryImages();
        toast({ title: "Success", description: "Image deleted successfully." });
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Could not delete image.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Shaadifilms Gallery</h1>
        <p className="mt-1 text-muted-foreground">
          Upload, categorize, and manage images for your public gallery.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Manage Gallery</CardTitle>
          <CardDescription>
            Add new media or edit and delete existing gallery items. These appear on the public Gallery page.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Add New Media
            </h3>
            <form className="space-y-4" onSubmit={handleNewMediaSubmit}>
              <div className="space-y-2">
                <Label htmlFor="media-description">Title / Description</Label>
                <Input
                  id="media-description"
                  name="media-description"
                  placeholder="e.g., Priya & Rohan's Goa Wedding"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="media-category">Category</Label>
                <Select name="media-category" required>
                  <SelectTrigger id="media-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {galleryCategories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category.toLowerCase().replace(" ", "-")}
                      >
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="media-url">Image URL</Label>
                <Input
                  id="media-url"
                  name="media-url"
                  type="url"
                  placeholder="https://..."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="media-hint">AI Image Hint</Label>
                <Input
                  id="media-hint"
                  name="media-hint"
                  placeholder="e.g., wedding beach"
                />
                <p className="text-xs text-muted-foreground">
                  Used for AI-powered image search. Max 2 words.
                </p>
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={isUploading}
              >
                {isUploading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="mr-2 h-4 w-4" />
                )}
                Upload to Gallery
              </Button>
            </form>
          </div>
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              Media Library
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-4">
              {imagesLoading && (
                <p className="col-span-full text-muted-foreground">
                  Loading images...
                </p>
              )}
              {imagesError && (
                <p className="col-span-full text-destructive">
                  Error loading images.
                </p>
              )}
              {allImages &&
                allImages.map((image: GalleryImage) => (
                  <Card
                    key={image.id}
                    className="group relative overflow-hidden"
                  >
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={200}
                      height={200}
                      className="object-cover aspect-square"
                    />
                    <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-xs font-semibold truncate">
                        {image.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        <GalleryEditorDialog
                          image={image}
                          onSave={refetchGalleryImages}
                          trigger={
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-7 w-7 bg-white/20 border-white/50 text-white hover:bg-white/30"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                          }
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => handleDeleteImage(image.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
