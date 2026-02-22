interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h1
        style={{
          fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
          color: "var(--color-text)",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        {title}
        <span
          style={{
            display: "inline-block",
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "var(--color-accent)",
            marginLeft: 8,
            verticalAlign: "middle",
          }}
        />
      </h1>
      {subtitle && (
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: 15,
            marginTop: 8,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
