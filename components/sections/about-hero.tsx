import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PolaroidCard } from "@/components/ui/polaroid-card";
import { PortraitPlaceholder } from "@/components/ui/portrait-placeholder";
import { siteConfig } from "@/data/site";

export function AboutHero() {
  return (
    <section className="py-14 md:py-20" aria-labelledby="about-heading">
      <Container className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-ink-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            ABOUT ME
          </p>

          <h1 id="about-heading" className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Building digital solutions with code and{" "}
            <em className="text-accent-strong not-italic">creativity.</em>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
            I&apos;m Arbaaz, a full-stack developer who builds modern,
            scalable, and user-focused web applications. I combine clean code
            and practical automation to create products that solve real
            problems.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary" className="gap-1.5">
              View My Work
              <ArrowRight size={15} aria-hidden="true" />
            </Button>
            <Button href="/contact" variant="secondary">
              Let&apos;s Talk
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px]">
          <PolaroidCard rotate={0} className="aspect-[4/5] w-full">
            <PortraitPlaceholder />
          </PolaroidCard>
          <div className="absolute -bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs text-ink shadow-[var(--shadow-soft)]">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            {siteConfig.availability}
          </div>
        </div>
      </Container>
    </section>
  );
}