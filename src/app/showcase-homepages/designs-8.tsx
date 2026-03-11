"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 71 — Pixel Art Retro (Gaming/Nostalgia)
   ============================================================ */
const PixelArtRetro: React.FC = () => {
  const green = "#4ADE80";
  const purple = "#A855F7";
  return (
    <div style={{ minHeight: "100vh", background: "#111827", color: "#fff", fontFamily: "'Courier New', monospace", margin: 0, imageRendering: "pixelated" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: `2px solid ${green}33` }}>
        <span style={{ fontSize: "16px", fontWeight: 700, color: green }}>▶ CM_PIXEL</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#666" }}>
          {["PLAY", "SCORES", "OPTIONS", "CREDITS"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px", textAlign: "center" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.3em", color: purple, marginBottom: "24px" }}>★ PRESS START ★</div>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 700, lineHeight: 1.0, margin: 0 }}>
          8-BIT
          <br />
          <span style={{ color: green }}>WORLD</span>
        </h1>
        <p style={{ fontSize: "14px", color: "#555", maxWidth: "500px", margin: "24px auto 0", lineHeight: 1.8 }}>
          Retour aux sources pixelisées. Chaque idée est un sprite, chaque projet un level complet.
        </p>
        <div style={{ marginTop: "32px", display: "inline-flex", gap: "8px" }}>
          {["[A] START", "[B] ABOUT"].map((btn, i) => (
            <button key={btn} style={{ padding: "12px 28px", background: i === 0 ? green : "transparent", color: i === 0 ? "#000" : green, border: i === 0 ? "none" : `2px solid ${green}`, fontSize: "14px", fontWeight: 700, fontFamily: "monospace", cursor: "pointer" }}>{btn}</button>
          ))}
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", padding: "40px 48px", maxWidth: "800px", margin: "0 auto" }}>
        {[{ v: "LV.50", l: "Keynotes" }, { v: "LV.100", l: "Podcasts" }, { v: "LV.5", l: "Apps" }, { v: "LV.∞", l: "Ideas" }].map((s, i) => (
          <div key={s.l} style={{ background: "#1F2937", padding: "28px 16px", textAlign: "center", border: `1px solid ${i % 2 === 0 ? green : purple}22` }}>
            <div style={{ fontSize: "20px", fontWeight: 700, color: i % 2 === 0 ? green : purple }}>{s.v}</div>
            <div style={{ fontSize: "10px", color: "#555", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#444", marginTop: "40px" }}>
        <span>© 2024 CM — INSERT COIN TO CONTINUE</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 72 — Ocean Wave (Marine/Travel)
   ============================================================ */
const OceanWave: React.FC = () => {
  const ocean = "#0077B6";
  const sand = "#FFF1DB";
  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(180deg, ${sand} 0%, #CAF0F8 60%, ${ocean} 100%)`, color: "#2D3748", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", fontStyle: "italic", color: ocean }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>
          {["Horizons", "Voyages", "Phare", "Ancre"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 80px", maxWidth: "750px" }}>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, lineHeight: 1.15, margin: 0, fontStyle: "italic" }}>
          Naviguer vers
          <br />
          l&apos;<span style={{ color: ocean }}>horizon</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#888", maxWidth: "440px", marginTop: "28px", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Comme les vagues façonnent le rivage, nos idées sculptent le futur. Embarquez pour une traversée créative.
        </p>
        <button style={{ marginTop: "36px", padding: "14px 40px", background: ocean, color: "#fff", border: "none", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", cursor: "pointer", borderRadius: "4px" }}>
          Lever l&apos;ancre
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Traversées" }, { v: "100+", l: "Récits de mer" }, { v: "5", l: "Îles" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 400, fontStyle: "italic", color: ocean }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#999", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", textAlign: "center", fontSize: "12px", color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif", marginTop: "40px" }}>
        <span>© 2024 Connected Mate — Bon vent</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 73 — Startup Pitch (Business/Startup)
   ============================================================ */
const StartupPitch: React.FC = () => {
  const blue = "#2563EB";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "'Inter', 'Helvetica Neue', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid #f0f0f0" }}>
        <span style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "-0.02em" }}>Connected<span style={{ color: blue }}>Mate</span></span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "#888", alignItems: "center" }}>
          {["Product", "About", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "8px 20px", background: blue, color: "#fff", border: "none", fontSize: "13px", fontWeight: 600, borderRadius: "8px", cursor: "pointer" }}>Get Started</button>
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ display: "inline-block", padding: "6px 16px", background: `${blue}10`, color: blue, fontSize: "13px", fontWeight: 600, borderRadius: "100px", marginBottom: "24px" }}>Backed by Y Combinator</div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>
          The platform that
          <br />
          <span style={{ color: blue }}>connects everything</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#888", maxWidth: "520px", margin: "20px auto 0", lineHeight: 1.7, fontWeight: 400 }}>
          Keynotes, podcasts, apps — tout dans un seul endroit. Rejoignez les 10,000+ visionnaires qui changent le monde.
        </p>
        <div style={{ marginTop: "36px", display: "inline-flex", gap: "12px" }}>
          <button style={{ padding: "14px 32px", background: blue, color: "#fff", border: "none", fontSize: "15px", fontWeight: 700, borderRadius: "10px", cursor: "pointer" }}>Start Free Trial</button>
          <button style={{ padding: "14px 32px", background: "#f5f5f5", color: "#333", border: "none", fontSize: "15px", fontWeight: 600, borderRadius: "10px", cursor: "pointer" }}>Watch Demo →</button>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "60px 48px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ v: "50+", l: "Keynotes", d: "Des conférences qui inspirent" }, { v: "100+", l: "Podcasts", d: "Des conversations profondes" }, { v: "5", l: "Apps", d: "Des outils qui transforment" }].map((item) => (
          <div key={item.l} style={{ padding: "32px", borderRadius: "16px", border: "1px solid #eee" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, color: blue }}>{item.v}</div>
            <div style={{ fontSize: "16px", fontWeight: 700, marginTop: "8px" }}>{item.l}</div>
            <div style={{ fontSize: "14px", color: "#999", marginTop: "4px" }}>{item.d}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "40px 48px 60px", textAlign: "center" }}>
        <div style={{ fontSize: "13px", color: "#ccc", letterSpacing: "0.1em" }}>TRUSTED BY 10,000+ INNOVATORS WORLDWIDE</div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: "1px solid #f0f0f0", fontSize: "12px", color: "#ccc", textAlign: "center" }}>
        <span>© 2024 Connected Mate Inc.</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 74 — Gothic Cathedral (Dark/Dramatic)
   ============================================================ */
const GothicCathedral: React.FC = () => {
  const crimson = "#8B0000";
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: "#D4C5A9", fontFamily: "'Palatino', 'Book Antiqua', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "center", padding: "40px 48px", gap: "48px", fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "sans-serif", color: "#555" }}>
        {["Nef", "Chapelle", "Crypte", "Vitraux"].map((t) => (
          <span key={t} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ padding: "80px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "60px", color: crimson, marginBottom: "24px" }}>✦</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.2, margin: 0, letterSpacing: "0.05em" }}>
          <span style={{ color: crimson }}>Cathédrale</span>
          <br />
          des idées
        </h1>
        <p style={{ fontSize: "16px", color: "#777", maxWidth: "420px", margin: "32px auto 0", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Sous les voûtes de l&apos;innovation, chaque pensée résonne comme un chant grégorien. Élevons nos esprits ensemble.
        </p>
        <div style={{ fontSize: "60px", color: crimson, marginTop: "32px" }}>✦</div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#222", maxWidth: "800px", margin: "0 auto" }}>
        {[{ v: "L", l: "Keynotes" }, { v: "C", l: "Podcasts" }, { v: "V", l: "Apps" }].map((s) => (
          <div key={s.l} style={{ background: "#0A0A0A", padding: "48px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontStyle: "italic", color: crimson }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#555", marginTop: "12px", fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "48px", textAlign: "center", fontSize: "12px", color: "#444", fontFamily: "sans-serif", marginTop: "60px" }}>
        <span>© 2024 Connected Mate — Ad maiorem gloriam</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 75 — Candy Shop (Fun/Colorful)
   ============================================================ */
const CandyShop: React.FC = () => {
  const candy = "#FF6699";
  const mint = "#00CC99";
  const lemon = "#FFD700";
  return (
    <div style={{ minHeight: "100vh", background: "#FFF5F9", color: "#333", fontFamily: "'Trebuchet MS', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: candy }}>CM Candy</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "13px", color: "#aaa" }}>
          {["Bonbons", "Saveurs", "Box", "Panier"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 40px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 800, lineHeight: 1.05, margin: 0 }}>
          <span style={{ color: candy }}>Sweet</span>
          <br />
          <span style={{ color: mint }}>ideas</span> only
        </h1>
        <p style={{ fontSize: "16px", color: "#aaa", maxWidth: "440px", margin: "20px auto 0", lineHeight: 1.8 }}>
          Des idées aussi délicieuses qu&apos;un bonbon. Croquantes, colorées, et addictives.
        </p>
        <button style={{ marginTop: "28px", padding: "14px 36px", background: `linear-gradient(135deg, ${candy}, ${mint})`, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, borderRadius: "100px", cursor: "pointer" }}>
          Ouvrir la box
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "800px", margin: "0 auto" }}>
        {[{ n: "Keynotes", c: candy, v: "50+" }, { n: "Podcasts", c: mint, v: "100+" }, { n: "Apps", c: lemon, v: "5" }].map((item) => (
          <div key={item.n} style={{ background: "#fff", borderRadius: "20px", padding: "36px 24px", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.04)", border: `2px solid ${item.c}22` }}>
            <div style={{ fontSize: "36px", fontWeight: 800, color: item.c }}>{item.v}</div>
            <div style={{ fontSize: "14px", fontWeight: 700, marginTop: "8px", color: "#555" }}>{item.n}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", textAlign: "center", fontSize: "12px", color: "#ddd", marginTop: "40px" }}>
        <span>© 2024 Connected Mate — Life is sweet</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 76 — Steampunk Workshop (Retro-Futuristic)
   ============================================================ */
const SteampunkWorkshop: React.FC = () => {
  const brass = "#B8860B";
  const copper = "#B87333";
  return (
    <div style={{ minHeight: "100vh", background: "#1C1410", color: "#D4C5A0", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `1px solid ${brass}33` }}>
        <span style={{ fontSize: "16px", letterSpacing: "0.15em", textTransform: "uppercase", color: brass }}>CM Works</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", letterSpacing: "0.1em", color: "#776", fontFamily: "sans-serif" }}>
          {["Atelier", "Machines", "Plans", "Telegraph"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: copper, marginBottom: "24px", fontFamily: "sans-serif" }}>ANNO DOMINI MMXXIV</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, lineHeight: 1.1, margin: 0 }}>
          L&apos;Atelier des
          <br />
          <span style={{ color: brass, fontStyle: "italic" }}>Inventions</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#776", maxWidth: "460px", marginTop: "28px", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Rouages, engrenages et vapeur d&apos;innovation. Notre atelier forge les idées de demain avec les outils d&apos;hier.
        </p>
        <div style={{ marginTop: "36px", padding: "14px 36px", border: `2px solid ${brass}`, display: "inline-block", color: brass, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>
          Actionner la machine
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: `${brass}22`, margin: "40px 48px" }}>
        {[{ v: "⚙ 50+", l: "Mécanismes" }, { v: "⚙ 100+", l: "Transmissions" }, { v: "⚙ 5", l: "Machines" }].map((s) => (
          <div key={s.l} style={{ background: "#1C1410", padding: "40px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "24px", color: brass }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#665", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", color: "#554", fontFamily: "sans-serif" }}>
        <span>© MMXXIV Connected Mate — Propulsé par la vapeur</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 77 — Minimalist Swiss (International Typographic)
   ============================================================ */
const MinimalistSwiss: React.FC = () => {
  const red = "#FF0000";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "32px 48px" }}>
        <div>
          <span style={{ fontSize: "14px", fontWeight: 700 }}>Connected Mate</span>
          <div style={{ fontSize: "11px", color: "#999", marginTop: "4px" }}>Design & Innovation Studio</div>
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#999" }}>
          {["Work", "Info", "Contact"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "60px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px", alignItems: "start" }}>
          <div>
            <div style={{ width: "80px", height: "80px", background: red }} />
          </div>
          <div>
            <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, lineHeight: 1.0, margin: 0, letterSpacing: "-0.03em" }}>
              Connecter
              <br />
              les idées
            </h1>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 48px", borderTop: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px" }}>
          <div style={{ fontSize: "11px", color: "#999", fontWeight: 500, paddingTop: "4px" }}>About</div>
          <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#555", maxWidth: "600px", margin: 0, fontWeight: 300 }}>
            Nous créons des expériences numériques avec la rigueur suisse et la passion française. Chaque projet est mesuré, calibré, précis.
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 48px", borderTop: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px" }}>
          <div style={{ fontSize: "11px", color: "#999", fontWeight: 500, paddingTop: "4px" }}>Numbers</div>
          <div style={{ display: "flex", gap: "60px" }}>
            {[{ v: "50+", l: "Keynotes" }, { v: "100+", l: "Podcasts" }, { v: "5", l: "Apps" }].map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: "32px", fontWeight: 700 }}>{s.v}</div>
                <div style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: "32px 48px", borderTop: "1px solid #eee", fontSize: "11px", color: "#ccc", display: "flex", justifyContent: "space-between" }}>
        <span>© 2024 Connected Mate</span>
        <span>Zürich — Paris</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 78 — Tropical Paradise (Vacation/Colorful)
   ============================================================ */
const TropicalParadise: React.FC = () => {
  const coral = "#FF6F61";
  const turquoise = "#40E0D0";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #87CEEB 0%, #E0F7FA 40%, #FFF8E1 100%)", color: "#2D3748", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 400, fontStyle: "italic", color: coral }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>
          {["Plage", "Lagon", "Jungle", "Sunset"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, lineHeight: 1.1, margin: 0, fontStyle: "italic" }}>
          Bienvenue au
          <br />
          <span style={{ color: coral }}>paradis</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#999", maxWidth: "440px", margin: "24px auto 0", lineHeight: 1.9, fontFamily: "sans-serif", fontWeight: 300 }}>
          Un océan d&apos;idées, un soleil de créativité. Plongez dans l&apos;univers Connected Mate.
        </p>
        <button style={{ marginTop: "32px", padding: "14px 36px", background: coral, color: "#fff", border: "none", fontSize: "13px", fontWeight: 600, borderRadius: "100px", cursor: "pointer" }}>
          Plonger
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "800px", margin: "0 auto" }}>
        {[{ n: "Keynotes", c: coral }, { n: "Podcasts", c: turquoise }, { n: "Apps", c: coral }].map((item) => (
          <div key={item.n} style={{ background: "rgba(255,255,255,0.7)", borderRadius: "16px", padding: "36px 24px", textAlign: "center", backdropFilter: "blur(10px)" }}>
            <div style={{ fontSize: "20px", fontStyle: "italic", color: item.c }}>{item.n}</div>
            <div style={{ fontSize: "12px", color: "#aaa", marginTop: "8px", fontFamily: "sans-serif" }}>Découvrir</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", color: "#bbb", fontFamily: "sans-serif", marginTop: "40px" }}>
        <span>© 2024 Connected Mate — Aloha</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 79 — Concrete Jungle (Industrial/Urban)
   ============================================================ */
const ConcreteJungle: React.FC = () => {
  const yellow = "#FFD600";
  return (
    <div style={{ minHeight: "100vh", background: "#2C2C2C", color: "#E0E0E0", fontFamily: "'Arial', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: `2px solid ${yellow}` }}>
        <span style={{ fontSize: "16px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em" }}>CM<span style={{ color: yellow }}>.</span></span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "#888" }}>
          {["Build", "Projects", "Team", "Contact"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px" }}>
        <div style={{ display: "inline-block", padding: "4px 12px", background: yellow, color: "#000", fontSize: "11px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px" }}>UNDER CONSTRUCTION</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 110px)", fontWeight: 900, lineHeight: 0.95, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          WE BUILD
          <br />
          <span style={{ color: yellow }}>IDEAS</span>
        </h1>
        <p style={{ fontSize: "15px", color: "#888", maxWidth: "460px", marginTop: "24px", lineHeight: 1.8 }}>
          Du béton brut et de l&apos;acier. Nos idées sont construites pour durer, comme les gratte-ciels qui touchent les nuages.
        </p>
        <button style={{ marginTop: "32px", padding: "14px 40px", background: yellow, color: "#000", border: "none", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", cursor: "pointer" }}>
          START PROJECT
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", margin: "40px 48px" }}>
        {[{ v: "50+", l: "Structures" }, { v: "100+", l: "Modules" }, { v: "5", l: "Tours" }, { v: "24/7", l: "Chantier" }].map((s) => (
          <div key={s.l} style={{ background: "#333", padding: "32px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 900, color: yellow }}>{s.v}</div>
            <div style={{ fontSize: "10px", color: "#666", marginTop: "8px", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `2px solid ${yellow}`, fontSize: "11px", color: "#666", display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
        <span>© 2024 CM Construction</span>
        <span style={{ color: yellow }}>HARD HAT AREA</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 80 — Library Archive (Academic/Scholarly)
   ============================================================ */
const LibraryArchive: React.FC = () => {
  const burgundy = "#722F37";
  const ivory = "#FFFFF0";
  return (
    <div style={{ minHeight: "100vh", background: ivory, color: "#2C2C2C", fontFamily: "'Palatino', 'Book Antiqua', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: `1px solid ${burgundy}22` }}>
        <span style={{ fontSize: "16px", fontWeight: 400, color: burgundy, letterSpacing: "0.05em" }}>Bibliothèque CM</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>
          {["Catalogue", "Rayons", "Lecture", "Carte"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", maxWidth: "700px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: burgundy, fontFamily: "sans-serif", marginBottom: "24px" }}>TOME I — ÉDITION ORIGINALE</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.2, margin: 0, fontStyle: "italic" }}>
          Les Archives
          <br />
          du <span style={{ color: burgundy }}>Savoir</span>
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 2, color: "#888", maxWidth: "460px", marginTop: "28px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Dans ces rayonnages numériques repose la somme de notre savoir collectif. Chaque page est une découverte.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: `${burgundy}11`, margin: "0 48px", maxWidth: "700px" }}>
        {[{ v: "Tome I", l: "50+ Keynotes" }, { v: "Tome II", l: "100+ Podcasts" }, { v: "Tome III", l: "5 Applications" }].map((s) => (
          <div key={s.v} style={{ background: ivory, padding: "40px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontStyle: "italic", color: burgundy }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#aaa", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "60px 48px", maxWidth: "600px" }}>
        <p style={{ fontSize: "22px", fontStyle: "italic", lineHeight: 1.7, color: burgundy }}>
          &ldquo;Un bon livre, comme une bonne idée, ne se ferme jamais vraiment.&rdquo;
        </p>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${burgundy}22`, fontSize: "12px", color: "#ccc", fontFamily: "sans-serif" }}>
        <span>© 2024 Bibliothèque Connected Mate — Silence, on pense</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 71, name: "Pixel Art Retro", category: "Gaming", description: "8-bit pixel art with green/purple, game levels, retro buttons, nostalgia feel", component: PixelArtRetro },
  { id: 72, name: "Ocean Wave", category: "Nature", description: "Ocean gradient from sand to deep blue, maritime vocabulary, serene flow", component: OceanWave },
  { id: 73, name: "Startup Pitch", category: "Business", description: "Clean SaaS pitch with blue CTA, YC badge, trust bar, metric cards", component: StartupPitch },
  { id: 74, name: "Gothic Cathedral", category: "Dark", description: "Dark gothic with crimson accents, cathedral symbols, ornamental dividers", component: GothicCathedral },
  { id: 75, name: "Candy Shop", category: "Playful", description: "Sweet colors with pink/mint/gold, rounded cards, gradient CTA, fun copy", component: CandyShop },
  { id: 76, name: "Steampunk Workshop", category: "Retro", description: "Brass and copper on dark leather, gear symbols, Victorian typography", component: SteampunkWorkshop },
  { id: 77, name: "Minimalist Swiss", category: "Minimal", description: "Swiss International style with grid layout, red square, Helvetica, precise", component: MinimalistSwiss },
  { id: 78, name: "Tropical Paradise", category: "Lifestyle", description: "Sky-to-sand gradient, coral/turquoise, frosted glass cards, vacation vibes", component: TropicalParadise },
  { id: 79, name: "Concrete Jungle", category: "Industrial", description: "Urban construction with yellow caution tape, dark concrete, hard hat area", component: ConcreteJungle },
  { id: 80, name: "Library Archive", category: "Academic", description: "Scholarly library with ivory/burgundy, tome numbering, literary quotes", component: LibraryArchive },
];
