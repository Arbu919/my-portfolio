import Image from "next/image";
import { ProjectVisual } from "@/components/icons/project-visual";
import type { Project } from "@/types";

export function ProjectImage({
  project,
  src,
  priority = false,
}: {
  project: Project;
  src?: string;
  priority?: boolean;
}) {
  const imageSrc = src ?? project.image;

  if (imageSrc) {
    return (
      <Image
        src={imageSrc}
        alt={`${project.name} screenshot`}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    );
  }

  // No real screenshot configured yet — fall back to the illustrative SVG.
  return <ProjectVisual category={project.category} name={project.name} />;
}