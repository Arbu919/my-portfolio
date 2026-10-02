import type { Metadata } from "next";
import { SkillsHero } from "@/components/sections/skills-hero";
import { SkillsGroups } from "@/components/sections/skills-group";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technologies and tools Arbaaz Khan uses to build modern, scalable web applications.",
};

export default function SkillsPage() {
  return (
    <>
      <SkillsHero />
      <SkillsGroups />
    </>
  );
}