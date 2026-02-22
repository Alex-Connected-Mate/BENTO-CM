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
    <nav className="nav-bar">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex items-center justify-center text-xs font-bold text-white"
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              backgroundColor: "var(--color-accent)",
            }}
          >
            CM
          </div>
          <span
            className="text-base font-bold tracking-tight sm:text-lg"
            style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
          >
            Connected<span style={{ color: "var(--color-accent)" }}>Mate</span>
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
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center sm:hidden"
          style={{
            borderRadius: "50%",
            backgroundColor: "var(--color-card)",
            color: "var(--color-accent)",
          }}
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
        <div style={{ borderTop: "1px solid rgba(232, 96, 10, 0.10)", padding: "8px 12px 12px" }} className="sm:hidden">
          <div className="flex flex-col gap-0.5">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium"
                  style={{
                    display: "block",
                    borderRadius: 16,
                    padding: "12px 16px",
                    transition: "background-color 0.15s, color 0.15s",
                    backgroundColor: isActive ? "var(--color-accent)" : "transparent",
                    color: isActive ? "white" : "var(--color-text-muted)",
                  }}
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
