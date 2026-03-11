"use client";
import Link from "next/link";
import React from "react";

export interface HomepageDesign {
  id: number;
  name: string;
  category: string;
  description: string;
  component: React.FC;
}

/* ============================================================
   DESIGN 1 — Studio Branding (Agency Portfolio)
   ============================================================ */
const StudioBranding: React.FC = () => {
  const accent = "#FF4D00";
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 48px" }}>
        <span style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "40px", fontSize: "13px", opacity: 0.4 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", letterSpacing: "0.05em" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — massive typography */}
      <section style={{ padding: "100px 48px 60px" }}>
        <h1 style={{ fontSize: "clamp(72px, 10vw, 140px)", fontWeight: 800, lineHeight: 0.95, margin: 0, letterSpacing: "-0.04em", maxWidth: "1200px" }}>
          Connecter
          <br />
          les idées,
          <br />
          <span style={{ color: accent, fontStyle: "italic" }}>inspirer</span>
          <br />
          le futur
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", maxWidth: "480px", marginTop: "40px" }}>
          Nous façonnons des expériences qui connectent les esprits visionnaires à la technologie de demain.
        </p>
        <button style={{ marginTop: "32px", padding: "16px 48px", background: accent, color: "#fff", border: "none", fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
          Découvrir
        </button>
      </section>

      {/* MARQUEE */}
      <section style={{ overflow: "hidden", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", gap: "80px", fontSize: "14px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.2)", whiteSpace: "nowrap" }}>
          {["Innovation", "Technologie", "Design", "Podcasts", "Conférences", "Applications", "IA", "Futur", "Innovation", "Technologie", "Design", "Podcasts"].map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes podcast" }, { v: "5", l: "Applications" }].map((s, i) => (
          <div key={i} style={{ padding: "60px 48px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
            <div style={{ fontSize: "56px", fontWeight: 800, color: accent }}>{s.v}</div>
            <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — horizontal layout */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", margin: "0" }}>
        {[
          { title: "Keynotes", desc: "Des conférences qui redéfinissent les frontières de l&apos;innovation et inspirent les leaders de demain." },
          { title: "Podcasts", desc: "Plus de 100 conversations profondes avec les esprits les plus brillants de la tech." },
          { title: "Apps", desc: "Des applications qui transforment radicalement notre rapport à la technologie." },
          { title: "Blog", desc: "Analyses, réflexions et perspectives sur l&apos;avenir du numérique." },
        ].map((f, i) => (
          <div key={i} style={{ background: "#000", padding: "48px 32px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", color: accent, marginBottom: "16px" }}>0{i + 1}</div>
            <h3 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 16px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(255,255,255,0.4)", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "32px" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "12px 24px", border: `1px solid ${accent}`, color: accent, fontSize: "13px", letterSpacing: "0.1em", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
        <span>© 2024 Connected Mate</span>
        <span>Crafted with passion</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 2 — Neo Bank (Fintech)
   ============================================================ */
const NeoBank: React.FC = () => {
  const violet = "#6C5CE7";
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", color: "#1A1A2E", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ fontSize: "14px", color: "#666", cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: violet, color: "#fff", border: "none", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Commencer</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", padding: "80px 48px", maxWidth: "1200px", margin: "0 auto", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "52px", fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
            L&apos;innovation financière,{" "}
            <span style={{ color: violet }}>simplifiée</span>
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#666", margin: "0 0 32px" }}>
            Connecter les idées et inspirer le futur de la technologie à travers nos conférences, podcasts et applications.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ padding: "14px 32px", background: violet, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>Découvrir</button>
            <button style={{ padding: "14px 32px", background: "transparent", color: "#1A1A2E", border: "1px solid #ddd", borderRadius: "100px", fontSize: "15px", cursor: "pointer" }}>En savoir plus</button>
          </div>
        </div>
        {/* Floating card */}
        <div style={{ background: `linear-gradient(135deg, ${violet}, #a855f7)`, borderRadius: "20px", padding: "40px", color: "#fff", boxShadow: "0 20px 60px rgba(108,92,231,0.3)", transform: "rotate(-2deg)" }}>
          <div style={{ fontSize: "12px", opacity: 0.7, letterSpacing: "0.15em", textTransform: "uppercase" }}>Connected Mate Card</div>
          <div style={{ fontSize: "28px", fontWeight: 700, margin: "24px 0 8px" }}>**** **** **** 4242</div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "32px", fontSize: "14px", opacity: 0.8 }}>
            <span>Innovation Hub</span>
            <span>12/28</span>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px 48px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        {["◆ Sécurisé", "● Certifié", "▸ Rapide", "◆ Fiable"].map((b) => (
          <span key={b} style={{ fontSize: "13px", color: "#999", letterSpacing: "0.05em" }}>{b}</span>
        ))}
      </section>

      {/* STATS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", padding: "80px 48px", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes podcast" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l}>
            <div style={{ fontSize: "48px", fontWeight: 800, color: violet }}>{s.v}</div>
            <div style={{ fontSize: "14px", color: "#999", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", padding: "0 48px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        {[
          { icon: "◆", title: "Keynotes", desc: "Des conférences inspirantes avec les meilleurs experts mondiaux de l&apos;innovation." },
          { icon: "●", title: "Podcasts", desc: "Plus de 100 épisodes explorant les tendances qui façonnent notre avenir." },
          { icon: "▸", title: "Apps", desc: "Des applications innovantes qui révolutionnent notre quotidien numérique." },
          { icon: "◇", title: "Blog", desc: "Analyses et réflexions approfondies sur l&apos;écosystème tech." },
        ].map((f) => (
          <div key={f.title} style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 2px 20px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "24px", color: violet, marginBottom: "16px" }}>{f.icon}</div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px" }}>{f.title}</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#666", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 48px", background: "#fff" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: "24px" }}>Rejoignez-nous</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", background: violet, color: "#fff", borderRadius: "100px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px 48px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#999" }}>
        <span>© 2024 Connected Mate</span>
        <span>Construit avec passion</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 3 — Artistic Gallery
   ============================================================ */
const ArtisticGallery: React.FC = () => {
  const burgundy = "#8B1A1A";
  return (
    <div style={{ minHeight: "100vh", background: "#F7F5F0", color: "#1A1A1A", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 60px" }}>
        <span style={{ fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "40px", fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "sans-serif" }}>
          {["Expositions", "Podcasts", "Applications", "Journal"].map((t) => (
            <span key={t} style={{ cursor: "pointer", color: "#666" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — dramatic serif */}
      <section style={{ padding: "120px 60px 80px", position: "relative" }}>
        <div style={{ position: "absolute", top: "80px", right: "60px", width: "300px", height: "300px", border: `1px solid ${burgundy}33`, borderRadius: "50%" }} />
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, lineHeight: 1.1, margin: 0, maxWidth: "800px", fontStyle: "italic" }}>
          Connecter les idées,
          <br />
          <span style={{ color: burgundy }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.9, color: "#888", maxWidth: "500px", marginTop: "40px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Un espace où l&apos;art rencontre la technologie, où chaque idée devient une œuvre.
        </p>
        <div style={{ marginTop: "48px", display: "inline-block", padding: "14px 40px", border: `1px solid ${burgundy}`, color: burgundy, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>
          Entrer dans la galerie
        </div>
      </section>

      {/* CURRENTLY EXHIBITING */}
      <section style={{ padding: "60px", borderTop: "1px solid #ddd" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", fontFamily: "sans-serif", marginBottom: "40px" }}>Actuellement exposé</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "56px", fontWeight: 300, fontStyle: "italic", color: burgundy }}>{s.v}</div>
              <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES — gallery rooms */}
      <section style={{ padding: "0 60px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {[
            { title: "Keynotes", desc: "Des conférences qui sont de véritables performances artistiques, mêlant vision et émotion." },
            { title: "Podcasts", desc: "Conversations intimes avec les créateurs qui redéfinissent les frontières de l&apos;art et de la tech." },
            { title: "Apps", desc: "Des applications conçues comme des œuvres, où chaque interaction est une expérience sensorielle." },
            { title: "Blog", desc: "Critiques, essais et réflexions sur la rencontre entre création artistique et innovation." },
          ].map((f) => (
            <div key={f.title} style={{ border: "1px solid #ddd", padding: "48px" }}>
              <h3 style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", margin: "0 0 20px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#777", margin: "0 0 24px", fontFamily: "sans-serif", fontWeight: 300 }}>{f.desc}</p>
              <span style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: burgundy, fontFamily: "sans-serif", cursor: "pointer" }}>Découvrir →</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 60px", borderTop: "1px solid #ddd" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 400, fontStyle: "italic", marginBottom: "32px" }}>Restons en contact</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid #ccc", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 60px", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span>Art × Technologie</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 4 — Human First (Warm, Personal)
   ============================================================ */
const HumanFirst: React.FC = () => {
  const coral = "#E8704A";
  const brown = "#3D2B1F";
  return (
    <div style={{ minHeight: "100vh", background: "#FFF9F0", color: brown, fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: coral }}>Connected Mate ☀</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "15px", color: "#8B7355" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — warm & friendly */}
      <section style={{ padding: "80px 48px", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `${coral}22`, margin: "0 auto 32px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px" }}>👋</div>
        <h1 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.2, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
          Bonjour ! Nous connectons les idées pour{" "}
          <span style={{ color: coral }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#8B7355", margin: "0 0 36px" }}>
          Ici, chaque connexion compte. Nous croyons que les meilleures idées naissent de la rencontre entre les personnes et la technologie.
        </p>
        <button style={{ padding: "16px 40px", background: coral, color: "#fff", border: "none", borderRadius: "100px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}>
          Découvrir notre univers
        </button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "48px", flexWrap: "wrap" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes podcast" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "20px", padding: "28px 40px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, color: coral }}>{s.v}</div>
            <div style={{ fontSize: "14px", color: "#8B7355", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — chat bubbles */}
      <section style={{ padding: "40px 48px 80px", maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, textAlign: "center", marginBottom: "40px" }}>Ce que nous faisons ensemble</h2>
        {[
          { title: "Keynotes", desc: "Des conférences chaleureuses qui rassemblent les esprits curieux autour de l&apos;innovation.", align: "left" as const },
          { title: "Podcasts", desc: "Des conversations authentiques avec ceux qui construisent le monde de demain.", align: "right" as const },
          { title: "Apps", desc: "Des applications pensées pour les humains, qui simplifient et enrichissent le quotidien.", align: "left" as const },
          { title: "Blog", desc: "Des articles écrits avec soin, pour comprendre et s&apos;inspirer ensemble.", align: "right" as const },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", justifyContent: f.align === "right" ? "flex-end" : "flex-start", marginBottom: "20px" }}>
            <div style={{ background: f.align === "left" ? "#fff" : `${coral}11`, borderRadius: "20px", borderTopLeftRadius: f.align === "left" ? "4px" : "20px", borderTopRightRadius: f.align === "right" ? "4px" : "20px", padding: "24px 28px", maxWidth: "80%", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <h4 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 8px", color: coral }}>{f.title}</h4>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#8B7355", margin: 0 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* TESTIMONIAL */}
      <section style={{ textAlign: "center", padding: "60px 48px", background: "#fff", borderRadius: "32px", margin: "0 48px 60px", boxShadow: "0 4px 24px rgba(0,0,0,0.03)" }}>
        <div style={{ fontSize: "48px", color: coral, marginBottom: "16px" }}>&ldquo;</div>
        <p style={{ fontSize: "20px", lineHeight: 1.8, fontStyle: "italic", color: "#666", maxWidth: "600px", margin: "0 auto 16px" }}>
          Connected Mate a transformé notre façon de penser l&apos;innovation. Une communauté vraiment humaine.
        </p>
        <div style={{ fontSize: "14px", fontWeight: 600 }}>— Un membre de la communauté</div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "24px" }}>Rejoignez la conversation</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "12px 24px", background: coral, color: "#fff", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #e8ddd0", textAlign: "center", fontSize: "13px", color: "#8B7355" }}>
        © 2024 Connected Mate · Fait avec ❤️
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 5 — Consumption Experience (Editorial)
   ============================================================ */
const ConsumptionExperience: React.FC = () => {
  const teal = "#0D9488";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#1A1A1A", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      {/* READING BAR */}
      <div style={{ position: "sticky", top: 0, zIndex: 100, height: "3px", background: `linear-gradient(90deg, ${teal} 35%, #e5e5e5 35%)` }} />

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid #eee", fontFamily: "sans-serif" }}>
        <span style={{ fontSize: "18px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px", color: "#666" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — featured article */}
      <section style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "48px", padding: "60px 48px", maxWidth: "1100px", margin: "0 auto", alignItems: "center" }}>
        <div style={{ background: `linear-gradient(135deg, ${teal}22, ${teal}08)`, borderRadius: "12px", height: "320px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: teal, fontFamily: "sans-serif" }}>
          Image à la une
        </div>
        <div>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            {["Innovation", "Tech"].map((c) => (
              <span key={c} style={{ padding: "4px 12px", background: `${teal}11`, color: teal, borderRadius: "100px", fontSize: "12px", fontFamily: "sans-serif" }}>{c}</span>
            ))}
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: 700, lineHeight: 1.3, margin: "0 0 16px" }}>
            Connecter les idées, inspirer le futur de la technologie
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#666", margin: "0 0 24px" }}>
            Comment les esprits visionnaires et la technologie se rencontrent pour façonner le monde de demain.
          </p>
          <span style={{ fontSize: "13px", color: "#999", fontFamily: "sans-serif" }}>8 min de lecture</span>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", fontFamily: "sans-serif" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: teal }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — content grid */}
      <section style={{ padding: "60px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", fontFamily: "sans-serif", marginBottom: "32px" }}>Explorer nos contenus</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }}>
          {[
            { title: "Keynotes", desc: "Des conférences profondes qui explorent les frontières de l&apos;innovation avec les meilleurs experts.", time: "5 min" },
            { title: "Podcasts", desc: "Plus de 100 conversations immersives pour comprendre les tendances qui façonnent notre avenir.", time: "30 min" },
            { title: "Apps", desc: "Des applications pensées pour une expérience utilisateur exceptionnelle et intuitive.", time: "3 min" },
            { title: "Blog", desc: "Articles de fond, analyses et perspectives sur l&apos;écosystème tech et ses évolutions.", time: "12 min" },
          ].map((f) => (
            <div key={f.title} style={{ padding: "32px", border: "1px solid #eee", borderRadius: "8px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", fontFamily: "sans-serif" }}>
                <span style={{ fontSize: "12px", padding: "3px 10px", background: `${teal}11`, color: teal, borderRadius: "100px" }}>{f.title}</span>
                <span style={{ fontSize: "12px", color: "#bbb" }}>{f.time}</span>
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#666", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 48px", background: `${teal}08` }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "24px" }}>Suivez nos publications</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontFamily: "sans-serif" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", background: teal, color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #eee", textAlign: "center", fontSize: "13px", color: "#999", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · Bonne lecture
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 6 — Framer Showcase
   ============================================================ */
const FramerShowcase: React.FC = () => {
  const blue = "#0099FF";
  return (
    <div style={{ minHeight: "100vh", background: "#FCFCFC", color: "#111", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #f0f0f0" }}>
        <span style={{ fontSize: "15px", fontWeight: 600 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <span style={{ color: blue, fontWeight: 600, cursor: "pointer" }}>Commencer →</span>
        </div>
      </nav>

      {/* HERO — browser mockup */}
      <section style={{ textAlign: "center", padding: "80px 40px 40px" }}>
        <h1 style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.03em" }}>
          Connecter les idées,
          <br />
          <span style={{ color: blue }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#888", maxWidth: "480px", margin: "0 auto 40px" }}>
          Des outils et des contenus pour les créateurs qui veulent façonner le monde de demain.
        </p>
        {/* Browser frame */}
        <div style={{ maxWidth: "800px", margin: "0 auto", border: "1px solid #e8e8e8", borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
          <div style={{ background: "#f8f8f8", padding: "12px 16px", display: "flex", gap: "8px", alignItems: "center", borderBottom: "1px solid #e8e8e8" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FEBC2E" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840" }} />
            <div style={{ flex: 1, background: "#fff", borderRadius: "6px", padding: "6px 12px", fontSize: "11px", color: "#aaa", marginLeft: "12px" }}>connectedmate.com</div>
          </div>
          <div style={{ background: "#fff", padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontWeight: 700, color: "#111", marginBottom: "8px" }}>Connected Mate</div>
            <div style={{ fontSize: "13px", color: "#888" }}>L&apos;innovation à portée de main</div>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
              {["Keynotes", "Podcasts", "Apps"].map((t) => (
                <div key={t} style={{ padding: "8px 16px", background: `${blue}11`, borderRadius: "8px", fontSize: "12px", color: blue }}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "60px 40px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: blue }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#aaa", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — project cards */}
      <section style={{ padding: "0 40px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes avec les plus grands innovateurs." },
            { title: "Podcasts", desc: "Conversations profondes sur les tendances technologiques." },
            { title: "Apps", desc: "Des applications qui repoussent les limites du possible." },
            { title: "Blog", desc: "Analyses et perspectives sur l&apos;innovation numérique." },
          ].map((f) => (
            <div key={f.title} style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: "16px", padding: "28px", cursor: "pointer" }}>
              <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#888", margin: 0 }}>{f.desc}</p>
              <span style={{ display: "inline-block", marginTop: "16px", fontSize: "13px", color: blue, fontWeight: 500 }}>Voir →</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 40px", borderTop: "1px solid #f0f0f0" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "20px" }}>Restez connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", border: "1px solid #e8e8e8", borderRadius: "8px", fontSize: "13px", color: "#666", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: "1px solid #f0f0f0", textAlign: "center", fontSize: "12px", color: "#bbb" }}>
        © 2024 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 7 — Fun Design Lover (Playful)
   ============================================================ */
const FunDesignLover: React.FC = () => {
  const pink = "#FF3366";
  const blue = "#3366FF";
  const yellow = "#FFCC00";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#222", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      {/* Scattered shapes */}
      <div style={{ position: "absolute", top: "60px", right: "10%", width: "60px", height: "60px", borderRadius: "50%", background: `${yellow}33`, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "200px", left: "5%", width: "40px", height: "40px", background: `${pink}22`, transform: "rotate(45deg)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "300px", right: "15%", width: "80px", height: "80px", borderRadius: "50%", border: `3px dashed ${blue}33`, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "400px", left: "80%", width: "50px", height: "50px", background: `${blue}15`, borderRadius: "50%", zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 40px" }}>
        <span style={{ fontSize: "22px", fontWeight: 800, color: pink }}>Connected Mate ✦</span>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ padding: "8px 20px", border: `2px dashed ${blue}44`, borderRadius: "100px", fontSize: "13px", fontWeight: 600, cursor: "pointer", color: "#555" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 40px 60px" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🎨 ✨ 🚀</div>
        <h1 style={{ fontSize: "52px", fontWeight: 900, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
          Connecter les idées,
          <br />
          <span style={{ color: pink }}>inspirer</span> le <span style={{ color: blue }}>futur</span> !
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#777", maxWidth: "500px", margin: "0 auto 36px" }}>
          On croit dur comme fer que la tech peut être fun, belle et inspirante. Pas vous ?
        </p>
        <button style={{ padding: "16px 48px", background: pink, color: "#fff", border: "none", borderRadius: "100px", fontSize: "16px", fontWeight: 700, cursor: "pointer", boxShadow: `4px 4px 0 ${yellow}` }}>
          C&apos;est parti ! →
        </button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "40px", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
        {[{ v: "50+", l: "Conférences", c: pink }, { v: "100+", l: "Épisodes", c: blue }, { v: "5", l: "Apps", c: yellow }].map((s) => (
          <div key={s.l} style={{ background: "#fff", border: `3px solid ${s.c}`, borderRadius: "20px", padding: "24px 40px", textAlign: "center", transform: `rotate(${Math.random() * 4 - 2}deg)` }}>
            <div style={{ fontSize: "36px", fontWeight: 900, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: "14px", color: "#888", fontWeight: 600, marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — tilted cards */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", padding: "40px", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {[
          { title: "Keynotes 🎤", desc: "Des conférences trop cool sur l&apos;innovation !", c: pink, r: -1 },
          { title: "Podcasts 🎧", desc: "100+ épisodes pour s&apos;inspirer en s&apos;amusant.", c: blue, r: 1.5 },
          { title: "Apps 📱", desc: "Des apps innovantes et super bien designées.", c: yellow, r: -0.5 },
          { title: "Blog ✍️", desc: "Articles fun sur la tech et le design.", c: pink, r: 1 },
        ].map((f) => (
          <div key={f.title} style={{ background: "#fff", border: `2px dotted ${f.c}55`, borderRadius: "20px", padding: "28px", transform: `rotate(${f.r}deg)`, boxShadow: `4px 4px 0 ${f.c}22` }}>
            <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "0 0 8px", color: f.c }}>{f.title}</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.6, color: "#777", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 40px", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "24px" }}>On se suit ? 👀</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {[{ n: "Twitter", c: blue }, { n: "LinkedIn", c: pink }, { n: "YouTube", c: "#FF0000" }, { n: "GitHub", c: "#333" }].map((s) => (
            <span key={s.n} style={{ padding: "12px 24px", background: s.c, color: "#fff", borderRadius: "100px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>{s.n}</span>
          ))}
        </div>
      </section>

      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", fontSize: "14px", color: "#bbb" }}>
        © 2024 Connected Mate · Made with 💕
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 8 — Dark Cinema (Premium Dark)
   ============================================================ */
const DarkCinema: React.FC = () => {
  const gold = "#C9A84C";
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: "#E8E8E8", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: `1px solid ${gold}22` }}>
        <span style={{ fontSize: "16px", fontWeight: 700, color: gold, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#666", fontFamily: "sans-serif" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — full bleed cinematic */}
      <section style={{ padding: "120px 48px 80px", background: `linear-gradient(180deg, #0A0A0A 0%, #1a1510 50%, #0A0A0A 100%)`, textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: gold, marginBottom: "24px", fontFamily: "sans-serif" }}>Saison 2024</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.01em" }}>
          Connecter les idées,
          <br />
          <span style={{ color: gold, fontStyle: "italic" }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#777", maxWidth: "500px", margin: "0 auto 40px" }}>
          Une expérience cinématographique où la technologie rencontre la vision artistique.
        </p>
        <button style={{ padding: "16px 48px", background: "transparent", border: `1px solid ${gold}`, color: gold, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>
          Première mondiale
        </button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "80px", padding: "60px 48px", borderTop: `1px solid ${gold}15`, borderBottom: `1px solid ${gold}15` }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 300, color: gold, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — horizontal strips */}
      <section>
        {[
          { title: "Keynotes", desc: "Des performances scéniques qui transcendent la simple conférence. Chaque prise de parole est un film." },
          { title: "Podcasts", desc: "Immergez-vous dans des conversations profondes, captées avec une qualité sonore cinématographique." },
          { title: "Apps", desc: "Des applications dont chaque écran est composé comme un plan de cinéma — esthétique et fonctionnel." },
          { title: "Blog", desc: "Critiques, analyses et regards cinématographiques sur le monde de la technologie." },
        ].map((f, i) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 48px", borderBottom: `1px solid ${gold}15` }}>
            <div style={{ display: "flex", gap: "40px", alignItems: "baseline" }}>
              <span style={{ fontSize: "12px", color: gold, fontFamily: "sans-serif" }}>0{i + 1}</span>
              <h3 style={{ fontSize: "28px", fontWeight: 400, margin: 0 }}>{f.title}</h3>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#666", maxWidth: "400px", margin: 0, textAlign: "right" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 48px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 400, fontStyle: "italic", color: gold, marginBottom: "28px" }}>Rejoignez le casting</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: `1px solid ${gold}44`, color: gold, fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${gold}15`, display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#444", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span>Une production originale</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 9 — Swiss Neo (Modern Minimal)
   ============================================================ */
const SwissNeo: React.FC = () => {
  const red = "#FF0000";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 60px", borderBottom: "1px solid #eee" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: red }} />
          <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", letterSpacing: "0.05em" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", color: "#555" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "100px 60px 80px" }}>
        <h1 style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
          Connecter les idées,
          <br />
          <span style={{ color: red }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#888", maxWidth: "500px", margin: "0 0 40px" }}>
          Précision, vision, innovation. Nous connectons les esprits visionnaires pour façonner le monde de demain.
        </p>
        <button style={{ padding: "14px 40px", background: "#000", color: "#fff", border: "none", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
          Découvrir
        </button>
      </section>

      {/* STATS — counter style */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        {[{ n: "01", v: "50+", l: "Conférences" }, { n: "02", v: "100+", l: "Épisodes podcast" }, { n: "03", v: "5", l: "Applications" }].map((s, i) => (
          <div key={s.n} style={{ padding: "48px 60px", borderRight: i < 2 ? "1px solid #eee" : "none" }}>
            <div style={{ fontSize: "11px", color: red, letterSpacing: "0.1em", marginBottom: "12px" }}>{s.n}</div>
            <div style={{ fontSize: "48px", fontWeight: 700 }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — strict grid */}
      <section style={{ padding: "80px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderTop: "1px solid #eee" }}>
          {[
            { n: "01", title: "Keynotes", desc: "Des conférences d&apos;exception avec les leaders mondiaux de l&apos;innovation." },
            { n: "02", title: "Podcasts", desc: "Plus de 100 épisodes riches en insights sur les tendances technologiques." },
            { n: "03", title: "Apps", desc: "Des applications qui redéfinissent l&apos;interaction homme-machine." },
            { n: "04", title: "Blog", desc: "Analyses précises et réflexions structurées sur l&apos;avenir du numérique." },
          ].map((f) => (
            <div key={f.n} style={{ padding: "40px", borderBottom: "1px solid #eee", borderRight: parseInt(f.n) % 2 === 1 ? "1px solid #eee" : "none" }}>
              <span style={{ fontSize: "11px", color: red }}>{f.n}</span>
              <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "12px 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px", borderTop: "1px solid #eee" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "24px" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid #ddd", fontSize: "13px", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 60px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb" }}>
        <span>© 2024 Connected Mate</span>
        <span style={{ color: red }}>●</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 10 — Organic Living (Wellness)
   ============================================================ */
const OrganicLiving: React.FC = () => {
  const sage = "#6B8F71";
  const sand = "#D4A574";
  const terra = "#C17F59";
  return (
    <div style={{ minHeight: "100vh", background: "#FDFAF5", color: "#2E2A24", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: sage }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#8B8070", fontFamily: "sans-serif" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 48px 60px" }}>
        <div style={{ width: "100px", height: "100px", borderRadius: "50% 50% 50% 30%", background: `${sage}22`, margin: "0 auto 32px" }} />
        <h1 style={{ fontSize: "48px", fontWeight: 400, lineHeight: 1.25, margin: "0 0 24px", fontStyle: "italic" }}>
          Connecter les idées,
          <br />
          <span style={{ color: sage }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.9, color: "#8B8070", maxWidth: "520px", margin: "0 auto 36px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Nous cultivons les connexions entre les personnes et la technologie, comme un jardin qui grandit naturellement.
        </p>
        <button style={{ padding: "16px 40px", background: sage, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontFamily: "sans-serif", cursor: "pointer" }}>
          Explorer
        </button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "40px 48px", flexWrap: "wrap" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: `${sage}11`, borderRadius: "50% 50% 50% 30%", padding: "32px 40px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 400, color: sage, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B8070", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* MANIFESTO */}
      <section style={{ textAlign: "center", padding: "80px 48px", maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 400, fontStyle: "italic", color: terra, lineHeight: 1.5 }}>
          &ldquo;Nous croyons que la technologie, comme la nature, doit servir la vie et non la remplacer.&rdquo;
        </h2>
      </section>

      {/* FEATURES — organic shapes */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px", padding: "0 48px 80px", maxWidth: "900px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences qui nourrissent l&apos;esprit et cultivent l&apos;inspiration." },
          { title: "Podcasts", desc: "Des conversations organiques qui poussent naturellement vers l&apos;innovation." },
          { title: "Apps", desc: "Des applications qui respectent le rythme humain et enrichissent le quotidien." },
          { title: "Blog", desc: "Des réflexions enracinées dans l&apos;expérience, pour grandir ensemble." },
        ].map((f, i) => (
          <div key={f.title} style={{ background: i % 2 === 0 ? `${sage}08` : `${sand}15`, borderRadius: i % 2 === 0 ? "40% 50% 40% 50%" : "50% 40% 50% 40%", padding: "40px", textAlign: "center" }}>
            <h3 style={{ fontSize: "22px", fontWeight: 400, margin: "0 0 12px", color: sage }}>{f.title}</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#8B8070", margin: 0, fontFamily: "sans-serif", fontWeight: 300 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", marginBottom: "24px" }}>Cultivons ensemble</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: sage, color: "#fff", borderRadius: "100px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${sage}22`, textAlign: "center", fontSize: "13px", color: "#8B8070", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · Naturellement connectés
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  {
    id: 1,
    name: "Studio Branding",
    category: "Branding",
    description: "Agency portfolio with black bg, oversized 120px+ typography, orange-red accent, marquee section",
    component: StudioBranding,
  },
  {
    id: 2,
    name: "Neo Bank",
    category: "Fintech",
    description: "Clean fintech with violet accent, floating card UI, pill CTAs, trust badges",
    component: NeoBank,
  },
  {
    id: 3,
    name: "Artistic Gallery",
    category: "Artistic",
    description: "Art gallery feel with thin serif, burgundy accent, dramatic negative space, bordered rooms",
    component: ArtisticGallery,
  },
  {
    id: 4,
    name: "Human First",
    category: "Human",
    description: "Warmest design with cream bg, coral accent, chat bubbles, testimonials, friendly rounded shapes",
    component: HumanFirst,
  },
  {
    id: 5,
    name: "Consumption Experience",
    category: "Editorial",
    description: "Content-first with reading bar, featured article layout, masonry grid, teal accent",
    component: ConsumptionExperience,
  },
  {
    id: 6,
    name: "Framer Showcase",
    category: "Showcase",
    description: "Framer-inspired with browser mockup, subtle borders, precise typography, blue accent",
    component: FramerShowcase,
  },
  {
    id: 7,
    name: "Fun Design Lover",
    category: "Playful",
    description: "Pure joy with scattered shapes, tilted cards, emojis, pink/blue/yellow, dotted borders",
    component: FunDesignLover,
  },
  {
    id: 8,
    name: "Dark Cinema",
    category: "Dark",
    description: "Cinematic dark with gold accent, full-bleed hero, horizontal film strips, premiere section",
    component: DarkCinema,
  },
  {
    id: 9,
    name: "Swiss Neo",
    category: "Minimalist",
    description: "Updated Swiss design with strict grid, red accent dot, counter numbers, precision layout",
    component: SwissNeo,
  },
  {
    id: 10,
    name: "Organic Living",
    category: "Organic",
    description: "Wellness brand with sage/sand/terracotta, organic blob shapes, manifesto section",
    component: OrganicLiving,
  },
];
