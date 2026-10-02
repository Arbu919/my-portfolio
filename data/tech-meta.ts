import type { LucideIcon } from "lucide-react";
import {
  Code2, Layers, FileCode2, Paintbrush, Braces, LayoutTemplate,
  Server, Webhook, Share2, Lock, Database, Boxes, GitBranch, GitBranchIcon,
  Triangle, Globe, Bot, Workflow, Link2, GitMerge, Settings2,
  Users, Megaphone, Calendar, Search, ClipboardList, Headphones,
} from "lucide-react";

interface TechMeta {
  icon: LucideIcon;
  description: string;
}

export const techMeta: Record<string, TechMeta> = {
  "React": { icon: Code2, description: "Building interactive user interfaces." },
  "Next.js": { icon: Layers, description: "Production-ready React framework." },
  "TypeScript": { icon: FileCode2, description: "Typed JavaScript for safer code." },
  "JavaScript": { icon: Braces, description: "Core scripting language for the web." },
  "HTML": { icon: LayoutTemplate, description: "Semantic markup for web pages." },
  "CSS": { icon: Paintbrush, description: "Styling and layout for the web." },
  "Tailwind CSS": { icon: Paintbrush, description: "Utility-first CSS framework." },
  "Node.js": { icon: Server, description: "JavaScript runtime for scalable apps." },
  "Express.js": { icon: Webhook, description: "Fast, minimal web framework." },
  "REST APIs": { icon: Share2, description: "Designing and building robust APIs." },
  "Authentication": { icon: Lock, description: "Secure sign-in and session handling." },
  "MongoDB": { icon: Database, description: "Flexible NoSQL database." },
  "Prisma": { icon: Boxes, description: "Next-generation ORM for Node.js." },
  "Git": { icon: GitBranch, description: "Version control system." },
  "GitHub": { icon: GitBranchIcon, description: "Code hosting and collaboration." },
  "Vercel": { icon: Triangle, description: "Deployment and hosting for modern apps." },
  "WordPress": { icon: Globe, description: "Fast-turnaround content sites." },
  "Wix": { icon: Globe, description: "Simple drag-and-drop websites." },
  "AI API Integration": { icon: Bot, description: "Connecting products to AI models." },
  "AI-Assisted Workflows": { icon: Workflow, description: "Using AI to speed up daily work." },
  "GoHighLevel (GHL)": { icon: Link2, description: "CRM and automation platform." },
  "n8n": { icon: GitMerge, description: "Visual workflow automation." },
  "Business Automation": { icon: Settings2, description: "Automating repetitive operational work." },
  "Lead Generation": { icon: Users, description: "Finding the right prospects." },
  "Outreach": { icon: Megaphone, description: "Reaching out to potential clients." },
  "Appointment Setting": { icon: Calendar, description: "Booking qualified calls." },
  "Web Research": { icon: Search, description: "Structured research and data gathering." },
  "Data Entry": { icon: ClipboardList, description: "Accurate, structured data work." },
  "Customer Support": { icon: Headphones, description: "Helping customers get what they need." },
};

export const defaultTechMeta: TechMeta = {
  icon: Code2,
  description: "One of the tools I use to build modern products.",
};