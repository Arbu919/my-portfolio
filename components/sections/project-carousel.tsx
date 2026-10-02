"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            const index = cardRefs.current.findIndex((el) => el === entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: container, threshold: [0.6] }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [projects.length]);

  function scrollToIndex(index: number) {
    const card = cardRefs.current[index];
    const container = containerRef.current;
    if (card && container) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
    }
  }

  return (
    <div>
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:pb-0 md:snap-none lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <div
            key={project.slug}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="w-[85%] shrink-0 snap-center sm:w-[70%] md:w-auto md:shrink"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div
        className="mt-6 flex justify-center gap-2 md:hidden"
        role="tablist"
        aria-label="Project pagination"
      >
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to project ${index + 1}`}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === activeIndex ? "w-6 bg-accent" : "w-2 bg-line"
            )}
          />
        ))}
      </div>
    </div>
  );
}