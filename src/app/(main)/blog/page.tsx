
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts, BlogPost } from "@/services/blog.service";

export default async function BlogPage() {
  const blogPosts: BlogPost[] = await getAllBlogPosts();

  return (
    <>
      <PageHeader
        title="Wedding Photography Blog"
        description="Your expert guide to wedding planning in Goa. Get tips, insights, and stories from the best wedding photographers in the city."
      />
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col">
                    {post.image && (
                         <CardContent className="p-0">
                            <Link href={`/blog/${post.slug}`}>
                                <Image
                                    src={post.image.imageUrl}
                                    alt={post.image.description}
                                    width={800}
                                    height={500}
                                    className="object-cover w-full aspect-[16/10] rounded-t-lg"
                                    data-ai-hint={post.image.imageHint}
                                />
                            </Link>
                        </CardContent>
                    )}
                    <CardHeader>
                        <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()} by {post.author}</p>
                        <CardTitle className="font-headline text-2xl">
                           <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="link" className="px-0">
                            <Link href={`/blog/${post.slug}`}>Read More <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </>
  );
}
