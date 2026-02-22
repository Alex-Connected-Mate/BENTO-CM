import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`bento-grid grid auto-rows-auto grid-cols-2 gap-[var(--gap)] sm:grid-cols-4 ${className}`}
      style={{ gridAutoFlow: "dense" }}
    >
      {children}
    </div>
  );
}
