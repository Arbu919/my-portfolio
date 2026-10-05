export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  placeholder: boolean;
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  skills: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  tier: "primary" | "secondary";
}
export type ProjectCategory = "saas" | "pwa" | "ecommerce";

export interface Project {
  slug: string;
  name: string;
  image?: string;
  screenshots?: string;
  category: ProjectCategory;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  stack: string[];
  status: "live" | "in-progress" | "private";
  links: {
    demo?: string;
    github?: string;
    caseStudy?: boolean;
  };
  featured: boolean;
}

export type BlogBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  categories: string[];
  tags: string[];
  content: BlogBlock[];
}