"use client";

import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { SpeakerAvatar } from "@/components/SpeakerAvatar";

interface Speaker { name: string; role: string; initials: string; color: string; }
interface Keynote { title: string; description: string; size: "1x1" | "2x1" | "1x2" | "2x2"; gradient: string; tag: string; speakers: Speaker[]; }

const keynotes: Keynote[] = [
  { title: "L\u2019IA au service de l\u2019humain", description: "Comment l\u2019intelligence artificielle transforme nos m\u00e9tiers et nos interactions.", size: "2x2", gradient: "bg-gradient-to-br from-orange-400 to-red-500", tag: "Conf\u00e9rence phare", speakers: [{ name: "Alexandre Martin", role: "CEO, Connected Mate", initials: "AM", color: "from-orange-400 to-red-500" }, { name: "Sophie Durand", role: "Head of AI Research", initials: "SD", color: "from-pink-400 to-rose-500" }] },
  { title: "Le futur du travail hybride", description: "Les nouvelles formes de collaboration \u00e0 l\u2019\u00e8re post-pand\u00e9mie.", size: "2x1", gradient: "bg-gradient-to-br from-blue-400 to-indigo-500", tag: "Tendances", speakers: [{ name: "Marc Lef\u00e8vre", role: "Directeur Innovation", initials: "ML", color: "from-blue-400 to-indigo-500" }] },
  { title: "Innovation & Disruption", description: "Comment les startups red\u00e9finissent les industries traditionnelles.", size: "1x1", gradient: "bg-gradient-to-br from-emerald-400 to-teal-500", tag: "Startup", speakers: [{ name: "L\u00e9a Chen", role: "Startup Advisor", initials: "LC", color: "from-emerald-400 to-teal-500" }] },
  { title: "Leadership Digital", description: "Les comp\u00e9tences du leader dans un monde num\u00e9rique.", size: "1x1", gradient: "bg-gradient-to-br from-purple-400 to-pink-500", tag: "Management", speakers: [{ name: "Julie Bernard", role: "VP People & Culture", initials: "JB", color: "from-purple-400 to-pink-500" }, { name: "Thomas Petit", role: "CTO", initials: "TP", color: "from-violet-400 to-purple-500" }] },
  { title: "Data & \u00c9thique", description: "Concilier exploitation des donn\u00e9es et respect de la vie priv\u00e9e.", size: "2x1", gradient: "bg-gradient-to-br from-rose-400 to-orange-500", tag: "\u00c9thique", speakers: [{ name: "Nicolas Roux", role: "Data Privacy Officer", initials: "NR", color: "from-rose-400 to-orange-500" }, { name: "Amina Diallo", role: "Ethicist, AI Lab", initials: "AD", color: "from-amber-400 to-orange-500" }] },
  { title: "Cybers\u00e9curit\u00e9 pour tous", description: "Les bonnes pratiques de s\u00e9curit\u00e9 num\u00e9rique.", size: "1x1", gradient: "bg-gradient-to-br from-slate-400 to-zinc-500", tag: "S\u00e9curit\u00e9", speakers: [{ name: "Karim Benali", role: "CISO", initials: "KB", color: "from-slate-400 to-zinc-500" }] },
  { title: "Green IT", description: "R\u00e9duire l\u2019empreinte carbone du num\u00e9rique.", size: "1x1", gradient: "bg-gradient-to-br from-lime-400 to-green-500", tag: "Environnement", speakers: [{ name: "Claire Morel", role: "Sustainability Lead", initials: "CM", color: "from-lime-400 to-green-500" }, { name: "Hugo Fabre", role: "Green Tech Engineer", initials: "HF", color: "from-emerald-400 to-green-500" }] },
];

const sizeClasses: Record<string, string> = { "1x1": "col-span-1 row-span-1", "2x1": "col-span-2 row-span-1", "1x2": "col-span-1 row-span-2", "2x2": "col-span-2 row-span-2" };

export default function KeynotePage() {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Keynotes" subtitle="Nos conf\u00e9rences sur l\u2019innovation et la transformation digitale" />
      <BentoGrid>
        {keynotes.map((k) => (
          <div key={k.title} className={`group relative overflow-hidden rounded-[var(--radius)] ${k.gradient} p-4 text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] sm:p-5 ${sizeClasses[k.size]}`}>
            <div className="flex h-full flex-col">
              <span className="mb-2 inline-block self-start rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-medium sm:text-xs">{k.tag}</span>
              <h3 className="text-[15px] font-semibold leading-snug sm:text-base">{k.title}</h3>
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
