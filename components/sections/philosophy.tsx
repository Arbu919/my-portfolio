import { Target, Minus, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const PRINCIPLES = [
  { icon: Target, title: "Build with purpose", description: "Every feature should solve a real problem for real people." },
  { icon: Minus, title: "Keep it simple", description: "Good products don't need unnecessary complexity." },
  { icon: BookOpen, title: "Keep learning", description: "Technology changes fast — I stay curious and keep improving." },
];

export function Philosophy() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container>
        <SectionHeading title="I don't just build websites. I build solutions." />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <div key={item.title}>
              <item.icon size={20} className="text-accent-strong" aria-hidden="true" />
              <h3 className="mt-3 text-base font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}