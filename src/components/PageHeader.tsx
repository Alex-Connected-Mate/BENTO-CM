interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-4 sm:mb-8">
      <h1 className="font-[Space_Grotesk] text-xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
        {title}
        <span className="ml-2 inline-block h-2 w-2 rounded-full bg-[var(--color-accent)] sm:h-2.5 sm:w-2.5" />
      </h1>
      {subtitle && (
        <p className="mt-1 text-[13px] text-[var(--color-text-muted)] sm:mt-2 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
