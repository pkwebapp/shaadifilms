
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/services/blog.service';
import BlogPostClientContent from '@/components/blog/blog-post-client-content';

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 3);

  return <BlogPostClientContent post={post} relatedPosts={relatedPosts} slug={slug} />;
}
