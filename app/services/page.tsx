import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/service-hero";
import { ServicesGrid } from "@/components/sections/service-grid";
import { ServicesCta } from "@/components/sections/service-cta";

export const metadata: Metadata = {
  title: "Services",
  description: "Development and digital services offered by Arbaaz Khan — web apps, SaaS, e-commerce, AI integration, SEO/GEO, and PWAs.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
    </>
  );
}