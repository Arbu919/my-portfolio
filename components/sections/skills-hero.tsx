import { SiReact, SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";
import { Code2 } from "lucide-react";
import { Container } from "@/components/ui/container";
export function SkillsHero() {
  return (
    <section className="py-14 md:py-20">
      <Container className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-ink-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            MY SKILLS
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink md:text-5xl">
            Technologies <em className="text-accent-strong not-italic">I work</em> with.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted md:text-lg">
            A collection of technologies and tools I use to build modern,
            scalable, and high-performance web applications.
          </p>
        </div>

        <div className="relative mx-auto flex h-48 w-full max-w-xs items-center justify-center md:h-56">
  <div className="absolute h-36 w-36 rounded-full border border-dashed border-line md:h-44 md:w-44" aria-hidden="true" />
  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-line bg-surface shadow-[var(--shadow-soft)]">
    <Code2 size={24} className="text-accent-strong" aria-hidden="true" />
  </span>
  <span className="absolute left-2 top-2 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface shadow-[var(--shadow-soft)]">
    <SiReact size={18} style={{ color: "#61DAFB" }} aria-hidden="true" />
  </span>
  <span className="absolute right-2 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface shadow-[var(--shadow-soft)]">
    <SiNextdotjs size={18} aria-hidden="true" />
  </span>
  <span className="absolute bottom-2 left-8 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface shadow-[var(--shadow-soft)]">
    <SiTypescript size={18} style={{ color: "#3178C6" }} aria-hidden="true" />
  </span>
  <span className="absolute bottom-0 right-6 flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface shadow-[var(--shadow-soft)]">
    <SiJavascript size={18} style={{ color: "#F7DF1E" }} aria-hidden="true" />
  </span>
</div>
      </Container>
    </section>
  );
}