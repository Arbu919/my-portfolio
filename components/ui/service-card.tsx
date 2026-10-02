import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  description,
  highlights,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
}) {
  return (
    <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pill">
        <Icon size={18} className="text-accent-strong" aria-hidden="true" />
      </span>
      <h3 className="mt-4 text-base font-medium text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>

      <ul className="mt-4 flex flex-col gap-2">
        {highlights.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
            <Check size={14} className="text-accent-strong" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <Link href="/contact" className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-ink hover:text-accent-strong">
        Learn more
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </div>
  );
}