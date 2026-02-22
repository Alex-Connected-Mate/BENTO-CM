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
      <Link href="/blog" className="mb-4 inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] sm:mb-6 sm:text-sm">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Retour au blog
      </Link>

      <article className="rounded-[var(--radius)] bg-white p-5 sm:p-8">
        <div className="mb-6 sm:mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600 sm:text-xs">{article.tag}</span>
            <span className="text-[13px] text-[var(--color-text-muted)] sm:text-sm">{article.readTime} de lecture</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight text-[var(--color-text)] sm:text-3xl">{article.title}</h1>
          <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-text-muted)] sm:text-lg">{article.excerpt}</p>
          <div className="mt-4 flex items-center gap-2.5 border-b border-gray-100 pb-4 sm:mt-6 sm:pb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs font-bold text-[var(--color-accent)] sm:h-10 sm:w-10 sm:text-sm">
              {article.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--color-text)]">{article.author}</div>
              <div className="text-[13px] text-[var(--color-text-muted)]">{formatDate(article.date)}</div>
            </div>
          </div>
        </div>

        <div>
          {article.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i} className="mb-3 mt-6 text-lg font-bold text-[var(--color-text)] sm:mb-4 sm:mt-8 sm:text-xl">{block.replace("## ", "")}</h2>;
            }
            return <p key={i} className="mb-3 text-[15px] leading-relaxed text-[var(--color-text-muted)] sm:mb-4">{block}</p>;
          })}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-6 sm:mt-12 sm:pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--color-bg)] px-4 py-2.5 text-[13px] font-medium transition-all hover:shadow-sm sm:px-5 sm:py-3 sm:text-sm">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Tous les articles
          </Link>
        </div>
      </article>
    </div>
  );
}
