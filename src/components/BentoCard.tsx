import React from "react";
import Link from "next/link";

type BentoSize = "1x1" | "2x1" | "1x2" | "2x2";

interface BentoCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  size?: BentoSize;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  gradient?: string;
  colored?: boolean;
}

const sizeClasses: Record<BentoSize, string> = {
  "1x1": "bento-1x1",
  "2x1": "bento-2x1",
  "1x2": "bento-1x2",
  "2x2": "bento-2x2",
};

export function BentoCard({
  title,
  description,
  icon,
  size = "1x1",
  href,
  className = "",
  children,
  gradient,
  colored,
}: BentoCardProps) {
  const cardClass = [
    "bento-card",
    colored ? "bento-card--colored" : "",
    colored && gradient ? gradient : "",
    sizeClasses[size],
    className,
  ].filter(Boolean).join(" ");

  const iconClass = colored ? "icon-box icon-box--white" : "icon-box icon-box--default";

  const content = (
    <>
      {/* Subtle gradient overlay for non-colored cards */}
      {!colored && gradient && (
        <div className={`absolute inset-0 opacity-[0.04] ${gradient}`} />
      )}
      <div style={{ position: "relative", zIndex: 10, display: "flex", height: "100%", flexDirection: "column" }}>
        {icon && (
          <div className={iconClass}>
            {icon}
          </div>
        )}
        <h3
          style={{
            fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
            color: colored ? "white" : "var(--color-text)",
            fontSize: 16,
            fontWeight: 600,
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        {description && (
          <p
            style={{
              color: colored ? "rgba(255,255,255,0.75)" : "var(--color-text-muted)",
              fontSize: 14,
              lineHeight: 1.6,
              marginTop: 6,
            }}
          >
            {description}
          </p>
        )}
        {children && <div style={{ marginTop: 14, flex: 1 }}>{children}</div>}
        {href && (
          <div
            style={{
              marginTop: "auto",
              paddingTop: 14,
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 13,
              fontWeight: 500,
              color: colored ? "rgba(255,255,255,0.85)" : "var(--color-accent)",
              opacity: 0,
              transition: "opacity 0.2s",
            }}
            className="group-hover:opacity-100"
          >
            Voir plus
            <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${cardClass}`}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${cardClass}`}>
        {content}
      </Link>
    );
  }

  return <div className={`group ${cardClass}`}>{content}</div>;
}
