import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BlogCover } from "@/components/icons/blog-cover";
import { BlogContent } from "@/components/blog/blog-content";
import { PostCard } from "@/components/blog/post-card";
import { calculateReadingTime } from "@/lib/reading-time";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog-posts";
import { siteConfig } from "@/data/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const readingTime = calculateReadingTime(post.content);
  const relatedPosts = getRelatedPosts(post);
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    datePublished: post.publishedAt,
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <div className="py-16 md:py-24">
      <Container className="max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink">
          <ArrowLeft size={15} aria-hidden="true" />
          All posts
        </Link>

        <p className="mt-8 font-mono text-xs text-ink-muted">
          {date} · {readingTime} min read · {post.author}
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-ink md:text-4xl">{post.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">{post.description}</p>

        <div className="mt-10 aspect-[400/220] overflow-hidden rounded-[var(--radius-card)] border border-line">
          <BlogCover title={post.title} />
        </div>

        <div className="mt-10">
          <BlogContent blocks={post.content} />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="font-display text-xl text-ink">Related posts</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <PostCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        )}
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}