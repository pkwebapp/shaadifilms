
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/services/blog.service';
import BlogPostClientContent from '@/components/blog/blog-post-client-content';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogPosts();
  const relatedPosts = allPosts.filter(p => p.id !== post.id).slice(0, 3);

  return <BlogPostClientContent post={post} relatedPosts={relatedPosts} slug={params.slug} />;
}
