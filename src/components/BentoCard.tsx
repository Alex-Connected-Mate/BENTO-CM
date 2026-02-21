import React from "react";

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
}

const sizeClasses: Record<BentoSize, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "col-span-2 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x2": "col-span-2 row-span-2",
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
}: BentoCardProps) {
  const baseClasses = `group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/5 ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {gradient && (
        <div
          className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${gradient}`}
        />
      )}
      <div className="relative z-10 flex h-full flex-col">
        {icon && (
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {description}
          </p>
        )}
        {children && <div className="mt-4 flex-1">{children}</div>}
        {href && (
          <div className="mt-4 flex items-center gap-1 text-sm text-[var(--color-accent-light)] opacity-0 transition-opacity group-hover:opacity-100">
            Voir plus
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
