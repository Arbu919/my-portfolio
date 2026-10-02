import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Building interfaces that feel fast and hold up under real use.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs and server logic the frontend can rely on.",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    id: "database",
    label: "Database",
    description: "Data modeling for products that need to stay correct over time.",
    skills: ["MongoDB", "Prisma"],
  },
  {
    id: "seo-geo",
    label: "SEO & GEO",
    description: "Getting a client's site found — by Google, and by AI answer engines.",
    skills: ["Technical SEO", "GEO (AI Search Optimization)", "SXO", "Structured Data", "Site Performance"],
  },
  {
    id: "platforms",
    label: "Platforms & Tools",
    description: "The day-to-day tooling behind every build and deploy.",
    skills: ["Git", "GitHub", "Vercel", "WordPress", "Wix"],
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    description: "Connecting products to AI and automating business workflows.",
    skills: ["AI API Integration", "AI-Assisted Workflows", "GoHighLevel (GHL)", "n8n", "Business Automation"],
  },
  {
    id: "digital-ops",
    label: "Client Outreach & Digital Ops",
    description: "Practical support work that pairs naturally with a build — and helps bring the next client in.",
    skills: ["Lead Generation", "Outreach", "Appointment Setting", "Web Research", "Data Entry", "Customer Support"],
  },
];