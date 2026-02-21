import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { articles, formatDate } from "@/data/articles";

const sizePattern = ["2x2", "2x1", "1x1", "1x1", "2x1", "2x2"] as const;

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Blog"
        subtitle="Articles, analyses et retours d'expérience de notre équipe"
      />

      <BentoGrid>
        {articles.map((article, index) => {
          const size = sizePattern[index % sizePattern.length];
          const sizeClass =
            size === "2x2"
              ? "col-span-2 row-span-2"
              : size === "2x1"
              ? "col-span-2 row-span-1"
              : "col-span-1 row-span-1";

          return (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/5 ${sizeClass}`}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${article.gradient}`}
              />

              <div className="relative z-10 flex h-full flex-col">
                {/* Tag + reading time */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                    {article.tag}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {article.excerpt}
                </p>

                {/* Author + date */}
                <div className="mt-auto flex items-center gap-3 pt-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs font-bold text-[var(--color-accent-light)]">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium">
                      {article.author}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {formatDate(article.date)}
                    </div>
                  </div>
                </div>

                {/* Read more hint */}
                <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent-light)] opacity-0 transition-opacity group-hover:opacity-100">
                  Lire l&apos;article
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          );
        })}
      </BentoGrid>
    </div>
  );
}
