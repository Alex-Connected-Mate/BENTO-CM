"use client";
import Link from "next/link";
import React from "react";
import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 21 — Architecture Studio (Branding)
   ============================================================ */
const ArchitectureStudio: React.FC = () => {
  const copper = "#B87333";
  return (
    <div style={{ minHeight: "100vh", background: "#F2F0ED", color: "#2A2A2A", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 60px" }}>
        <span style={{ fontSize: "13px", fontWeight: 300, letterSpacing: "0.3em", textTransform: "uppercase" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", fontWeight: 300 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 60px 80px", position: "relative" }}>
        {/* Geometric line drawing */}
        <div style={{ position: "absolute", top: "60px", right: "80px", width: "250px", height: "250px", border: `1px solid ${copper}33` }} />
        <div style={{ position: "absolute", top: "90px", right: "110px", width: "190px", height: "190px", border: `1px solid ${copper}22` }} />
        <h1 style={{ fontSize: "clamp(48px, 6vw, 72px)", fontWeight: 200, lineHeight: 1.15, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
          Connecter les idées,
          <br />
          <span style={{ color: copper }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#888", maxWidth: "440px", margin: "0 0 40px", fontWeight: 300 }}>
          Architecture de l&apos;innovation. Chaque projet est une structure pensée pour durer.
        </p>
        <div style={{ display: "inline-block", padding: "12px 36px", border: `1px solid ${copper}`, color: copper, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 300, cursor: "pointer" }}>
          Voir les projets
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section style={{ padding: "60px", borderTop: "1px solid #ddd" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginBottom: "40px", fontWeight: 300 }}>Projets sélectionnés</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#ddd" }}>
          {[{ n: "01", v: "50+", l: "Conférences" }, { n: "02", v: "100+", l: "Épisodes" }, { n: "03", v: "5", l: "Applications" }].map((s) => (
            <div key={s.n} style={{ background: "#F2F0ED", padding: "40px" }}>
              <div style={{ fontSize: "11px", color: copper, marginBottom: "12px" }}>{s.n}</div>
              <div style={{ fontSize: "40px", fontWeight: 200 }}>{s.v}</div>
              <div style={{ fontSize: "12px", color: "#999", marginTop: "4px", fontWeight: 300 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 60px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#ddd" }}>
          {[
            { n: "01", title: "Keynotes", desc: "Des structures narratives qui élèvent la pensée architecturale de l&apos;innovation." },
            { n: "02", title: "Podcasts", desc: "Conversations fondatrices avec les bâtisseurs du futur numérique." },
            { n: "03", title: "Apps", desc: "Applications construites avec la précision d&apos;un plan d&apos;architecte." },
            { n: "04", title: "Blog", desc: "Réflexions structurelles sur les fondations de la technologie." },
          ].map((f) => (
            <div key={f.n} style={{ background: "#F2F0ED", padding: "40px" }}>
              <span style={{ fontSize: "11px", color: copper }}>{f.n}</span>
              <h3 style={{ fontSize: "20px", fontWeight: 300, margin: "12px 0 8px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#888", margin: 0, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid #ccc", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 300, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 60px", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#aaa", fontWeight: 300 }}>
        <span>© 2024 Connected Mate</span>
        <span>Atelier d&apos;architecture numérique</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 22 — Crypto Exchange (Fintech)
   ============================================================ */
const CryptoExchange: React.FC = () => {
  const green = "#22C55E";
  return (
    <div style={{ minHeight: "100vh", background: "#111827", color: "#F3F4F6", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid #1F2937" }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", alignItems: "center", fontSize: "13px", color: "#6B7280" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "8px 20px", background: green, color: "#000", border: "none", borderRadius: "6px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>Trader</button>
        </div>
      </nav>

      <section style={{ padding: "80px 40px 60px" }}>
        <h1 style={{ fontSize: "52px", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
          L&apos;échange du{" "}
          <span style={{ color: green }}>futur</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#6B7280", maxWidth: "500px", margin: "0 0 32px" }}>
          Connecter les idées et inspirer le futur de la finance décentralisée.
        </p>
        <button style={{ padding: "12px 32px", background: green, color: "#000", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 700, cursor: "pointer" }}>
          Commencer à trader
        </button>
      </section>

      {/* TICKER */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", padding: "0 40px 60px" }}>
        {[{ v: "50+", l: "Conférences", d: "▲ 12.4%", c: green }, { v: "100+", l: "Épisodes", d: "▲ 45.2%", c: green }, { v: "5", l: "Apps", d: "▲ 200%", c: green }].map((s) => (
          <div key={s.l} style={{ background: "#1F2937", borderRadius: "12px", padding: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: 800 }}>{s.v}</div>
              <span style={{ fontSize: "13px", color: s.c, fontWeight: 600 }}>{s.d}</span>
            </div>
            <div style={{ fontSize: "13px", color: "#6B7280", marginTop: "8px" }}>{s.l}</div>
            {/* Mini chart lines */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", marginTop: "16px", height: "32px" }}>
              {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: `${green}${i > 6 ? "88" : "33"}`, borderRadius: "2px" }} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* MARKET OVERVIEW */}
      <section style={{ padding: "0 40px 60px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7280", marginBottom: "20px" }}>Vue du marché</div>
        {[
          { title: "Keynotes", desc: "Analyses en temps réel des tendances innovation.", tag: "LIVE" },
          { title: "Podcasts", desc: "Interviews de traders et innovateurs.", tag: "100+ EP" },
          { title: "Apps", desc: "Outils de trading et analytics avancés.", tag: "NEW" },
          { title: "Blog", desc: "Rapports de marché et prédictions.", tag: "DAILY" },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1px solid #1F2937" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, margin: 0 }}>{f.title}</h3>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0, flex: 1, marginLeft: "32px" }}>{f.desc}</p>
            <span style={{ fontSize: "11px", color: green, fontWeight: 600, padding: "4px 10px", background: `${green}15`, borderRadius: "4px" }}>{f.tag}</span>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px 40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: "#1F2937", borderRadius: "6px", fontSize: "13px", color: "#9CA3AF", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: "1px solid #1F2937", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#4B5563" }}>
        <span>© 2024 Connected Mate</span>
        <span>Trade responsibly</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 23 — Pop Art Studio (Artistic)
   ============================================================ */
const PopArtStudio: React.FC = () => {
  const red = "#FF0050";
  const blue = "#00B4D8";
  const yellow = "#FFD60A";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "'Impact', 'Arial Black', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", background: yellow, borderBottom: "3px solid #000" }}>
        <span style={{ fontSize: "20px", fontWeight: 900, textTransform: "uppercase" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "14px", textTransform: "uppercase" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", background: "#fff", padding: "6px 16px", border: "2px solid #000" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — speech bubble */}
      <section style={{ textAlign: "center", padding: "80px 40px 60px", background: `radial-gradient(circle, #00000008 1px, transparent 1px)`, backgroundSize: "16px 16px" }}>
        <div style={{ display: "inline-block", background: "#fff", border: "3px solid #000", borderRadius: "40px", padding: "48px 64px", position: "relative" }}>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.0, margin: 0, textTransform: "uppercase" }}>
            <span style={{ color: red }}>Connecter</span>
            <br />les idées !
          </h1>
          {/* Speech bubble tail */}
          <div style={{ position: "absolute", bottom: "-20px", left: "40%", width: "40px", height: "40px", background: "#fff", borderBottom: "3px solid #000", borderRight: "3px solid #000", transform: "rotate(45deg)" }} />
        </div>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#666", maxWidth: "400px", margin: "40px auto 32px", fontFamily: "sans-serif" }}>
          Inspirer le futur avec du POP, de la couleur et de l&apos;énergie !
        </p>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "40px", flexWrap: "wrap" }}>
        {[{ v: "50+", l: "Conférences", c: red }, { v: "100+", l: "Épisodes", c: blue }, { v: "5", l: "Apps", c: yellow }].map((s) => (
          <div key={s.l} style={{ background: s.c, border: "3px solid #000", padding: "24px 40px", textAlign: "center", transform: `rotate(${(Math.random() - 0.5) * 6}deg)` }}>
            <div style={{ fontSize: "42px", fontWeight: 900, color: s.c === yellow ? "#000" : "#fff" }}>{s.v}</div>
            <div style={{ fontSize: "13px", textTransform: "uppercase", color: s.c === yellow ? "#000" : "#fff", fontFamily: "sans-serif", fontWeight: 700 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES — polaroid style */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px", padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
        {[
          { title: "KEYNOTES", desc: "Des conférences POP qui explosent les conventions !", c: red, r: -2 },
          { title: "PODCASTS", desc: "100+ épisodes colorés et punchy !", c: blue, r: 1.5 },
          { title: "APPS", desc: "Des apps avec du BANG et du BOOM !", c: yellow, r: -1 },
          { title: "BLOG", desc: "Articles hauts en couleur !", c: red, r: 2 },
        ].map((f) => (
          <div key={f.title} style={{ background: "#fff", border: "3px solid #000", padding: "24px", paddingBottom: "48px", transform: `rotate(${f.r}deg)`, boxShadow: "4px 4px 0 #000" }}>
            <div style={{ background: f.c, height: "80px", border: "2px solid #000", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "24px", fontWeight: 900, color: f.c === yellow ? "#000" : "#fff", textTransform: "uppercase" }}>{f.title}</span>
            </div>
            <p style={{ fontSize: "14px", color: "#444", margin: 0, fontFamily: "sans-serif" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px 40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {[{ n: "Twitter", c: blue }, { n: "LinkedIn", c: red }, { n: "YouTube", c: yellow }, { n: "GitHub", c: "#000" }].map((s) => (
            <span key={s.n} style={{ padding: "10px 24px", background: s.c, color: s.c === yellow ? "#000" : "#fff", border: "2px solid #000", fontSize: "13px", fontWeight: 900, textTransform: "uppercase", cursor: "pointer" }}>{s.n}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: "3px solid #000", textAlign: "center", fontSize: "13px", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · POP!
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 24 — Slow Living (Human)
   ============================================================ */
const SlowLiving: React.FC = () => {
  const olive = "#808A5B";
  return (
    <div style={{ minHeight: "100vh", background: "#F5F0E8", color: "#3B3733", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 60px" }}>
        <span style={{ fontSize: "16px", fontWeight: 400, color: olive, fontStyle: "italic" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "14px", color: "#8B8378", fontFamily: "sans-serif", fontWeight: 300 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "120px 60px 100px", maxWidth: "680px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "44px", fontWeight: 400, lineHeight: 1.4, margin: "0 0 32px" }}>
          Connecter les idées,
          <br />
          <em style={{ color: olive }}>inspirer le futur</em>
        </h1>
        <p style={{ fontSize: "19px", lineHeight: 2.2, color: "#7A7570", margin: "0 0 48px", fontWeight: 300 }}>
          Prenez le temps. Respirez. Les meilleures idées viennent quand on leur laisse l&apos;espace de grandir. Nous croyons en une innovation qui respecte le rythme humain.
        </p>
        <button style={{ padding: "16px 48px", background: olive, color: "#fff", border: "none", borderRadius: "2px", fontSize: "14px", fontFamily: "sans-serif", fontWeight: 300, letterSpacing: "0.1em", cursor: "pointer" }}>
          Prendre le temps
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "80px", padding: "60px", borderTop: "1px solid #D4CFC6", borderBottom: "1px solid #D4CFC6" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 300, color: olive }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B8378", marginTop: "8px", fontFamily: "sans-serif", fontWeight: 300 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* MANIFESTO */}
      <section style={{ padding: "120px 60px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", lineHeight: 1.7, color: olive }}>
          &ldquo;L&apos;innovation la plus profonde naît du silence et de la patience. Nous construisons lentement, pour que cela dure éternellement.&rdquo;
        </p>
      </section>

      <section style={{ padding: "0 60px 120px", maxWidth: "680px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences qui prennent le temps de développer une pensée, sans se presser. Chaque mot est pesé." },
          { title: "Podcasts", desc: "Des conversations longues et profondes, où le silence fait partie de la discussion." },
          { title: "Apps", desc: "Des applications qui respectent votre attention et ne cherchent pas à vous capturer." },
          { title: "Blog", desc: "Des textes longs, réfléchis, écrits avec le soin d&apos;un artisan. À lire au rythme qui vous convient." },
        ].map((f) => (
          <div key={f.title} style={{ marginBottom: "48px", paddingBottom: "48px", borderBottom: "1px solid #D4CFC6" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 400, margin: "0 0 16px" }}>{f.title}</h3>
            <p style={{ fontSize: "17px", lineHeight: 2.2, color: "#7A7570", margin: 0, fontWeight: 300 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontFamily: "sans-serif" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid #D4CFC6", fontSize: "13px", color: "#8B8378", fontWeight: 300, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "32px 60px", borderTop: "1px solid #D4CFC6", textAlign: "center", fontSize: "13px", color: "#aaa", fontFamily: "sans-serif", fontWeight: 300 }}>
        © 2024 Connected Mate · Lentement mais sûrement
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 25 — Game UI (Playful/Gaming)
   ============================================================ */
const GameUI: React.FC = () => {
  const red = "#FF3E3E";
  const gold = "#FFD700";
  return (
    <div style={{ minHeight: "100vh", background: "#151520", color: "#fff", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: `2px solid ${red}33` }}>
        <span style={{ fontSize: "18px", fontWeight: 900, color: gold }}>⚔ CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 40px 60px" }}>
        <div style={{ fontSize: "12px", color: gold, letterSpacing: "0.2em", marginBottom: "16px" }}>★ NIVEAU MAX DÉBLOQUÉ ★</div>
        <h1 style={{ fontSize: "52px", fontWeight: 900, lineHeight: 1.1, margin: "0 0 20px", textTransform: "uppercase" }}>
          <span style={{ color: red }}>Connecter</span> les idées
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#666", maxWidth: "460px", margin: "0 auto 32px" }}>
          Inspirer le futur. Complétez les quêtes. Gagnez de l&apos;XP. Devenez un héros de l&apos;innovation.
        </p>
        <button style={{ padding: "14px 40px", background: red, color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", boxShadow: `0 4px 0 #aa0000` }}>
          ▶ Jouer
        </button>
      </section>

      {/* XP / STATS as game metrics */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "0 40px 60px" }}>
        {[{ v: "50+", l: "Conférences", xp: "5000 XP" }, { v: "100+", l: "Épisodes", xp: "10000 XP" }, { v: "5", l: "Applications", xp: "2500 XP" }].map((s) => (
          <div key={s.l} style={{ background: "#1E1E30", border: `1px solid ${gold}33`, borderRadius: "8px", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 900, color: gold }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>{s.l}</div>
            <div style={{ marginTop: "12px", height: "6px", background: "#2A2A40", borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: "75%", background: `linear-gradient(90deg, ${red}, ${gold})`, borderRadius: "3px" }} />
            </div>
            <div style={{ fontSize: "11px", color: gold, marginTop: "4px" }}>{s.xp}</div>
          </div>
        ))}
      </section>

      {/* QUEST CARDS */}
      <section style={{ padding: "0 40px 60px" }}>
        <div style={{ fontSize: "12px", color: gold, letterSpacing: "0.2em", marginBottom: "20px" }}>⚡ QUÊTES DISPONIBLES</div>
        {[
          { title: "Keynotes", desc: "Assistez à 5 conférences pour débloquer le badge Expert.", rarity: "LÉGENDAIRE", c: gold },
          { title: "Podcasts", desc: "Écoutez 50 épisodes pour obtenir le titre d&apos;Auditeur d&apos;Élite.", rarity: "ÉPIQUE", c: "#a855f7" },
          { title: "Apps", desc: "Testez toutes les applications pour un bonus de 1000 XP.", rarity: "RARE", c: "#3b82f6" },
          { title: "Blog", desc: "Lisez 20 articles pour compléter la quête du Savoir.", rarity: "COMMUN", c: "#22c55e" },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "#1E1E30", border: `1px solid ${f.c}33`, borderRadius: "8px", marginBottom: "8px" }}>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 4px" }}>{f.title}</h3>
              <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>{f.desc}</p>
            </div>
            <span style={{ fontSize: "10px", color: f.c, fontWeight: 700, letterSpacing: "0.1em", padding: "4px 10px", border: `1px solid ${f.c}44`, borderRadius: "4px" }}>{f.rarity}</span>
          </div>
        ))}
      </section>

      {/* LEADERBOARD */}
      <section style={{ padding: "0 40px 60px" }}>
        <div style={{ fontSize: "12px", color: red, letterSpacing: "0.2em", marginBottom: "16px" }}>🏆 CLASSEMENT</div>
        {["Innovation Master — 50,000 XP", "Tech Explorer — 35,000 XP", "Podcast Addict — 28,000 XP"].map((e, i) => (
          <div key={e} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderBottom: "1px solid #1E1E30" }}>
            <span style={{ fontSize: "18px", fontWeight: 900, color: i === 0 ? gold : "#666", width: "32px" }}>#{i + 1}</span>
            <span style={{ fontSize: "14px" }}>{e}</span>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: "#1E1E30", borderRadius: "4px", fontSize: "13px", color: "#888", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: `1px solid ${red}22`, textAlign: "center", fontSize: "12px", color: "#444" }}>
        © 2024 Connected Mate · GG WP
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 26 — Premium Streaming (Editorial/Entertainment)
   ============================================================ */
const PremiumStreaming: React.FC = () => {
  const red = "#E50914";
  return (
    <div style={{ minHeight: "100vh", background: "#141414", color: "#fff", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px" }}>
        <span style={{ fontSize: "22px", fontWeight: 900, color: red }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#999" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* FEATURED */}
      <section style={{ padding: "60px 40px 40px", background: "linear-gradient(180deg, #141414 0%, #1a1a2e 50%, #141414 100%)" }}>
        <div style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "12px", color: red, fontWeight: 700, letterSpacing: "0.1em", marginBottom: "12px" }}>★ À LA UNE</div>
          <h1 style={{ fontSize: "56px", fontWeight: 900, lineHeight: 1.05, margin: "0 0 16px" }}>
            Connecter les idées, inspirer le futur
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#999", maxWidth: "500px", margin: "0 0 28px" }}>
            Plongez dans un univers de contenus premium : conférences, podcasts et applications qui transforment votre vision du monde.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ padding: "12px 32px", background: "#fff", color: "#000", border: "none", borderRadius: "4px", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}>▶ Lecture</button>
            <button style={{ padding: "12px 32px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "none", borderRadius: "4px", fontSize: "15px", cursor: "pointer" }}>ℹ Plus d&apos;infos</button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", gap: "32px", padding: "40px", justifyContent: "center" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 800 }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#666" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* TRENDING */}
      <section style={{ padding: "0 40px 60px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px" }}>Tendances du moment</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {[
            { n: "1", title: "Keynotes", desc: "Conférences inspirantes sur l&apos;IA et l&apos;innovation." },
            { n: "2", title: "Podcasts", desc: "Les conversations les plus écoutées cette semaine." },
            { n: "3", title: "Apps", desc: "Applications les plus téléchargées du mois." },
            { n: "4", title: "Blog", desc: "Articles les plus lus de la communauté." },
          ].map((f) => (
            <div key={f.n} style={{ background: "#1E1E2E", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ height: "120px", background: `linear-gradient(135deg, ${red}44, #1E1E2E)`, display: "flex", alignItems: "flex-end", padding: "12px" }}>
                <span style={{ fontSize: "48px", fontWeight: 900, color: "rgba(255,255,255,0.15)", lineHeight: 1 }}>{f.n}</span>
              </div>
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 4px" }}>{f.title}</h3>
                <p style={{ fontSize: "12px", color: "#888", margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP 10 */}
      <section style={{ padding: "0 40px 60px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "16px" }}>Top 10 cette semaine</h2>
        {["Keynote IA Générative", "Podcast: Futur du Travail", "App: Innovation Hub", "Blog: Tendances 2024", "Keynote: Design Thinking"].map((item, i) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "12px 0", borderBottom: "1px solid #1E1E2E" }}>
            <span style={{ fontSize: "32px", fontWeight: 900, color: "rgba(255,255,255,0.1)", width: "48px" }}>{i + 1}</span>
            <span style={{ fontSize: "15px" }}>{item}</span>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", fontSize: "13px", color: "#999", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: "1px solid #222", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#444" }}>
        <span>© 2024 Connected Mate</span>
        <span>Streaming Premium</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 27 — Design System (Showcase/Tool)
   ============================================================ */
const DesignSystem: React.FC = () => {
  const indigo = "#6366F1";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#18181B", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", borderBottom: "1px solid #E4E4E7" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: indigo }} />
          <span style={{ fontSize: "15px", fontWeight: 600 }}>Connected Mate</span>
          <span style={{ fontSize: "11px", background: `${indigo}15`, color: indigo, padding: "2px 8px", borderRadius: "100px", fontWeight: 600 }}>v2.0</span>
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "#71717A" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <span style={{ color: indigo, fontWeight: 600 }}>Documentation →</span>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 40px 40px" }}>
        <span style={{ fontSize: "12px", color: indigo, fontWeight: 600, background: `${indigo}11`, padding: "4px 12px", borderRadius: "100px" }}>Nouveau : Design System v2.0</span>
        <h1 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.15, margin: "20px 0 16px", letterSpacing: "-0.03em" }}>
          Connecter les idées,
          <br />
          <span style={{ color: indigo }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#71717A", maxWidth: "480px", margin: "0 auto 32px" }}>
          Un système de composants pensé pour les créateurs. Construisez plus vite, plus beau.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button style={{ padding: "10px 24px", background: indigo, color: "#fff", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Commencer</button>
          <div style={{ padding: "10px 24px", background: "#18181B", color: "#A1A1AA", borderRadius: "8px", fontSize: "13px", fontFamily: "monospace" }}>npm install @cm/ui</div>
        </div>
      </section>

      {/* COMPONENT PREVIEW */}
      <section style={{ padding: "40px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ background: "#FAFAFA", border: "1px solid #E4E4E7", borderRadius: "12px", padding: "32px" }}>
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
            <div style={{ padding: "8px 20px", background: indigo, color: "#fff", borderRadius: "6px", fontSize: "13px", fontWeight: 600 }}>Button</div>
            <div style={{ padding: "8px 20px", background: "#fff", border: "1px solid #E4E4E7", borderRadius: "6px", fontSize: "13px" }}>Secondary</div>
            <div style={{ padding: "8px 20px", background: "#fff", border: "1px solid #E4E4E7", borderRadius: "6px", fontSize: "13px", color: "#71717A" }}>Ghost</div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <div style={{ flex: 1, padding: "16px", background: "#fff", border: "1px solid #E4E4E7", borderRadius: "8px", fontSize: "13px" }}>Card Component</div>
            <div style={{ flex: 1, padding: "16px", background: "#fff", border: "1px solid #E4E4E7", borderRadius: "8px", fontSize: "13px" }}>Input Field</div>
          </div>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: indigo }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#A1A1AA", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", padding: "0 40px 60px", maxWidth: "800px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Présentations techniques sur les meilleures pratiques de design system." },
          { title: "Podcasts", desc: "Conversations avec les créateurs des meilleurs outils de design." },
          { title: "Apps", desc: "Applications construites avec notre système de composants." },
          { title: "Blog", desc: "Documentation, tutoriels et guides pour les développeurs." },
        ].map((f) => (
          <div key={f.title} style={{ border: "1px solid #E4E4E7", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#71717A", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", border: "1px solid #E4E4E7", borderRadius: "8px", fontSize: "13px", color: "#71717A", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: "1px solid #E4E4E7", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#A1A1AA" }}>
        <span>© 2024 Connected Mate</span>
        <span>Built with ♥ for developers</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 28 — Wellness Tea Brand (Organic)
   ============================================================ */
const WellnessTea: React.FC = () => {
  const matcha = "#7BA05B";
  const stone = "#C9B99A";
  const leaf = "#3D5A3E";
  return (
    <div style={{ minHeight: "100vh", background: "#FEFDF8", color: "#2D2B26", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 400, color: leaf }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#8B8378", fontFamily: "sans-serif" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 48px 60px" }}>
        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: `${matcha}22`, margin: "0 auto 24px" }} />
        <h1 style={{ fontSize: "44px", fontWeight: 400, lineHeight: 1.3, margin: "0 0 20px", color: leaf }}>
          Connecter les idées,
          <br />
          <em>inspirer le futur</em>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.9, color: "#8B8378", maxWidth: "500px", margin: "0 auto 32px", fontFamily: "sans-serif" }}>
          Comme une infusion parfaite, nos idées prennent le temps de se révéler. Savourez chaque moment.
        </p>
        <button style={{ padding: "14px 40px", background: matcha, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontFamily: "sans-serif", cursor: "pointer" }}>
          Découvrir le rituel
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: `${matcha}11`, borderRadius: "50%", width: "130px", height: "130px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: "28px", color: leaf }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#8B8378", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* RITUAL */}
      <section style={{ textAlign: "center", padding: "80px 48px", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: matcha, marginBottom: "20px", fontFamily: "sans-serif" }}>Le rituel</div>
        <p style={{ fontSize: "22px", fontStyle: "italic", lineHeight: 1.7, color: leaf }}>
          &ldquo;Préparez votre tasse. Respirez l&apos;arôme. Laissez les idées infuser. Le futur se construit dans la patience.&rdquo;
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", padding: "0 48px 80px", maxWidth: "800px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Infusions d&apos;idées avec les maîtres de l&apos;innovation.", bg: `${matcha}11` },
          { title: "Podcasts", desc: "Conversations qui se dégustent lentement, comme un bon thé.", bg: `${stone}33` },
          { title: "Apps", desc: "Applications naturelles, simples, essentielles.", bg: `${matcha}11` },
          { title: "Blog", desc: "Réflexions de saison sur la technologie et la nature.", bg: `${stone}33` },
        ].map((f) => (
          <div key={f.title} style={{ background: f.bg, borderRadius: "40px", padding: "36px", textAlign: "center" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 400, margin: "0 0 8px", color: leaf }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#8B8378", margin: 0, fontFamily: "sans-serif" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: matcha, color: "#fff", borderRadius: "100px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${stone}44`, textAlign: "center", fontSize: "13px", color: "#8B8378", fontFamily: "sans-serif" }}>
        © 2024 Connected Mate · 🍵
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 29 — Tech Conference (Branding/Event)
   ============================================================ */
const TechConference: React.FC = () => {
  const violet = "#7C3AED";
  const cyan = "#06B6D4";
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700, background: `linear-gradient(135deg, ${violet}, ${cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CONNECTED MATE CONF</span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "13px", color: "#666" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "8px 20px", background: `linear-gradient(135deg, ${violet}, ${cyan})`, color: "#fff", border: "none", borderRadius: "6px", fontSize: "13px", fontWeight: 700, cursor: "pointer" }}>Tickets</button>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "100px 40px 60px" }}>
        <div style={{ fontSize: "14px", color: cyan, letterSpacing: "0.2em", marginBottom: "20px" }}>15-17 MARS 2024 · PARIS</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 24px", background: `linear-gradient(135deg, ${violet}, ${cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Connecter les idées,
          <br />
          inspirer le futur
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#888", maxWidth: "500px", margin: "0 auto 36px" }}>
          La plus grande conférence tech francophone. 3 jours d&apos;innovation, d&apos;inspiration et de connexions.
        </p>
        <button style={{ padding: "16px 48px", background: `linear-gradient(135deg, ${violet}, ${cyan})`, color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
          Réserver votre place →
        </button>
      </section>

      {/* COUNTDOWN-STYLE STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "32px", padding: "60px 40px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Speakers" }, { v: "5", l: "Scènes" }].map((s) => (
          <div key={s.l} style={{ background: "#111", borderRadius: "12px", padding: "32px 40px", textAlign: "center", border: `1px solid ${violet}33` }}>
            <div style={{ fontSize: "40px", fontWeight: 900, background: `linear-gradient(135deg, ${violet}, ${cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#666", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* SPEAKER CARDS */}
      <section style={{ padding: "0 40px 60px" }}>
        <div style={{ fontSize: "12px", color: violet, letterSpacing: "0.2em", marginBottom: "20px" }}>PROGRAMME</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
          {[
            { title: "Keynotes", desc: "Les plus grands visionnaires de la tech sur scène.", time: "Jour 1" },
            { title: "Podcasts", desc: "Enregistrements live avec les meilleurs créateurs.", time: "Jour 2" },
            { title: "Apps", desc: "Démonstrations et lancements produits exclusifs.", time: "Jour 2" },
            { title: "Blog", desc: "Ateliers d&apos;écriture tech et sessions interactives.", time: "Jour 3" },
          ].map((f) => (
            <div key={f.title} style={{ background: "#111", borderRadius: "12px", padding: "28px", border: `1px solid ${violet}22` }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}>{f.title}</h3>
                <span style={{ fontSize: "12px", color: cyan }}>{f.time}</span>
              </div>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#888", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: "#111", border: `1px solid ${violet}33`, borderRadius: "6px", fontSize: "13px", color: "#999", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: "1px solid #222", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#444" }}>
        <span>© 2024 Connected Mate Conf</span>
        <span>Paris, France</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 30 — Neighborhood Café (Human/Local)
   ============================================================ */
const NeighborhoodCafe: React.FC = () => {
  const coffee = "#3E2723";
  const espresso = "#6D4C41";
  const foam = "#F5E6D3";
  return (
    <div style={{ minHeight: "100vh", background: "#FFF8EE", color: coffee, fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: espresso }}>Connected Mate Café</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#8B7B6B" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 48px 60px" }}>
        <div style={{ fontSize: "14px", color: espresso, marginBottom: "20px" }}>☕ Bienvenue chez nous</div>
        <h1 style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1.3, margin: "0 0 24px" }}>
          Connecter les idées,
          <br />
          <span style={{ color: espresso, textDecoration: "underline", textDecorationStyle: "wavy" as const, textUnderlineOffset: "8px", textDecorationColor: `${espresso}44` }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.9, color: "#8B7B6B", maxWidth: "500px", margin: "0 auto 32px" }}>
          Un café où les idées se partagent comme un bon espresso. Tirez une chaise, installez-vous.
        </p>
        <button style={{ padding: "14px 36px", background: espresso, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", cursor: "pointer" }}>
          Voir le menu
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: espresso }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B7B6B", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* OUR STORY */}
      <section style={{ padding: "60px 48px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "20px" }}>Notre histoire</div>
        <p style={{ fontSize: "18px", lineHeight: 1.9, fontStyle: "italic", color: "#666" }}>
          Tout a commencé dans un petit café du Marais. Deux amis, une conversation sur l&apos;avenir, et l&apos;envie de partager ces idées avec le monde entier.
        </p>
      </section>

      {/* CHALKBOARD SECTION */}
      <section style={{ background: "#2C2018", color: foam, padding: "60px 48px", margin: "40px 48px", borderRadius: "16px" }}>
        <div style={{ textAlign: "center", fontSize: "14px", letterSpacing: "0.2em", marginBottom: "32px" }}>— LE MENU DU JOUR —</div>
        {[
          { title: "Keynotes", desc: "Conférences fraîchement préparées", dots: "·" },
          { title: "Podcasts", desc: "Conversations torréfiées avec soin", dots: "·" },
          { title: "Apps", desc: "Applications maison, recettes secrètes", dots: "·" },
          { title: "Blog", desc: "Articles écrits à la main, comme avant", dots: "·" },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: `1px dashed ${foam}33` }}>
            <span style={{ fontWeight: 700 }}>{f.title}</span>
            <span style={{ flex: 1, textAlign: "center", color: `${foam}44`, overflow: "hidden", margin: "0 12px" }}>{f.dots.repeat(40)}</span>
            <span style={{ fontSize: "14px", opacity: 0.7 }}>{f.desc}</span>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>Retrouvez-nous</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: espresso, color: "#fff", borderRadius: "100px", fontSize: "13px", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${espresso}22`, textAlign: "center", fontSize: "13px", color: "#8B7B6B" }}>
        © 2024 Connected Mate Café · Ouvert 7j/7
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 21, name: "Architecture Studio", category: "Branding", description: "Architectural precision with copper accent, thin typography, geometric line drawings", component: ArchitectureStudio },
  { id: 22, name: "Crypto Exchange", category: "Fintech", description: "Dark trading platform with neon green, ticker stats, mini chart bars", component: CryptoExchange },
  { id: 23, name: "Pop Art Studio", category: "Artistic", description: "Warhol-inspired with bold colors, speech bubbles, Ben-Day dots, polaroid cards", component: PopArtStudio },
  { id: 24, name: "Slow Living", category: "Human", description: "Intentional slow living with extreme spacing, olive accent, manifesto section", component: SlowLiving },
  { id: 25, name: "Game UI", category: "Playful", description: "Video game aesthetic with XP bars, quest cards, leaderboard, gaming red/gold", component: GameUI },
  { id: 26, name: "Premium Streaming", category: "Editorial", description: "Netflix-style dark with red accent, trending grid, top 10 list", component: PremiumStreaming },
  { id: 27, name: "Design System", category: "Showcase", description: "Developer tool with indigo accent, component previews, code snippets, version badge", component: DesignSystem },
  { id: 28, name: "Wellness Tea Brand", category: "Organic", description: "Matcha green and stone, organic pebble shapes, tea ritual section", component: WellnessTea },
  { id: 29, name: "Tech Conference", category: "Branding", description: "Event site with violet-to-cyan gradients, speaker cards, countdown stats", component: TechConference },
  { id: 30, name: "Neighborhood Café", category: "Human", description: "Local café with coffee tones, chalkboard section, wavy underlines, community warmth", component: NeighborhoodCafe },
];
