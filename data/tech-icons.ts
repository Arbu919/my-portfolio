import type { IconType } from "react-icons";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma, SiMongodb, SiGit,
  SiGithub, SiVercel, SiWordpress, SiWix, SiN8N,
  SiLangchain, SiSupabase, SiPostgresql, SiDocker, SiZapier,
  SiFigma, SiCanvas, SiNotion, SiCloudinary,
} from "react-icons/si";

interface BrandIcon {
  icon: IconType;
  color: string;
}

// Only tools with a recognizable, official logo go here.
// Anything missing (SEO, GEO, GoHighLevel, Make.com, Claude) falls back
// to an initials tile — no official icon available for these in this library.
export const brandIcons: Record<string, BrandIcon> = {
  "React": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "HTML": { icon: SiHtml5, color: "#E34F26" },
  "CSS": { icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#000000" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Git": { icon: SiGit, color: "#F05032" },
  "GitHub": { icon: SiGithub, color: "#181717" },
  "Vercel": { icon: SiVercel, color: "#000000" },
  "WordPress": { icon: SiWordpress, color: "#21759B" },
  "Wix": { icon: SiWix, color: "#0C6EFC" },
  "n8n": { icon: SiN8N, color: "#EA4B71" },
//   "OpenAI": { icon: SiOpenai, color: "#412991" },
  "LangChain": { icon: SiLangchain, color: "#1C3C3C" },
  "Supabase": { icon: SiSupabase, color: "#3ECF8E" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Zapier": { icon: SiZapier, color: "#FF4A00" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "Canva": { icon: SiCanvas, color: "#00C4CC" },
  "Notion": { icon: SiNotion, color: "#000000" },
//   "Slack": { icon: SiSlack, color: "#4A154B" },
//   "VS Code": { icon: SiVisualstudiocode, color: "#007ACC" },
  "cloudinary": { icon: SiCloudinary, color: "#3448C5" },
};