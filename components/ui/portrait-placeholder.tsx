import { UserRound } from "lucide-react";

export function PortraitPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-pill">
      <div className="flex flex-col items-center gap-2 text-ink-muted">
        {/* <UserRound size={40} aria-hidden="true" /> */}
        <img src="/images/arbaazo.png" alt="Arbaaz Khan" />
      </div>
    </div>
  );
}