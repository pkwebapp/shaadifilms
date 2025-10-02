

'use client';

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/common/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle, Upload, Trash2, Pencil, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  createBlogPost,
  deleteBlogPost,
  updateBlogPost,
  BlogPost,
  getAllBlogPosts,
} from "@/services/blog.service";
import { getAllGalleryImages, createGalleryImage, deleteGalleryImage, updateGalleryImage, GalleryImage } from "@/services/gallery.service";
import { galleryCategories } from "@/lib/gallery-categories";
import { getAllFeaturedWorks, updateFeaturedWork, FeaturedWork } from "@/services/featured-work.service";
import { getAllHeroSlides, updateHeroSlide, HeroSlide } from "@/services/hero-slides.service";
import useSWR, { mutate } from "swr";

const BlogEditorDialog = ({
  trigger,
  title = "Create New Post",
  post,
  onSave,
}: {
  trigger: React.ReactNode;
  title?: string;
  post?: Partial<BlogPost>;
  onSave: () => void;
}) => {
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      keyof Omit<BlogPost, "id" | "image" | "date" | "slug">,
      string
    > & { imageUrl?: string; imageHint?: string };

    try {
      if (post?.id) {
        await updateBlogPost(post.id, data);
        toast({ title: "Success", description: "Post updated successfully." });
      } else {
        await createBlogPost(data);
        toast({
          title: "Success",
          description: "Post created successfully.",
        });
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
      <DialogContent className="max-w-none w-[90vw] md:w-[70vw] h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Make changes to your post here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 overflow-hidden"
        >
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 overflow-y-auto pr-4">
            <div className="md:col-span-2 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="post-title" className="text-lg">
                  Post Title
                </Label>
                <Input
                  id="post-title"
                  name="title"
                  defaultValue={post?.title}
                  placeholder="e.g., 5 Tips for a Perfect Wedding"
                  className="text-lg h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="post-content" className="text-lg">
                  Full Content (HTML supported)
                </Label>
                <Textarea
                  id="post-content"
                  name="content"
                  defaultValue={post?.content}
                  placeholder="<p>Start writing your article here.</p>"
                  className="min-h-[400px] flex-1"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Post Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="post-author">Author</Label>
                    <Input
                      id="post-author"
                      name="author"
                      defaultValue={post?.author}
                      placeholder="e.g., Rohan Mehra"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-excerpt">Excerpt / Summary</Label>
                    <Textarea
                      id="post-excerpt"
                      name="excerpt"
                      defaultValue={post?.excerpt}
                      placeholder="A short summary of the article..."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-image-url">Featured Image URL</Label>
                    <Input
                      id="post-image-url"
                      name="imageUrl"
                      defaultValue={post?.image?.imageUrl}
                      placeholder="https://picsum.photos/seed/..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="post-image-hint">
                      Featured Image AI Hint
                    </Label>
                    <Input
                      id="post-image-hint"
                      name="imageHint"
                      defaultValue={post?.image?.imageHint}
                      placeholder="e.g. relaxed bride"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <DialogFooter className="pt-4 border-t">
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
              Save Post
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

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
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        imageHint: formData.get('imageHint') as string,
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
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 py-4"
        >
          <div className="space-y-2">
            <Label htmlFor="edit-media-description">Title / Description</Label>
            <Input id="edit-media-description" name="description" defaultValue={image?.description} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-media-category">Category</Label>
            <Select name="category" defaultValue={image?.category}>
                <SelectTrigger id="edit-media-category">
                <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                    {galleryCategories.filter(c => c !== "All").map(category => (
                        <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>{category}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-media-hint">AI Image Hint</Label>
            <Input id="edit-media-hint" name="imageHint" defaultValue={image?.imageHint} placeholder="e.g., wedding beach" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <PlusCircle className="mr-2 h-4 w-4" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};


const EditableHeroSlide = ({ slide, onSave }: { slide: HeroSlide, onSave: (id: string, data: any) => void }) => {
    const [title, setTitle] = useState(slide.title);
    const [description, setDescription] = useState(slide.description);
    const [isSaving, setIsSaving] = useState(false);
    const { toast } = useToast();

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await onSave(slide.id, { title, description });
            toast({ title: "Success", description: "Slide updated successfully." });
        } catch (error) {
             toast({ title: "Error", description: "Could not update slide.", variant: 'destructive' });
        } finally {
            setIsSaving(false);
        }
    }

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
                <Input value={title} onChange={(e) => setTitle(e.target.value)} className="text-lg font-bold mb-2" />
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} className="text-sm" />
            </CardHeader>
            <CardFooter className="p-4">
                <Button className="w-full" onClick={handleSave} disabled={isSaving}>
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Update Slide
                </Button>
            </CardFooter>
        </Card>
    );
};

const EditableFeaturedWork = ({ work, onSave }: { work: FeaturedWork, onSave: (id: string, data: any) => void }) => {
    const [description, setDescription] = useState(work.description);
    const [isSaving, setIsSaving] = useState(false);
    const { toast } = useToast();

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await onSave(work.id, { description });
            toast({ title: "Success", description: "Work updated successfully." });
        } catch(e) {
            toast({ title: "Error", description: "Could not update work.", variant: 'destructive' });
        } finally {
            setIsSaving(false);
        }
    }

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
                <Input value={description} onChange={(e) => setDescription(e.target.value)} />
            </CardHeader>
            <CardFooter className="p-4">
                <Button className="w-full" onClick={handleSave} disabled={isSaving}>
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Update Work
                </Button>
            </CardFooter>
        </Card>
    );
};


export default function AdminPage() {
    const { toast } = useToast();

    const { data: allImages, error: imagesError, isLoading: imagesLoading } = useSWR('galleryImages', getAllGalleryImages);
    const { data: featuredWorks, error: featuredError, isLoading: featuredLoading } = useSWR('featuredWorks', getAllFeaturedWorks);
    const { data: heroSlides, error: heroError, isLoading: heroLoading } = useSWR('heroSlides', getAllHeroSlides);
    const { data: blogPosts, error: blogError, isLoading: blogLoading } = useSWR('blogPosts', getAllBlogPosts);
    const [isUploading, setIsUploading] = useState(false);
    
    const handleDeletePost = async (id: string) => {
        if (confirm("Are you sure you want to delete this post?")) {
            try {
                await deleteBlogPost(id);
                mutate('blogPosts');
                toast({ title: "Success", description: "Post deleted successfully." });
            } catch (error) {
                console.error(error);
                toast({ title: "Error", description: "Could not delete post.", variant: "destructive" });
            }
        }
    };

    const refetchBlogPosts = () => {
        mutate('blogPosts');
    };

    const refetchGalleryImages = () => {
        mutate('galleryImages');
    };

    const handleNewMediaSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsUploading(true);
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = {
            imageUrl: formData.get('media-url') as string,
            description: formData.get('media-description') as string,
            category: formData.get('media-category') as string,
            imageHint: formData.get('media-hint') as string,
        };

        if (!data.imageUrl || !data.description || !data.category) {
            toast({ title: "Error", description: "Please fill out all required fields.", variant: "destructive" });
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
            toast({ title: "Error", description: "Could not upload media.", variant: "destructive" });
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
                toast({ title: "Error", description: "Could not delete image.", variant: "destructive" });
            }
        }
    };
    
    const handleContentSave = async (type: 'hero' | 'featured', id: string, data: any) => {
        if (type === 'hero') {
            await updateHeroSlide(id, data);
            mutate('heroSlides');
        } else if (type === 'featured') {
            await updateFeaturedWork(id, data);
            mutate('featuredWorks');
        }
    };

  return (
    <>
      <PageHeader
        title="Admin Dashboard"
        description="Manage your website's content, gallery, and settings from one place."
      />
      <div className="container py-16">
        <Tabs defaultValue="gallery">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto md:h-10">
            <TabsTrigger value="gallery">Gallery & Media</TabsTrigger>
            <TabsTrigger value="content">Website Content</TabsTrigger>
            <TabsTrigger value="blog">Blog & Journal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="gallery">
            <Card>
              <CardHeader>
                <CardTitle>Manage Gallery</CardTitle>
                <CardDescription>
                  Upload, categorize, and manage all images and videos for your public gallery.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold mb-4 border-b pb-2">Add New Media</h3>
                    <form className="space-y-4" onSubmit={handleNewMediaSubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="media-description">Title / Description</Label>
                            <Input id="media-description" name="media-description" placeholder="e.g., Priya & Rohan's Goa Wedding" required />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="media-category">Category</Label>
                            <Select name="media-category" required>
                                <SelectTrigger id="media-category">
                                <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {galleryCategories.map(category => (
                                        <SelectItem key={category} value={category.toLowerCase().replace(" ", "-")}>{category}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="media-url">Image URL</Label>
                            <Input id="media-url" name="media-url" type="url" placeholder="https://picsum.photos/seed/..." required />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="media-hint">AI Image Hint</Label>
                            <Input id="media-hint" name="media-hint" placeholder="e.g., wedding beach" />
                            <p className="text-xs text-muted-foreground">Used for AI-powered image search and categorization. Max 2 words.</p>
                        </div>
                        <Button type="submit" className="w-full" disabled={isUploading}>
                            {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
                             Upload to Gallery
                        </Button>
                    </form>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold mb-4 border-b pb-2">Media Library</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[600px] overflow-y-auto pr-4">
                        {imagesLoading && <p>Loading images...</p>}
                        {imagesError && <p>Error loading images.</p>}
                        {allImages && allImages.map((image: GalleryImage) => (
                            <Card key={image.id} className="group relative overflow-hidden">
                                <Image 
                                    src={image.imageUrl}
                                    alt={image.description}
                                    width={200}
                                    height={200}
                                    className="object-cover aspect-square"
                                />
                                <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white text-xs font-semibold truncate">{image.description}</p>
                                    <div className="flex gap-2 mt-2">
                                        <GalleryEditorDialog 
                                            image={image}
                                            onSave={refetchGalleryImages}
                                            trigger={
                                                <Button variant="outline" size="icon" className="h-7 w-7 bg-white/20 border-white/50 text-white hover:bg-white/30">
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            }
                                        />
                                        <Button variant="destructive" size="icon" className="h-7 w-7" onClick={() => handleDeleteImage(image.id)}>
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
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Manage Website Content</CardTitle>
                <CardDescription>
                  Update images and text for various sections of your website.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-12">
                 <div>
                    <h3 className="text-lg font-semibold mb-4 border-b pb-2">Homepage Hero Slides</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {heroLoading && <p>Loading slides...</p>}
                        {heroSlides && heroSlides.map((slide: HeroSlide) => (
                            <EditableHeroSlide key={slide.id} slide={slide} onSave={handleContentSave.bind(null, 'hero')} />
                        ))}
                    </div>
                 </div>
                 <div>
                    <h3 className="text-lg font-semibold mb-4 border-b pb-2">Featured Works Carousel</h3>
                     <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {featuredLoading && <p>Loading works...</p>}
                        {featuredWorks && featuredWorks.map((work: FeaturedWork) => (
                            <EditableFeaturedWork key={work.id} work={work} onSave={handleContentSave.bind(null, 'featured')} />
                        ))}
                    </div>
                 </div>
              </CardContent>
            </Card>
          </TabsContent>
           <TabsContent value="blog">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Manage Blog Posts</CardTitle>
                  <CardDescription>
                    Create, edit, and manage articles for your journal.
                  </CardDescription>
                </div>
                <BlogEditorDialog 
                    trigger={
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" /> Create New Post
                        </Button>
                    }
                    onSave={refetchBlogPosts}
                />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogLoading && <p>Loading posts...</p>}
                  {blogError && <p>Error loading posts.</p>}
                  {blogPosts && blogPosts.map((post: BlogPost) => (
                    <Card key={post.id} className="flex flex-col md:flex-row items-start gap-4 p-4">
                        {post.image && (
                            <Image 
                                src={post.image.imageUrl}
                                alt={post.title}
                                width={150}
                                height={100}
                                className="object-cover aspect-[3/2] rounded-md w-full md:w-[150px]"
                            />
                        )}
                        <div className="flex-1">
                            <h4 className="font-semibold">{post.title}</h4>
                            <p className="text-xs text-muted-foreground">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{post.excerpt}</p>
                        </div>
                        <div className="flex flex-row gap-2 self-start">
                             <BlogEditorDialog 
                                title="Edit Post"
                                trigger={
                                    <Button variant="outline" size="sm">
                                        <Pencil className="mr-2 h-3 w-3" /> Edit
                                    </Button>
                                }
                                post={post}
                                onSave={refetchBlogPosts}
                            />
                            <Button variant="destructive" size="sm" onClick={() => handleDeletePost(post.id)}>
                                <Trash2 className="mr-2 h-3 w-3" /> Delete
                            </Button>
                        </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
