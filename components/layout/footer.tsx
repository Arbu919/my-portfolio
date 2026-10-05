import Link from "next/link";
import { navItems, siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-ink">Arbaaz Khan</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Navigate</p>
            <ul className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-muted hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-ink">Connect</p>
            <ul className="mt-4 flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted hover:text-ink"
                    {...(link.placeholder ? { "aria-disabled": true, title: "Link to be added" } : {})}
                  >
                    {link.label}
                    {link.placeholder && <span className="ml-1 text-xs text-line">(soon)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} || Made With Next.ts</p>
          <Link href="/contact" className="text-ink hover:text-accent-strong">
            Have a project in mind? Let&apos;s talk.
          </Link>
        </div>
      </Container>
    </footer>
  );
}