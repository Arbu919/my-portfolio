"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-[72px] transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-line bg-paper/90 shadow-[var(--shadow-soft)] backdrop-blur-sm"
          : "border-b border-transparent bg-paper"
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="font-mono text-sm font-medium tracking-tight text-ink">
          Arbaaz Khan
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative py-2 text-sm text-ink-muted transition-colors hover:text-ink",
                  isActive && "text-ink"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-accent" aria-hidden="true" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" variant="primary">
            Let&apos;s Talk
          </Button>
        </div>

        <MobileMenu navItems={navItems} />
      </Container>
    </header>
  );
}