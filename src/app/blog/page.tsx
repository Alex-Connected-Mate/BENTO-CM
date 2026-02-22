import Link from "next/link";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { articles, formatDate } from "@/data/articles";

const sizePattern = ["2x2", "2x1", "1x1", "1x1", "2x1", "2x2"] as const;
const sizeClasses: Record<string, string> = { "2x2": "bento-2x2", "2x1": "bento-2x1", "1x1": "bento-1x1" };

export default function BlogPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Blog" subtitle="Articles et retours d'expérience de notre équipe" />
      <BentoGrid>
        {articles.map((article, index) => {
          const size = sizePattern[index % sizePattern.length];

          return (
            <Link key={article.slug} href={`/blog/${article.slug}`} className={`group bento-card ${sizeClasses[size]}`}>
              <div className={`absolute inset-0 opacity-[0.04] ${article.gradient}`} />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-2 flex flex-wrap items-center gap-1.5">
                  <span className="badge badge--accent">{article.tag}</span>
                  <span className="text-[11px] sm:text-xs" style={{ color: "var(--color-text-muted)" }}>{article.readTime}</span>
                </div>
                <h3 className="text-[15px] font-semibold leading-snug sm:text-base" style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}>{article.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed sm:text-sm" style={{ color: "var(--color-text-muted)" }}>{article.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 pt-3">
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-[10px] font-bold"
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "rgba(232, 96, 10, 0.10)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {article.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-[13px] font-medium sm:text-sm" style={{ color: "var(--color-text)" }}>{article.author}</div>
                    <div className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>{formatDate(article.date)}</div>
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
