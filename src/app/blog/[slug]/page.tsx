import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, formatDate } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: 760, marginLeft: "auto", marginRight: "auto", padding: "40px 24px 80px" }}
    >
      <Link
        href="/blog"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 14,
          color: "var(--color-text-muted)",
          textDecoration: "none",
          marginBottom: 32,
          transition: "color 0.2s",
        }}
      >
        <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Retour au blog
      </Link>

      <article>
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
            <span className="badge badge--accent">{article.tag}</span>
            <span style={{ fontSize: 13, color: "var(--color-text-light)", padding: "5px 0" }}>{article.readTime} de lecture</span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--color-text)",
            }}
          >
            {article.title}
          </h1>

          <p style={{ fontSize: 18, color: "var(--color-text-muted)", marginTop: 16, lineHeight: 1.7 }}>
            {article.excerpt}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginTop: 28,
              paddingBottom: 28,
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                background: "linear-gradient(135deg, #E8600A, #F5A623)",
                color: "white",
              }}
            >
              {article.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--color-text)" }}>{article.author}</div>
              <div style={{ fontSize: 13, color: "var(--color-text-light)" }}>{formatDate(article.date)}</div>
            </div>
          </div>
        </div>

        <div>
          {article.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 24,
                    fontWeight: 700,
                    color: "var(--color-text)",
                    marginTop: 40,
                    marginBottom: 16,
                  }}
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: "var(--color-text-muted)", marginBottom: 20 }}>
                {block}
              </p>
            );
          })}
        </div>

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--color-border)" }}>
          <Link href="/blog" className="btn-gradient">
            <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Tous les articles
          </Link>
        </div>
      </article>
    </div>
  );
}
