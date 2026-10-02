import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandIcons } from "@/data/tech-icons";

const TECH = [
  "Next.js", "React", "TypeScript", "JavaScript", "Node.js", "Express.js",
  "MongoDB", "Prisma", "Tailwind CSS", "Git", "Vercel", "OpenAI",
  "LangChain", "Supabase", "PostgreSQL", "Docker", "GoHighLevel", "Zapier",
  "Make.com", "SEO", "GEO", "Figma", "Canva", "Notion", "Slack", "VS Code",
  "n8n", "cloudinary", "Claude",
];

function initials(name: string) {
  return name.replace(/\.(js|ts|com)$/i, "").slice(0, 2).toUpperCase();
}

export function TechStack() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container>
        <SectionHeading title="Technologies I work with" />
        <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-5">
          {TECH.map((tech) => {
            const brand = brandIcons[tech];
            return (
              <div
                key={tech}
                className="flex flex-col items-center gap-2.5 rounded-[var(--radius-card)] border border-line bg-surface py-5"
              >
                {brand ? (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pill">
                    <brand.icon size={18} style={{ color: brand.color }} aria-hidden="true" />
                  </span>
                ) : (
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-mono text-xs font-medium text-paper">
                    {initials(tech)}
                  </span>
                )}
                <span className="text-xs text-ink-muted">{tech}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}