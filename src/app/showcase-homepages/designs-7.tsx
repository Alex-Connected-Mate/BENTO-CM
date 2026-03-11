"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 61 — Vintage Postcard (Retro/Travel)
   ============================================================ */
const VintagePostcard: React.FC = () => {
  const rust = "#B5651D";
  const parchment = "#F5ECD7";
  return (
    <div style={{ minHeight: "100vh", background: parchment, color: "#3C2415", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "16px", fontStyle: "italic", color: rust }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#999", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>
          {["Voyages", "Cartes", "Souvenirs", "À propos"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", maxWidth: "700px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: rust, marginBottom: "24px", fontFamily: "sans-serif" }}>CARTE POSTALE N°001</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 400, lineHeight: 1.1, margin: 0, fontStyle: "italic" }}>
          Cher
          <br />
          <span style={{ color: rust }}>Voyageur</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 2, color: "#8B7355", maxWidth: "460px", marginTop: "32px" }}>
          De contrée en contrée, nous collectons des idées comme on ramasse des coquillages. Chaque rencontre est un trésor.
        </p>
        <div style={{ marginTop: "32px", padding: "12px 36px", border: `2px solid ${rust}`, display: "inline-block", color: rust, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>
          Ouvrir l&apos;enveloppe
        </div>
      </section>

      <section style={{ padding: "40px 48px 60px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", maxWidth: "900px" }}>
        {["Paris, France", "Tokyo, Japan", "New York, USA"].map((loc) => (
          <div key={loc} style={{ background: "#fff", padding: "32px 24px", boxShadow: "2px 2px 8px rgba(0,0,0,0.08)", transform: "rotate(-1deg)" }}>
            <div style={{ fontSize: "14px", fontStyle: "italic", color: rust, marginBottom: "8px" }}>{loc}</div>
            <div style={{ fontSize: "12px", color: "#aaa", fontFamily: "sans-serif" }}>Souvenir de voyage</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${rust}33`, display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span style={{ fontStyle: "italic", fontFamily: "Georgia" }}>Avec tout notre amour</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 62 — Glassmorphism Cloud (SaaS/Modern)
   ============================================================ */
const GlassmorphismCloud: React.FC = () => {
  const purple = "#7C3AED";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: "#fff", fontFamily: "'Inter', sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      {/* Background blobs */}
      <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,100,200,0.15)", filter: "blur(60px)" }} />

      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", opacity: 0.8 }}>
          {["Product", "Pricing", "Blog", "Login"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ position: "relative", zIndex: 1, padding: "100px 48px 60px", textAlign: "center" }}>
        <div style={{ display: "inline-block", padding: "6px 20px", background: "rgba(255,255,255,0.15)", borderRadius: "100px", fontSize: "13px", marginBottom: "32px", backdropFilter: "blur(10px)" }}>Nouveau : Version 3.0 disponible</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>
          Cloud-native
          <br />
          collaboration
        </h1>
        <p style={{ fontSize: "17px", opacity: 0.7, maxWidth: "500px", margin: "24px auto 0", lineHeight: 1.7, fontWeight: 300 }}>
          La plateforme qui connecte vos idées à la vitesse de la lumière. Simple, rapide, magique.
        </p>
        <div style={{ marginTop: "40px", display: "inline-flex", gap: "12px" }}>
          <button style={{ padding: "14px 36px", background: "#fff", color: purple, border: "none", fontSize: "14px", fontWeight: 700, borderRadius: "12px", cursor: "pointer" }}>Commencer gratuitement</button>
          <button style={{ padding: "14px 36px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "none", fontSize: "14px", fontWeight: 600, borderRadius: "12px", cursor: "pointer", backdropFilter: "blur(10px)" }}>Voir la démo</button>
        </div>
      </section>

      {/* Glass cards */}
      <section style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "60px 48px", maxWidth: "1000px", margin: "0 auto" }}>
        {[{ t: "Keynotes", d: "50+ conférences inspirantes" }, { t: "Podcasts", d: "100+ épisodes captivants" }, { t: "Apps", d: "5 applications innovantes" }].map((item) => (
          <div key={item.t} style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: "20px", padding: "36px 28px", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>{item.t}</div>
            <div style={{ fontSize: "14px", opacity: 0.6 }}>{item.d}</div>
          </div>
        ))}
      </section>

      <footer style={{ position: "relative", zIndex: 1, padding: "32px 48px", textAlign: "center", fontSize: "13px", opacity: 0.5 }}>
        <span>© 2024 Connected Mate — Built in the cloud</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 63 — Origami Paper (Japanese/Minimal)
   ============================================================ */
const OrigamiPaper: React.FC = () => {
  const indigo = "#3F3D8F";
  const washi = "#F7F3ED";
  return (
    <div style={{ minHeight: "100vh", background: washi, color: "#2D2D2D", fontFamily: "'Palatino', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 60px" }}>
        <span style={{ fontSize: "14px", letterSpacing: "0.3em", textTransform: "uppercase", color: indigo, fontFamily: "sans-serif" }}>折り紙 — CM</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", color: "#aaa", fontFamily: "sans-serif" }}>
          {["Works", "Process", "About"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 60px 80px", maxWidth: "800px" }}>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.2, margin: 0 }}>
          La beauté
          <br />
          dans la <span style={{ color: indigo, fontStyle: "italic" }}>simplicité</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#999", maxWidth: "420px", marginTop: "32px", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Comme un pli d&apos;origami, chaque geste est intentionnel. Chaque projet est une feuille blanche transformée en œuvre.
        </p>
      </section>

      <section style={{ padding: "0 60px 80px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", maxWidth: "800px" }}>
        {["鶴", "蓮", "星", "舟"].map((char, i) => (
          <div key={char} style={{ background: i % 2 === 0 ? "#fff" : `${indigo}08`, padding: "48px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", color: indigo, marginBottom: "8px" }}>{char}</div>
            <div style={{ fontSize: "11px", color: "#ccc", fontFamily: "sans-serif" }}>{["Grue", "Lotus", "Étoile", "Bateau"][i]}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "60px 60px", borderTop: "1px solid #e5e0d5" }}>
        <p style={{ fontSize: "22px", fontStyle: "italic", color: indigo, lineHeight: 1.7, maxWidth: "500px" }}>
          &ldquo;Une feuille, mille possibilités. La contrainte est mère de la créativité.&rdquo;
        </p>
      </section>

      <footer style={{ padding: "24px 60px", borderTop: "1px solid #e5e0d5", fontSize: "12px", color: "#ccc", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — 美</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 64 — Dark Cinema (Film/Entertainment)
   ============================================================ */
const DarkCinema: React.FC = () => {
  const red = "#E50914";
  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D", color: "#fff", fontFamily: "'Helvetica Neue', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "24px", fontWeight: 800, color: red, letterSpacing: "-0.02em" }}>CM</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#888" }}>
          {["Films", "Séries", "Podcasts", "Mon compte"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 80px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: red, marginBottom: "24px" }}>En vedette</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 100px)", fontWeight: 800, lineHeight: 0.95, margin: 0, letterSpacing: "-0.03em" }}>
          CONNECTED
          <br />
          <span style={{ fontWeight: 300, fontStyle: "italic" }}>Stories</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#666", maxWidth: "480px", marginTop: "24px", lineHeight: 1.8 }}>
          Des histoires qui captivent, des idées qui transforment. Le cinéma de la pensée commence ici.
        </p>
        <div style={{ marginTop: "32px", display: "flex", gap: "12px" }}>
          <button style={{ padding: "14px 36px", background: red, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, borderRadius: "4px", cursor: "pointer" }}>Regarder</button>
          <button style={{ padding: "14px 36px", background: "rgba(255,255,255,0.1)", color: "#fff", border: "none", fontSize: "14px", fontWeight: 600, borderRadius: "4px", cursor: "pointer" }}>Ma liste</button>
        </div>
      </section>

      <section style={{ padding: "0 48px 60px" }}>
        <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "20px" }}>Tendances</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {["Keynotes Live", "Deep Talks", "App Stories", "Behind Code"].map((title, i) => (
            <div key={title} style={{ background: "#1A1A1A", borderRadius: "8px", padding: "80px 20px 20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "12px", left: "12px", background: red, color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "4px" }}>TOP {i + 1}</div>
              <div style={{ fontSize: "15px", fontWeight: 600 }}>{title}</div>
              <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>Saison 1</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #222", fontSize: "12px", color: "#444", textAlign: "center" }}>
        <span>© 2024 Connected Mate — Lights, Camera, Connect</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 65 — Memphis Style (80s/Pop)
   ============================================================ */
const MemphisStyle: React.FC = () => {
  const pink = "#FF6B9D";
  const yellow = "#FFD93D";
  const teal = "#6FEDD6";
  return (
    <div style={{ minHeight: "100vh", background: "#FFF5E6", color: "#2D2D2D", fontFamily: "'Arial', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `3px solid ${pink}` }}>
        <span style={{ fontSize: "22px", fontWeight: 900, textTransform: "uppercase" }}>
          <span style={{ color: pink }}>C</span>
          <span style={{ color: yellow }}>O</span>
          <span style={{ color: teal }}>N</span>
          <span style={{ color: pink }}>N</span>ECTED
        </span>
        <div style={{ display: "flex", gap: "20px", fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
          {["Fun", "Create", "Share", "Go!"].map((t) => (
            <span key={t} style={{ cursor: "pointer", color: "#666" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", position: "relative" }}>
        <div style={{ position: "absolute", top: "60px", right: "80px", width: "120px", height: "120px", borderRadius: "50%", background: yellow, opacity: 0.4 }} />
        <div style={{ position: "absolute", top: "180px", right: "200px", width: "60px", height: "60px", background: teal, transform: "rotate(45deg)", opacity: 0.4 }} />
        <h1 style={{ fontSize: "clamp(56px, 8vw, 110px)", fontWeight: 900, lineHeight: 1.0, margin: 0, textTransform: "uppercase", position: "relative" }}>
          POP
          <br />
          <span style={{ color: pink }}>YOUR</span>
          <br />
          IDEAS!
        </h1>
        <p style={{ fontSize: "16px", color: "#888", maxWidth: "440px", marginTop: "24px", lineHeight: 1.8, position: "relative" }}>
          Des couleurs, de l&apos;énergie, de la créativité sans limites. Le design doit être FUN avant tout !
        </p>
        <button style={{ marginTop: "32px", padding: "16px 40px", background: pink, color: "#fff", border: "none", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", cursor: "pointer", borderRadius: "0", position: "relative" }}>
          LET&apos;S GO! →
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "900px" }}>
        {[{ n: "KEYNOTES", c: pink, v: "50+" }, { n: "PODCASTS", c: yellow, v: "100+" }, { n: "APPS", c: teal, v: "5" }].map((item) => (
          <div key={item.n} style={{ background: item.c, padding: "40px 24px", textAlign: "center", color: item.c === yellow ? "#2D2D2D" : "#fff" }}>
            <div style={{ fontSize: "40px", fontWeight: 900 }}>{item.v}</div>
            <div style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", marginTop: "8px" }}>{item.n}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `3px solid ${teal}`, display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 700, color: "#aaa" }}>
        <span>© 2024 CM</span>
        <span style={{ color: pink }}>STAY FUNKY ★</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 66 — Polar Night (Nordic/Dark)
   ============================================================ */
const PolarNight: React.FC = () => {
  const aurora = "#88C999";
  const ice = "#B8D4E3";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #0B1021 0%, #1A2744 100%)", color: "#fff", fontFamily: "'Helvetica Neue', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "15px", fontWeight: 600, color: ice, letterSpacing: "0.1em" }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", color: "#667", letterSpacing: "0.1em" }}>
          {["Northern", "Stories", "Signals", "Camp"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 80px", maxWidth: "800px" }}>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 300, lineHeight: 1.15, margin: 0, letterSpacing: "-0.02em" }}>
          Sous les
          <br />
          <span style={{ color: aurora, fontWeight: 600 }}>aurores boréales</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#667", maxWidth: "440px", marginTop: "32px", lineHeight: 1.9 }}>
          Dans la beauté glaciale du Nord, nous trouvons l&apos;inspiration la plus pure. Chaque projet brille comme une étoile polaire.
        </p>
        <button style={{ marginTop: "40px", padding: "14px 40px", background: "transparent", color: aurora, border: `1px solid ${aurora}44`, fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", cursor: "pointer" }}>
          Explorer le Nord
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", margin: "0 48px" }}>
        {[{ v: "50+", l: "Aurores", c: aurora }, { v: "100+", l: "Récits", c: ice }, { v: "5", l: "Expéditions", c: aurora }].map((s) => (
          <div key={s.l} style={{ background: "rgba(255,255,255,0.03)", padding: "40px 24px", textAlign: "center", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize: "32px", fontWeight: 300, color: s.c }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#556", marginTop: "8px", letterSpacing: "0.1em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "48px", textAlign: "center", fontSize: "12px", color: "#445", marginTop: "60px" }}>
        <span>© 2024 Connected Mate — 64°N</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 67 — Cookbook Recipe (Food/Lifestyle)
   ============================================================ */
const CookbookRecipe: React.FC = () => {
  const tomato = "#D94F30";
  const cream = "#FFF8F0";
  return (
    <div style={{ minHeight: "100vh", background: cream, color: "#3A2E2E", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "2px dashed #e5d5c5" }}>
        <span style={{ fontSize: "20px", fontStyle: "italic", color: tomato }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>
          {["Recettes", "Ingrédients", "Saisons", "Panier"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 40px", maxWidth: "700px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: tomato, fontFamily: "sans-serif", marginBottom: "24px" }}>Recette du jour</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.15, margin: 0, fontStyle: "italic" }}>
          Un mélange
          <br />
          d&apos;<span style={{ color: tomato }}>idées</span> savoureuses
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 2, color: "#999", maxWidth: "460px", marginTop: "24px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Prenez une poignée de créativité, ajoutez une dose d&apos;innovation. Laissez mijoter. Servez chaud.
        </p>
      </section>

      <section style={{ padding: "40px 48px", maxWidth: "700px" }}>
        <div style={{ fontSize: "14px", fontWeight: 700, fontFamily: "sans-serif", marginBottom: "16px", color: tomato }}>Ingrédients :</div>
        <div style={{ display: "grid", gap: "8px", fontSize: "15px", lineHeight: 1.8 }}>
          {["50+ keynotes fraîches", "100+ épisodes de podcast", "5 applications bien cuites", "1 bonne dose de passion"].map((ing) => (
            <div key={ing} style={{ paddingLeft: "20px", borderLeft: `2px solid ${tomato}44` }}>{ing}</div>
          ))}
        </div>
      </section>

      <section style={{ padding: "40px 48px 60px", maxWidth: "700px" }}>
        <div style={{ display: "inline-block", padding: "14px 36px", background: tomato, color: "#fff", fontSize: "13px", fontWeight: 600, fontFamily: "sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: "4px" }}>
          Voir la recette complète
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "2px dashed #e5d5c5", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#ccc", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span style={{ fontStyle: "italic", fontFamily: "Georgia" }}>Bon appétit !</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 68 — Architectural Blueprint (Architecture/Design)
   ============================================================ */
const ArchitecturalBlueprint: React.FC = () => {
  const blueprint = "#2B5EA7";
  return (
    <div style={{ minHeight: "100vh", background: "#1A3A6A", color: "#fff", fontFamily: "'Courier New', monospace", margin: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
        <span style={{ fontSize: "14px", letterSpacing: "0.3em", textTransform: "uppercase" }}>CM ARCHITECTS</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.5 }}>
          {["Plans", "Projects", "Studio", "Contact"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", opacity: 0.4, marginBottom: "24px" }}>PLAN REF. CM-2024-001 — ÉCHELLE 1:1</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, lineHeight: 1.0, margin: 0, letterSpacing: "-0.02em" }}>
          CONSTRUIRE
          <br />
          <span style={{ fontWeight: 300, opacity: 0.6 }}>LE FUTUR</span>
        </h1>
        <p style={{ fontSize: "14px", opacity: 0.4, maxWidth: "480px", marginTop: "32px", lineHeight: 1.8 }}>
          Chaque projet est un plan dessiné avec précision. De la fondation au sommet, nous bâtissons des expériences solides.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", margin: "0 48px", border: "1px solid rgba(255,255,255,0.1)" }}>
        {[{ v: "50+", l: "Structures" }, { v: "100+", l: "Plans" }, { v: "5", l: "Bâtiments" }, { v: "∞", l: "Visions" }].map((s) => (
          <div key={s.l} style={{ padding: "36px 20px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize: "28px", fontWeight: 700 }}>{s.v}</div>
            <div style={{ fontSize: "10px", opacity: 0.4, letterSpacing: "0.15em", marginTop: "8px", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "11px", opacity: 0.3, marginTop: "60px" }}>
        <span>© 2024 Connected Mate Architects — Blueprint Series</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 69 — Music Festival (Event/Party)
   ============================================================ */
const MusicFestival: React.FC = () => {
  const orange = "#FF6B35";
  const lime = "#A8E10C";
  return (
    <div style={{ minHeight: "100vh", background: "#111", color: "#fff", fontFamily: "'Impact', 'Arial Black', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px" }}>
        <span style={{ fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.1em" }}>CM FEST</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", fontFamily: "Arial, sans-serif", color: "#666" }}>
          {["Line-up", "Tickets", "Info", "Gallery"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px", textAlign: "center" }}>
        <div style={{ fontSize: "13px", fontFamily: "Arial, sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", color: lime, marginBottom: "24px" }}>11-13 MARS 2026 — PARIS</div>
        <h1 style={{ fontSize: "clamp(64px, 10vw, 160px)", fontWeight: 900, lineHeight: 0.85, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          CONNECTED
          <br />
          <span style={{ color: orange }}>FEST</span>
        </h1>
        <p style={{ fontSize: "16px", fontFamily: "Arial, sans-serif", fontWeight: 400, color: "#777", maxWidth: "500px", margin: "24px auto 0", lineHeight: 1.8 }}>
          3 jours de keynotes, podcasts live, et expériences digitales. Le plus grand festival d&apos;idées.
        </p>
        <button style={{ marginTop: "40px", padding: "18px 48px", background: orange, color: "#fff", border: "none", fontSize: "16px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer" }}>
          GET TICKETS
        </button>
      </section>

      <section style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
        {[{ t: "JOUR 1", s: "Keynotes Marathon", c: orange }, { t: "JOUR 2", s: "Podcast Live Sessions", c: lime }, { t: "JOUR 3", s: "App Launch Party", c: orange }].map((day) => (
          <div key={day.t} style={{ background: "#1A1A1A", padding: "40px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "12px", fontFamily: "Arial, sans-serif", letterSpacing: "0.2em", color: day.c, marginBottom: "12px" }}>{day.t}</div>
            <div style={{ fontSize: "20px", textTransform: "uppercase" }}>{day.s}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", fontFamily: "Arial, sans-serif", color: "#444" }}>
        <span>© 2024 Connected Mate — SEE YOU IN THE PIT</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 70 — Luxury Spa (Wellness/Premium)
   ============================================================ */
const LuxurySpa: React.FC = () => {
  const gold = "#BFA065";
  const dark = "#1E1E1E";
  return (
    <div style={{ minHeight: "100vh", background: dark, color: "#fff", fontFamily: "'Didot', 'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 48px", gap: "48px" }}>
        {["Soins"].map((t) => (
          <span key={t} style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#666", fontFamily: "sans-serif", cursor: "pointer" }}>{t}</span>
        ))}
        <span style={{ fontSize: "32px", fontWeight: 300, color: gold, letterSpacing: "0.1em" }}>CM Spa</span>
        {["Réserver"].map((t) => (
          <span key={t} style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#666", fontFamily: "sans-serif", cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ padding: "80px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ width: "40px", height: "1px", background: gold, margin: "0 auto 40px" }} />
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.3, margin: 0, letterSpacing: "0.05em" }}>
          Un moment
          <br />
          de <span style={{ fontStyle: "italic", color: gold }}>sérénité</span>
        </h1>
        <p style={{ fontSize: "15px", color: "#777", maxWidth: "420px", margin: "32px auto 0", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          Offrez-vous une pause dans le tumulte digital. Nos expériences sont conçues pour apaiser l&apos;esprit et nourrir l&apos;âme.
        </p>
        <div style={{ width: "40px", height: "1px", background: gold, margin: "40px auto" }} />
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#333", maxWidth: "900px", margin: "0 auto" }}>
        {["Keynotes apaisantes", "Podcasts méditatifs", "Apps zen"].map((service) => (
          <div key={service} style={{ background: dark, padding: "48px 28px", textAlign: "center" }}>
            <div style={{ fontSize: "16px", fontStyle: "italic", color: gold, marginBottom: "8px" }}>{service}</div>
            <div style={{ fontSize: "11px", color: "#555", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>Découvrir →</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "48px", textAlign: "center", fontSize: "11px", color: "#444", fontFamily: "sans-serif", marginTop: "60px" }}>
        <span>© 2024 Connected Mate Spa — Paix intérieure</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 61, name: "Vintage Postcard", category: "Retro", description: "Travel postcard with parchment paper, rust tones, tilted cards, handwritten feel", component: VintagePostcard },
  { id: 62, name: "Glassmorphism Cloud", category: "SaaS", description: "Frosted glass cards, purple gradient background, floating blobs, modern SaaS", component: GlassmorphismCloud },
  { id: 63, name: "Origami Paper", category: "Minimal", description: "Japanese-inspired with washi texture, indigo accents, kanji symbols, clean folds", component: OrigamiPaper },
  { id: 64, name: "Dark Cinema", category: "Entertainment", description: "Netflix-style with red accent, trending cards, dark immersive atmosphere", component: DarkCinema },
  { id: 65, name: "Memphis Style", category: "Playful", description: "80s Memphis with pink/yellow/teal, geometric shapes, bold uppercase, energetic", component: MemphisStyle },
  { id: 66, name: "Polar Night", category: "Nature", description: "Nordic night with aurora green, ice blue, dark gradient, serene atmosphere", component: PolarNight },
  { id: 67, name: "Cookbook Recipe", category: "Lifestyle", description: "Recipe book with tomato red, dashed borders, ingredient list, warm cream tones", component: CookbookRecipe },
  { id: 68, name: "Architectural Blueprint", category: "Technical", description: "Blueprint grid on deep blue, monospace type, reference numbers, precise layout", component: ArchitecturalBlueprint },
  { id: 69, name: "Music Festival", category: "Event", description: "Festival poster with Impact font, orange/lime, day schedule, bold energy", component: MusicFestival },
  { id: 70, name: "Luxury Spa", category: "Wellness", description: "Spa retreat with dark base, gold accents, centered layout, calm elegance", component: LuxurySpa },
];
