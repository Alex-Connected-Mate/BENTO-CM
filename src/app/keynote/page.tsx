"use client";

import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { SpeakerAvatar } from "@/components/SpeakerAvatar";

interface Speaker {
  name: string;
  role: string;
  initials: string;
  color: string;
}

interface Keynote {
  title: string;
  description: string;
  size: "1x1" | "2x1" | "1x2" | "2x2";
  gradient: string;
  tag: string;
  speakers: Speaker[];
}

const keynotes: Keynote[] = [
  {
    title: "L'IA au service de l'humain",
    description:
      "Comment l'intelligence artificielle transforme nos métiers et nos interactions. Une vision centrée sur l'augmentation des capacités humaines.",
    size: "2x2",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
    tag: "Conférence phare",
    speakers: [
      { name: "Alexandre Martin", role: "CEO, Connected Mate", initials: "AM", color: "from-orange-400 to-red-500" },
      { name: "Sophie Durand", role: "Head of AI Research", initials: "SD", color: "from-pink-400 to-rose-500" },
    ],
  },
  {
    title: "Le futur du travail hybride",
    description:
      "Les nouvelles formes de collaboration et d'organisation du travail à l'ère post-pandémie.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    tag: "Tendances",
    speakers: [
      { name: "Marc Lefèvre", role: "Directeur Innovation", initials: "ML", color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    title: "Innovation & Disruption",
    description:
      "Comment les startups redéfinissent les industries traditionnelles avec des approches radicalement nouvelles.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    tag: "Startup",
    speakers: [
      { name: "Léa Chen", role: "Startup Advisor", initials: "LC", color: "from-emerald-400 to-teal-500" },
    ],
  },
  {
    title: "Leadership Digital",
    description:
      "Les compétences essentielles du leader dans un monde numérique en constante évolution.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
    tag: "Management",
    speakers: [
      { name: "Julie Bernard", role: "VP People & Culture", initials: "JB", color: "from-purple-400 to-pink-500" },
      { name: "Thomas Petit", role: "CTO", initials: "TP", color: "from-violet-400 to-purple-500" },
    ],
  },
  {
    title: "Data & Éthique",
    description:
      "Concilier exploitation des données et respect de la vie privée : les enjeux d'aujourd'hui et de demain.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-rose-500 to-orange-500",
    tag: "Éthique",
    speakers: [
      { name: "Nicolas Roux", role: "Data Privacy Officer", initials: "NR", color: "from-rose-400 to-orange-500" },
      { name: "Amina Diallo", role: "Ethicist, AI Lab", initials: "AD", color: "from-amber-400 to-orange-500" },
      { name: "Pierre Garnier", role: "Legal Counsel", initials: "PG", color: "from-red-400 to-rose-500" },
    ],
  },
  {
    title: "Cybersécurité pour tous",
    description:
      "Les bonnes pratiques de sécurité numérique accessibles à tous les publics.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-slate-500 to-zinc-600",
    tag: "Sécurité",
    speakers: [
      { name: "Karim Benali", role: "CISO", initials: "KB", color: "from-slate-400 to-zinc-500" },
    ],
  },
  {
    title: "Green IT",
    description:
      "Réduire l'empreinte carbone du numérique : solutions concrètes et retours d'expérience.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-lime-500 to-green-600",
    tag: "Environnement",
    speakers: [
      { name: "Claire Morel", role: "Sustainability Lead", initials: "CM", color: "from-lime-400 to-green-500" },
      { name: "Hugo Fabre", role: "Green Tech Engineer", initials: "HF", color: "from-emerald-400 to-green-500" },
    ],
  },
];

const sizeClasses: Record<string, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "col-span-2 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x2": "col-span-2 row-span-2",
};

export default function KeynotePage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Keynotes"
        subtitle="Nos conférences et interventions sur l'innovation, la tech et la transformation digitale"
      />

      <BentoGrid>
        {keynotes.map((keynote) => (
          <div
            key={keynote.title}
            className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/5 ${sizeClasses[keynote.size]}`}
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${keynote.gradient}`}
            />

            <div className="relative z-10 flex h-full flex-col">
              {/* Tag */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  {keynote.tag}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-semibold">{keynote.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {keynote.description}
              </p>

              {/* Speakers */}
              <div className="mt-auto pt-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  {keynote.speakers.length > 1 ? "Speakers" : "Speaker"}
                </div>
                <div className="flex flex-col gap-2">
                  {keynote.speakers.map((speaker) => (
                    <div key={speaker.name} className="flex items-center gap-3">
                      <SpeakerAvatar initials={speaker.initials} gradient={speaker.color} />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium">
                          {speaker.name}
                        </div>
                        <div className="truncate text-xs text-[var(--color-text-muted)]">
                          {speaker.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </BentoGrid>
    </div>
  );
}
