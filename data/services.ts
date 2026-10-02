import type { Service } from "@/types";

export const services: Service[] = [
  { id: "custom-web-dev", title: "Custom Website Development", description: "Marketing sites and web apps built from scratch with modern tooling.", tier: "primary" },
  { id: "fullstack-apps", title: "Full-Stack Web Applications", description: "End-to-end applications — database, API, and interface — for a real business process.", tier: "primary" },
  { id: "saas-dev", title: "SaaS Development", description: "Multi-tenant platforms with accounts, billing-ready structure, and admin tooling.", tier: "primary" },
  { id: "ecommerce-dev", title: "E-Commerce Development", description: "Custom storefronts with product, inventory, checkout, and order management.", tier: "primary" },
  { id: "pwa-dev", title: "PWA Development", description: "Installable, mobile-first apps that work like a native product.", tier: "primary" },
  { id: "ai-integration", title: "AI Integration", description: "Adding AI-assisted features to an existing product or workflow, scoped and controlled.", tier: "primary" },
  { id: "seo-geo", title: "SEO / GEO Optimization", description: "Technical SEO plus AI-search visibility, so the site is easy to find in both Google and AI answers.", tier: "primary" },
  { id: "business-automation", title: "Business Automation", description: "Automating repetitive operational work with tools like n8n and GoHighLevel.", tier: "secondary" },
  { id: "wordpress-wix", title: "WordPress / Wix Websites", description: "Fast-turnaround sites for businesses that need something live quickly.", tier: "secondary" },
  { id: "site-maintenance", title: "Website Improvements & Maintenance", description: "Fixing, updating, and improving an existing website.", tier: "secondary" },
  { id: "research-data", title: "Data Entry / Web Research", description: "Structured research and data work for a team that needs the hours back.", tier: "secondary" },
  { id: "lead-gen", title: "Lead Generation / Outreach", description: "Finding and reaching the right prospects for a sales process.", tier: "secondary" },
  { id: "appointment-setting", title: "Appointment Setting", description: "Booking qualified calls so a sales team can focus on closing.", tier: "secondary" },
];