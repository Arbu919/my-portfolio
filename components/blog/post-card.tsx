import Link from "next/link";
import { BlogCover } from "@/components/icons/blog-cover";
import { calculateReadingTime } from "@/lib/reading-time";
import type { BlogPost } from "@/types";

export function PostCard({ post }: { post: BlogPost }) {
  const readingTime = calculateReadingTime(post.content);
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface"
    >
      <div className="aspect-[400/220] overflow-hidden border-b border-line">
        <BlogCover title={post.title} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs text-ink-muted">
          {date} · {readingTime} min read
        </p>
        <h2 className="mt-2 font-display text-xl text-ink group-hover:text-accent-strong">{post.title}</h2>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">{post.description}</p>
      </div>
    </Link>
  );
}