"use client";

import { PageHeader } from "@/components/PageHeader";
import { SpeakerAvatar } from "@/components/SpeakerAvatar";

interface Speaker { name: string; role: string; initials: string; color: string; }
interface Keynote { title: string; description: string; tag: string; gradient: string; speakers: Speaker[]; }

const keynotes: Keynote[] = [
  { title: "L'IA au service de l'humain", description: "Comment l'intelligence artificielle transforme nos métiers et nos interactions.", tag: "Conférence phare", gradient: "linear-gradient(135deg, #E8600A, #d4550a)", speakers: [{ name: "Alexandre Martin", role: "CEO, Connected Mate", initials: "AM", color: "from-orange-500 to-red-500" }, { name: "Sophie Durand", role: "Head of AI Research", initials: "SD", color: "from-amber-500 to-orange-500" }] },
  { title: "Le futur du travail hybride", description: "Les nouvelles formes de collaboration à l'ère post-pandémie.", tag: "Tendances", gradient: "linear-gradient(135deg, #F5A623, #E8600A)", speakers: [{ name: "Marc Lefèvre", role: "Directeur Innovation", initials: "ML", color: "from-amber-500 to-orange-600" }] },
  { title: "Innovation & Disruption", description: "Comment les startups redéfinissent les industries traditionnelles.", tag: "Startup", gradient: "linear-gradient(135deg, #E8600A, #c43e00)", speakers: [{ name: "Léa Chen", role: "Startup Advisor", initials: "LC", color: "from-yellow-500 to-amber-600" }] },
  { title: "Leadership Digital", description: "Les compétences du leader dans un monde numérique.", tag: "Management", gradient: "linear-gradient(135deg, #d4550a, #F5A623)", speakers: [{ name: "Julie Bernard", role: "VP People & Culture", initials: "JB", color: "from-red-400 to-orange-500" }, { name: "Thomas Petit", role: "CTO", initials: "TP", color: "from-orange-400 to-amber-500" }] },
  { title: "Data & Éthique", description: "Concilier exploitation des données et respect de la vie privée.", tag: "Éthique", gradient: "linear-gradient(135deg, #c43e00, #E8600A)", speakers: [{ name: "Nicolas Roux", role: "Data Privacy Officer", initials: "NR", color: "from-orange-600 to-red-600" }, { name: "Amina Diallo", role: "Ethicist, AI Lab", initials: "AD", color: "from-amber-500 to-orange-500" }] },
  { title: "Cybersécurité pour tous", description: "Les bonnes pratiques de sécurité numérique.", tag: "Sécurité", gradient: "linear-gradient(135deg, #8B5E3C, #E8600A)", speakers: [{ name: "Karim Benali", role: "CISO", initials: "KB", color: "from-stone-500 to-amber-700" }] },
  { title: "Green IT", description: "Réduire l'empreinte carbone du numérique.", tag: "Environnement", gradient: "linear-gradient(135deg, #F5A623, #d4a000)", speakers: [{ name: "Claire Morel", role: "Sustainability Lead", initials: "CM", color: "from-amber-400 to-yellow-500" }, { name: "Hugo Fabre", role: "Green Tech Engineer", initials: "HF", color: "from-yellow-400 to-amber-500" }] },
];

export default function KeynotePage() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", paddingBottom: 80 }}>
      <PageHeader title="Keynotes" subtitle="Nos conférences sur l'innovation et la transformation digitale" />

      <div style={{ padding: "0 24px" }}>
        <div className="grid-cards" style={{ display: "grid", gap: 24 }}>
          {keynotes.map((k, i) => (
            <div
              key={k.title}
              className={`card card--gradient animate-fade-up animate-fade-up-d${Math.min(i + 1, 6)}`}
              style={{ background: k.gradient, minHeight: 220 }}
            >
              <span className="badge badge--white" style={{ marginBottom: 12, alignSelf: "flex-start" }}>{k.tag}</span>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700 }}>{k.title}</h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.6 }}>{k.description}</p>

              <div style={{ marginTop: "auto", paddingTop: 20 }}>
                <div style={{ fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.50)", marginBottom: 10 }}>
                  {k.speakers.length > 1 ? "Speakers" : "Speaker"}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {k.speakers.map((s) => (
                    <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <SpeakerAvatar initials={s.initials} gradient={s.color} />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 500 }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.60)" }}>{s.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
