interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <h1
        className="text-xl font-bold tracking-tight sm:text-3xl"
        style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
      >
        {title}
        <span
          className="ml-2 inline-block"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "var(--color-accent)",
          }}
        />
      </h1>
      {subtitle && (
        <p className="mt-1 text-[13px] sm:mt-2 sm:text-base" style={{ color: "var(--color-text-muted)" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
