import { BentoCard } from "@/components/BentoCard";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";

const podcasts = [
  {
    title: "Connected Talks",
    description:
      "Notre podcast phare : des conversations avec des leaders de la tech, des entrepreneurs et des penseurs qui façonnent le monde de demain.",
    size: "2x2" as const,
    gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
    episodes: "120+ épisodes",
  },
  {
    title: "Tech & Café",
    description:
      "L’actualité tech décryptée en 15 minutes, chaque matin.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-amber-500 to-yellow-500",
    episodes: "300+ épisodes",
  },
  {
    title: "Deep Dive",
    description:
      "Analyses approfondies sur les tendances technologiques.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-red-500 to-orange-600",
    episodes: "45 épisodes",
  },
  {
    title: "Startup Stories",
    description:
      "Les coulisses de la création d’entreprise : succès, échecs et leçons.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-orange-400 to-red-500",
    episodes: "80 épisodes",
  },
  {
    title: "Code & Culture",
    description:
      "Quand le code rencontre la culture : technologie et arts.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-amber-600 to-orange-700",
    episodes: "35 épisodes",
  },
];

export default function PodcastsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Podcasts"
        subtitle="Écoutez nos émissions et plongez dans des conversations inspirantes"
      />

      <BentoGrid>
        {podcasts.map((podcast) => (
          <BentoCard
            key={podcast.title}
            title={podcast.title}
            description={podcast.description}
            size={podcast.size}
            colored
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
              <span className="badge badge--white">
                {podcast.episodes}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-white/70 sm:text-xs">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Écouter
              </span>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
}
