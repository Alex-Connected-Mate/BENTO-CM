"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 81 — Holographic Card (Futuristic/Tech)
   ============================================================ */
const HolographicCard: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0F0F14", color: "#fff", fontFamily: "'Helvetica Neue', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700, background: "linear-gradient(90deg, #FF6EC7, #7873F5, #4FFFB0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#555" }}>
          {["Holodeck", "Signals", "Decode", "Link"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 80px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 110px)", fontWeight: 800, lineHeight: 0.95, margin: 0, letterSpacing: "-0.03em", background: "linear-gradient(135deg, #FF6EC7, #7873F5, #4FFFB0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          HOLO
          <br />
          VISION
        </h1>
        <p style={{ fontSize: "16px", color: "#555", maxWidth: "480px", margin: "28px auto 0", lineHeight: 1.8 }}>
          Au-delà de l&apos;écran, une nouvelle dimension d&apos;expériences holographiques vous attend.
        </p>
        <button style={{ marginTop: "36px", padding: "14px 40px", background: "linear-gradient(135deg, #FF6EC7, #7873F5)", color: "#fff", border: "none", fontSize: "13px", fontWeight: 700, borderRadius: "8px", cursor: "pointer", letterSpacing: "0.1em" }}>
          ENTER THE HOLO
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ n: "Keynotes", c: "#FF6EC7" }, { n: "Podcasts", c: "#7873F5" }, { n: "Apps", c: "#4FFFB0" }].map((item) => (
          <div key={item.n} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${item.c}33`, borderRadius: "16px", padding: "36px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: item.c }}>50+</div>
            <div style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>{item.n}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "12px", color: "#333", marginTop: "40px" }}>
        <span>© 2024 Connected Mate — Projecting the future</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 82 — Chalk Board (Education/Learning)
   ============================================================ */
const ChalkBoard: React.FC = () => {
  const chalk = "#E8E4D9";
  const board = "#2A3D2A";
  return (
    <div style={{ minHeight: "100vh", background: board, color: chalk, fontFamily: "'Courier New', monospace", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `1px dashed ${chalk}33` }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected Mate Academy</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", opacity: 0.5 }}>
          {["Cours", "Notes", "Examen", "Récré"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px" }}>
        <h1 style={{ fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
          Leçon n°1 :
          <br />
          <span style={{ textDecoration: "underline", textDecorationStyle: "wavy" }}>INNOVER</span>
        </h1>
        <p style={{ fontSize: "16px", opacity: 0.5, maxWidth: "500px", marginTop: "24px", lineHeight: 1.8 }}>
          Comme au tableau noir, on efface et on recommence. Chaque erreur est un apprentissage. Chaque idée mérite d&apos;être écrite.
        </p>
        <div style={{ marginTop: "32px", padding: "12px 32px", border: `2px dashed ${chalk}66`, display: "inline-block", fontSize: "14px", cursor: "pointer" }}>
          [ Prendre des notes ]
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "800px" }}>
        {[{ v: "50+", l: "Leçons" }, { v: "100+", l: "Chapitres" }, { v: "5", l: "Manuels" }].map((s) => (
          <div key={s.l} style={{ border: `1px dashed ${chalk}33`, padding: "32px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 700 }}>{s.v}</div>
            <div style={{ fontSize: "11px", opacity: 0.4, marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", opacity: 0.3, marginTop: "40px" }}>
        <span>© 2024 CM Academy — La cloche a sonné</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 83 — Vaporwave Sunset (Aesthetic/Retro)
   ============================================================ */
const VaporwaveSunset: React.FC = () => {
  const pink = "#FF71CE";
  const blue = "#01CDFE";
  const purple = "#B967FF";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #2D1B69 0%, #1a0533 50%, #0D0221 100%)", color: "#fff", fontFamily: "'Courier New', monospace", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700, color: pink }}>ＣＯＮＮＥＣＴＥＤ</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#666" }}>
          {["ＶＩＢＥ", "ＷＡＶＥ", "ＤＲＥＡＭ", "ＬＯＯＰ"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(48px, 8vw, 100px)", fontWeight: 700, lineHeight: 1.0, margin: 0, color: pink, textShadow: `0 0 40px ${pink}44` }}>
          ＥＴＥＲＮＡＬ
          <br />
          <span style={{ color: blue }}>ＳＵＮＳＥＴ</span>
        </h1>
        <p style={{ fontSize: "14px", color: purple, maxWidth: "480px", margin: "28px auto 0", lineHeight: 1.8 }}>
          Dans un monde entre le rêve et la réalité, les idées flottent comme des nuages de synthwave.
        </p>
        <div style={{ marginTop: "36px", padding: "12px 36px", border: `2px solid ${pink}`, color: pink, fontSize: "14px", display: "inline-block", cursor: "pointer", textShadow: `0 0 10px ${pink}66` }}>
          ＥＮＴＥＲ
        </div>
      </section>

      {/* Sun */}
      <div style={{ width: "200px", height: "100px", margin: "40px auto", background: `linear-gradient(180deg, ${pink}, ${purple})`, borderRadius: "200px 200px 0 0", boxShadow: `0 0 60px ${pink}44` }} />

      {/* Grid floor */}
      <div style={{ height: "100px", background: `linear-gradient(${purple}22, transparent)`, borderTop: `1px solid ${purple}44`, margin: "0 48px" }} />

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", color: "#444" }}>
        <span>© ２０２４ ＣＯＮＮＥＣＴＥＤ ＭＡＴＥ</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 84 — Eco Green (Sustainability/Environment)
   ============================================================ */
const EcoGreen: React.FC = () => {
  const leaf = "#22C55E";
  const earth = "#365314";
  return (
    <div style={{ minHeight: "100vh", background: "#F0FDF4", color: earth, fontFamily: "'Inter', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected<span style={{ color: leaf }}>Green</span></span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "#999" }}>
          {["Impact", "Actions", "Rapport", "Rejoindre"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", maxWidth: "700px" }}>
        <div style={{ display: "inline-block", padding: "6px 16px", background: `${leaf}15`, color: leaf, fontSize: "12px", fontWeight: 600, borderRadius: "100px", marginBottom: "20px" }}>Certifié B Corp</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>
          Construire un
          <br />
          futur <span style={{ color: leaf }}>durable</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#888", maxWidth: "460px", marginTop: "20px", lineHeight: 1.8 }}>
          Chaque projet est pensé pour minimiser notre empreinte. La technologie au service de la planète.
        </p>
        <button style={{ marginTop: "28px", padding: "14px 36px", background: leaf, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, borderRadius: "10px", cursor: "pointer" }}>
          Notre impact
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "800px" }}>
        {[{ v: "-80%", l: "Émissions CO₂" }, { v: "100%", l: "Énergie verte" }, { v: "0", l: "Déchets numériques" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "12px", padding: "32px 20px", textAlign: "center", border: `1px solid ${leaf}22` }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: leaf }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#999", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", fontSize: "12px", color: "#ccc", textAlign: "center", marginTop: "40px" }}>
        <span>© 2024 Connected Mate — Pour la planète</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 85 — Magnetic Poetry (Creative/Interactive)
   ============================================================ */
const MagneticPoetry: React.FC = () => {
  const fridge = "#E8E8E0";
  return (
    <div style={{ minHeight: "100vh", background: fridge, color: "#333", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: 600, color: "#999" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#bbb", fontFamily: "sans-serif" }}>
          {["Mots", "Poèmes", "Créer", "Partager"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 40px", maxWidth: "800px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
          {["connecter", "les", "idées", "inspirer", "le", "futur", "créer", "ensemble", "rêver", "innover", "partager", "grandir"].map((word, i) => (
            <span key={word} style={{
              display: "inline-block",
              padding: "8px 16px",
              background: "#fff",
              boxShadow: "1px 2px 4px rgba(0,0,0,0.1)",
              fontSize: i < 3 ? "28px" : i < 6 ? "22px" : "16px",
              fontStyle: i % 3 === 0 ? "italic" : "normal",
              fontWeight: i < 6 ? 700 : 400,
              color: i < 3 ? "#E8600A" : "#555",
              transform: `rotate(${(i % 5 - 2) * 2}deg)`,
              cursor: "grab",
            }}>
              {word}
            </span>
          ))}
        </div>
        <p style={{ fontSize: "15px", color: "#aaa", lineHeight: 1.8, fontFamily: "sans-serif", maxWidth: "400px" }}>
          Composez votre propre histoire avec nos mots magnétiques. Chaque combinaison est un univers.
        </p>
      </section>

      <section style={{ padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", gap: "24px" }}>
          {[{ v: "50+", l: "mots-clés" }, { v: "100+", l: "histoires" }, { v: "∞", l: "combinaisons" }].map((s) => (
            <div key={s.l} style={{ background: "#fff", padding: "24px 32px", boxShadow: "1px 2px 4px rgba(0,0,0,0.1)" }}>
              <div style={{ fontSize: "24px", fontWeight: 700, color: "#E8600A" }}>{s.v}</div>
              <div style={{ fontSize: "12px", color: "#aaa", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", fontSize: "12px", color: "#ccc", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Words have power</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 86 — Subway Map (Urban/Transport)
   ============================================================ */
const SubwayMap: React.FC = () => {
  const lines = ["#E74C3C", "#3498DB", "#2ECC71", "#F39C12"];
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", color: "#2C2C2C", fontFamily: "'Helvetica Neue', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", background: "#fff", borderBottom: "2px solid #333" }}>
        <span style={{ fontSize: "18px", fontWeight: 800 }}>CM <span style={{ color: lines[0] }}>METRO</span></span>
        <div style={{ display: "flex", gap: "20px", fontSize: "12px", color: "#888", fontWeight: 600 }}>
          {["Plan", "Horaires", "Tickets", "Info"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "60px 48px 40px" }}>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.05, margin: 0, letterSpacing: "-0.03em" }}>
          Votre trajet
          <br />
          vers l&apos;<span style={{ color: lines[1] }}>innovation</span>
        </h1>
        <p style={{ fontSize: "15px", color: "#999", maxWidth: "460px", marginTop: "20px", lineHeight: 1.8 }}>
          4 lignes. Des centaines de stations. Un réseau d&apos;idées interconnectées qui vous emmènent partout.
        </p>
      </section>

      <section style={{ padding: "20px 48px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", maxWidth: "800px" }}>
          {[
            { l: "Ligne K", c: lines[0], s: "Keynotes", n: "50+ arrêts" },
            { l: "Ligne P", c: lines[1], s: "Podcasts", n: "100+ arrêts" },
            { l: "Ligne A", c: lines[2], s: "Apps", n: "5 arrêts" },
            { l: "Ligne I", c: lines[3], s: "Ideas", n: "∞ arrêts" },
          ].map((line) => (
            <div key={line.l} style={{ borderLeft: `4px solid ${line.c}`, padding: "20px 16px", background: "#fff" }}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: line.c, marginBottom: "4px" }}>{line.l}</div>
              <div style={{ fontSize: "16px", fontWeight: 700 }}>{line.s}</div>
              <div style={{ fontSize: "11px", color: "#999", marginTop: "4px" }}>{line.n}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: "2px solid #333", fontSize: "12px", color: "#ccc", display: "flex", justifyContent: "space-between" }}>
        <span>© 2024 CM Metro</span>
        <span>Prochaine station : le futur</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 87 — Vinyl Record (Music/Retro)
   ============================================================ */
const VinylRecord: React.FC = () => {
  const vinyl = "#1A1A1A";
  const label = "#E8600A";
  return (
    <div style={{ minHeight: "100vh", background: "#F5F0E8", color: "#2C2C2C", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "18px", fontStyle: "italic", color: vinyl }}>Connected Mate Records</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>
          {["Catalogue", "Nouveautés", "Artistes", "Contact"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 40px", display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>
        {/* Vinyl disc */}
        <div style={{ width: "280px", height: "280px", borderRadius: "50%", background: `radial-gradient(circle, ${label} 0%, ${label} 15%, ${vinyl} 16%, ${vinyl} 48%, #333 49%, ${vinyl} 50%, ${vinyl} 100%)`, boxShadow: "0 8px 32px rgba(0,0,0,0.2)", flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: "280px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: label, fontFamily: "sans-serif", marginBottom: "16px" }}>ALBUM DE L&apos;ANNÉE</div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.15, margin: 0, fontStyle: "italic" }}>
            Le Son des
            <br />
            <span style={{ color: label }}>Connexions</span>
          </h1>
          <p style={{ fontSize: "15px", color: "#999", maxWidth: "400px", marginTop: "20px", lineHeight: 1.8, fontFamily: "sans-serif" }}>
            50 keynotes, 100 podcasts, 5 apps. Chaque piste est un voyage sonore unique.
          </p>
          <button style={{ marginTop: "24px", padding: "12px 32px", background: label, color: "#fff", border: "none", fontSize: "13px", fontWeight: 600, fontFamily: "sans-serif", cursor: "pointer", borderRadius: "4px" }}>
            Écouter maintenant
          </button>
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #ddd", fontSize: "12px", color: "#ccc", fontFamily: "sans-serif", marginTop: "40px" }}>
        <span>© 2024 CM Records — Side A</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 88 — Space Station (Sci-Fi/Dashboard)
   ============================================================ */
const SpaceStation: React.FC = () => {
  const green = "#39FF14";
  return (
    <div style={{ minHeight: "100vh", background: "#050505", color: "#ccc", fontFamily: "'Courier New', monospace", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 48px", borderBottom: `1px solid ${green}22`, background: "rgba(0,0,0,0.8)" }}>
        <span style={{ fontSize: "14px", color: green }}>[ CM-STATION ]</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "11px", color: "#555" }}>
          {["SYS", "NAV", "COMM", "LOG"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "60px 48px 40px" }}>
        <div style={{ fontSize: "10px", color: green, opacity: 0.5, marginBottom: "16px" }}>STATION LOG — STARDATE 2024.311</div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 700, lineHeight: 1.0, margin: 0, color: green, textShadow: `0 0 20px ${green}33` }}>
          SYSTEM
          <br />
          ONLINE
        </h1>
        <p style={{ fontSize: "13px", color: "#555", maxWidth: "500px", marginTop: "20px", lineHeight: 1.8 }}>
          Tous les systèmes opérationnels. Keynotes en orbite. Podcasts en transmission. Apps déployées.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", margin: "20px 48px" }}>
        {[
          { v: "50+", l: "KEYNOTES", s: "ONLINE" },
          { v: "100+", l: "PODCASTS", s: "STREAMING" },
          { v: "5", l: "APPS", s: "DEPLOYED" },
          { v: "99.9%", l: "UPTIME", s: "NOMINAL" },
        ].map((item) => (
          <div key={item.l} style={{ background: "#0A0A0A", border: `1px solid ${green}11`, padding: "24px 16px" }}>
            <div style={{ fontSize: "10px", color: green, opacity: 0.5, marginBottom: "8px" }}>{item.s}</div>
            <div style={{ fontSize: "24px", fontWeight: 700, color: green }}>{item.v}</div>
            <div style={{ fontSize: "10px", color: "#444", marginTop: "4px" }}>{item.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", textAlign: "center", fontSize: "11px", color: "#333", marginTop: "40px" }}>
        <span>© 2024 CM-STATION — ALL SYSTEMS NOMINAL</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 89 — Fashion Lookbook (Fashion/Editorial)
   ============================================================ */
const FashionLookbook: React.FC = () => {
  const noir = "#111";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: noir, fontFamily: "'Didot', 'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "24px", fontWeight: 400, letterSpacing: "0.1em" }}>CM</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", fontFamily: "sans-serif" }}>
          {["Collection", "Lookbook", "Store", "About"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif", marginBottom: "28px" }}>AUTOMNE / HIVER 2024</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 120px)", fontWeight: 400, lineHeight: 1.0, margin: 0, letterSpacing: "0.02em", fontStyle: "italic" }}>
          Connected
          <br />
          Couture
        </h1>
        <p style={{ fontSize: "15px", color: "#aaa", maxWidth: "400px", margin: "28px auto 0", lineHeight: 1.9, fontFamily: "sans-serif", fontWeight: 300 }}>
          La mode de la pensée. Chaque idée est taillée sur mesure, chaque projet est haute couture.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", maxWidth: "800px", margin: "0 auto", gap: "1px", background: "#eee" }}>
        {["Keynotes", "Podcasts", "Applications", "Éditos"].map((item) => (
          <div key={item} style={{ background: "#fff", padding: "60px 40px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontStyle: "italic" }}>{item}</div>
            <div style={{ fontSize: "11px", color: "#bbb", marginTop: "12px", fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>Voir la collection</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "11px", color: "#ddd", fontFamily: "sans-serif", letterSpacing: "0.1em", marginTop: "60px" }}>
        <span>© 2024 Connected Mate — Fait main, fait avec cœur</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 90 — Desert Mirage (Adventure/Travel)
   ============================================================ */
const DesertMirage: React.FC = () => {
  const sand = "#C2956B";
  const sky = "#87CEEB";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #1a0a2e 0%, #2d1b69 20%, #87CEEB 60%, #C2956B 80%, #E8C99B 100%)", color: "#fff", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "16px", fontStyle: "italic" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", opacity: 0.6, fontFamily: "sans-serif" }}>
          {["Oasis", "Dunes", "Étoiles", "Camp"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 80px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, lineHeight: 1.15, margin: 0, fontStyle: "italic" }}>
          Au-delà
          <br />
          du <span style={{ color: sand }}>mirage</span>
        </h1>
        <p style={{ fontSize: "16px", opacity: 0.6, maxWidth: "440px", margin: "28px auto 0", lineHeight: 1.9, fontFamily: "sans-serif", fontWeight: 300 }}>
          Traversez le désert des conventions. De l&apos;autre côté, un oasis d&apos;innovation vous attend.
        </p>
        <button style={{ marginTop: "36px", padding: "14px 40px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontSize: "13px", fontWeight: 600, fontFamily: "sans-serif", cursor: "pointer", backdropFilter: "blur(10px)", borderRadius: "4px" }}>
          Traverser le désert
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px" }}>
        {[{ v: "50+", l: "Mirages" }, { v: "100+", l: "Étoiles" }, { v: "5", l: "Oasis" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 300, fontStyle: "italic" }}>{s.v}</div>
            <div style={{ fontSize: "11px", opacity: 0.5, marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", opacity: 0.3, fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Nomades du digital</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 81, name: "Holographic Card", category: "Futuristic", description: "Holographic gradients pink/purple/green, iridescent text, glowing buttons", component: HolographicCard },
  { id: 82, name: "Chalk Board", category: "Education", description: "Green chalkboard with chalk text, dashed borders, wavy underlines, academy feel", component: ChalkBoard },
  { id: 83, name: "Vaporwave Sunset", category: "Aesthetic", description: "Vaporwave with full-width characters, pink/blue neons, retro sun, grid floor", component: VaporwaveSunset },
  { id: 84, name: "Eco Green", category: "Sustainability", description: "Green-first with leaf accent, B Corp badge, carbon metrics, clean light design", component: EcoGreen },
  { id: 85, name: "Magnetic Poetry", category: "Creative", description: "Fridge magnets with tilted word tiles, shadows, grab cursor, playful layout", component: MagneticPoetry },
  { id: 86, name: "Subway Map", category: "Urban", description: "Metro map with colored lines, station stops, transit-style layout", component: SubwayMap },
  { id: 87, name: "Vinyl Record", category: "Music", description: "Record label with vinyl disc graphic, album layout, warm tones", component: VinylRecord },
  { id: 88, name: "Space Station", category: "Sci-Fi", description: "Space station dashboard with green terminal, system status, stardate logs", component: SpaceStation },
  { id: 89, name: "Fashion Lookbook", category: "Fashion", description: "Haute couture with Didot type, season label, 2-column grid, editorial feel", component: FashionLookbook },
  { id: 90, name: "Desert Mirage", category: "Adventure", description: "Desert sky gradient night-to-sand, mirage theme, starry navigation", component: DesertMirage },
];
