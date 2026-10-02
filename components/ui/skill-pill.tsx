import type { LucideIcon } from "lucide-react";

export function SkillPill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-pill px-3.5 py-2 text-sm text-ink">
      <Icon size={14} className="text-accent-strong" aria-hidden="true" />
      {label}
    </span>
  );
}