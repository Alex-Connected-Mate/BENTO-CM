"use client";
import Link from "next/link";
import React from "react";
import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 31 — Record Label (Branding/Music)
   ============================================================ */
const RecordLabel: React.FC = () => {
  const orange = "#FF6B35";
  return (
    <div style={{ minHeight: "100vh", background: "#0F0F0F", color: "#F0F0F0", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", color: orange }}>Connected Mate Records</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#666" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", padding: "80px 48px", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 24px", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
            Connecter
            <br />
            <span style={{ color: orange }}>les idées</span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#888", maxWidth: "400px", margin: "0 0 32px" }}>
            Inspirer le futur à travers le son, la parole et l&apos;innovation. Chaque release est un manifeste.
          </p>
          <button style={{ padding: "12px 36px", background: orange, color: "#000", border: "none", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>
            Écouter maintenant
          </button>
        </div>
        {/* Vinyl record */}
        <div style={{ position: "relative", width: "300px", height: "300px", margin: "0 auto" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#1A1A1A", border: "2px solid #333" }} />
          <div style={{ position: "absolute", inset: "40px", borderRadius: "50%", border: "1px solid #222" }} />
          <div style={{ position: "absolute", inset: "80px", borderRadius: "50%", border: "1px solid #222" }} />
          <div style={{ position: "absolute", inset: "120px", borderRadius: "50%", background: orange, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "11px", fontWeight: 900, color: "#000", textTransform: "uppercase", letterSpacing: "0.1em" }}>CM</span>
          </div>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #222", borderBottom: "1px solid #222" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s, i) => (
          <div key={s.l} style={{ padding: "40px", textAlign: "center", borderRight: i < 2 ? "1px solid #222" : "none" }}>
            <div style={{ fontSize: "36px", fontWeight: 900, color: orange }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* RELEASES / FEATURES */}
      <section style={{ padding: "60px 48px" }}>
        <div style={{ fontSize: "11px", color: orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "24px" }}>Dernières sorties</div>
        {[
          { n: "A1", title: "Keynotes", desc: "Performances live avec les plus grands visionnaires." },
          { n: "A2", title: "Podcasts", desc: "100+ épisodes en rotation. Underground et mainstream." },
          { n: "B1", title: "Apps", desc: "Applications qui grouvent au rythme de l&apos;innovation." },
          { n: "B2", title: "Blog", desc: "Liner notes et critiques de notre collection tech." },
        ].map((f) => (
          <div key={f.n} style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: "1px solid #222", alignItems: "baseline" }}>
            <span style={{ fontSize: "12px", color: orange, fontWeight: 700, width: "40px" }}>{f.n}</span>
            <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0, width: "120px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", color: "#888", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* NOW PLAYING BAR */}
      <div style={{ position: "sticky", bottom: 0, background: "#1A1A1A", borderTop: "1px solid #333", padding: "16px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: orange, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#000" }}>▶</div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700 }}>Now Playing: Innovation Session</div>
            <div style={{ fontSize: "11px", color: "#888" }}>Connected Mate Records</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ fontSize: "12px", color: "#666", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 32 — Investment App (Fintech)
   ============================================================ */
const InvestmentApp: React.FC = () => {
  const teal = "#0EA5E9";
  const green = "#10B981";
  return (
    <div style={{ minHeight: "100vh", background: "#FAFBFC", color: "#1A1D23", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", background: "#fff", borderBottom: "1px solid #E5E7EB" }}>
        <span style={{ fontSize: "17px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", alignItems: "center", fontSize: "14px", color: "#6B7280" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "8px 20px", background: teal, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Investir</button>
        </div>
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", padding: "60px 48px", maxWidth: "1100px", margin: "0 auto", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "44px", fontWeight: 800, lineHeight: 1.1, margin: "0 0 16px", letterSpacing: "-0.03em" }}>
            Investissez dans le{" "}
            <span style={{ color: teal }}>futur</span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#6B7280", margin: "0 0 28px" }}>
            Connecter les idées et inspirer le futur de l&apos;investissement intelligent.
          </p>
          <button style={{ padding: "12px 28px", background: teal, color: "#fff", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>Commencer</button>
        </div>
        {/* Dashboard preview */}
        <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", border: "1px solid #E5E7EB" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
            <span style={{ fontSize: "13px", fontWeight: 600 }}>Portfolio</span>
            <span style={{ fontSize: "13px", color: green, fontWeight: 600 }}>+12.4%</span>
          </div>
          {/* Chart lines */}
          <div style={{ height: "80px", display: "flex", alignItems: "flex-end", gap: "4px", marginBottom: "16px" }}>
            {[30, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 90].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: `${teal}${i > 8 ? "cc" : "44"}`, borderRadius: "3px 3px 0 0" }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ flex: 1, padding: "12px", background: "#F9FAFB", borderRadius: "8px", fontSize: "12px", textAlign: "center" }}>
              <div style={{ fontWeight: 700 }}>€12,450</div>
              <div style={{ color: "#9CA3AF", marginTop: "2px" }}>Solde</div>
            </div>
            <div style={{ flex: 1, padding: "12px", background: "#F9FAFB", borderRadius: "8px", fontSize: "12px", textAlign: "center" }}>
              <div style={{ fontWeight: 700, color: green }}>+€1,540</div>
              <div style={{ color: "#9CA3AF", marginTop: "2px" }}>Gains</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "0 48px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        {[{ v: "50+", l: "Conférences", d: "▲ 12%" }, { v: "100+", l: "Épisodes", d: "▲ 45%" }, { v: "5", l: "Applications", d: "▲ 200%" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid #E5E7EB" }}>
            <div style={{ fontSize: "28px", fontWeight: 800 }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#9CA3AF" }}>{s.l}</div>
            <div style={{ fontSize: "12px", color: green, fontWeight: 600, marginTop: "4px" }}>{s.d}</div>
          </div>
        ))}
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", padding: "0 48px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Analyses de marché avec les meilleurs experts financiers." },
          { title: "Podcasts", desc: "Stratégies d&apos;investissement expliquées simplement." },
          { title: "Apps", desc: "Outils de suivi de portfolio en temps réel." },
          { title: "Blog", desc: "Rapports hebdomadaires et perspectives macroéconomiques." },
        ].map((f) => (
          <div key={f.title} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#6B7280", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: teal, color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#9CA3AF" }}>
        <span>© 2024 Connected Mate</span>
        <span>Investissez responsablement</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 33 — Fashion Lookbook (Artistic)
   ============================================================ */
const FashionLookbook: React.FC = () => {
  const blush = "#E8A0BF";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Connected Mate</span>
        <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", color: "#999" }}>Season 01</span>
      </nav>

      <section style={{ textAlign: "center", padding: "100px 48px 80px", borderBottom: "1px solid #000" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: blush, marginBottom: "32px", fontFamily: "sans-serif" }}>Collection Automne/Hiver</div>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 100px)", fontWeight: 400, lineHeight: 1.0, margin: "0 0 24px", fontStyle: "italic" }}>
          Inspirer
          <br />
          le futur
        </h1>
        <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#888", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif", fontWeight: 300 }}>
          Connecter les idées à travers la beauté et l&apos;innovation.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s, i) => (
          <div key={s.l} style={{ padding: "48px", textAlign: "center", borderRight: i < 2 ? "1px solid #eee" : "none", borderBottom: "1px solid #000" }}>
            <div style={{ fontSize: "40px", fontWeight: 300, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* LOOKS */}
      {[
        { title: "Keynotes", desc: "Des performances scéniques qui transforment la conférence en art.", bg: "#000", fg: "#fff" },
        { title: "Podcasts", desc: "Conversations haute couture sur l&apos;innovation et la création.", bg: "#fff", fg: "#000" },
        { title: "Apps", desc: "Design d&apos;interface qui redéfinit l&apos;élégance numérique.", bg: blush, fg: "#000" },
        { title: "Blog", desc: "Éditoriaux et critiques sur la rencontre entre mode et technologie.", bg: "#000", fg: "#fff" },
      ].map((f) => (
        <section key={f.title} style={{ background: f.bg, color: f.fg, padding: "80px 48px", textAlign: "center" }}>
          <h3 style={{ fontSize: "36px", fontWeight: 400, fontStyle: "italic", margin: "0 0 16px" }}>{f.title}</h3>
          <p style={{ fontSize: "15px", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto", opacity: 0.7, fontFamily: "sans-serif", fontWeight: 300 }}>{f.desc}</p>
        </section>
      ))}

      {/* CREDITS */}
      <section style={{ padding: "40px 48px", borderTop: "1px solid #000" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", color: "#999", lineHeight: 2.0, textAlign: "center" }}>
          Direction créative: Connected Mate · Photographie: Studio CM · Stylisme: Innovation Lab · Production: Tech Atelier
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", color: "#666", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: "1px solid #eee", textAlign: "center", fontSize: "11px", color: "#bbb", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · Haute innovation
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 34 — Community Platform (Human)
   ============================================================ */
const CommunityPlatform: React.FC = () => {
  const purple = "#8B5CF6";
  const coral = "#FB7185";
  return (
    <div style={{ minHeight: "100vh", background: "#FEFAF6", color: "#2D2926", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, color: purple }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "14px", color: "#8B8378" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "8px 20px", background: purple, color: "#fff", border: "none", borderRadius: "100px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Rejoindre</button>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 48px 60px" }}>
        {/* Avatar circles */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
          {["A", "M", "S", "L", "K"].map((initial, i) => (
            <div key={initial} style={{ width: "40px", height: "40px", borderRadius: "50%", background: [purple, coral, "#FBBF24", "#34D399", "#60A5FA"][i], color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, marginLeft: i > 0 ? "-8px" : "0", border: "2px solid #FEFAF6", zIndex: 5 - i }}>
              {initial}
            </div>
          ))}
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#E5E7EB", color: "#666", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 600, marginLeft: "-8px", border: "2px solid #FEFAF6" }}>
            +2k
          </div>
        </div>
        <h1 style={{ fontSize: "44px", fontWeight: 800, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
          Une communauté qui{" "}
          <span style={{ color: purple }}>inspire</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#8B8378", maxWidth: "480px", margin: "0 auto 32px" }}>
          Connecter les idées et inspirer le futur, ensemble. Rejoignez les 2000+ membres.
        </p>
        <button style={{ padding: "14px 36px", background: purple, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
          Rejoindre la conversation
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "20px", padding: "24px 36px", textAlign: "center", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: purple }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B8378" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* COMMUNITY THREADS */}
      <section style={{ padding: "40px 48px 60px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#bbb", marginBottom: "20px" }}>Discussions récentes</div>
        {[
          { title: "Keynotes", desc: "Quelle a été votre conférence préférée cette année ?", replies: "24 réponses", avatar: "M", c: coral },
          { title: "Podcasts", desc: "L&apos;épisode sur l&apos;IA générative était incroyable !", replies: "18 réponses", avatar: "S", c: "#34D399" },
          { title: "Apps", desc: "Quelqu&apos;un a testé la nouvelle app ? Impressions ?", replies: "12 réponses", avatar: "A", c: purple },
          { title: "Blog", desc: "Super article sur les tendances 2024. À lire absolument.", replies: "8 réponses", avatar: "L", c: "#FBBF24" },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", gap: "16px", padding: "20px 0", borderBottom: "1px solid #eee" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: f.c, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 700, flexShrink: 0 }}>{f.avatar}</div>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 4px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", color: "#8B8378", margin: "0 0 4px" }}>{f.desc}</p>
              <span style={{ fontSize: "12px", color: purple }}>{f.replies}</span>
            </div>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", background: purple, color: "#fff", borderRadius: "100px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #eee", textAlign: "center", fontSize: "13px", color: "#bbb" }}>
        © 2024 Connected Mate · Ensemble, on va plus loin
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 35 — Arcade (Playful/Retro Gaming)
   ============================================================ */
const Arcade: React.FC = () => {
  const yellow = "#FFE600";
  const pink = "#FF1493";
  const blue = "#0080FF";
  return (
    <div style={{ minHeight: "100vh", background: "#1A0533", color: "#fff", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: `2px solid ${yellow}44` }}>
        <span style={{ fontSize: "18px", fontWeight: 900, color: yellow, textTransform: "uppercase" }}>★ CONNECTED MATE ★</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "12px", textTransform: "uppercase", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 40px 60px" }}>
        <div style={{ fontSize: "12px", color: pink, letterSpacing: "0.2em", marginBottom: "16px" }}>INSERT COIN TO START</div>
        <h1 style={{ fontSize: "56px", fontWeight: 900, lineHeight: 1.05, margin: "0 0 20px", textTransform: "uppercase", color: yellow, textShadow: `3px 3px 0 ${pink}, 6px 6px 0 ${blue}` }}>
          CONNECTER
          <br />
          LES IDÉES
        </h1>
        <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", maxWidth: "460px", margin: "0 auto 32px" }}>
          Inspirer le futur. Niveau par niveau. Power-up après power-up.
        </p>
        <button style={{ padding: "14px 40px", background: pink, color: "#fff", border: `3px solid ${yellow}`, fontSize: "15px", fontWeight: 900, textTransform: "uppercase", cursor: "pointer", boxShadow: `4px 4px 0 ${yellow}` }}>
          ▶ START
        </button>
      </section>

      {/* HIGH SCORES */}
      <section style={{ padding: "0 40px 60px" }}>
        <div style={{ background: "#0D001A", border: `2px solid ${yellow}44`, borderRadius: "8px", padding: "24px" }}>
          <div style={{ textAlign: "center", fontSize: "14px", color: yellow, letterSpacing: "0.15em", marginBottom: "16px" }}>HIGH SCORES</div>
          {[{ v: "50+", l: "Conférences", score: "50,000" }, { v: "100+", l: "Épisodes", score: "100,000" }, { v: "5", l: "Applications", score: "25,000" }].map((s, i) => (
            <div key={s.l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 2 ? `1px solid ${yellow}22` : "none" }}>
              <span style={{ color: [yellow, pink, blue][i], fontWeight: 700 }}>{i + 1}ST</span>
              <span>{s.l}</span>
              <span style={{ color: yellow, fontWeight: 700 }}>{s.score}</span>
            </div>
          ))}
        </div>
      </section>

      {/* GAME SELECT */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", padding: "0 40px 60px" }}>
        {[
          { title: "KEYNOTES", desc: "Mode Story — Conférences épiques", c: pink },
          { title: "PODCASTS", desc: "Mode Infini — 100+ niveaux", c: blue },
          { title: "APPS", desc: "Mode Boss — Applications ultimes", c: yellow },
          { title: "BLOG", desc: "Mode Puzzle — Articles-challenges", c: pink },
        ].map((f) => (
          <div key={f.title} style={{ background: "#0D001A", border: `2px solid ${f.c}44`, borderRadius: "8px", padding: "24px", cursor: "pointer" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 900, margin: "0 0 4px", color: f.c, textTransform: "uppercase" }}>{f.title}</h3>
            <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: "#0D001A", border: `1px solid ${yellow}33`, borderRadius: "4px", fontSize: "12px", color: yellow, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: `1px solid ${yellow}22`, textAlign: "center", fontSize: "12px", color: "#444" }}>
        © 2024 CONNECTED MATE ARCADE · CREDIT: 99
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 36 — Long-Form Journal (Editorial)
   ============================================================ */
const LongFormJournal: React.FC = () => {
  const navy = "#1E3A5F";
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFF8", color: "#1A1A1A", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "2px solid #1A1A1A", fontFamily: "sans-serif" }}>
        <span style={{ fontSize: "14px", fontWeight: 600 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "80px 24px 60px" }}>
        <div style={{ fontSize: "12px", color: navy, fontFamily: "sans-serif", marginBottom: "16px" }}>Essai · 12 min de lecture</div>
        <h1 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 24px" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <div style={{ fontSize: "15px", color: "#888", fontFamily: "sans-serif", marginBottom: "16px" }}>Par la rédaction de Connected Mate · Mars 2024</div>
        <div style={{ height: "2px", background: navy, width: "60px", marginBottom: "32px" }} />
        <p style={{ fontSize: "18px", lineHeight: 2.0, color: "#444", marginBottom: "24px" }}>
          Comment les esprits visionnaires et la technologie se rencontrent pour façonner le monde de demain. Un voyage à travers les idées qui comptent.
        </p>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 700, color: navy }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES with pull quotes */}
      <section style={{ maxWidth: "680px", margin: "0 auto", padding: "60px 24px" }}>
        {[
          { title: "Keynotes", desc: "Des conférences qui prennent le temps de développer une pensée complète, rigoureuse et nuancée.", quote: "Chaque conférence est un chapitre d&apos;une histoire plus grande." },
          { title: "Podcasts", desc: "Plus de 100 conversations où la profondeur prime sur la durée. Des échanges sans concession.", quote: null },
          { title: "Apps", desc: "Des applications conçues avec la rigueur d&apos;un éditeur et l&apos;ambition d&apos;un auteur.", quote: "La technologie au service du récit." },
          { title: "Blog", desc: "Articles longs, référencés, sourcés. Le journalisme tech tel qu&apos;il devrait être.", quote: null },
        ].map((f) => (
          <div key={f.title} style={{ marginBottom: "48px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 700, margin: "0 0 16px" }}>{f.title}</h3>
            <p style={{ fontSize: "18px", lineHeight: 2.0, color: "#444", margin: "0 0 16px" }}>{f.desc}</p>
            {f.quote && (
              <blockquote style={{ borderLeft: `3px solid ${navy}`, paddingLeft: "24px", margin: "24px 0", fontSize: "20px", fontStyle: "italic", lineHeight: 1.6, color: navy }}>
                {f.quote}
              </blockquote>
            )}
          </div>
        ))}
      </section>

      {/* SERIES */}
      <section style={{ padding: "40px 48px 60px", background: `${navy}08` }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: navy, marginBottom: "16px", fontFamily: "sans-serif" }}>Série en cours</div>
          {["Partie I : Les fondations", "Partie II : La construction", "Partie III : L&apos;avenir"].map((p, i) => (
            <div key={p} style={{ padding: "12px 0", borderBottom: "1px solid #ddd", display: "flex", justifyContent: "space-between", fontSize: "16px" }}>
              <span>{p}</span>
              <span style={{ fontSize: "13px", color: "#999", fontFamily: "sans-serif" }}>{i === 0 ? "Publié" : "À venir"}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontFamily: "sans-serif" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", border: "1px solid #ddd", fontSize: "13px", color: "#888", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "2px solid #1A1A1A", textAlign: "center", fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · Journalisme de long format
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 37 — Night Sky Observatory (Dark)
   ============================================================ */
const NightSky: React.FC = () => {
  const gold = "#FFD700";
  const nebula = "#9333EA";
  return (
    <div style={{ minHeight: "100vh", background: "#0B0B1A", color: "#D4D4D8", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{ position: "absolute", width: `${1 + Math.random() * 2}px`, height: `${1 + Math.random() * 2}px`, background: "#fff", borderRadius: "50%", top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, opacity: 0.3 + Math.random() * 0.5 }} />
      ))}

      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "14px", color: gold, letterSpacing: "0.15em" }}>☆ Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#6B6B8A" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 48px 60px" }}>
        {/* Telescope viewport */}
        <div style={{ width: "200px", height: "200px", borderRadius: "50%", border: `2px solid ${gold}44`, margin: "0 auto 32px", display: "flex", alignItems: "center", justifyContent: "center", background: `radial-gradient(circle, ${nebula}22 0%, transparent 70%)` }}>
          <span style={{ fontSize: "48px" }}>✦</span>
        </div>
        <h1 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 20px", color: "#E8F0FF" }}>
          Connecter les idées,
          <br />
          <span style={{ color: gold }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#6B6B8A", maxWidth: "460px", margin: "0 auto 32px" }}>
          Comme les étoiles, les meilleures idées brillent dans l&apos;obscurité. Observons-les ensemble.
        </p>
        <button style={{ padding: "12px 36px", background: "transparent", border: `1px solid ${gold}`, color: gold, fontSize: "13px", letterSpacing: "0.1em", cursor: "pointer" }}>
          Observer
        </button>
      </section>

      {/* COORDINATES */}
      <section style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "0 48px 60px" }}>
        {[{ v: "50+", l: "Conférences", c: "RA 12h 30m" }, { v: "100+", l: "Épisodes", c: "DEC +41° 42'" }, { v: "5", l: "Applications", c: "MAG 2.1" }].map((s) => (
          <div key={s.l} style={{ background: "#12122A", border: `1px solid ${gold}22`, borderRadius: "8px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#6B6B8A", marginBottom: "8px", fontFamily: "monospace" }}>{s.c}</div>
            <div style={{ fontSize: "32px", fontWeight: 700, color: gold }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#6B6B8A", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* CONSTELLATION FEATURES */}
      <section style={{ position: "relative", zIndex: 1, padding: "0 48px 60px" }}>
        <div style={{ fontSize: "11px", color: gold, letterSpacing: "0.2em", marginBottom: "20px" }}>CONSTELLATIONS</div>
        {[
          { title: "Keynotes", desc: "Les étoiles les plus brillantes de l&apos;innovation." },
          { title: "Podcasts", desc: "Ondes radio captées depuis les confins de la tech." },
          { title: "Apps", desc: "Systèmes de navigation pour l&apos;explorateur numérique." },
          { title: "Blog", desc: "Cartographie des idées et des découvertes." },
        ].map((f, i) => (
          <div key={f.title} style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: `1px solid ${gold}15`, alignItems: "center" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: i % 2 === 0 ? gold : nebula, boxShadow: `0 0 8px ${i % 2 === 0 ? gold : nebula}` }} />
            <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0, width: "100px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", color: "#6B6B8A", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "40px 48px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", border: `1px solid ${gold}33`, fontSize: "12px", color: gold, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ position: "relative", zIndex: 1, padding: "20px 48px", borderTop: `1px solid ${gold}15`, display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#4B4B6A" }}>
        <span>© 2024 Connected Mate</span>
        <span>☆ Ad astra per aspera</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 38 — Farmers Market (Organic)
   ============================================================ */
const FarmersMarket: React.FC = () => {
  const tomato = "#E74C3C";
  const green = "#27AE60";
  const sunflower = "#F39C12";
  return (
    <div style={{ minHeight: "100vh", background: "#FFFEF5", color: "#2E2A24", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: green }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px", color: "#8B7B6B" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <div style={{ fontSize: "14px", color: sunflower, marginBottom: "16px" }}>🌻 Fraîchement récolté</div>
        <h1 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.25, margin: "0 0 20px" }}>
          Connecter les idées,
          <br />
          <span style={{ color: green }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#8B7B6B", maxWidth: "480px", margin: "0 auto 32px" }}>
          Comme au marché, nos idées sont fraîches, locales et cultivées avec amour.
        </p>
        <button style={{ padding: "14px 36px", background: green, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", cursor: "pointer" }}>
          Visiter le marché
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "32px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences", c: tomato }, { v: "100+", l: "Épisodes", c: green }, { v: "5", l: "Apps", c: sunflower }].map((s) => (
          <div key={s.l} style={{ background: `${s.c}11`, border: `2px solid ${s.c}33`, borderRadius: "50%", width: "120px", height: "120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 700, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#8B7B6B" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* SEASONAL PICKS */}
      <section style={{ padding: "40px 48px 60px" }}>
        <div style={{ textAlign: "center", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: sunflower, marginBottom: "24px" }}>Étals du marché</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Conférences de saison avec les meilleurs producteurs d&apos;idées.", c: tomato },
            { title: "Podcasts", desc: "Conversations fraîchement cueillies chaque semaine.", c: green },
            { title: "Apps", desc: "Applications cultivées localement avec soin.", c: sunflower },
            { title: "Blog", desc: "Articles de saison, toujours frais et savoureux.", c: tomato },
          ].map((f) => (
            <div key={f.title} style={{ background: "#fff", border: `2px solid ${f.c}33`, borderRadius: "16px", padding: "28px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px", color: f.c }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#8B7B6B", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", background: green, color: "#fff", borderRadius: "100px", fontSize: "13px", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${green}22`, textAlign: "center", fontSize: "13px", color: "#8B7B6B" }}>
        © 2024 Connected Mate · Ouvert le samedi matin
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 39 — Startup Pitch (Showcase)
   ============================================================ */
const StartupPitch: React.FC = () => {
  const orange = "#FF6600";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected Mate</span>
        <button style={{ padding: "8px 20px", background: orange, color: "#fff", border: "none", borderRadius: "6px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>Nous contacter</button>
      </nav>

      {/* SLIDE-LIKE SECTIONS */}
      <section style={{ padding: "100px 48px 80px", textAlign: "center", borderBottom: "1px solid #eee" }}>
        <div style={{ fontSize: "12px", color: orange, fontWeight: 700, letterSpacing: "0.15em", marginBottom: "16px" }}>LE PROBLÈME</div>
        <h1 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-0.03em", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          L&apos;innovation est fragmentée. Les idées restent isolées.
        </h1>
      </section>

      <section style={{ padding: "80px 48px", textAlign: "center", borderBottom: "1px solid #eee" }}>
        <div style={{ fontSize: "12px", color: orange, fontWeight: 700, letterSpacing: "0.15em", marginBottom: "16px" }}>LA SOLUTION</div>
        <h2 style={{ fontSize: "44px", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-0.03em", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
          Connected Mate{" "}
          <span style={{ color: orange }}>connecte les idées</span> et inspire le futur
        </h2>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#666", maxWidth: "500px", margin: "0 auto" }}>
          Conférences, podcasts et applications au service de l&apos;écosystème innovation.
        </p>
      </section>

      {/* METRICS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", padding: "60px 48px", borderBottom: "1px solid #eee" }}>
        {[{ v: "50+", l: "Conférences", g: "+120% YoY" }, { v: "100+", l: "Épisodes podcast", g: "+250% YoY" }, { v: "5", l: "Applications", g: "2 en dev" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 800 }}>{s.v}</div>
            <div style={{ fontSize: "14px", color: "#888" }}>{s.l}</div>
            <div style={{ fontSize: "13px", color: orange, fontWeight: 600, marginTop: "4px" }}>{s.g}</div>
          </div>
        ))}
      </section>

      {/* WHAT WE DO */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", padding: "60px 48px", maxWidth: "900px", margin: "0 auto" }}>
        {[
          { icon: "◆", title: "Keynotes", desc: "Conférences premium avec 50+ speakers par an." },
          { icon: "●", title: "Podcasts", desc: "100+ épisodes, 1M+ écoutes cumulées." },
          { icon: "▸", title: "Apps", desc: "5 applications, 100K+ utilisateurs actifs." },
          { icon: "◇", title: "Blog", desc: "500+ articles, référence de l&apos;écosystème tech." },
        ].map((f) => (
          <div key={f.title} style={{ padding: "24px", border: "1px solid #eee", borderRadius: "8px" }}>
            <span style={{ color: orange, fontSize: "20px" }}>{f.icon}</span>
            <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "8px 0" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#888", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* BACKED BY */}
      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#bbb", marginBottom: "16px" }}>Ils nous font confiance</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px", fontSize: "14px", color: "#ccc" }}>
          {["TechCorp", "InnoVentures", "FutureLab", "DigitalParis", "StartupNation"].map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: orange, color: "#fff", borderRadius: "6px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb" }}>
        <span>© 2024 Connected Mate</span>
        <span style={{ color: orange }}>●</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 40 — Meditation App (Wellness/Organic)
   ============================================================ */
const MeditationApp: React.FC = () => {
  const indigo = "#4338CA";
  const lavender = "#C4B5FD";
  const amber = "#F59E0B";
  return (
    <div style={{ minHeight: "100vh", background: "#F8F6F2", color: "#3A3631", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 400, color: indigo }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#8B8378", fontFamily: "sans-serif" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 48px 60px" }}>
        {/* Mandala */}
        <div style={{ position: "relative", width: "120px", height: "120px", margin: "0 auto 32px" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `2px solid ${indigo}22` }} />
          <div style={{ position: "absolute", inset: "20px", borderRadius: "50%", border: `2px solid ${lavender}44` }} />
          <div style={{ position: "absolute", inset: "40px", borderRadius: "50%", background: `${indigo}11` }} />
          <div style={{ position: "absolute", inset: "50px", borderRadius: "50%", background: indigo, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: "12px" }}>✦</span>
          </div>
        </div>
        <h1 style={{ fontSize: "40px", fontWeight: 400, lineHeight: 1.35, margin: "0 0 20px", fontStyle: "italic" }}>
          Connecter les idées,
          <br />
          <span style={{ color: indigo }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 2.0, color: "#8B8378", maxWidth: "480px", margin: "0 auto 36px", fontFamily: "sans-serif" }}>
          Trouvez votre centre. Inspirez. Expirez. Laissez les idées venir à vous.
        </p>
        <button style={{ padding: "14px 40px", background: indigo, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontFamily: "sans-serif", cursor: "pointer" }}>
          Commencer la session
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 400, color: indigo, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B8378", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* DAILY INTENTION */}
      <section style={{ textAlign: "center", padding: "80px 48px", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", color: amber, letterSpacing: "0.2em", marginBottom: "16px", fontFamily: "sans-serif" }}>INTENTION DU JOUR</div>
        <p style={{ fontSize: "24px", fontStyle: "italic", lineHeight: 1.6, color: indigo }}>
          &ldquo;Aujourd&apos;hui, je me connecte à ce qui compte. Je laisse les idées circuler librement.&rdquo;
        </p>
      </section>

      {/* SESSIONS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "0 48px 80px", maxWidth: "800px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Sessions de 45 min pour nourrir l&apos;esprit.", dur: "45 min" },
          { title: "Podcasts", desc: "Méditations sonores et conversations conscientes.", dur: "30 min" },
          { title: "Apps", desc: "Outils de pleine conscience numérique.", dur: "10 min" },
          { title: "Blog", desc: "Réflexions contemplatives sur la technologie.", dur: "8 min" },
        ].map((f) => (
          <div key={f.title} style={{ background: `${lavender}15`, borderRadius: "24px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", color: indigo, fontFamily: "sans-serif", marginBottom: "8px" }}>{f.dur}</div>
            <h3 style={{ fontSize: "20px", fontWeight: 400, margin: "0 0 8px", color: indigo }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#8B8378", margin: 0, fontFamily: "sans-serif" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: indigo, color: "#fff", borderRadius: "100px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${indigo}15`, textAlign: "center", fontSize: "13px", color: "#8B8378", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · Namasté 🙏
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 31, name: "Record Label", category: "Branding", description: "Indie record label with vinyl art, orange accent, track-listing features, now-playing bar", component: RecordLabel },
  { id: 32, name: "Investment App", category: "Fintech", description: "Premium investment platform with dashboard preview, chart bars, teal/green accents", component: InvestmentApp },
  { id: 33, name: "Fashion Lookbook", category: "Artistic", description: "Haute couture editorial with alternating b/w sections, blush accent, season labels", component: FashionLookbook },
  { id: 34, name: "Community Platform", category: "Human", description: "Warm community with avatar circles, thread discussions, purple/coral accents", component: CommunityPlatform },
  { id: 35, name: "Arcade", category: "Playful", description: "Retro arcade cabinet with CRT text effects, high scores, neon yellow/pink/blue", component: Arcade },
  { id: 36, name: "Long-Form Journal", category: "Editorial", description: "Premium journalism with pull quotes, series navigation, navy accent, 2.0 line-height", component: LongFormJournal },
  { id: 37, name: "Night Sky Observatory", category: "Dark", description: "Astronomy theme with star field, telescope viewport, constellation cards, gold accent", component: NightSky },
  { id: 38, name: "Farmers Market", category: "Organic", description: "Fresh market with colorful produce palette, circular stats, seasonal stalls", component: FarmersMarket },
  { id: 39, name: "Startup Pitch", category: "Showcase", description: "YC-style pitch deck with slide sections, metrics, trust badges, orange accent", component: StartupPitch },
  { id: 40, name: "Meditation App", category: "Organic", description: "Mindfulness with mandala circles, daily intention, session cards, indigo/lavender", component: MeditationApp },
];
