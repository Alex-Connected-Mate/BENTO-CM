import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { articles, formatDate } from "@/data/articles";

export default function BlogPage() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", paddingBottom: 80 }}>
      <PageHeader title="Blog" subtitle="Articles et retours d'expérience de notre équipe" />

      <div style={{ padding: "0 24px" }}>
        <div className="grid-cards" style={{ display: "grid", gap: 24 }}>
          {articles.map((article, i) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={`card animate-fade-up animate-fade-up-d${Math.min(i + 1, 6)}`}
              style={{ textDecoration: "none", color: "var(--color-text)", display: "flex", flexDirection: "column" }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                <span className="badge badge--accent">{article.tag}</span>
                <span style={{ fontSize: 12, color: "var(--color-text-light)", padding: "5px 0" }}>{article.readTime}</span>
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>{article.title}</h3>
              <p style={{ fontSize: 14, color: "var(--color-text-muted)", marginTop: 8, lineHeight: 1.6 }}>{article.excerpt}</p>

              <div style={{ marginTop: "auto", paddingTop: 20, display: "flex", alignItems: "center", gap: 10 }}>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    background: "linear-gradient(135deg, rgba(232, 96, 10, 0.10), rgba(245, 166, 35, 0.10))",
                    color: "var(--color-accent)",
                    flexShrink: 0,
                  }}
                >
                  {article.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>{article.author}</div>
                  <div style={{ fontSize: 12, color: "var(--color-text-light)" }}>{formatDate(article.date)}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
