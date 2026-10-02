import { cn } from "@/lib/utils";

export function MeraHisaabScreen() {
  return (
    <div className="flex h-full flex-col bg-surface p-3">
      <p className="font-mono text-[9px] text-ink-muted">Mera Hisaab</p>
      <p className="mt-1 text-xs font-medium text-ink">Overview</p>
      <div className="mt-2 flex flex-col gap-2">
        {[70, 45, 85, 30].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1.5 rounded-full bg-line" style={{ width: `${w}%` }} />
            <div className={cn("h-3 w-8 shrink-0 rounded-full", i % 2 === 0 ? "bg-accent" : "border border-line")} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TailorShopScreen() {
  return (
    <div className="flex h-full flex-col bg-surface p-3">
      <p className="font-mono text-[9px] text-ink-muted">Tailor Shop</p>
      <p className="mt-1 text-xs font-medium text-ink">Measurements</p>
      <div className="mt-3 grid grid-cols-4 gap-2.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={cn("h-1.5 w-1.5 rounded-full", i === 5 ? "bg-accent" : "bg-line")} />
        ))}
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <div className="h-1.5 w-3/4 rounded-full bg-line" />
        <div className="h-1.5 w-1/2 rounded-full bg-line" />
      </div>
    </div>
  );
}

export function HouseOfSamzzScreen() {
  return (
    <div className="flex h-full flex-col bg-surface p-3">
      <p className="font-mono text-[9px] text-ink-muted">House of SAMzz</p>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-md border border-line bg-pill" />
        ))}
      </div>
      <div className="mt-2 h-3 w-2/3 rounded-full bg-accent" />
    </div>
  );
}