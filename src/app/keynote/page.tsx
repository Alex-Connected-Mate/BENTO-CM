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
    title: "L\u2019IA au service de l\u2019humain",
    description:
      "Comment l\u2019intelligence artificielle transforme nos m\u00e9tiers et nos interactions. Une vision centr\u00e9e sur l\u2019augmentation des capacit\u00e9s humaines.",
    size: "2x2",
    gradient: "bg-gradient-to-br from-orange-500 to-red-600",
    tag: "Conf\u00e9rence phare",
    speakers: [
      { name: "Alexandre Martin", role: "CEO, Connected Mate", initials: "AM", color: "from-orange-400 to-red-500" },
      { name: "Sophie Durand", role: "Head of AI Research", initials: "SD", color: "from-pink-400 to-rose-500" },
    ],
  },
  {
    title: "Le futur du travail hybride",
    description:
      "Les nouvelles formes de collaboration et d\u2019organisation du travail \u00e0 l\u2019\u00e8re post-pand\u00e9mie.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
    tag: "Tendances",
    speakers: [
      { name: "Marc Lef\u00e8vre", role: "Directeur Innovation", initials: "ML", color: "from-blue-400 to-indigo-500" },
    ],
  },
  {
    title: "Innovation & Disruption",
    description:
      "Comment les startups red\u00e9finissent les industries traditionnelles avec des approches radicalement nouvelles.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    tag: "Startup",
    speakers: [
      { name: "L\u00e9a Chen", role: "Startup Advisor", initials: "LC", color: "from-emerald-400 to-teal-500" },
    ],
  },
  {
    title: "Leadership Digital",
    description:
      "Les comp\u00e9tences essentielles du leader dans un monde num\u00e9rique en constante \u00e9volution.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
    tag: "Management",
    speakers: [
      { name: "Julie Bernard", role: "VP People & Culture", initials: "JB", color: "from-purple-400 to-pink-500" },
      { name: "Thomas Petit", role: "CTO", initials: "TP", color: "from-violet-400 to-purple-500" },
    ],
  },
  {
    title: "Data & \u00c9thique",
    description:
      "Concilier exploitation des donn\u00e9es et respect de la vie priv\u00e9e : les enjeux d\u2019aujourd\u2019hui et de demain.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-rose-500 to-orange-500",
    tag: "\u00c9thique",
    speakers: [
      { name: "Nicolas Roux", role: "Data Privacy Officer", initials: "NR", color: "from-rose-400 to-orange-500" },
      { name: "Amina Diallo", role: "Ethicist, AI Lab", initials: "AD", color: "from-amber-400 to-orange-500" },
      { name: "Pierre Garnier", role: "Legal Counsel", initials: "PG", color: "from-red-400 to-rose-500" },
    ],
  },
  {
    title: "Cybers\u00e9curit\u00e9 pour tous",
    description:
      "Les bonnes pratiques de s\u00e9curit\u00e9 num\u00e9rique accessibles \u00e0 tous les publics.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-slate-500 to-zinc-600",
    tag: "S\u00e9curit\u00e9",
    speakers: [
      { name: "Karim Benali", role: "CISO", initials: "KB", color: "from-slate-400 to-zinc-500" },
    ],
  },
  {
    title: "Green IT",
    description:
      "R\u00e9duire l\u2019empreinte carbone du num\u00e9rique : solutions concr\u00e8tes et retours d\u2019exp\u00e9rience.",
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
        subtitle="Nos conf\u00e9rences et interventions sur l\u2019innovation, la tech et la transformation digitale"
      />

      <BentoGrid>
        {keynotes.map((keynote) => (
          <div
            key={keynote.title}
            className={`group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${sizeClasses[keynote.size]}`}
          >
            <div
              className={`absolute inset-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1] ${keynote.gradient}`}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {keynote.tag}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text)]">{keynote.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {keynote.description}
              </p>

              <div className="mt-auto pt-4">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
                  {keynote.speakers.length > 1 ? "Speakers" : "Speaker"}
                </div>
                <div className="flex flex-col gap-2">
                  {keynote.speakers.map((speaker) => (
                    <div key={speaker.name} className="flex items-center gap-3">
                      <SpeakerAvatar initials={speaker.initials} gradient={speaker.color} />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-[var(--color-text)]">
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
