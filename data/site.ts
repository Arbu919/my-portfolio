import type { NavItem, SocialLink } from "@/types";

// PLACEHOLDER VALUES — replace hrefs marked placeholder: true once you have real links.

export const siteConfig = {
  name: "Arbaaz Khan",
  role: "Full-Stack Developer",
  tagline: "Full-stack systems for people who run real businesses.",
  description:
    "Arbaaz Khan is an independent full-stack developer who builds modern web applications, SaaS platforms, and AI-integrated business tools using Next.js, TypeScript, and Node.js.",
  url: "https://arbaazkhan.dev",
  location: "Swat, Pakistan",
  availability: "Open to remote roles & freelance projects",
  email: "arbu919@gmail.com",
  responseTime: "24 hours",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Arbu919", placeholder: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/arbaz-khan-0b923028b", placeholder: false },
  { label: "Email", href: "mailto:arbu919@gmail.com", placeholder: false },
  { label: "WhatsApp", href: "https://wa.me/923415235108", placeholder: false },
];