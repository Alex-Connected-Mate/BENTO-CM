import { BentoCard } from "@/components/BentoCard";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";

const apps = [
  {
    title: "Connected Hub",
    description:
      "Notre plateforme centrale de collaboration. Gérez vos projets, communiquez avec votre équipe et suivez vos objectifs en temps réel.",
    size: "2x2" as const,
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    status: "Disponible",
    platforms: "Web, iOS, Android",
  },
  {
    title: "Mate Analytics",
    description:
      "Tableau de bord intelligent pour visualiser vos données et prendre des décisions éclairées.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    status: "Disponible",
    platforms: "Web",
  },
  {
    title: "QuickSync",
    description:
      "Synchronisez vos fichiers et documents entre tous vos appareils en un instant.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
    status: "Bêta",
    platforms: "Toutes plateformes",
  },
  {
    title: "EventFlow",
    description:
      "Organisez et gérez vos événements de A à Z : inscriptions, planning, networking.",
    size: "1x1" as const,
    gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
    status: "Disponible",
    platforms: "Web, iOS",
  },
  {
    title: "AI Assistant",
    description:
      "Un assistant IA intégré à votre workflow pour automatiser les tâches répétitives et booster votre productivité.",
    size: "2x1" as const,
    gradient: "bg-gradient-to-br from-rose-500 to-pink-600",
    status: "Bientôt",
    platforms: "Web",
  },
];

export default function AppsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Nos Applications"
        subtitle="Des outils conçus pour transformer votre façon de travailler"
      />

      <BentoGrid>
        {apps.map((app) => (
          <BentoCard
            key={app.title}
            title={app.title}
            description={app.description}
            size={app.size}
            gradient={app.gradient}
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            }
          >
            <div className="flex flex-wrap gap-2">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                  app.status === "Disponible"
                    ? "bg-green-500/20 text-green-400"
                    : app.status === "Bêta"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400"
                }`}
              >
                {app.status}
              </span>
              <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                {app.platforms}
              </span>
            </div>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
}
