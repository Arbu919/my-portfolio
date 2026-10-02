import Link from "next/link";
import { Code2, Server, Database, Wrench, Bot, Users, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TechTile } from "@/components/ui/tech-tile";
import { skillGroups } from "@/data/skills";
import { techMeta, defaultTechMeta } from "@/data/tech-meta";

const GROUP_ICONS: Record<string, LucideIcon> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  platforms: Wrench,
  "ai-automation": Bot,
  "digital-ops": Users,
};

export function SkillsGroups() {
  return (
    <section className="border-t border-line py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        {skillGroups.map((group) => {
          const GroupIcon = GROUP_ICONS[group.id] ?? Code2;
          return (
            <div key={group.id}>
              <div className="flex items-center gap-2">
                <GroupIcon size={16} className="text-accent-strong" aria-hidden="true" />
                <p className="text-sm font-medium text-ink">{group.label}</p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {group.skills.map((skill) => {
                  const meta = techMeta[skill] ?? defaultTechMeta;
                  return <TechTile key={skill} icon={meta.icon} name={skill} description={meta.description} />;
                })}
              </div>
            </div>
          );
        })}

        <div className="flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper">
              <Code2 size={16} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">Always learning, always building.</p>
              <p className="text-sm text-ink-muted">
                I love exploring new technologies and building products that solve real-world problems.
              </p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-accent-strong">
            Let&apos;s Build Something
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}