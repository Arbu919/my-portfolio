import { siteConfig } from "@/data/site";
import { projects } from "@/data/Projects";
import { skillGroups } from "@/data/skills";
import { services } from "@/data/services";

export function buildKnowledgeBase(): string {
  const projectsText = projects
    .map(
      (p) => `
- ${p.name} (${p.status})
  Category: ${p.category}
  What it is: ${p.tagline}
  Problem: ${p.problem}
  Solution: ${p.solution}
  Key features: ${p.features.join(", ")}
  Arbaaz's role: ${p.role}
  Tech stack: ${p.stack.join(", ")}`
    )
    .join("\n");

  const skillsText = skillGroups
    .map((g) => `- ${g.label}: ${g.skills.join(", ")}`)
    .join("\n");

  const servicesText = services
    .map((s) => `- ${s.title} (${s.tier}): ${s.description}`)
    .join("\n");

  return `
NAME: ${siteConfig.name}
ROLE: ${siteConfig.role}
LOCATION: ${siteConfig.location}
AVAILABILITY: ${siteConfig.availability}
EMAIL: ${siteConfig.email}
BACKGROUND: BS IT graduate, self-taught/independent full-stack web developer.
SUMMARY: ${siteConfig.description}

PROJECTS:
${projectsText}

SKILLS:
${skillsText}

SERVICES OFFERED:
${servicesText}

CONTACT:
Email: ${siteConfig.email}
Contact page: /contact (has a working contact form)

NOTE ON RESPONSE TIME: Arbaaz usually replies within 24 hours.
`.trim();
}