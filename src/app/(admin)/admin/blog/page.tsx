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
import { PlusCircle, Pencil, Trash2, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<
      keyof Omit<BlogPost, "id" | "image" | "date" | "slug">,
      string
    > & { imageUrl?: string; imageHint?: string; imageFile?: File };

    try {
      const file = formData.get("imageFile") as File | null;
      if (file && file instanceof File && file.size > 0) {
        const uploadFormData = new FormData();
        uploadFormData.set("file", file);
        uploadFormData.set("folder", "blog");
        const res = await fetch("/api/upload", { method: "POST", body: uploadFormData });
        const body = await res.json();
        if (!res.ok) throw new Error(body.error ?? "Image upload failed");
        data.imageUrl = body.imageUrl;
      }
      delete data.imageFile;

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
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
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
                    <Label htmlFor="post-image-file">Featured image</Label>
                    <Input
                      id="post-image-file"
                      name="imageFile"
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      className="cursor-pointer file:mr-2 file:py-1.5 file:px-2 file:rounded file:border-0 file:text-xs file:bg-primary file:text-primary-foreground"
                    />
                    <p className="text-xs text-muted-foreground">Upload an image for the post.</p>
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

export default function AdminBlogPage() {
  const { toast } = useToast();
  const { data: blogPosts, error: blogError, isLoading: blogLoading } =
    useSWR("blogPosts", getAllBlogPosts);

  const handleDeletePost = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteBlogPost(id);
        mutate("blogPosts");
        toast({ title: "Success", description: "Post deleted successfully." });
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Could not delete post.",
          variant: "destructive",
        });
      }
    }
  };

  const refetchBlogPosts = () => {
    mutate("blogPosts");
  };

  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Blog & Journal
          </h1>
          <p className="mt-1 text-muted-foreground">
            Create, edit, and manage articles for your journal.
          </p>
        </div>
        <BlogEditorDialog
          trigger={
            <Button className="shrink-0">
              <PlusCircle className="mr-2 h-4 w-4" /> Create New Post
            </Button>
          }
          onSave={refetchBlogPosts}
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Posts</CardTitle>
          <CardDescription>
            Edit or delete existing blog posts. New posts are added via the button above.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {blogLoading && (
              <p className="text-muted-foreground">Loading posts...</p>
            )}
            {blogError && (
              <p className="text-destructive">Error loading posts.</p>
            )}
            {blogPosts &&
              blogPosts.map((post: BlogPost) => (
                <Card
                  key={post.id}
                  className="flex flex-col md:flex-row items-start gap-4 p-4"
                >
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
                    <p className="text-xs text-muted-foreground">
                      By {post.author} on{" "}
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                      {post.excerpt}
                    </p>
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
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <Trash2 className="mr-2 h-3 w-3" /> Delete
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
