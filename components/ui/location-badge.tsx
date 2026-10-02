import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export function LocationBadge() {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink-muted shadow-[var(--shadow-soft)]">
      <MapPin size={12} className="text-accent-strong" aria-hidden="true" />
      {siteConfig.location}
    </div>
  );
}