"use client";

import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { SpeakerAvatar } from "@/components/SpeakerAvatar";

interface Speaker { name: string; role: string; initials: string; color: string; }
interface Keynote { title: string; description: string; size: "1x1" | "2x1" | "1x2" | "2x2"; gradient: string; tag: string; speakers: Speaker[]; }

const keynotes: Keynote[] = [
  { title: "L’IA au service de l’humain", description: "Comment l’intelligence artificielle transforme nos métiers et nos interactions.", size: "2x2", gradient: "bg-gradient-to-br from-orange-500 to-red-500", tag: "Conférence phare", speakers: [{ name: "Alexandre Martin", role: "CEO, Connected Mate", initials: "AM", color: "from-orange-500 to-red-500" }, { name: "Sophie Durand", role: "Head of AI Research", initials: "SD", color: "from-amber-500 to-orange-500" }] },
  { title: "Le futur du travail hybride", description: "Les nouvelles formes de collaboration à l’ère post-pandémie.", size: "2x1", gradient: "bg-gradient-to-br from-amber-500 to-orange-600", tag: "Tendances", speakers: [{ name: "Marc Lefèvre", role: "Directeur Innovation", initials: "ML", color: "from-amber-500 to-orange-600" }] },
  { title: "Innovation & Disruption", description: "Comment les startups redéfinissent les industries traditionnelles.", size: "1x1", gradient: "bg-gradient-to-br from-yellow-500 to-amber-600", tag: "Startup", speakers: [{ name: "Léa Chen", role: "Startup Advisor", initials: "LC", color: "from-yellow-500 to-amber-600" }] },
  { title: "Leadership Digital", description: "Les compétences du leader dans un monde numérique.", size: "1x1", gradient: "bg-gradient-to-br from-red-400 to-orange-500", tag: "Management", speakers: [{ name: "Julie Bernard", role: "VP People & Culture", initials: "JB", color: "from-red-400 to-orange-500" }, { name: "Thomas Petit", role: "CTO", initials: "TP", color: "from-orange-400 to-amber-500" }] },
  { title: "Data & Éthique", description: "Concilier exploitation des données et respect de la vie privée.", size: "2x1", gradient: "bg-gradient-to-br from-orange-600 to-red-600", tag: "Éthique", speakers: [{ name: "Nicolas Roux", role: "Data Privacy Officer", initials: "NR", color: "from-orange-600 to-red-600" }, { name: "Amina Diallo", role: "Ethicist, AI Lab", initials: "AD", color: "from-amber-500 to-orange-500" }] },
  { title: "Cybersécurité pour tous", description: "Les bonnes pratiques de sécurité numérique.", size: "1x1", gradient: "bg-gradient-to-br from-stone-500 to-amber-700", tag: "Sécurité", speakers: [{ name: "Karim Benali", role: "CISO", initials: "KB", color: "from-stone-500 to-amber-700" }] },
  { title: "Green IT", description: "Réduire l’empreinte carbone du numérique.", size: "1x1", gradient: "bg-gradient-to-br from-amber-400 to-yellow-500", tag: "Environnement", speakers: [{ name: "Claire Morel", role: "Sustainability Lead", initials: "CM", color: "from-amber-400 to-yellow-500" }, { name: "Hugo Fabre", role: "Green Tech Engineer", initials: "HF", color: "from-yellow-400 to-amber-500" }] },
];

const sizeClasses: Record<string, string> = { "1x1": "col-span-1 row-span-1", "2x1": "col-span-2 row-span-1", "1x2": "col-span-1 row-span-2", "2x2": "col-span-2 row-span-2" };

export default function KeynotePage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Keynotes" subtitle="Nos conférences sur l’innovation et la transformation digitale" />
      <BentoGrid>
        {keynotes.map((k) => (
          <div key={k.title} className={`group relative overflow-hidden rounded-[var(--radius)] ${k.gradient} p-4 text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_20px_40px_-12px_rgba(232,96,10,0.3)] sm:p-5 ${sizeClasses[k.size]}`}>
            <div className="flex h-full flex-col">
              <span className="mb-2 inline-block self-start rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-medium sm:text-xs">{k.tag}</span>
              <h3 className="font-[Space_Grotesk] text-[15px] font-semibold leading-snug sm:text-base">{k.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-white/70 sm:text-sm">{k.description}</p>
              <div className="mt-auto pt-3">
                <div className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-white/50 sm:text-[11px]">{k.speakers.length > 1 ? "Speakers" : "Speaker"}</div>
                <div className="flex flex-col gap-1.5">
                  {k.speakers.map((s) => (
                    <div key={s.name} className="flex items-center gap-2">
                      <SpeakerAvatar initials={s.initials} gradient={s.color} />
                      <div className="min-w-0">
                        <div className="truncate text-[13px] font-medium sm:text-sm">{s.name}</div>
                        <div className="truncate text-[11px] text-white/60 sm:text-xs">{s.role}</div>
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
