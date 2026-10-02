"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import type { NavItem } from "@/types";
import { Button } from "@/components/ui/button";

const HEADER_HEIGHT = 72;

export function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Keep mounted during exit animation
  useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      const t = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border border-line text-ink transition-colors duration-200 hover:bg-ink/5 active:scale-95"
      >
        <span className="relative block h-[18px] w-[18px]">
          <Menu
            size={18}
            aria-hidden="true"
            className={`absolute inset-0 transition-all duration-300 ${
              open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          />
          <X
            size={18}
            aria-hidden="true"
            className={`absolute inset-0 transition-all duration-300 ${
              open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
            }`}
          />
        </span>
      </button>

      {mounted && (
        <>
          {/* Backdrop - CHANGED to start below the header */}
          <div
            onClick={() => setOpen(false)}
            aria-hidden="true"
            style={{ top: HEADER_HEIGHT }}
            className={`fixed inset-x-0 bottom-0 z-[90] bg-ink/20 backdrop-blur-sm transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Panel */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            style={{ top: HEADER_HEIGHT, height: `calc(100dvh - ${HEADER_HEIGHT}px)` }}
            className={`fixed inset-x-0 z-[100] flex flex-col bg-paper transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
          >
            {/* Nav Links */}
            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col overflow-y-auto px-6 pt-8"
            >
              {navItems.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      transitionDelay: open ? `${90 + i * 55}ms` : "0ms",
                    }}
                    className={`group flex items-center justify-between border-b border-line/70 py-4 transition-all duration-500 ease-out ${
                      open
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }`}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="w-6 font-mono text-[10px] tabular-nums text-ink/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-[28px] leading-none tracking-tight transition-colors duration-200 ${
                          active
                            ? "text-ink"
                            : "text-ink/70 group-hover:text-ink"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* Golden Dot for active, Arrow for hover on inactive */}
                    {active ? (
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                    ) : (
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="shrink-0 -translate-x-1 translate-y-1 text-ink/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-60"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Sticky CTA footer */}
            <div
              style={{
                transitionDelay: open ? `${90 + navItems.length * 55}ms` : "0ms",
              }}
              className={`shrink-0 border-t border-line/70 bg-paper px-6 pt-5 pb-6 transition-all duration-500 ease-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <Button
                href="/contact"
                variant="primary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Work Together
              </Button>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.22em] text-ink/35">
                Ready when you are
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}