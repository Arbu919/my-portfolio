import type { BlogBlock } from "@/types";

export function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3";
          return (
            <Tag
              key={i}
              className={block.level === 2 ? "mt-6 font-display text-2xl text-ink" : "mt-4 font-display text-xl text-ink"}
            >
              {block.text}
            </Tag>
          );
        }
        if (block.type === "paragraph") {
          return (
            <p key={i} className="text-base leading-relaxed text-ink-muted">
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          const Tag = block.ordered ? "ol" : "ul";
          return (
            <Tag key={i} className={block.ordered ? "list-decimal space-y-2 pl-5" : "flex flex-col gap-2.5"}>
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className={block.ordered ? "text-base leading-relaxed text-ink-muted" : "flex items-start gap-2.5 text-base leading-relaxed text-ink-muted"}
                >
                  {!block.ordered && (
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  )}
                  {item}
                </li>
              ))}
            </Tag>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={i} className="border-l-2 border-accent pl-5 font-display text-xl italic text-ink">
              {block.text}
            </blockquote>
          );
        }
        return null;
      })}
    </div>
  );
}