"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LOGO_SECRETS = [
  "🤫 Psst… tu as trouvé un secret !",
  "👀 Tu cliques beaucoup sur ce logo…",
  "🎉 GG ! Tu es officiellement un power user.",
  "🐣 Easter egg trouvé ! Il en reste d'autres…",
];

const links = [
  { href: "/", label: "Accueil" },
  { href: "/keynote", label: "Keynotes" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
  { href: "/legal", label: "Légal" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [logoSecret, setLogoSecret] = useState<string | null>(null);

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    const next = clickCount + 1;
    setClickCount(next);
    if (next >= 5) {
      e.preventDefault();
      const msg = LOGO_SECRETS[Math.floor(Math.random() * LOGO_SECRETS.length)];
      setLogoSecret(msg);
      setClickCount(0);
      setTimeout(() => setLogoSecret(null), 2500);
    }
  }, [clickCount]);

  return (
    <nav className="nav-bar">
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: 24,
          paddingRight: 24,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" onClick={handleLogoClick} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <Image src="/logo.svg" alt="Connected Mate" width={36} height={36} style={{ borderRadius: 10 }} />
          <span
            style={{
              fontFamily: "'Space Grotesk', system-ui, sans-serif",
              color: "var(--color-text)",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Connected<span className="gradient-text">Mate</span>
          </span>
        </Link>

        <div className="nav-desktop">
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

        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-burger"
          aria-label="Menu"
        >
          {open ? (
            <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg style={{ width: 20, height: 20 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile-menu"
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "12px 24px 24px",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    borderRadius: 16,
                    padding: "14px 18px",
                    fontSize: 15,
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "background-color 0.15s, color 0.15s",
                    background: isActive ? "linear-gradient(135deg, #E8600A, #F5A623)" : "transparent",
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
      {logoSecret && (
        <div
          style={{
            position: "absolute",
            top: 80,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: 12,
            fontSize: 13,
            fontWeight: 600,
            whiteSpace: "nowrap",
            zIndex: 1000,
            animation: "fadeInUp 0.3s ease-out",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          }}
        >
          {logoSecret}
        </div>
      )}
    </nav>
  );
}
