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
    <div className="animate-fade-in">
      <Link
        href="/blog"
        className="mb-4 inline-flex items-center gap-1.5 text-[13px] transition-colors sm:mb-6 sm:text-sm"
        style={{ color: "var(--color-text-muted)" }}
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Retour au blog
      </Link>

      <article
        className="overflow-hidden p-4 sm:p-8"
        style={{
          borderRadius: "var(--radius)",
          backgroundColor: "var(--color-card)",
          boxShadow: "0 1px 2px rgba(45, 27, 6, 0.04), 0 4px 12px rgba(45, 27, 6, 0.06)",
          border: "1px solid rgba(45, 27, 6, 0.06)",
          overflowWrap: "break-word",
        }}
      >
        <div className="mb-6 sm:mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="badge badge--accent">{article.tag}</span>
            <span className="text-[13px] sm:text-sm" style={{ color: "var(--color-text-muted)" }}>{article.readTime} de lecture</span>
          </div>
          <h1
            className="text-xl font-bold leading-tight sm:text-3xl"
            style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
          >
            {article.title}
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed sm:text-lg" style={{ color: "var(--color-text-muted)" }}>{article.excerpt}</p>
          <div
            className="mt-4 flex items-center gap-2.5 pb-4 sm:mt-6 sm:pb-6"
            style={{ borderBottom: "1px solid rgba(232, 96, 10, 0.10)" }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center text-xs font-bold sm:h-10 sm:w-10 sm:text-sm"
              style={{ borderRadius: "50%", backgroundColor: "rgba(232, 96, 10, 0.10)", color: "var(--color-accent)" }}
            >
              {article.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{article.author}</div>
              <div className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>{formatDate(article.date)}</div>
            </div>
          </div>
        </div>

        <div>
          {article.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-3 mt-6 text-lg font-bold sm:mb-4 sm:mt-8 sm:text-xl"
                  style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}
                >
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return <p key={i} className="mb-3 text-[15px] leading-relaxed sm:mb-4" style={{ color: "var(--color-text-muted)" }}>{block}</p>;
          })}
        </div>

        <div className="mt-8 pt-6 sm:mt-12 sm:pt-8" style={{ borderTop: "1px solid rgba(232, 96, 10, 0.10)" }}>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white sm:text-sm"
            style={{
              borderRadius: "var(--radius)",
              backgroundColor: "var(--color-accent)",
              padding: "10px 16px",
              transition: "background-color 0.15s",
            }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Tous les articles
          </Link>
        </div>
      </article>
    </div>
  );
}
