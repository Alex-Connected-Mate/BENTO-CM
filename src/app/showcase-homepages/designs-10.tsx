"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 91 — Neon Sign (Bar/Nightlife)
   ============================================================ */
const NeonSign: React.FC = () => {
  const neonPink = "#FF1493";
  const neonBlue = "#00BFFF";
  return (
    <div style={{ minHeight: "100vh", background: "#111", color: "#fff", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "16px", color: neonPink, textShadow: `0 0 10px ${neonPink}66, 0 0 20px ${neonPink}33` }}>CM Bar</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#555", fontFamily: "sans-serif" }}>
          {["Menu", "Events", "Happy Hour", "Book"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 80px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 110px)", fontWeight: 400, lineHeight: 1.05, margin: 0, fontStyle: "italic", color: neonPink, textShadow: `0 0 20px ${neonPink}66, 0 0 40px ${neonPink}33, 0 0 80px ${neonPink}22` }}>
          Open
          <br />
          <span style={{ color: neonBlue, textShadow: `0 0 20px ${neonBlue}66, 0 0 40px ${neonBlue}33` }}>Tonight</span>
        </h1>
        <p style={{ fontSize: "15px", color: "#555", maxWidth: "440px", margin: "32px auto 0", lineHeight: 1.8, fontFamily: "sans-serif" }}>
          Un cocktail d&apos;idées, une ambiance unique. Connected Mate ouvre ses portes pour une nuit d&apos;inspiration.
        </p>
        <button style={{ marginTop: "36px", padding: "14px 40px", background: "transparent", color: neonPink, border: `1px solid ${neonPink}`, fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", textShadow: `0 0 10px ${neonPink}44` }}>
          Réserver une table
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", margin: "0 48px" }}>
        {[{ n: "Keynotes", c: neonPink }, { n: "Podcasts", c: neonBlue }, { n: "Apps", c: neonPink }].map((item) => (
          <div key={item.n} style={{ background: "#1A1A1A", padding: "40px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontStyle: "italic", color: item.c, textShadow: `0 0 10px ${item.c}44` }}>{item.n}</div>
            <div style={{ fontSize: "11px", color: "#444", marginTop: "8px", fontFamily: "sans-serif" }}>Au menu</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "12px", color: "#333", fontFamily: "sans-serif" }}>
        <span>© 2024 CM Bar — Last call: never</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 92 — Stained Glass (Religious Art/Artistic)
   ============================================================ */
const StainedGlass: React.FC = () => {
  const ruby = "#9B111E";
  const sapphire = "#0F52BA";
  const amber = "#FFBF00";
  return (
    <div style={{ minHeight: "100vh", background: "#1A1A1A", color: "#D4C5A9", fontFamily: "'Palatino', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "center", padding: "36px 48px", gap: "40px", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#666", fontFamily: "sans-serif" }}>
        {["Rosace", "Nef", "Transept", "Chœur"].map((t) => (
          <span key={t} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ padding: "80px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "32px" }}>
          {[ruby, sapphire, amber, ruby, sapphire].map((c, i) => (
            <div key={i} style={{ width: "20px", height: "40px", background: c, opacity: 0.6, borderRadius: "10px 10px 0 0" }} />
          ))}
        </div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.2, margin: 0, letterSpacing: "0.03em" }}>
          Lumière
          <br />
          <span style={{ color: amber }}>divine</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#777", maxWidth: "440px", margin: "28px auto 0", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Comme la lumière traverse le vitrail, nos idées illuminent le monde avec mille couleurs.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", maxWidth: "600px", margin: "40px auto" }}>
        {[{ v: "50+", l: "Vitraux", c: ruby }, { v: "100+", l: "Prières", c: sapphire }, { v: "5", l: "Chapelles", c: amber }].map((s) => (
          <div key={s.l} style={{ background: "#222", padding: "40px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 300, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#555", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "12px", color: "#444", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Lux Aeterna</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 93 — Comic Book (Pop Culture/Fun)
   ============================================================ */
const ComicBook: React.FC = () => {
  const red = "#E53E3E";
  const yellow = "#FFD600";
  return (
    <div style={{ minHeight: "100vh", background: "#FFF9DB", color: "#1A1A1A", fontFamily: "'Impact', 'Arial Black', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 48px", background: red, color: "#fff" }}>
        <span style={{ fontSize: "20px", letterSpacing: "0.05em" }}>CM COMICS</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "12px", fontFamily: "Arial, sans-serif", fontWeight: 700 }}>
          {["Issues", "Heroes", "Villains", "Shop"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "60px 48px 40px" }}>
        <div style={{ display: "inline-block", padding: "8px 24px", background: yellow, color: "#000", fontSize: "14px", fontWeight: 900, transform: "rotate(-2deg)", marginBottom: "24px" }}>POW!</div>
        <h1 style={{ fontSize: "clamp(56px, 9vw, 120px)", fontWeight: 900, lineHeight: 0.9, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          IDEAS
          <br />
          <span style={{ color: red }}>ASSEMBLE!</span>
        </h1>
        <p style={{ fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 400, color: "#888", maxWidth: "480px", marginTop: "20px", lineHeight: 1.7 }}>
          Chaque keynote est un super-héros. Chaque podcast est une aventure. Rejoignez la ligue des innovateurs.
        </p>
        <button style={{ marginTop: "24px", padding: "16px 40px", background: red, color: "#fff", border: "3px solid #000", fontSize: "16px", fontWeight: 900, textTransform: "uppercase", cursor: "pointer" }}>
          READ NOW!
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px", padding: "40px 48px", maxWidth: "800px" }}>
        {[{ n: "ISSUE #1", s: "50+ Keynotes", c: red }, { n: "ISSUE #2", s: "100+ Podcasts", c: yellow }, { n: "ISSUE #3", s: "5 Apps", c: red }].map((issue) => (
          <div key={issue.n} style={{ background: "#fff", border: "3px solid #000", padding: "24px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", fontFamily: "Arial, sans-serif", fontWeight: 700, color: issue.c === yellow ? "#000" : issue.c, marginBottom: "8px" }}>{issue.n}</div>
            <div style={{ fontSize: "18px", textTransform: "uppercase" }}>{issue.s}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "20px 48px", background: "#000", color: "#fff", fontSize: "12px", fontFamily: "Arial, sans-serif", display: "flex", justifyContent: "space-between" }}>
        <span>© 2024 CM Comics</span>
        <span style={{ color: yellow }}>TO BE CONTINUED...</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 94 — Mountain Lodge (Outdoor/Cabin)
   ============================================================ */
const MountainLodge: React.FC = () => {
  const pine = "#2D5016";
  const wood = "#8B6914";
  const snow = "#F5F5F0";
  return (
    <div style={{ minHeight: "100vh", background: snow, color: "#2C2C2C", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", background: pine, color: snow }}>
        <span style={{ fontSize: "16px", fontWeight: 400, letterSpacing: "0.1em" }}>CM Lodge</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", opacity: 0.7, fontFamily: "sans-serif" }}>
          {["Refuge", "Sentiers", "Bivouac", "Carte"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", maxWidth: "700px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: wood, fontFamily: "sans-serif", marginBottom: "20px" }}>ALT. 2 847 M</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.2, margin: 0, fontStyle: "italic" }}>
          Au sommet
          <br />
          des <span style={{ color: pine }}>idées</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#999", maxWidth: "440px", marginTop: "24px", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Loin du bruit de la vallée, nous grimpons vers les sommets de l&apos;innovation. L&apos;air est pur, les idées aussi.
        </p>
        <button style={{ marginTop: "28px", padding: "14px 36px", background: pine, color: snow, border: "none", fontSize: "13px", fontWeight: 600, fontFamily: "sans-serif", cursor: "pointer", borderRadius: "4px" }}>
          Prendre le sentier
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "700px" }}>
        {[{ v: "50+", l: "Sommets" }, { v: "100+", l: "Sentiers" }, { v: "5", l: "Refuges" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", padding: "32px 20px", textAlign: "center", border: `1px solid ${pine}22`, borderRadius: "8px" }}>
            <div style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", color: pine }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#bbb", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #ddd", fontSize: "12px", color: "#ccc", fontFamily: "sans-serif", marginTop: "40px" }}>
        <span>© 2024 CM Lodge — Altitude is attitude</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 95 — Typewriter Letter (Vintage/Personal)
   ============================================================ */
const TypewriterLetter: React.FC = () => {
  const ink = "#2C2C2C";
  const paper = "#FDF8F0";
  return (
    <div style={{ minHeight: "100vh", background: paper, color: ink, fontFamily: "'Courier New', 'Courier', monospace", margin: 0, padding: "48px" }}>
      <div style={{ maxWidth: "650px", margin: "0 auto" }}>
        <div style={{ textAlign: "right", fontSize: "13px", color: "#999", marginBottom: "40px" }}>
          Paris, le 11 Mars 2026
        </div>

        <div style={{ fontSize: "14px", marginBottom: "40px", color: "#aaa" }}>
          Connected Mate
          <br />
          12 Rue de l&apos;Innovation
          <br />
          75001 Paris
        </div>

        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 400, lineHeight: 1.4, margin: "0 0 32px" }}>
          Cher visiteur,
        </h1>

        <div style={{ fontSize: "16px", lineHeight: 2.2, marginBottom: "40px" }}>
          <p style={{ margin: "0 0 24px" }}>
            Nous avons le plaisir de vous informer que nos <strong>50+ keynotes</strong>, <strong>100+ podcasts</strong> et <strong>5 applications</strong> sont désormais à votre disposition.
          </p>
          <p style={{ margin: "0 0 24px" }}>
            Chaque mot tapé sur cette machine est une promesse : celle de connecter les idées pour inspirer le futur.
          </p>
          <p style={{ margin: 0 }}>
            Nous espérons que vous trouverez ici l&apos;inspiration que vous cherchez.
          </p>
        </div>

        <div style={{ fontSize: "16px", lineHeight: 2, marginBottom: "40px" }}>
          Bien cordialement,
          <br />
          <span style={{ fontStyle: "italic", fontSize: "20px" }}>Connected Mate</span>
        </div>

        <div style={{ borderTop: "1px solid #ddd", paddingTop: "16px", fontSize: "11px", color: "#ccc" }}>
          P.S. — Les meilleures idées naissent sur papier.
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 96 — Dashboard Analytics (Data/Business)
   ============================================================ */
const DashboardAnalytics: React.FC = () => {
  const blue = "#3B82F6";
  const green = "#10B981";
  return (
    <div style={{ minHeight: "100vh", background: "#0F172A", color: "#E2E8F0", fontFamily: "'Inter', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", background: "#1E293B", borderBottom: "1px solid #334155" }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>CM <span style={{ color: blue }}>Analytics</span></span>
        <div style={{ display: "flex", gap: "20px", fontSize: "13px", color: "#64748B" }}>
          {["Dashboard", "Reports", "Insights", "Settings"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "32px" }}>
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{ fontSize: "28px", fontWeight: 700, margin: "0 0 4px" }}>Bienvenue</h1>
          <p style={{ fontSize: "14px", color: "#64748B", margin: 0 }}>Vue d&apos;ensemble de vos performances</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "24px" }}>
          {[
            { v: "50+", l: "Keynotes", d: "+12%", c: green },
            { v: "100+", l: "Podcasts", d: "+24%", c: green },
            { v: "5", l: "Apps", d: "+2", c: blue },
            { v: "1.2M", l: "Vues totales", d: "+18%", c: green },
          ].map((stat) => (
            <div key={stat.l} style={{ background: "#1E293B", borderRadius: "12px", padding: "20px", border: "1px solid #334155" }}>
              <div style={{ fontSize: "12px", color: "#64748B", marginBottom: "8px" }}>{stat.l}</div>
              <div style={{ fontSize: "28px", fontWeight: 800 }}>{stat.v}</div>
              <div style={{ fontSize: "12px", color: stat.c, marginTop: "4px", fontWeight: 600 }}>{stat.d} ce mois</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px" }}>
          <div style={{ background: "#1E293B", borderRadius: "12px", padding: "20px", border: "1px solid #334155" }}>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>Activité récente</div>
            {["Nouveau keynote publié", "Podcast #103 en ligne", "App v2.4 déployée", "Blog post viral"].map((item, i) => (
              <div key={item} style={{ padding: "12px 0", borderTop: i > 0 ? "1px solid #334155" : "none", fontSize: "13px", color: "#94A3B8", display: "flex", justifyContent: "space-between" }}>
                <span>{item}</span>
                <span style={{ color: "#475569" }}>il y a {i + 1}h</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#1E293B", borderRadius: "12px", padding: "20px", border: "1px solid #334155" }}>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>Top catégories</div>
            {[{ n: "Tech", p: 85 }, { n: "Design", p: 72 }, { n: "Business", p: 58 }].map((cat) => (
              <div key={cat.n} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "6px" }}>
                  <span style={{ color: "#94A3B8" }}>{cat.n}</span>
                  <span style={{ color: blue }}>{cat.p}%</span>
                </div>
                <div style={{ height: "4px", background: "#334155", borderRadius: "4px" }}>
                  <div style={{ height: "100%", width: `${cat.p}%`, background: blue, borderRadius: "4px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================
   DESIGN 97 — Constellation Map (Astronomy/Poetic)
   ============================================================ */
const ConstellationMap: React.FC = () => {
  const star = "#FFD700";
  return (
    <div style={{ minHeight: "100vh", background: "radial-gradient(ellipse at center, #0D1B2A 0%, #000 100%)", color: "#C0C0C0", fontFamily: "'Palatino', serif", margin: 0, position: "relative" }}>
      {/* Stars */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", width: i % 3 === 0 ? "3px" : "2px", height: i % 3 === 0 ? "3px" : "2px", background: "#fff", borderRadius: "50%", top: `${(i * 37) % 100}%`, left: `${(i * 53) % 100}%`, opacity: 0.3 + (i % 5) * 0.1 }} />
        ))}
      </div>

      <nav style={{ position: "relative", display: "flex", justifyContent: "center", padding: "40px 48px", gap: "40px", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#555", fontFamily: "sans-serif" }}>
        {["Orion", "Cassiopée", "Lyre", "Pégase"].map((t) => (
          <span key={t} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ position: "relative", padding: "80px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "40px", color: star, marginBottom: "24px" }}>★</div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.3, margin: 0, letterSpacing: "0.03em" }}>
          Cartographie
          <br />
          des <span style={{ color: star, fontStyle: "italic" }}>étoiles</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#666", maxWidth: "420px", margin: "28px auto 0", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Chaque idée est une étoile dans notre constellation. Ensemble, elles dessinent une carte du futur.
        </p>
      </section>

      <section style={{ position: "relative", display: "flex", justifyContent: "center", gap: "60px", padding: "60px 48px" }}>
        {[{ v: "50+", l: "Étoiles" }, { v: "100+", l: "Galaxies" }, { v: "5", l: "Univers" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 300, color: star }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#555", marginTop: "8px", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ position: "relative", padding: "40px 48px", textAlign: "center", fontSize: "12px", color: "#333", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Per aspera ad astra</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 98 — Graffiti Wall (Street Art/Urban)
   ============================================================ */
const GraffitiWall: React.FC = () => {
  const spray = "#FF4500";
  const electric = "#00FF00";
  return (
    <div style={{ minHeight: "100vh", background: "#333", color: "#fff", fontFamily: "'Impact', 'Arial Black', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 900, textTransform: "uppercase", color: spray }}>CM CREW</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "12px", fontFamily: "Arial, sans-serif", fontWeight: 700, color: "#888", textTransform: "uppercase" }}>
          {["Walls", "Tags", "Crew", "Gallery"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 40px" }}>
        <h1 style={{ fontSize: "clamp(60px, 10vw, 140px)", fontWeight: 900, lineHeight: 0.85, margin: 0, textTransform: "uppercase", WebkitTextStroke: `2px ${spray}`, color: "transparent" }}>
          ART
          <br />
          IS
          <br />
          <span style={{ WebkitTextStroke: `2px ${electric}` }}>FREE</span>
        </h1>
        <p style={{ fontSize: "15px", fontFamily: "Arial, sans-serif", fontWeight: 400, color: "#999", maxWidth: "460px", marginTop: "24px", lineHeight: 1.8 }}>
          Les murs parlent. Les idées s&apos;échappent. Le street art du digital est notre manifeste.
        </p>
        <button style={{ marginTop: "28px", padding: "14px 36px", background: spray, color: "#fff", border: "none", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", cursor: "pointer" }}>
          SPRAY IT
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px", padding: "40px 48px", maxWidth: "800px" }}>
        {[{ v: "50+", l: "MURALS" }, { v: "100+", l: "TAGS" }, { v: "5", l: "SPOTS" }].map((s, i) => (
          <div key={s.l} style={{ background: "#444", padding: "36px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 900, color: i % 2 === 0 ? spray : electric }}>{s.v}</div>
            <div style={{ fontSize: "11px", fontFamily: "Arial, sans-serif", color: "#777", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", fontSize: "12px", fontFamily: "Arial, sans-serif", color: "#555", display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
        <span>© 2024 CM Crew</span>
        <span style={{ color: spray }}>WALLS DON&apos;T LIE</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 99 — Origami Bird (Minimalist/Poetic)
   ============================================================ */
const OrigamiBird: React.FC = () => {
  const sky = "#87CEEB";
  const paper = "#F9F6F1";
  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(180deg, ${sky}33 0%, ${paper} 40%)`, color: "#4A4A4A", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 48px" }}>
        <span style={{ fontSize: "14px", color: "#aaa", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", color: "#ccc", fontFamily: "sans-serif" }}>
          {["Vol", "Nid", "Plume", "Ciel"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ fontSize: "72px", marginBottom: "24px" }}>🕊</div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.3, margin: 0 }}>
          Prendre son
          <br />
          <span style={{ color: sky, fontStyle: "italic" }}>envol</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#bbb", maxWidth: "400px", margin: "24px auto 0", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Un pli, puis un autre. L&apos;oiseau se forme. L&apos;idée prend son envol. Légère, libre, belle.
        </p>
        <div style={{ marginTop: "36px", padding: "14px 40px", border: "1px solid #ddd", display: "inline-block", color: "#999", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>
          Déplier l&apos;histoire
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "60px 48px" }}>
        {[{ v: "50+", l: "Envols" }, { v: "100+", l: "Plumes" }, { v: "5", l: "Nids" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 300, color: sky }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#ccc", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", color: "#ddd", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Fly free</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 100 — Grand Centennial (Celebration/Finale)
   ============================================================ */
const GrandCentennial: React.FC = () => {
  const gold = "#D4AF37";
  const royal = "#1B1464";
  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, ${royal} 0%, #0D0B2E 50%, #1A0A2E 100%)`, color: "#fff", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "center", padding: "40px 48px", gap: "48px", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: gold, fontFamily: "sans-serif" }}>
        {["Galerie", "Manifeste", "Vision", "Contact"].map((t) => (
          <span key={t} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ padding: "80px 48px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ fontSize: "14px", letterSpacing: "0.4em", textTransform: "uppercase", color: gold, fontFamily: "sans-serif", marginBottom: "32px" }}>★ DESIGN N°100 — LE CENTENAIRE ★</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 120px)", fontWeight: 400, lineHeight: 1.05, margin: 0, fontStyle: "italic" }}>
          Connected
          <br />
          <span style={{ color: gold }}>Mate</span>
        </h1>
        <div style={{ width: "80px", height: "1px", background: gold, margin: "40px auto" }} />
        <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", margin: "0 auto", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          100 visions. 100 univers. 100 façons de connecter les idées et d&apos;inspirer le futur. Merci d&apos;avoir exploré chacune d&apos;entre elles.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: `${gold}22`, maxWidth: "900px", margin: "40px auto" }}>
        {[{ v: "100", l: "Designs" }, { v: "50+", l: "Keynotes" }, { v: "100+", l: "Podcasts" }, { v: "5", l: "Apps" }].map((s) => (
          <div key={s.l} style={{ background: royal, padding: "40px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 300, fontStyle: "italic", color: gold }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "8px", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <p style={{ fontSize: "28px", fontStyle: "italic", color: gold, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
          &ldquo;Le meilleur design est celui qui vous a fait rêver. Le prochain sera encore plus beau.&rdquo;
        </p>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px" }}>
        <div style={{ display: "inline-flex", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "12px 24px", background: `${gold}22`, color: gold, borderRadius: "100px", fontSize: "13px", fontFamily: "sans-serif", cursor: "pointer", border: `1px solid ${gold}33` }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "32px 48px", borderTop: `1px solid ${gold}22`, textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Le Grand Centenaire ★</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 91, name: "Neon Sign", category: "Nightlife", description: "Bar neon signs with pink/blue glow, text shadows, dark intimate atmosphere", component: NeonSign },
  { id: 92, name: "Stained Glass", category: "Artistic", description: "Cathedral glass with ruby/sapphire/amber, colored columns, sacred feel", component: StainedGlass },
  { id: 93, name: "Comic Book", category: "Pop Culture", description: "Comic style with POW bubbles, Impact font, red/yellow, issue numbering", component: ComicBook },
  { id: 94, name: "Mountain Lodge", category: "Outdoor", description: "Alpine lodge with pine green, altitude marker, wooden warmth, snow white", component: MountainLodge },
  { id: 95, name: "Typewriter Letter", category: "Vintage", description: "Personal letter format with typewriter font, date, address, signature", component: TypewriterLetter },
  { id: 96, name: "Dashboard Analytics", category: "Business", description: "Analytics dashboard with dark slate, metric cards, progress bars, activity feed", component: DashboardAnalytics },
  { id: 97, name: "Constellation Map", category: "Poetic", description: "Star map with gold stars, scattered dots, radial gradient, constellation names", component: ConstellationMap },
  { id: 98, name: "Graffiti Wall", category: "Street Art", description: "Street art with spray paint colors, outlined text, concrete wall, raw energy", component: GraffitiWall },
  { id: 99, name: "Origami Bird", category: "Minimal", description: "Delicate bird with sky blue gradient, light paper texture, poetic simplicity", component: OrigamiBird },
  { id: 100, name: "Grand Centennial", category: "Showcase", description: "The 100th design: royal blue/gold, celebration, manifesto quote, social links", component: GrandCentennial },
];
