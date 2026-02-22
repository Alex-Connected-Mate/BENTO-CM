import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { articles, formatDate } from "@/data/articles";

const sizePattern = ["2x2", "2x1", "1x1", "1x1", "2x1", "2x2"] as const;

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Blog" subtitle="Articles et retours d’expérience de notre équipe" />
      <BentoGrid>
        {articles.map((article, index) => {
          const size = sizePattern[index % sizePattern.length];
          const sizeClass = size === "2x2" ? "col-span-2 row-span-2" : size === "2x1" ? "col-span-2 row-span-1" : "col-span-1 row-span-1";

          return (
            <Link key={article.slug} href={`/blog/${article.slug}`} className={`group relative overflow-hidden rounded-[var(--radius)] bg-[var(--color-card)] p-4 shadow-[0_2px_8px_-2px_rgba(45,27,6,0.08)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_24px_-8px_rgba(45,27,6,0.12)] sm:p-5 ${sizeClass}`}>
              <div className={`absolute inset-0 opacity-[0.04] ${article.gradient}`} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-2 flex flex-wrap items-center gap-1.5">
                  <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-accent)] sm:text-xs">{article.tag}</span>
                  <span className="text-[11px] text-[var(--color-text-muted)] sm:text-xs">{article.readTime}</span>
                </div>
                <h3 className="font-[Space_Grotesk] text-[15px] font-semibold leading-snug text-[var(--color-text)] sm:text-base">{article.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[var(--color-text-muted)] sm:text-sm">{article.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 pt-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[10px] font-bold text-[var(--color-accent)]">
                    {article.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-medium text-[var(--color-text)] sm:text-sm">{article.author}</div>
                    <div className="text-[11px] text-[var(--color-text-muted)]">{formatDate(article.date)}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </BentoGrid>
    </div>
  );
}
