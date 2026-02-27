interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div
      className="animate-fade-up"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "64px 24px 48px",
        textAlign: "center",
      }}
    >
      <div className="gradient-blob--small" style={{ position: "absolute", top: "-40%", left: "50%", transform: "translateX(-50%)", opacity: 0.5 }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 48,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--color-text)",
          }}
        >
          {title}
          <span className="gradient-text" style={{ fontStyle: "italic" }}>.</span>
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: 17,
              color: "var(--color-text-muted)",
              marginTop: 16,
              lineHeight: 1.6,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
