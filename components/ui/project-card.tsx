import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectImage } from "@/components/ui/project-image";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
      <div className="relative aspect-[400/260] overflow-hidden border-b border-line">
        <ProjectImage project={project} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs tracking-wide text-ink-muted">
          {project.status === "live"
            ? "LIVE"
            : project.status === "in-progress"
              ? "IN PROGRESS"
              : "PRIVATE"}
        </p>
        <h3 className="mt-2 font-display text-xl text-ink">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-ink hover:text-accent-strong"
        >
          View Case Study
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
