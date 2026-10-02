import type { LucideIcon } from "lucide-react";
import { Code2, Layers, Database, ShoppingCart, Smartphone, Bot, Search } from "lucide-react";

interface ServiceMeta {
  icon: LucideIcon;
  highlights: string[];
}

export const serviceMeta: Record<string, ServiceMeta> = {
  "custom-web-dev": {
    icon: Code2,
    highlights: ["Custom websites", "Responsive design", "Performance optimized", "Cross-browser compatible"],
  },
  "fullstack-apps": {
    icon: Layers,
    highlights: ["Database design", "API development", "Authentication", "Admin interfaces"],
  },
  "saas-dev": {
    icon: Database,
    highlights: ["Multi-tenant architecture", "Authentication & roles", "Subscription-ready structure", "Admin dashboards"],
  },
  "ecommerce-dev": {
    icon: ShoppingCart,
    highlights: ["Product management", "Secure checkout", "Order management", "Inventory & shipping"],
  },
  "pwa-dev": {
    icon: Smartphone,
    highlights: ["Installable apps", "Offline functionality", "Fast & reliable", "Mobile-first UX"],
  },
  "ai-integration": {
    icon: Bot,
    highlights: ["AI-powered features", "Chatbots & assistants", "AI API integration", "Automation workflows"],
  },
  "seo-geo": {
    icon: Search,
    highlights: ["On-page SEO", "Technical SEO", "Keyword research", "GEO (AI search optimization)"],
  },
};