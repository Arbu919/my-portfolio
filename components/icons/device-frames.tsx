import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function LaptopFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      <div className="rounded-t-xl border border-line bg-ink p-2 shadow-[var(--shadow-soft)]">
        <div className="aspect-[16/10] overflow-hidden rounded-md bg-surface">{children}</div>
      </div>
      <div className="mx-auto h-2 w-[92%] rounded-b-xl bg-ink/90" aria-hidden="true" />
    </div>
  );
}

export function TabletFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[28px] border-[6px] border-ink bg-ink p-1 shadow-[var(--shadow-soft)]", className)}>
      <div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-surface">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-[32px] border-[6px] border-ink bg-ink p-1 shadow-[var(--shadow-soft)]", className)}>
      <div className="aspect-[9/19] overflow-hidden rounded-[24px] bg-surface">{children}</div>
    </div>
  );
}