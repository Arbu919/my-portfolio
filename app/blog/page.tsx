import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on web development, SEO, SaaS, and building real-world digital products.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-ink md:text-5xl">Blog</h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            Writing on web development, SEO, SaaS, and lessons from building real products.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </div>
  );
}