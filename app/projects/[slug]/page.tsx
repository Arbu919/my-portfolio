import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectImage } from "@/components/ui/project-image";
import { projects, getProjectBySlug } from "@/data/Projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
    openGraph: {
      title: project.name,
      description: project.tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          All projects
        </Link>

        <div className="mt-8 max-w-2xl">
          {project.status === "live" && project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-xs text-success hover:underline"
            >
              Live
              <ArrowUpRight size={11} aria-hidden="true" />
            </a>
          ) : (
            <p className="font-mono text-xs text-ink-muted">
              {project.status === "live" ? "Live" : project.status === "in-progress" ? "In progress" : "Private"}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl text-ink md:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            {project.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-line md:mt-14">
          <ProjectImage project={project} priority />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl text-ink">The problem</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-ink">The solution</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl text-ink">Key features</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2.5 text-sm text-ink"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 max-w-2xl">
          <h2 className="font-display text-2xl text-ink">My role</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {project.role}
          </p>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-[var(--radius-card)] border border-line bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl text-ink">Have a similar problem to solve?</p>
          <div className="flex flex-wrap gap-3">
            {project.status === "live" && project.links.demo && (
              <Button href={project.links.demo} variant="secondary" className="gap-1.5">
                Visit Live Site
                <ArrowUpRight size={15} aria-hidden="true" />
              </Button>
            )}
            <Button href="/contact" variant="primary" className="gap-1.5">
              Let&apos;s talk
              <ArrowUpRight size={15} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
