import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ProjectImage } from "@/components/ui/project-image";
import { projects } from "@/data/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Real products built by Arbaaz Khan — a personal finance PWA, a multi-shop tailor management SaaS, and a custom e-commerce platform.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-ink md:text-5xl">
            Projects
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            Real products, built end to end — each one solving a specific
            problem for a specific kind of business.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-4 transition-colors hover:border-ink/40"
            >
              <div className="relative aspect-[400/260] overflow-hidden rounded-[calc(var(--radius-card)-6px)] border border-line">
                <ProjectImage project={project} />
              </div>

              <p className="mt-5 font-mono text-xs text-ink-muted">
                {project.status === "live"
                  ? "Live"
                  : project.status === "in-progress"
                    ? "In progress"
                    : "Private"}
              </p>
              <h2 className="mt-2 font-display text-xl text-ink md:text-2xl">
                {project.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent-strong">
                Read the case study
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
