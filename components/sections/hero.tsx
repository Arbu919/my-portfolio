import { Container } from "@/components/ui/container";
import { Code2, Zap, Sparkles, RefreshCw, Users, BarChart3, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/sections/hero-visual";
import { SkillPill } from "../ui/skill-pill";

const SKILL_PILLS = [
  { icon: Code2, label: "Full-Stack & SaaS" },
  { icon: Sparkles, label: "Business Websites" },
  { icon: RefreshCw, label: "Business Automations" },
  { icon: BarChart3, label: "AI Integration & Tools" },
  { icon: Zap, label: "GHL & CRM Systems" },
  { icon: Users, label: "Lead Generation & Appointments" },
];

const FEATURE_ROW = [
  { icon: Code2, title: "Custom Web Apps", subtitle: "Built for real use" },
  { icon: Sparkles, title: "SaaS Products", subtitle: "Built for real businesses" },
  { icon: Zap, title: "AI Integrations", subtitle: "Automate · Optimize" },
  { icon: RefreshCw, title: "Business Automation", subtitle: "GHL · n8n" },
];

const CAPABILITIES = "Web · SaaS · AI · Automation · GHL · SEO/GEO/AEO";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Container className="grid gap-12 pt-14 pb-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10 md:pt-20 md:pb-20 lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.14em] text-ink-muted">
            DIGITAL PRODUCTS · SYSTEMS · GROWTH
          </p>

          <h1
            id="hero-heading"
            className="mt-4 font-display text-3xl leading-[1.1] text-ink md:mt-5 md:text-4xl lg:text-5xl"
          >
            Building reliable{" "}
            <em className="text-accent-strong not-italic md:italic">systems</em>{" "}
            for{" "}
            <em className="text-accent-strong not-italic md:italic">growing</em>{" "}
            businesses.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
            I build and improve websites, SaaS products, AI tools, automations, and digital systems that help businesses operate, attract customers, and grow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/projects" variant="primary">
              View my work
            </Button>
            <Button href="/contact" variant="secondary">
              Let&apos;s work together
            </Button>
          </div>

          <div
            className="mt-5 flex flex-wrap items-start gap-2 md:mt-6 md:flex-row md:flex-wrap md:justify-start"
            aria-label="Core capabilities"
          >
            {SKILL_PILLS.map((pill) => (
              <SkillPill key={pill.label} icon={pill.icon} label={pill.label} />
            ))}
          </div>
        </div>

        <HeroVisual />
      </Container>
      
      {/* Hidden completely on mobile, visible on medium screens and above */}
      <div className="hidden border-t border-line md:block">
        <Container className="grid grid-cols-2 gap-8 py-5 md:grid-cols-4 md:py-6 lg:py-8">
          {FEATURE_ROW.map((item) => (
            <div key={item.title} className="flex items-start gap-2.5">
              <item.icon size={16} className="mt-0.5 shrink-0 text-accent-strong" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-ink">{item.title}</p>
                <p className="text-xs text-ink-muted">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}