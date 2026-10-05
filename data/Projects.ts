import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "mera-hisaab",
    name: "Mera Hisaab",
    // Drop a screenshot at /public/images/projects/mera-hisaab/cover.png,
    // then uncomment the line below.
    image: "/images/projects/mera-hisaab/coverr.png",
    category: "pwa",
    tagline: "Personal and family expense, income, and loan tracking PWA.",
    problem:
      "Everyday financial tracking for individuals and families — expenses, income, and informal loans (udhaar) — is usually scattered across notebooks, chat messages, or apps that are too complex for daily use.",
    solution:
      "A focused progressive web app for logging expenses and income, tracking money lent or borrowed, and reviewing a simple financial overview — built for fast daily entry rather than accounting-grade complexity.",
    features: [
      "Expense and income tracking",
      "Loan / udhaar management",
      "Simple financial overview and summaries",
      "Installable PWA with offline-friendly UX",
      "Mobile-first interface for daily use",
    ],
    role: "Designed and built the full application end-to-end, from data model to UI.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Prisma", "Tailwind CSS"],
    status: "live",
    links: { demo: "https://mera-hisaab-ten.vercel.app/", caseStudy: true },
    featured: true,
  },
  {
    slug: "tailor-shop",
    name: "Tailor Shop Management SaaS",
    image: "/images/projects/tailor-shop/coverr.png",
    category: "saas",
    tagline: "Multi-shop management platform for local tailor businesses.",
    problem:
      "Local tailor shops typically manage customers, measurements, orders, and payments manually, which makes it hard to track order status, follow up with customers, or see accurate business numbers across multiple shops.",
    solution:
      "A multi-tenant SaaS platform where each shop operates in an isolated workspace, covering customers, measurements, orders, payments, and expenses, with reporting and AI-assisted admin functionality to speed up daily operations.",
    features: [
      "Customer and measurement records",
      "Order tracking from intake to delivery",
      "Payments and expense tracking",
      "Shop-level data isolation for multi-shop use",
      "Reports for business performance",
      "Subscription / trial functionality",
      "AI-assisted admin functionality",
    ],
    role: "Architected and built the platform, including multi-tenant data isolation and the admin system.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Prisma"],
    status: "live",
    links: { demo: "https://tailor-shop-beryl.vercel.app/", caseStudy: true },
    featured: true,
  },
  {
    slug: "house-of-samzz",
    name: "THE HOUSE OF SAMzz",
    image: "/images/projects/house-of-samzz/coverr.png",
    category: "ecommerce",
    tagline: "Custom e-commerce platform with full store and admin functionality.",
    problem:
      "Off-the-shelf storefronts often force a tradeoff between ease of setup and control over the exact product, inventory, and checkout experience a brand needs.",
    solution:
      "A custom-built e-commerce platform covering product management with variants, inventory, checkout, order management, payments, reviews, and an admin dashboard, with a responsive shopping experience.",
    features: [
      "Product catalog with variants",
      "Inventory management",
      "Checkout and payment handling",
      "Order management",
      "Customer reviews and sold-count display",
      "Admin dashboard",
      "Responsive, mobile-first shopping UX",
    ],
    role: "Built the storefront and admin system, including product, inventory, and order logic.",
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    status: "in-progress",
    links: { caseStudy: true },
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}