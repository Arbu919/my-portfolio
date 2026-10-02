import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactInfo } from "@/components/sections/contact-info";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arbaaz Khan for full-stack development, SaaS products, e-commerce platforms, and AI-integrated business tools.",
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <Container className="grid gap-14 md:grid-cols-2 md:items-start md:gap-16">
        <ContactInfo />
        <ContactForm />
      </Container>
    </div>
  );
}