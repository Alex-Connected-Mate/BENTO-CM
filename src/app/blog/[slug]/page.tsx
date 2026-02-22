import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug, formatDate } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="animate-fade-in">
      <Link
        href="/blog"
        className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Retour au blog
      </Link>

      <article className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              {article.tag}
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              {article.readTime} de lecture
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-[var(--color-text)] sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[var(--color-text-muted)]">
            {article.excerpt}
          </p>

          <div className="mt-6 flex items-center gap-3 border-b border-gray-200 pb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-sm font-bold text-[var(--color-accent)]">
              {article.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <div className="font-medium text-[var(--color-text)]">{article.author}</div>
              <div className="text-sm text-[var(--color-text-muted)]">
                {formatDate(article.date)}
              </div>
            </div>
          </div>
        </div>

        <div className="prose-custom">
          {article.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-4 mt-8 text-xl font-bold text-[var(--color-text)]">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-[var(--color-text-muted)]">
                {block}
              </p>
            );
          })}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium shadow-sm transition-all hover:shadow-md"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tous les articles
          </Link>
        </div>
      </article>
    </div>
  );
}
