import { Code2, Bot, Boxes, Search } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const ITEMS = [
  { icon: Code2, title: "Web Development", description: "Building modern, responsive, high-performance websites and applications." },
  { icon: Bot, title: "AI & Automation", description: "Integrating AI features and automation to save time and reduce manual work." },
  { icon: Boxes, title: "Business Solutions", description: "Creating custom digital systems that help businesses streamline operations." },
  { icon: Search, title: "SEO / GEO", description: "Optimizing for search engines and AI-powered discovery to increase visibility." },
];

export function WhatIDo() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container>
        <SectionHeading title="Turning ideas into powerful web experiences." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.title} className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pill">
                <item.icon size={18} className="text-accent-strong" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}