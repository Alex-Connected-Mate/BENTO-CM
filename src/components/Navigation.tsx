"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/keynote", label: "Keynote" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/legal", label: "Legal" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-accent)]/10 bg-[var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-3 py-2.5 sm:px-4 sm:py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Vintage circle logo */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-bold text-white sm:h-9 sm:w-9">
            CM
          </div>
          <span className="font-[Space_Grotesk] text-base font-bold tracking-tight text-[var(--color-text)] sm:text-lg">
            Connected<span className="text-[var(--color-accent)]">Mate</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden gap-1 sm:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-[var(--color-accent)] text-white"
                    : "text-[var(--color-text-muted)] hover:bg-[var(--color-accent)]/10 hover:text-[var(--color-accent)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-card)] text-[var(--color-accent)] sm:hidden"
          aria-label="Menu"
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-[var(--color-accent)]/10 px-3 pb-3 sm:hidden">
          <div className="flex flex-col gap-0.5 pt-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--color-accent)] text-white"
                      : "text-[var(--color-text-muted)] hover:bg-[var(--color-card)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
