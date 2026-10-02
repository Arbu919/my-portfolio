import { AppWindow, BarChart3, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/container";

export function ServicesHero() {
  return (
    <section className="py-14 md:py-20">
      <Container className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-ink-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            WHAT I OFFER
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Services I can <em className="text-accent-strong not-italic">help you</em> with.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            End-to-end solutions to help your business grow online with
            modern web technologies and good practices.
          </p>
        </div>

        <div className="relative mx-auto h-48 w-full max-w-xs md:h-56">
          <span className="absolute left-0 top-0 flex h-28 w-36 items-center justify-center rounded-2xl border border-line bg-surface shadow-[var(--shadow-soft)] md:h-32 md:w-40">
            <AppWindow size={28} className="text-ink-muted" aria-hidden="true" />
          </span>
          <span className="absolute bottom-2 left-6 flex h-16 w-20 items-center justify-center rounded-xl border border-line bg-surface shadow-[var(--shadow-soft)]">
            <BarChart3 size={20} className="text-accent-strong" aria-hidden="true" />
          </span>
          <span className="absolute bottom-0 right-0 flex h-16 w-28 items-center justify-center gap-2 rounded-xl border border-line bg-surface px-3 shadow-[var(--shadow-soft)]">
            <UserCheck size={18} className="text-accent-strong" aria-hidden="true" />
            <span className="text-xs text-ink-muted">Client</span>
          </span>
        </div>
      </Container>
    </section>
  );
}