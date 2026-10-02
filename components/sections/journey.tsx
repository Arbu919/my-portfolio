import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

// EDIT ME — replace with your real years and milestones.
const MILESTONES = [
  { year: "2021", title: "Started web development", description: "Learned the basics of HTML, CSS, and JavaScript." },
  { year: "2023", title: "Went full-stack", description: "Picked up React, Node.js, and database fundamentals." },
  { year: "2025", title: "Built real products", description: "Designed and shipped applications for real use cases." },
  { year: "Now", title: "AI + modern web", description: "Exploring AI integration, automation, and SEO/GEO." },
];

export function Journey() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container>
        <SectionHeading title="A journey of learning, building & growing." />

        <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {MILESTONES.map((item) => (
            <li key={item.title} className="border-t border-line pt-5">
              <p className="font-mono text-xs text-accent-strong">{item.year}</p>
              <h3 className="mt-2 font-display text-lg text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}