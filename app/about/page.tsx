import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { WhatIDo } from "@/components/sections/what-i-do";
import { Journey } from "@/components/sections/journey";
import { TechStack } from "@/components/sections/tech-stack";
import { Philosophy } from "@/components/sections/philosophy";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Arbaaz Khan is a full-stack developer building modern web applications, SaaS products, and AI-integrated business tools.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatIDo />
      <Journey />
      <TechStack />
      <Philosophy />
      <CtaSection />
    </>
  );
}