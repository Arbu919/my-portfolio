import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fraunces, plexSans, plexMono } from "@/lib/fonts";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import AskArbaaz from "@/components/sections/ask-arbaaz";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s — ${siteConfig.name}`,
  },

  description: siteConfig.description,
  verification: {
    google: "oAJbRjVOGYASQBb8yzMnjX5rpXBvnrs94BRqzmgYA3g",
  },
  keywords: [
    "Arbaaz Khan",
    "Full-Stack Developer",
    "Next.js Developer",
    "SaaS Development",
    "SEO",
    "GEO",
    "AI Automation",
    "GHL",
    "GoHighLevel",
    "Workflow Automation"
  ],

  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteConfig.url,
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "SaaS Development",
    "SEO",
    "GEO",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-control)] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}

          <AskArbaaz />
        </main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
