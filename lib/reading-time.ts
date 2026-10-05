import type { BlogBlock } from "@/types";

export function calculateReadingTime(blocks: BlogBlock[]): number {
  const wordsPerMinute = 200;
  let wordCount = 0;

  for (const block of blocks) {
    if (block.type === "list") {
      wordCount += block.items.join(" ").split(/\s+/).length;
    } else {
      wordCount += block.text.split(/\s+/).length;
    }
  }

  return Math.max(1, Math.round(wordCount / wordsPerMinute));
}