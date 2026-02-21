interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mt-2 text-lg text-[var(--color-text-muted)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
