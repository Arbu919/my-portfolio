import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ProjectCarousel } from "@/components/sections/project-carousel";
import { getFeaturedProjects } from "@/data/Projects";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-16 md:py-24" aria-labelledby="selected-work-heading">
      <Container>
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <h2 id="selected-work-heading" className="font-display text-3xl text-ink md:text-4xl">
              Selected work
            </h2>
            <p className="mt-3 max-w-md text-base text-ink-muted">
              Real products built around real business problems.
            </p>
          </div>
          <Link href="/projects" className="mx-auto text-sm font-medium text-ink hover:text-accent-strong md:mx-0">
            View all projects
          </Link>
        </div>

        <div className="mt-12 md:mt-14">
          <ProjectCarousel projects={projects} />
        </div>
      </Container>
    </section>
  );
}