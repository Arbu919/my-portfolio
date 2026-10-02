import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PolaroidCard({
  children,
  rotate = 0,
  className,
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-surface p-2 shadow-[0_20px_40px_-16px_rgb(17_17_17_/_0.28)]",
        className
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="h-full w-full overflow-hidden rounded-[calc(var(--radius-card)-8px)]">
        {children}
      </div>
    </div>
  );
}