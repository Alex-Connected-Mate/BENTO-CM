import { BentoCard } from "@/components/BentoCard";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";

const podcasts = [
  {
    title: "Connected Talks",
    description:
      "Notre podcast phare : des conversations avec des leaders de la tech, des entrepreneurs et des penseurs qui fa\u00e7onnent le monde de demain.",
    size: "2x2" as const,
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    episodes: "120+ \u00e9pisodes",
  },
  {
    title: "Tech & Caf\u00e9",
    description:
      "L\u2019actualit\u00e9 tech d\u00e9crypt\u00e9e en 15 minutes, chaque matin. Le format id\u00e9al pour rester inform\u00e9.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
    episodes: "300+ \u00e9pisodes",
  },
  {
    title: "Deep Dive",
    description:
      "Des analyses approfondies sur les tendances technologiques et leur impact sur la soci\u00e9t\u00e9.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-indigo-500 to-violet-600",
    episodes: "45 \u00e9pisodes",
  },
  {
    title: "Startup Stories",
    description:
      "Les coulisses de la cr\u00e9ation d\u2019entreprise : succ\u00e8s, \u00e9checs et le\u00e7ons apprises.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-pink-500 to-rose-600",
    episodes: "80 \u00e9pisodes",
  },
  {
    title: "Code & Culture",
    description:
      "Quand le code rencontre la culture : explorations \u00e0 l\u2019intersection de la technologie et des arts.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    episodes: "35 \u00e9pisodes",
  },
];

export default function PodcastsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Podcasts"
        subtitle="\u00c9coutez nos \u00e9missions et plongez dans des conversations inspirantes"
      />

      <BentoGrid>
        {podcasts.map((podcast) => (
          <BentoCard
            key={podcast.title}
            title={podcast.title}
            description={podcast.description}
            size={podcast.size}
            gradient={podcast.gradient}
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            }
          >
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                {podcast.episodes}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                \u00c9couter
              </span>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
}
