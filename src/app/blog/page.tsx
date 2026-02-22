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
        subtitle="Articles, analyses et retours d\u2019exp\u00e9rience de notre \u00e9quipe"
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
              className={`group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${sizeClass}`}
            >
              <div
                className={`absolute inset-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1] ${article.gradient}`}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                    {article.tag}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold leading-snug text-[var(--color-text)]">
                  {article.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {article.excerpt}
                </p>

                <div className="mt-auto flex items-center gap-3 pt-4">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs font-bold text-[var(--color-accent)]">
                    {article.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-[var(--color-text)]">
                      {article.author}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {formatDate(article.date)}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
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
