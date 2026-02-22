import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}

export function PageHeader({ title, subtitle, showLogo }: PageHeaderProps) {
  return (
    <div
      style={{
        marginBottom: 32,
        paddingBottom: 24,
        borderBottom: "1px solid rgba(232, 96, 10, 0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {showLogo && (
          <Image
            src="/logo.svg"
            alt="Connected Mate"
            width={56}
            height={56}
            style={{ borderRadius: 14, flexShrink: 0 }}
          />
        )}
        <div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
              color: "var(--color-text)",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
            }}
          >
            {title}
            <span
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #E8600A, #F5A623)",
                marginLeft: 6,
                verticalAlign: "super",
              }}
            />
          </h1>
          {subtitle && (
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: 16,
                marginTop: 6,
                lineHeight: 1.5,
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
