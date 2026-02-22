interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-5 sm:mb-8">
      <h1 className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">{title}</h1>
      {subtitle && (
        <p className="mt-1 text-sm text-[var(--color-text-muted)] sm:mt-2 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
