import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="border-t border-line bg-ink py-20 text-paper md:py-24">
      <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <h2 className="max-w-lg font-display text-3xl leading-tight md:text-4xl">
          Have a product to build or a process to fix?
        </h2>
        <Button href="/contact" variant="accent" className="shrink-0">
          Let&apos;s Work Together
        </Button>
      </Container>
    </section>
  );
}