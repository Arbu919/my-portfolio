import type { LucideIcon } from "lucide-react";

export function TechTile({
  icon: Icon,
  name,
  description,
}: {
  icon: LucideIcon;
  name: string;
  description: string;
}) {
  return (
    <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pill">
        <Icon size={18} className="text-accent-strong" aria-hidden="true" />
      </span>
      <p className="mt-4 text-sm font-medium text-ink">{name}</p>
      <p className="mt-1 text-xs leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}