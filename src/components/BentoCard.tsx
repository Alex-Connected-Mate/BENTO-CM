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
  colored,
}: BentoCardProps) {
  const coloredBg = colored && gradient
    ? `${gradient} text-white`
    : "bg-[var(--color-card)]";

  const hoverShadow = colored
    ? "hover:shadow-[0_20px_40px_-12px_rgba(232,96,10,0.3)]"
    : "hover:shadow-[0_12px_24px_-8px_rgba(45,27,6,0.12)]";

  const baseClasses = `group relative overflow-hidden rounded-[var(--radius)] ${coloredBg} p-4 sm:p-5 transition-all duration-300 ease-out hover:scale-[1.02] ${hoverShadow} ${sizeClasses[size]} ${className}`;

  const textColor = colored ? "text-white" : "text-[var(--color-text)]";
  const mutedColor = colored ? "text-white/70" : "text-[var(--color-text-muted)]";
  const iconBg = colored ? "bg-white/20 text-white" : "bg-[var(--color-accent)]/10 text-[var(--color-accent)]";
  const accentColor = colored ? "text-white/80" : "text-[var(--color-accent)]";

  const content = (
    <>
      {!colored && gradient && (
        <div className={`absolute inset-0 opacity-[0.04] ${gradient}`} />
      )}
      <div className="relative z-10 flex h-full flex-col">
        {icon && (
          <div className={`mb-2 flex h-9 w-9 items-center justify-center rounded-xl sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl ${iconBg}`}>
            {icon}
          </div>
        )}
        <h3 className={`font-[Space_Grotesk] text-[15px] font-semibold leading-snug ${textColor} sm:text-base`}>{title}</h3>
        {description && (
          <p className={`mt-1.5 text-[13px] leading-relaxed ${mutedColor} sm:text-sm`}>
            {description}
          </p>
        )}
        {children && <div className="mt-3 flex-1">{children}</div>}
        {href && (
          <div className={`mt-auto flex items-center gap-1 pt-3 text-[13px] font-medium ${accentColor} opacity-0 transition-opacity group-hover:opacity-100`}>
            Voir plus
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return <div className={baseClasses}>{content}</div>;
}
