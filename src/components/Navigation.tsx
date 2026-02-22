"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "General" },
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
    <nav className="sticky top-0 z-50 bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-[var(--color-text)]">
          Connected<span className="text-[var(--color-accent)]">Mate</span>
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
                    ? "bg-[var(--color-text)] text-white"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
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
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white sm:hidden"
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
        <div className="border-t border-gray-200/50 px-4 pb-4 sm:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[var(--color-text)] text-white"
                      : "text-[var(--color-text-muted)] hover:bg-white"
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
