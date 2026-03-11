"use client";
import Link from "next/link";
import React from "react";
import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 11 — Venture Capital (VC/Fintech)
   ============================================================ */
const VentureCapital: React.FC = () => {
  const navy = "#0B1B3F";
  const green = "#00D47E";
  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", color: navy, fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.05em" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", alignItems: "center", fontSize: "14px", color: "#6B7280" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: green, color: "#fff", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Investir</button>
        </div>
      </nav>

      <section style={{ padding: "100px 48px 80px", maxWidth: "800px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: green, marginBottom: "20px", fontWeight: 600 }}>Fund III · 2024</div>
        <h1 style={{ fontSize: "56px", fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
          Nous investissons dans le{" "}
          <span style={{ color: green }}>futur</span> de la technologie
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#6B7280", margin: "0 0 36px", maxWidth: "560px" }}>
          Connecter les idées et inspirer le futur à travers des conférences, podcasts et applications qui façonnent l&apos;écosystème tech.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={{ padding: "14px 32px", background: navy, color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>Notre thèse</button>
          <button style={{ padding: "14px 32px", background: "transparent", color: navy, border: `1px solid ${navy}22`, borderRadius: "8px", fontSize: "15px", cursor: "pointer" }}>Portfolio</button>
        </div>
      </section>

      {/* METRICS DASHBOARD */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#E5E7EB", margin: "0 48px", borderRadius: "12px", overflow: "hidden" }}>
        {[{ v: "50+", l: "Conférences", d: "▲ 12% YoY" }, { v: "100+", l: "Épisodes podcast", d: "▲ 45% YoY" }, { v: "5", l: "Applications", d: "▲ 2 nouvelles" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "42px", fontWeight: 800, color: navy }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "4px" }}>{s.l}</div>
            <div style={{ fontSize: "12px", color: green, marginTop: "8px", fontWeight: 600 }}>{s.d}</div>
          </div>
        ))}
      </section>

      {/* THESIS */}
      <section style={{ padding: "80px 48px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "40px" }}>Notre approche</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {[
            { n: "01", title: "Keynotes", desc: "Des conférences stratégiques avec les plus grands leaders de l&apos;innovation mondiale." },
            { n: "02", title: "Podcasts", desc: "Conversations approfondies avec les fondateurs et investisseurs qui façonnent le futur." },
            { n: "03", title: "Apps", desc: "Des applications à forte croissance qui redéfinissent les standards du marché." },
            { n: "04", title: "Blog", desc: "Analyses macroéconomiques et insights sur les tendances émergentes." },
          ].map((f) => (
            <div key={f.n} style={{ padding: "32px", border: "1px solid #E5E7EB", borderRadius: "12px" }}>
              <span style={{ fontSize: "12px", color: green, fontWeight: 700 }}>{f.n}</span>
              <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "12px 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "60px 48px", background: `${navy}05`, borderRadius: "16px", margin: "0 48px 60px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, marginBottom: "24px" }}>Rejoignez l&apos;écosystème</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: navy, color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#9CA3AF" }}>
        <span>© 2024 Connected Mate</span>
        <span>Paris · San Francisco · London</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 12 — Digital Atelier (Artistic/Typography Studio)
   ============================================================ */
const DigitalAtelier: React.FC = () => {
  const ochre = "#CC8B3C";
  return (
    <div style={{ minHeight: "100vh", background: "#F5F1EB", color: "#1A1814", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 60px", borderBottom: "1px solid #D4CFC6" }}>
        <span style={{ fontSize: "14px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", color: "#8B8070", fontFamily: "monospace", letterSpacing: "0.1em" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 60px 60px", position: "relative" }}>
        <div style={{ position: "absolute", top: "60px", right: "60px", fontSize: "200px", fontWeight: 300, color: `${ochre}15`, lineHeight: 1 }}>&amp;</div>
        <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 24px", fontStyle: "italic", position: "relative", zIndex: 1 }}>
          Connecter les idées,
          <br />
          <span style={{ color: ochre }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#8B8070", maxWidth: "480px", margin: "0 0 40px", fontFamily: "monospace" }}>
          Un atelier où chaque détail typographique est pensé avec intention. Chaque pixel est une décision.
        </p>
        <div style={{ display: "inline-block", padding: "14px 40px", border: `1px solid ${ochre}`, color: ochre, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "monospace", cursor: "pointer" }}>
          Entrer dans l&apos;atelier
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "60px", borderTop: "1px solid #D4CFC6", borderBottom: "1px solid #D4CFC6" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 300, fontStyle: "italic", color: ochre }}>{s.v}</div>
            <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B8070", marginTop: "8px", fontFamily: "monospace" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* MANIFESTO */}
      <section style={{ textAlign: "center", padding: "80px 60px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#8B8070", marginBottom: "24px", fontFamily: "monospace" }}>Manifeste</div>
        <p style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#3A3530" }}>
          &ldquo;Chaque lettre raconte une histoire. Chaque espace respire. Nous croyons que le détail est l&apos;âme du design.&rdquo;
        </p>
      </section>

      <section style={{ padding: "0 60px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
          {[
            { title: "Keynotes", desc: "Des prises de parole composées comme des œuvres typographiques." },
            { title: "Podcasts", desc: "Conversations où chaque mot est pesé, chaque silence est voulu." },
            { title: "Apps", desc: "Des interfaces où la typographie est le héros du design." },
            { title: "Blog", desc: "Écriture artisanale, composition soignée, pensée éditoriale." },
          ].map((f) => (
            <div key={f.title} style={{ border: `2px solid #1A1814`, padding: "40px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 400, margin: "0 0 12px", fontStyle: "italic" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#8B8070", margin: 0, fontFamily: "monospace" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid #D4CFC6", fontSize: "12px", fontFamily: "monospace", cursor: "pointer", letterSpacing: "0.1em" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 60px", borderTop: "1px solid #D4CFC6", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#8B8070", fontFamily: "monospace" }}>
        <span>© 2024 Connected Mate</span>
        <span>Atelier numérique</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 13 — Neon Nightclub (Fun/Entertainment)
   ============================================================ */
const NeonNightclub: React.FC = () => {
  const neonPink = "#FF00FF";
  const neonCyan = "#00FFFF";
  const neonYellow = "#FFFF00";
  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D", color: "#fff", fontFamily: "'Impact', 'Arial Black', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 40px" }}>
        <span style={{ fontSize: "20px", fontWeight: 900, color: neonPink, textShadow: `0 0 20px ${neonPink}88, 0 0 40px ${neonPink}44`, letterSpacing: "0.1em", textTransform: "uppercase" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t, i) => (
            <span key={t} style={{ cursor: "pointer", color: [neonCyan, neonPink, neonYellow, neonCyan][i], textShadow: `0 0 10px ${[neonCyan, neonPink, neonYellow, neonCyan][i]}66` }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 40px 60px" }}>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 96px)", fontWeight: 900, lineHeight: 1.0, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: "0.05em", color: neonCyan, textShadow: `0 0 30px ${neonCyan}88, 0 0 60px ${neonCyan}44, 0 0 100px ${neonCyan}22` }}>
          Connecter
          <br />
          <span style={{ color: neonPink, textShadow: `0 0 30px ${neonPink}88, 0 0 60px ${neonPink}44` }}>Les Idées</span>
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#888", maxWidth: "480px", margin: "0 auto 36px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Inspirer le futur à travers des expériences immersives. Préparez-vous pour le show.
        </p>
        <button style={{ padding: "16px 48px", background: "transparent", border: `2px solid ${neonPink}`, color: neonPink, fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em", cursor: "pointer", textShadow: `0 0 10px ${neonPink}88`, boxShadow: `0 0 20px ${neonPink}44, inset 0 0 20px ${neonPink}11` }}>
          Entrer
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "40px" }}>
        {[{ v: "50+", l: "Events", c: neonPink }, { v: "100+", l: "Épisodes", c: neonCyan }, { v: "5", l: "Apps", c: neonYellow }].map((s) => (
          <div key={s.l} style={{ textAlign: "center", padding: "24px 32px", border: `1px solid ${s.c}44`, boxShadow: `0 0 15px ${s.c}22, inset 0 0 15px ${s.c}08` }}>
            <div style={{ fontSize: "42px", fontWeight: 900, color: s.c, textShadow: `0 0 20px ${s.c}66` }}>{s.v}</div>
            <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#666", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* LINEUP */}
      <section style={{ padding: "40px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", color: neonYellow, textShadow: `0 0 10px ${neonYellow}66`, marginBottom: "24px", textAlign: "center" }}>Line-Up</div>
        {[
          { title: "KEYNOTES", desc: "Des speakers légendaires sur scène.", c: neonCyan },
          { title: "PODCASTS", desc: "100+ épisodes explosifs.", c: neonPink },
          { title: "APPS", desc: "Des apps qui déchirent.", c: neonYellow },
          { title: "BLOG", desc: "News et analyses brûlantes.", c: neonCyan },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: `1px solid ${f.c}22` }}>
            <h3 style={{ fontSize: "24px", fontWeight: 900, margin: 0, color: f.c, textShadow: `0 0 15px ${f.c}44`, textTransform: "uppercase" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", color: "#666", margin: 0, fontFamily: "sans-serif" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px 40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {[{ n: "Twitter", c: neonCyan }, { n: "LinkedIn", c: neonPink }, { n: "YouTube", c: neonYellow }, { n: "GitHub", c: neonCyan }].map((s) => (
            <span key={s.n} style={{ padding: "10px 24px", border: `1px solid ${s.c}`, color: s.c, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", textShadow: `0 0 8px ${s.c}66` }}>{s.n}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 40px", borderTop: "1px solid #222", textAlign: "center", fontSize: "12px", color: "#444", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · All night long
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 14 — Cozy Reader (Editorial/Content)
   ============================================================ */
const CozyReader: React.FC = () => {
  const orange = "#D35400";
  return (
    <div style={{ minHeight: "100vh", background: "#FFFDF8", color: "#2C2C2C", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", fontFamily: "sans-serif" }}>
        <span style={{ fontSize: "16px", fontWeight: 600 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — book title page */}
      <section style={{ textAlign: "center", padding: "100px 48px 60px", maxWidth: "650px", margin: "0 auto" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif", marginBottom: "24px" }}>Tome I · 2024</div>
        <div style={{ width: "60px", height: "1px", background: orange, margin: "0 auto 32px" }} />
        <h1 style={{ fontSize: "44px", fontWeight: 400, lineHeight: 1.35, margin: "0 0 24px" }}>
          Connecter les idées,
          <br />
          <em style={{ color: orange }}>inspirer le futur</em>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 2.0, color: "#777", margin: "0 0 36px" }}>
          Un voyage à travers les idées qui façonnent notre monde. Prenez le temps de lire, de comprendre, de rêver.
        </p>
        <div style={{ width: "60px", height: "1px", background: orange, margin: "0 auto" }} />
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 400, color: orange, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#aaa", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* CHAPTERS */}
      <section style={{ padding: "60px 48px", maxWidth: "650px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif", marginBottom: "32px" }}>Chapitres</div>
        {[
          { n: "I", title: "Keynotes", desc: "Des conférences qui ouvrent l&apos;esprit et nourrissent la curiosité. Chaque mot compte, chaque silence résonne." },
          { n: "II", title: "Podcasts", desc: "Plus de 100 conversations intimes avec les penseurs de notre temps. À écouter comme on lit un bon livre." },
          { n: "III", title: "Apps", desc: "Des applications conçues avec le même soin qu&apos;un bel ouvrage — chaque interaction est une page qu&apos;on tourne." },
          { n: "IV", title: "Blog", desc: "Articles longs, réflexions profondes, prose soignée. Le plaisir de la lecture au service de la tech." },
        ].map((f) => (
          <div key={f.n} style={{ marginBottom: "36px", paddingBottom: "36px", borderBottom: "1px solid #eee" }}>
            <div style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
              <span style={{ fontSize: "14px", color: orange, fontStyle: "italic" }}>Chapitre {f.n}</span>
              <h3 style={{ fontSize: "24px", fontWeight: 400, margin: 0 }}>{f.title}</h3>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 2.0, color: "#777", margin: "12px 0 0" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* BOOKSHELF */}
      <section style={{ padding: "40px 48px 60px", background: `${orange}08` }}>
        <div style={{ textAlign: "center", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif", marginBottom: "24px" }}>Bibliothèque</div>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Innovation", "IA", "Design", "Culture", "Futur"].map((c) => (
            <div key={c} style={{ width: "80px", height: "120px", background: `${orange}${Math.floor(Math.random() * 30 + 10).toString(16)}`, border: "1px solid #ddd", borderRadius: "2px 6px 6px 2px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", color: "#888", writingMode: "vertical-rl" as const, fontFamily: "sans-serif" }}>{c}</div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 400, fontStyle: "italic", marginBottom: "24px" }}>Suivez nos publications</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontFamily: "sans-serif" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "13px", color: "#888", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #eee", textAlign: "center", fontSize: "13px", color: "#bbb", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · Bonne lecture
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 15 — Hyper Modern (Design Forward)
   ============================================================ */
const HyperModern: React.FC = () => {
  const red = "#FF2D2D";
  return (
    <div style={{ minHeight: "100vh", background: "#F0F0F0", color: "#000", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>CM</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", color: "#666" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 40px" }}>
        <h1 style={{ fontSize: "clamp(64px, 9vw, 120px)", fontWeight: 900, lineHeight: 0.95, margin: "0 0 24px", letterSpacing: "-0.05em" }}>
          Inspirer
          <br />
          <span style={{ color: red }}>le futur</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#777", maxWidth: "400px", margin: 0 }}>
          Connecter les idées pour façonner demain. Design, technologie, humanité.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "12px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 900 }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* ASYMMETRIC FEATURES */}
      <section style={{ padding: "40px 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px", marginBottom: "16px" }}>
          <div style={{ background: "#000", color: "#fff", borderRadius: "16px", padding: "48px" }}>
            <span style={{ fontSize: "12px", color: red }}>01</span>
            <h3 style={{ fontSize: "32px", fontWeight: 800, margin: "12px 0 12px" }}>Keynotes</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", margin: 0 }}>Des conférences qui repoussent les limites de l&apos;innovation avec les plus grands esprits.</p>
          </div>
          <div style={{ background: red, color: "#fff", borderRadius: "16px", padding: "48px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <span style={{ fontSize: "12px", opacity: 0.7 }}>02</span>
            <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "12px 0 0" }}>Podcasts</h3>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "16px" }}>
          <div style={{ background: "#fff", borderRadius: "16px", padding: "48px" }}>
            <span style={{ fontSize: "12px", color: red }}>03</span>
            <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "12px 0 0" }}>Apps</h3>
          </div>
          <div style={{ background: "#1A1A1A", color: "#fff", borderRadius: "16px", padding: "48px" }}>
            <span style={{ fontSize: "12px", color: red }}>04</span>
            <h3 style={{ fontSize: "32px", fontWeight: 800, margin: "12px 0 12px" }}>Blog</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", margin: 0 }}>Analyses précises et perspectives audacieuses sur le monde numérique.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "60px 48px", background: "#fff", borderRadius: "24px", margin: "0 48px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", textAlign: "center" }}>
          {["Découvrir", "Connecter", "Créer", "Inspirer"].map((step, i) => (
            <div key={step}>
              <div style={{ fontSize: "48px", fontWeight: 900, color: i === 3 ? red : "#eee" }}>{`0${i + 1}`}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, marginTop: "8px" }}>{step}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: "#000", color: "#fff", borderRadius: "100px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#999" }}>
        <span>© 2024 Connected Mate</span>
        <span style={{ color: red }}>■</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 16 — Banking Solid (Neo Bank)
   ============================================================ */
const BankingSolid: React.FC = () => {
  const emerald = "#00C853";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#1C1C1E", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid #f0f0f0" }}>
        <span style={{ fontSize: "18px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", alignItems: "center", fontSize: "14px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: "#1C1C1E", color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Ouvrir un compte</button>
        </div>
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", padding: "80px 48px", maxWidth: "1100px", margin: "0 auto", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
            La banque de{" "}
            <span style={{ color: emerald }}>demain</span>,
            <br />aujourd&apos;hui
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#666", margin: "0 0 28px" }}>
            Connecter les idées et inspirer le futur de la finance à travers l&apos;innovation technologique.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ padding: "14px 32px", background: "#1C1C1E", color: "#fff", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>Commencer</button>
            <button style={{ padding: "14px 32px", background: "transparent", border: "1px solid #E5E7EB", borderRadius: "10px", fontSize: "15px", color: "#666", cursor: "pointer" }}>Voir la démo</button>
          </div>
        </div>
        {/* Card mockup */}
        <div style={{ background: "linear-gradient(135deg, #1C1C1E, #374151)", borderRadius: "16px", padding: "32px", color: "#fff", boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
            <span style={{ fontSize: "14px", fontWeight: 600 }}>Connected Mate</span>
            <span style={{ fontSize: "14px", color: emerald }}>●</span>
          </div>
          <div style={{ fontSize: "24px", fontWeight: 600, letterSpacing: "0.1em", marginBottom: "32px" }}>4242 •••• •••• 1234</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#9CA3AF" }}>
            <span>Innovation Hub</span>
            <span>12/28</span>
          </div>
        </div>
      </section>

      {/* SECURITY BADGES */}
      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "32px 48px", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
        {["🔒 Chiffrement 256-bit", "⚡ Transactions instantanées", "📊 Analytics avancés", "🌐 Multi-devises"].map((b) => (
          <span key={b} style={{ fontSize: "13px", color: "#888" }}>{b}</span>
        ))}
      </section>

      {/* METRICS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "60px 48px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ v: "50+", l: "Conférences", i: "▲ 12%" }, { v: "100+", l: "Épisodes", i: "▲ 45%" }, { v: "5", l: "Applications", i: "▲ New" }].map((s) => (
          <div key={s.l} style={{ background: "#FAFAFA", borderRadius: "12px", padding: "28px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 800 }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#999", marginTop: "4px" }}>{s.l}</div>
            <div style={{ fontSize: "12px", color: emerald, marginTop: "8px", fontWeight: 600 }}>{s.i}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "0 48px 80px", maxWidth: "1000px", margin: "0 auto" }}>
        {[
          { icon: "⚡", title: "Keynotes", desc: "Des conférences sur les dernières avancées fintech et innovation." },
          { icon: "🔒", title: "Podcasts", desc: "Interviews exclusives avec les leaders de la finance de demain." },
          { icon: "📊", title: "Apps", desc: "Des applications sécurisées et performantes pour le quotidien." },
          { icon: "🌐", title: "Blog", desc: "Veille technologique et analyses du marché financier." },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", gap: "20px", padding: "24px 0", borderBottom: "1px solid #f0f0f0", alignItems: "center" }}>
            <span style={{ fontSize: "24px", width: "48px", textAlign: "center" }}>{f.icon}</span>
            <div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 4px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#888", margin: 0 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px 48px", background: "#FAFAFA" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "20px" }}>Suivez-nous</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", background: "#1C1C1E", color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb" }}>
        <span>© 2024 Connected Mate</span>
        <span>Régulé · Sécurisé · Fiable</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 17 — Handcrafted (Human/Artisan)
   ============================================================ */
const Handcrafted: React.FC = () => {
  const terra = "#C4714A";
  return (
    <div style={{ minHeight: "100vh", background: "#FAF6F0", color: "#2B2118", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, color: terra }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px", color: "#8B7B6B" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 48px 60px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "13px", color: "#8B7B6B", marginBottom: "20px" }}>~ fait main avec soin ~</div>
        <h1 style={{ fontSize: "44px", fontWeight: 400, lineHeight: 1.3, margin: "0 0 24px" }}>
          Connecter les idées,
          <br />
          <span style={{ color: terra, fontStyle: "italic" }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.9, color: "#8B7B6B", margin: "0 0 36px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Chaque connexion est tissée à la main. Chaque idée est cultivée avec patience. Bienvenue dans notre atelier.
        </p>
        <button style={{ padding: "14px 36px", background: terra, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", cursor: "pointer" }}>
          Découvrir notre histoire
        </button>
      </section>

      {/* DECORATIVE SEPARATOR */}
      <div style={{ textAlign: "center", padding: "20px", fontSize: "14px", color: "#ccc", letterSpacing: "0.5em" }}>· · · · ·</div>

      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 400, color: terra, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B7B6B", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* OUR STORY */}
      <section style={{ padding: "60px 48px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "20px" }}>Notre histoire</div>
        <p style={{ fontSize: "18px", lineHeight: 1.9, fontStyle: "italic", color: "#666" }}>
          Nous avons commencé avec une simple idée : créer des ponts entre les personnes qui rêvent et celles qui construisent. Chaque conférence, chaque podcast, chaque application est un acte d&apos;amour pour l&apos;innovation.
        </p>
      </section>

      {/* FEATURES — rounded tags */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "40px 48px 80px", maxWidth: "800px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences artisanales, où chaque mot est choisi avec soin." },
          { title: "Podcasts", desc: "Conversations authentiques, enregistrées comme on écrit une lettre." },
          { title: "Apps", desc: "Des applications façonnées à la main, avec attention aux détails." },
          { title: "Blog", desc: "Des textes écrits avec le cœur, pour partager et grandir ensemble." },
        ].map((f) => (
          <div key={f.title} style={{ background: "#fff", borderRadius: "24px", padding: "32px", border: `1px dashed ${terra}44` }}>
            <h3 style={{ fontSize: "20px", fontWeight: 400, margin: "0 0 8px", color: terra }}>{f.title}</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#8B7B6B", margin: 0, fontFamily: "sans-serif", fontWeight: 300 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", border: `1px solid ${terra}44`, borderRadius: "100px", fontSize: "13px", color: terra, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px dashed #ddd", textAlign: "center", fontSize: "13px", color: "#bbb" }}>
        © 2024 Connected Mate · Fait main avec ❤
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 18 — Space Station (Sci-Fi/Tech)
   ============================================================ */
const SpaceStation: React.FC = () => {
  const cyan = "#00BFFF";
  return (
    <div style={{ minHeight: "100vh", background: "#0A0E1A", color: "#C5D0E6", fontFamily: "'Courier New', monospace", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: `1px solid ${cyan}22` }}>
        <span style={{ fontSize: "14px", color: cyan, letterSpacing: "0.2em" }}>◇ CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", color: "#5A6B8A" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 40px 60px" }}>
        <div style={{ fontSize: "11px", color: cyan, letterSpacing: "0.3em", marginBottom: "24px" }}>STATION STATUS: ONLINE</div>
        <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.2, margin: "0 0 20px", color: "#E8F0FF", fontFamily: "'Helvetica Neue', sans-serif" }}>
          Connecter les idées,
          <br />
          <span style={{ color: cyan }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#5A6B8A", maxWidth: "460px", margin: "0 auto 36px" }}>
          Mission : relier les esprits visionnaires aux technologies de demain. Secteur : Innovation. Statut : Actif.
        </p>
        <button style={{ padding: "12px 36px", background: "transparent", border: `1px solid ${cyan}`, color: cyan, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}>
          Initialiser mission
        </button>
      </section>

      {/* INSTRUMENT READINGS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: `${cyan}15`, margin: "0 40px" }}>
        {[{ v: "50+", l: "Conférences", c: "LAT: 48.8566" }, { v: "100+", l: "Épisodes", c: "FREQ: 2.4GHz" }, { v: "5", l: "Applications", c: "ALT: 408km" }].map((s) => (
          <div key={s.l} style={{ background: "#0A0E1A", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "11px", color: "#5A6B8A", marginBottom: "8px" }}>{s.c}</div>
            <div style={{ fontSize: "36px", fontWeight: 400, color: cyan, fontFamily: "'Helvetica Neue', sans-serif" }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#5A6B8A", marginTop: "4px", letterSpacing: "0.1em" }}>{s.l.toUpperCase()}</div>
          </div>
        ))}
      </section>

      {/* CONTROL PANEL FEATURES */}
      <section style={{ padding: "60px 40px" }}>
        <div style={{ fontSize: "11px", color: cyan, letterSpacing: "0.2em", marginBottom: "24px" }}>MODULES ACTIFS</div>
        {[
          { title: "KEYNOTES", desc: "Briefings de mission avec les experts de pointe." },
          { title: "PODCASTS", desc: "Transmissions audio depuis les avant-postes de l&apos;innovation." },
          { title: "APPS", desc: "Systèmes embarqués pour optimiser vos opérations quotidiennes." },
          { title: "BLOG", desc: "Rapports de terrain sur les avancées technologiques." },
        ].map((f, i) => (
          <div key={f.title} style={{ display: "flex", gap: "20px", padding: "20px 0", borderBottom: `1px solid ${cyan}15`, alignItems: "center" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cyan, boxShadow: `0 0 8px ${cyan}` }} />
            <div style={{ minWidth: "100px" }}>
              <span style={{ fontSize: "12px", color: cyan, letterSpacing: "0.1em" }}>{f.title}</span>
            </div>
            <p style={{ fontSize: "13px", color: "#5A6B8A", margin: 0 }}>{f.desc}</p>
            <span style={{ fontSize: "11px", color: `${cyan}66`, marginLeft: "auto" }}>SYS-0{i + 1}</span>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", border: `1px solid ${cyan}33`, color: cyan, fontSize: "11px", letterSpacing: "0.1em", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: `1px solid ${cyan}15`, display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#3A4560" }}>
        <span>© 2024 CONNECTED MATE</span>
        <span>◇ TRANSMISSION END</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 19 — Wellness Retreat (Organic)
   ============================================================ */
const WellnessRetreat: React.FC = () => {
  const sage = "#8FAE80";
  const blush = "#E8C4B8";
  const sand = "#D5C4A1";
  return (
    <div style={{ minHeight: "100vh", background: "#FEFCF7", color: "#3E3A35", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 400, color: sage, fontStyle: "italic" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#8B8378", fontFamily: "sans-serif" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "100px 48px 60px" }}>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: `${sage}22`, margin: "0 auto 32px" }} />
        <h1 style={{ fontSize: "44px", fontWeight: 400, lineHeight: 1.35, margin: "0 0 24px", fontStyle: "italic" }}>
          Respirez.
          <br />
          Connectez. <span style={{ color: sage }}>Inspirez.</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 2.0, color: "#8B8378", maxWidth: "500px", margin: "0 auto 36px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Un espace de bien-être numérique où la technologie sert votre sérénité intérieure.
        </p>
        <button style={{ padding: "16px 48px", background: sage, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontFamily: "sans-serif", cursor: "pointer" }}>
          Commencer le voyage
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: `${blush}33`, borderRadius: "50%", width: "140px", height: "140px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 400, color: sage, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#8B8378", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* DAILY PRACTICE */}
      <section style={{ textAlign: "center", padding: "80px 48px", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: sage, marginBottom: "20px", fontFamily: "sans-serif" }}>Pratique quotidienne</div>
        <p style={{ fontSize: "24px", fontStyle: "italic", lineHeight: 1.6, color: "#5A5650" }}>
          &ldquo;Chaque jour est une occasion de se reconnecter à ce qui compte vraiment.&rdquo;
        </p>
      </section>

      {/* FEATURES — pebble cards */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "0 48px 80px", maxWidth: "800px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences apaisantes qui nourrissent l&apos;esprit et le corps.", bg: `${sage}11` },
          { title: "Podcasts", desc: "Méditations sonores et conversations conscientes.", bg: `${blush}33` },
          { title: "Apps", desc: "Applications de bien-être pour un quotidien harmonieux.", bg: `${sand}33` },
          { title: "Blog", desc: "Réflexions sur l&apos;équilibre entre technologie et nature.", bg: `${sage}11` },
        ].map((f) => (
          <div key={f.title} style={{ background: f.bg, borderRadius: "32px", padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 400, margin: "0 0 8px", color: sage }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#8B8378", margin: 0, fontFamily: "sans-serif" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: sage, color: "#fff", borderRadius: "100px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${sage}22`, textAlign: "center", fontSize: "13px", color: "#8B8378", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · Namasté
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 20 — Magazine Cover (Editorial Premium)
   ============================================================ */
const MagazineCover: React.FC = () => {
  const crimson = "#DC143C";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "2px solid #000" }}>
        <span style={{ fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif" }}>Édition Nº01</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "sans-serif" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* COVER */}
      <section style={{ textAlign: "center", padding: "100px 48px 80px", borderBottom: "2px solid #000" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: crimson, marginBottom: "32px", fontFamily: "sans-serif" }}>Connected Mate Magazine</div>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 96px)", fontWeight: 700, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
          Connecter
          <br />
          les idées,
          <br />
          <em style={{ color: crimson }}>inspirer</em>
        </h1>
        <div style={{ fontSize: "18px", fontWeight: 400, fontStyle: "italic", color: "#666", marginTop: "24px" }}>Le futur se lit ici</div>
      </section>

      {/* STATS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: "2px solid #000" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s, i) => (
          <div key={s.l} style={{ padding: "40px", textAlign: "center", borderRight: i < 2 ? "1px solid #ddd" : "none" }}>
            <div style={{ fontSize: "44px", fontWeight: 700 }}>{s.v}</div>
            <div style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* EDITORIAL COLUMNS */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", padding: "0" }}>
        <div style={{ padding: "48px" }}>
          {[
            { title: "Keynotes", desc: "Les plus grandes voix de l&apos;innovation réunies sur scène pour des performances inoubliables." },
            { title: "Podcasts", desc: "Immersion dans l&apos;univers des créateurs à travers des conversations sans filtre." },
          ].map((f) => (
            <div key={f.title} style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#666", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#ddd" }} />
        <div style={{ padding: "48px" }}>
          {[
            { title: "Apps", desc: "Des applications qui redéfinissent l&apos;élégance numérique avec un souci du détail obsessionnel." },
            { title: "Blog", desc: "Éditos, critiques et grands reportages sur l&apos;écosystème de l&apos;innovation." },
          ].map((f) => (
            <div key={f.title} style={{ marginBottom: "36px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#666", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTRIBUTORS */}
      <section style={{ padding: "40px 48px", borderTop: "2px solid #000", borderBottom: "1px solid #ddd" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", fontFamily: "sans-serif", marginBottom: "16px" }}>Contributeurs</div>
        <div style={{ fontSize: "14px", color: "#666", lineHeight: 2.0 }}>
          Alex Honnold · Marie Curie · Steve Wozniak · Ada Lovelace · Elon Musk · Grace Hopper
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>S&apos;abonner</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontFamily: "sans-serif" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: "#000", color: "#fff", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "2px solid #000", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#999", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span style={{ color: crimson }}>●</span>
        <span>Imprimé avec passion</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 11, name: "Venture Capital", category: "Fintech", description: "Premium VC fund with navy/green, metrics dashboard, thesis section", component: VentureCapital },
  { id: 12, name: "Digital Atelier", category: "Artistic", description: "Typography studio with cream bg, ochre accent, mixed serif/mono, manifesto", component: DigitalAtelier },
  { id: 13, name: "Neon Nightclub", category: "Playful", description: "Party energy with neon glows on black, club flyer aesthetic, lineup section", component: NeonNightclub },
  { id: 14, name: "Cozy Reader", category: "Editorial", description: "Ultimate reading experience with warm paper, chapters, bookshelf section", component: CozyReader },
  { id: 15, name: "Hyper Modern", category: "Showcase", description: "Cutting-edge design studio with huge type, asymmetric layout, red accent", component: HyperModern },
  { id: 16, name: "Banking Solid", category: "Fintech", description: "Serious neo bank with card mockup, security badges, emerald accent", component: BankingSolid },
  { id: 17, name: "Handcrafted", category: "Human", description: "Artisan warmth with terracotta, dashed borders, personal narrative", component: Handcrafted },
  { id: 18, name: "Space Station", category: "Tech", description: "Futuristic HUD with cyan on dark, instrument readings, monospace", component: SpaceStation },
  { id: 19, name: "Wellness Retreat", category: "Organic", description: "Premium wellness with sage/blush/sand, pebble cards, meditation feel", component: WellnessRetreat },
  { id: 20, name: "Magazine Cover", category: "Editorial", description: "High-fashion magazine with massive serif, editorial columns, crimson accent", component: MagazineCover },
];
