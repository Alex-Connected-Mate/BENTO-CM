import { BentoCard } from "@/components/BentoCard";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";

const keynotes = [
  {
    title: "L'IA au service de l'humain",
    description:
      "Comment l'intelligence artificielle transforme nos métiers et nos interactions. Une vision centrée sur l'augmentation des capacités humaines.",
    size: "2x2" as const,
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
    tag: "Conférence phare",
  },
  {
    title: "Le futur du travail hybride",
    description:
      "Les nouvelles formes de collaboration et d'organisation du travail à l'ère post-pandémie.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    tag: "Tendances",
  },
  {
    title: "Innovation & Disruption",
    description:
      "Comment les startups redéfinissent les industries traditionnelles avec des approches radicalement nouvelles.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    tag: "Startup",
  },
  {
    title: "Leadership Digital",
    description:
      "Les compétences essentielles du leader dans un monde numérique en constante évolution.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
    tag: "Management",
  },
  {
    title: "Data & Éthique",
    description:
      "Concilier exploitation des données et respect de la vie privée : les enjeux d'aujourd'hui et de demain.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-rose-500 to-orange-500",
    tag: "Éthique",
  },
  {
    title: "Cybersécurité pour tous",
    description:
      "Les bonnes pratiques de sécurité numérique accessibles à tous les publics.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-slate-500 to-zinc-600",
    tag: "Sécurité",
  },
  {
    title: "Green IT",
    description:
      "Réduire l'empreinte carbone du numérique : solutions concrètes et retours d'expérience.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-lime-500 to-green-600",
    tag: "Environnement",
  },
];

export default function KeynotePage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Keynotes"
        subtitle="Nos conférences et interventions sur l'innovation, la tech et la transformation digitale"
      />

      <BentoGrid>
        {keynotes.map((keynote) => (
          <BentoCard
            key={keynote.title}
            title={keynote.title}
            description={keynote.description}
            size={keynote.size}
            gradient={keynote.gradient}
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            }
          >
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
              {keynote.tag}
            </span>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
}
