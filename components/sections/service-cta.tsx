import Link from "next/link";
import { Rocket, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";

export function ServicesCta() {
  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pill">
              <Rocket size={16} className="text-accent-strong" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">Have a project in mind?</p>
              <p className="text-sm text-ink-muted">
                Let&apos;s work together to bring your ideas to life with clean code and the right technology.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-[var(--radius-control)] bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent-strong"
          >
            Let&apos;s Talk
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}