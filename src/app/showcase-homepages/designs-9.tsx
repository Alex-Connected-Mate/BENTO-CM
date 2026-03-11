"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 67 — Cinematic Noir (Dark film aesthetic, dramatic lighting)
   ============================================================ */
const CinematicNoir: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: "#F5F0EB", fontFamily: "'Inter', sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d67-spotlight { 0%,100% { opacity: .3; transform: translateX(-20%); } 50% { opacity: .6; transform: translateX(20%); } }
        @keyframes d67-fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d67-filmGrain { 0% { background-position: 0 0; } 100% { background-position: 200px 200px; } }
        @keyframes d67-typewriter { from { width: 0; } to { width: 100%; } }
        @keyframes d67-blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
        .d67-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 60px rgba(232,96,10,0.15) !important; }
        .d67-link:hover { color: ${orange} !important; }
        .d67-btn:hover { background: ${amber} !important; transform: scale(1.04); }
      `}} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse 60% 50% at 30% 20%, rgba(232,96,10,0.08) 0%, transparent 70%)`, animation: "d67-spotlight 8s ease-in-out infinite", pointerEvents: "none" }} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", position: "relative", zIndex: 10, borderBottom: "1px solid rgba(245,240,235,0.06)" }}>
        <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: orange }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          {["Plateforme", "Keynotes", "Podcasts", "Studio"].map(t => (
            <span key={t} className="d67-link" style={{ cursor: "pointer", color: "rgba(245,240,235,0.5)", transition: "color .3s" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "120px 48px 80px", position: "relative", zIndex: 2, animation: "d67-fadeUp 1s ease" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: orange, marginBottom: "24px" }}>Votre scène digitale</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, lineHeight: 1, margin: 0, letterSpacing: "-0.02em" }}>
          L&apos;art de <br />
          <span style={{ color: orange, fontStyle: "italic" }}>connecter</span>
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(245,240,235,0.5)", maxWidth: "440px", lineHeight: 1.8, marginTop: "28px" }}>
          Connected Mate orchestre vos keynotes, podcasts et événements live avec une précision cinématographique.
        </p>
        <button className="d67-btn" style={{ marginTop: "36px", padding: "16px 48px", background: orange, color: "#fff", border: "none", fontSize: "13px", fontWeight: 600, borderRadius: "60px", cursor: "pointer", transition: "all .3s", letterSpacing: "0.06em" }}>
          Découvrir la plateforme
        </button>
      </section>
      <section style={{ padding: "60px 48px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", animation: "d67-fadeUp 1.2s ease" }}>
        {[
          { name: "Connected Hub", desc: "Centralisez vos contenus keynotes et sessions en un seul espace immersif", icon: "◉" },
          { name: "Mate Analytics", desc: "Données audience en temps réel avec visualisations cinématographiques", icon: "◈" },
          { name: "EventFlow", desc: "Orchestrez chaque moment de vos événements live sans effort", icon: "◇" },
        ].map((app, i) => (
          <div key={i} className="d67-card" style={{ background: "rgba(245,240,235,0.03)", border: "1px solid rgba(245,240,235,0.06)", borderRadius: "16px", padding: "36px", transition: "all .4s", cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
            <div style={{ fontSize: "28px", marginBottom: "16px", color: orange }}>{app.icon}</div>
            <h3 style={{ fontSize: "18px", fontWeight: 600, margin: "0 0 12px" }}>{app.name}</h3>
            <p style={{ fontSize: "13px", color: "rgba(245,240,235,0.45)", lineHeight: 1.7, margin: 0 }}>{app.desc}</p>
          </div>
        ))}
      </section>
      <section style={{ padding: "80px 48px", textAlign: "center", borderTop: "1px solid rgba(245,240,235,0.06)" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "64px" }}>
          {[{ n: "2,400+", l: "Keynotes diffusées" }, { n: "180K", l: "Auditeurs mensuels" }, { n: "98%", l: "Satisfaction client" }].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "36px", fontWeight: 700, color: orange, fontFamily: "'Playfair Display', serif" }}>{s.n}</div>
              <div style={{ fontSize: "11px", color: "rgba(245,240,235,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "8px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "11px", color: "rgba(245,240,235,0.2)", letterSpacing: "0.1em" }}>
        © 2025 Connected Mate — Tous droits réservés
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 68 — Playful Memphis (Geometric shapes, bold colors, fun)
   ============================================================ */
const PlayfulMemphis: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "#FFF8F0", color: "#1A1A2E", fontFamily: "'Space Grotesk', sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d68-bounce { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(5deg); } }
        @keyframes d68-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes d68-wiggle { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
        @keyframes d68-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d68-pop { 0% { transform: scale(0); } 70% { transform: scale(1.1); } 100% { transform: scale(1); } }
        .d68-card:hover { transform: translateY(-8px) rotate(-1deg) !important; box-shadow: 8px 8px 0 ${orange} !important; }
        .d68-btn:hover { transform: translateY(-3px) !important; box-shadow: 6px 6px 0 #1A1A2E !important; }
        .d68-link:hover { color: ${orange} !important; }
      `}} />
      <div style={{ position: "absolute", top: "60px", right: "80px", width: "120px", height: "120px", borderRadius: "50%", border: `4px solid ${amber}`, animation: "d68-bounce 3s ease-in-out infinite", opacity: 0.6 }} />
      <div style={{ position: "absolute", top: "200px", left: "40px", width: "60px", height: "60px", background: orange, animation: "d68-spin 8s linear infinite", opacity: 0.3 }} />
      <div style={{ position: "absolute", bottom: "100px", right: "120px", width: "80px", height: "80px", background: amber, borderRadius: "50%", animation: "d68-wiggle 2s ease-in-out infinite", opacity: 0.4 }} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", position: "relative", zIndex: 10 }}>
        <span style={{ fontSize: "18px", fontWeight: 800, color: orange }}>Connected Mate ✦</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", fontWeight: 600 }}>
          {["Apps", "Keynotes", "Podcasts", "Tarifs"].map(t => (
            <span key={t} className="d68-link" style={{ cursor: "pointer", color: "#1A1A2E", transition: "color .3s", padding: "6px 14px", borderRadius: "20px", border: "2px solid transparent" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "100px 48px 80px", position: "relative", zIndex: 2, animation: "d68-fadeUp .8s ease" }}>
        <div style={{ display: "inline-block", padding: "8px 20px", background: amber, borderRadius: "20px", fontSize: "12px", fontWeight: 700, marginBottom: "24px", animation: "d68-wiggle 2s ease-in-out infinite" }}>
          ✨ Nouvelle version disponible
        </div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 80px)", fontWeight: 900, lineHeight: 1.05, margin: 0, letterSpacing: "-0.02em" }}>
          Créez des <br />
          événements <br />
          <span style={{ color: orange, textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: amber, textUnderlineOffset: "8px" }}>inoubliables</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#666", maxWidth: "440px", lineHeight: 1.8, marginTop: "24px" }}>
          5 applications puissantes pour gérer keynotes, podcasts et networking en toute simplicité.
        </p>
        <button className="d68-btn" style={{ marginTop: "32px", padding: "16px 40px", background: orange, color: "#fff", border: "3px solid #1A1A2E", fontSize: "14px", fontWeight: 800, borderRadius: "12px", cursor: "pointer", transition: "all .2s", boxShadow: "4px 4px 0 #1A1A2E" }}>
          C&apos;est parti →
        </button>
      </section>
      <section style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
        {[
          { name: "Connected Hub", color: "#FFE4CC", icon: "🎯" },
          { name: "Mate Analytics", color: "#E8F4E8", icon: "📊" },
          { name: "QuickSync", color: "#E4E8FF", icon: "⚡" },
          { name: "EventFlow", color: "#FFE4F0", icon: "🎪" },
          { name: "AI Assistant", color: "#FFF4E0", icon: "🤖" },
        ].map((app, i) => (
          <div key={i} className="d68-card" style={{ background: app.color, borderRadius: "16px", padding: "28px 20px", textAlign: "center", border: "3px solid #1A1A2E", transition: "all .2s", cursor: "pointer", boxShadow: "4px 4px 0 #1A1A2E", animation: `d68-pop .5s ease ${i * 0.1}s both` }}>
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>{app.icon}</div>
            <div style={{ fontSize: "13px", fontWeight: 700 }}>{app.name}</div>
          </div>
        ))}
      </section>
      <section style={{ padding: "60px 48px", background: "#1A1A2E", color: "#fff", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "64px" }}>
          {[{ n: "5", l: "Applications intégrées" }, { n: "50K+", l: "Utilisateurs actifs" }, { n: "99.9%", l: "Uptime garanti" }].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "40px", fontWeight: 900, color: amber }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "6px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "12px", color: "#999" }}>
        © 2025 Connected Mate — Play. Connect. Grow.
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 69 — Isometric 3D (Pseudo-3D cards, depth perspective)
   ============================================================ */
const Isometric3D: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #1A1033 0%, #0D0D1A 100%)", color: "#F0ECF5", fontFamily: "'Inter', sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d69-float { 0%,100% { transform: perspective(800px) rotateX(8deg) rotateY(-4deg) translateY(0); } 50% { transform: perspective(800px) rotateX(8deg) rotateY(-4deg) translateY(-10px); } }
        @keyframes d69-fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d69-glow { 0%,100% { box-shadow: 0 0 20px rgba(232,96,10,0.2); } 50% { box-shadow: 0 0 40px rgba(232,96,10,0.4); } }
        @keyframes d69-gridPulse { 0%,100% { opacity: 0.03; } 50% { opacity: 0.08; } }
        .d69-card:hover { transform: perspective(800px) rotateX(2deg) rotateY(-2deg) translateY(-12px) !important; box-shadow: 0 30px 60px rgba(232,96,10,0.2), 0 10px 20px rgba(0,0,0,0.3) !important; }
        .d69-btn:hover { box-shadow: 0 0 30px rgba(232,96,10,0.5) !important; transform: scale(1.05); }
      `}} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(232,96,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,96,10,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px", animation: "d69-gridPulse 4s ease-in-out infinite", pointerEvents: "none" }} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", position: "relative", zIndex: 10 }}>
        <span style={{ fontSize: "16px", fontWeight: 700, color: orange }}>⬡ Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", color: "rgba(240,236,245,0.5)" }}>
          {["Plateforme", "Solutions", "Pricing", "Contact"].map(t => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "100px 48px 60px", textAlign: "center", animation: "d69-fadeUp 1s ease", position: "relative", zIndex: 2 }}>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 800, lineHeight: 1.05, margin: 0 }}>
          Vos événements<br />
          en <span style={{ color: orange }}>3 dimensions</span>
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(240,236,245,0.5)", maxWidth: "480px", margin: "24px auto 0", lineHeight: 1.8 }}>
          Connected Mate ajoute de la profondeur à chaque keynote, podcast et session networking. Une expérience immersive pour vos audiences.
        </p>
        <button className="d69-btn" style={{ marginTop: "36px", padding: "16px 44px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", fontSize: "13px", fontWeight: 700, borderRadius: "12px", cursor: "pointer", transition: "all .3s", boxShadow: "0 8px 30px rgba(232,96,10,0.3)" }}>
          Explorer la plateforme
        </button>
      </section>
      <section style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", perspective: "1000px" }}>
        {[
          { name: "Connected Hub", desc: "Hub central unifiant keynotes, sessions et replays en temps réel", gradient: "linear-gradient(135deg, #1E1640, #2A1E50)" },
          { name: "Mate Analytics", desc: "Tableaux de bord 3D avec données d'engagement interactives", gradient: "linear-gradient(135deg, #1A2040, #1E2850)" },
          { name: "QuickSync", desc: "Synchronisation instantanée entre speakers et participants", gradient: "linear-gradient(135deg, #201A18, #2A2018)" },
          { name: "EventFlow", desc: "Orchestration visuelle de vos événements multi-sessions", gradient: "linear-gradient(135deg, #181A20, #1E2028)" },
          { name: "AI Assistant", desc: "Intelligence artificielle prédictive pour optimiser chaque événement", gradient: "linear-gradient(135deg, #1A1830, #221840)" },
          { name: "QuickSync Pro", desc: "Networking intelligent avec matching algorithmique avancé", gradient: "linear-gradient(135deg, #201820, #281E28)" },
        ].map((app, i) => (
          <div key={i} className="d69-card" style={{ background: app.gradient, borderRadius: "20px", padding: "36px", border: "1px solid rgba(232,96,10,0.1)", transition: "all .4s", cursor: "pointer", transform: "perspective(800px) rotateX(4deg) rotateY(-2deg)", boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)", animation: `d69-float 4s ease-in-out ${i * 0.3}s infinite` }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `linear-gradient(135deg, ${orange}, ${amber})`, marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: "#fff", fontWeight: 700 }}>{i + 1}</div>
            <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 10px" }}>{app.name}</h3>
            <p style={{ fontSize: "13px", color: "rgba(240,236,245,0.4)", lineHeight: 1.7, margin: 0 }}>{app.desc}</p>
          </div>
        ))}
      </section>
      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "11px", color: "rgba(240,236,245,0.2)", borderTop: "1px solid rgba(240,236,245,0.05)" }}>
        © 2025 Connected Mate — Immersive Event Technology
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 70 — Newspaper / Broadsheet (Classic print editorial)
   ============================================================ */
const NewspaperBroadsheet: React.FC = () => {
  const orange = "#E8600A";
  return (
    <div style={{ minHeight: "100vh", background: "#F5F0E8", color: "#1A1A1A", fontFamily: "'Playfair Display', serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d70-fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes d70-slideDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d70-underline { from { width: 0; } to { width: 100%; } }
        .d70-article:hover { background: rgba(232,96,10,0.04) !important; }
        .d70-link:hover { color: ${orange} !important; }
      `}} />
      <header style={{ borderBottom: "3px double #1A1A1A", padding: "20px 48px", textAlign: "center", animation: "d70-slideDown .8s ease" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#888", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>
          Édition du 11 Mars 2025 — Paris, France
        </div>
        <h1 style={{ fontSize: "48px", fontWeight: 900, margin: "0", letterSpacing: "-0.02em", lineHeight: 1 }}>Connected Mate</h1>
        <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: orange, fontFamily: "'Inter', sans-serif", marginTop: "8px" }}>
          La plateforme événementielle de référence
        </div>
      </header>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "0", borderBottom: "1px solid #ddd", animation: "d70-fadeIn 1s ease .3s both" }}>
        <div className="d70-article" style={{ padding: "32px", borderRight: "1px solid #ddd", transition: "background .3s", cursor: "pointer" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: orange, fontFamily: "'Inter', sans-serif", marginBottom: "12px" }}>À la une</div>
          <h2 style={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px" }}>Connected Hub réinvente l&apos;expérience keynote avec une interface immersive</h2>
          <p style={{ fontSize: "14px", fontFamily: "'Inter', sans-serif", color: "#555", lineHeight: 1.8, margin: 0 }}>
            La nouvelle version de Connected Hub intègre un système de diffusion en temps réel couplé à des outils d&apos;interaction audience révolutionnaires. Les organisateurs d&apos;événements peuvent désormais créer des expériences sur mesure.
          </p>
        </div>
        <div style={{ borderRight: "1px solid #ddd" }}>
          <div className="d70-article" style={{ padding: "24px", borderBottom: "1px solid #ddd", transition: "background .3s", cursor: "pointer" }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>Analytics</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.3, margin: 0 }}>Mate Analytics dépasse les 180K utilisateurs mensuels</h3>
          </div>
          <div className="d70-article" style={{ padding: "24px", transition: "background .3s", cursor: "pointer" }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>Podcasts</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.3, margin: 0 }}>Le podcast CM atteint le top 10 des podcasts tech en France</h3>
          </div>
        </div>
        <div>
          <div className="d70-article" style={{ padding: "24px", borderBottom: "1px solid #ddd", transition: "background .3s", cursor: "pointer" }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>EventFlow</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.3, margin: 0 }}>Orchestration multi-sessions : la fonctionnalité la plus demandée</h3>
          </div>
          <div className="d70-article" style={{ padding: "24px", transition: "background .3s", cursor: "pointer" }}>
            <div style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#888", fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>Intelligence</div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, lineHeight: 1.3, margin: 0 }}>L&apos;AI Assistant prédit le succès de vos événements</h3>
          </div>
        </div>
      </div>
      <section style={{ padding: "40px 48px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "20px", borderBottom: "1px solid #ddd", animation: "d70-fadeIn 1s ease .6s both" }}>
        {[
          { name: "Connected Hub", role: "Hub Central" },
          { name: "Mate Analytics", role: "Données" },
          { name: "QuickSync", role: "Networking" },
          { name: "EventFlow", role: "Événements" },
          { name: "AI Assistant", role: "Intelligence" },
        ].map((app, i) => (
          <div key={i} style={{ textAlign: "center", padding: "20px", cursor: "pointer" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: i === 0 ? orange : "#E8E0D4", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", color: i === 0 ? "#fff" : "#1A1A1A", fontWeight: 700 }}>{i + 1}</div>
            <div style={{ fontSize: "14px", fontWeight: 700 }}>{app.name}</div>
            <div style={{ fontSize: "11px", color: "#888", fontFamily: "'Inter', sans-serif", marginTop: "4px" }}>{app.role}</div>
          </div>
        ))}
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#888", fontFamily: "'Inter', sans-serif" }}>
        Connected Mate © 2025 — Imprimé numériquement à Paris
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 71 — Aurora Borealis (Northern lights, gradient waves)
   ============================================================ */
const AuroraBorealis: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "#050510", color: "#E8E4F0", fontFamily: "'Inter', sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d71-aurora { 0% { transform: translateX(-30%) skewX(-5deg); opacity: 0.3; } 50% { transform: translateX(30%) skewX(5deg); opacity: 0.6; } 100% { transform: translateX(-30%) skewX(-5deg); opacity: 0.3; } }
        @keyframes d71-aurora2 { 0% { transform: translateX(20%) skewX(3deg); opacity: 0.2; } 50% { transform: translateX(-20%) skewX(-3deg); opacity: 0.5; } 100% { transform: translateX(20%) skewX(3deg); opacity: 0.2; } }
        @keyframes d71-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d71-twinkle { 0%,100% { opacity: 0.2; } 50% { opacity: 1; } }
        @keyframes d71-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        .d71-card:hover { transform: translateY(-8px) !important; border-color: rgba(232,96,10,0.3) !important; box-shadow: 0 20px 60px rgba(232,96,10,0.15), 0 0 40px rgba(245,166,35,0.1) !important; }
        .d71-btn:hover { box-shadow: 0 0 40px rgba(232,96,10,0.4), 0 0 80px rgba(245,166,35,0.2) !important; }
      `}} />
      <div style={{ position: "absolute", top: "-30%", left: "-10%", width: "120%", height: "60%", background: `linear-gradient(90deg, transparent, rgba(232,96,10,0.15), rgba(245,166,35,0.1), rgba(100,200,150,0.08), transparent)`, filter: "blur(80px)", animation: "d71-aurora 10s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "-20%", left: "0", width: "100%", height: "50%", background: `linear-gradient(90deg, transparent, rgba(100,120,255,0.08), rgba(232,96,10,0.1), transparent)`, filter: "blur(60px)", animation: "d71-aurora2 8s ease-in-out infinite", pointerEvents: "none" }} />
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{ position: "absolute", width: "2px", height: "2px", borderRadius: "50%", background: "#fff", top: `${10 + Math.random() * 40}%`, left: `${Math.random() * 100}%`, animation: `d71-twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 3}s infinite`, pointerEvents: "none" }} />
      ))}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", position: "relative", zIndex: 10 }}>
        <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "0.05em" }}>
          <span style={{ color: orange }}>●</span> Connected Mate
        </span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", color: "rgba(232,228,240,0.5)" }}>
          {["Plateforme", "Features", "Keynotes", "Contact"].map(t => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "120px 48px 80px", textAlign: "center", position: "relative", zIndex: 2, animation: "d71-fadeUp 1s ease" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(44px, 6.5vw, 88px)", fontWeight: 700, lineHeight: 1.05, margin: 0, background: `linear-gradient(135deg, ${orange}, ${amber}, #E8E4F0)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Illuminez vos<br />événements
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(232,228,240,0.5)", maxWidth: "480px", margin: "24px auto 0", lineHeight: 1.8 }}>
          Connected Mate transforme vos keynotes et podcasts en aurores d&apos;innovation. 5 applications interconnectées pour des événements lumineux.
        </p>
        <button className="d71-btn" style={{ marginTop: "36px", padding: "16px 48px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", fontSize: "13px", fontWeight: 700, borderRadius: "60px", cursor: "pointer", transition: "all .4s", boxShadow: `0 8px 30px rgba(232,96,10,0.3)` }}>
          Entrer dans la lumière
        </button>
      </section>
      <section style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {[
          { name: "Connected Hub", desc: "Centre névralgique de vos contenus live et on-demand", glow: "rgba(232,96,10,0.1)" },
          { name: "Mate Analytics", desc: "Visualisations lumineuses de vos données d'engagement", glow: "rgba(245,166,35,0.1)" },
          { name: "EventFlow", desc: "Orchestrez le flux de vos événements comme une symphonie", glow: "rgba(100,200,150,0.1)" },
        ].map((app, i) => (
          <div key={i} className="d71-card" style={{ background: "rgba(232,228,240,0.03)", border: "1px solid rgba(232,228,240,0.06)", borderRadius: "20px", padding: "36px", transition: "all .4s", cursor: "pointer", boxShadow: `0 8px 32px ${app.glow}`, animation: `d71-breathe 4s ease-in-out ${i * 0.5}s infinite` }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: orange, marginBottom: "20px", boxShadow: `0 0 20px ${orange}` }} />
            <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 10px" }}>{app.name}</h3>
            <p style={{ fontSize: "13px", color: "rgba(232,228,240,0.4)", lineHeight: 1.7, margin: 0 }}>{app.desc}</p>
          </div>
        ))}
      </section>
      <section style={{ padding: "60px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-block", padding: "24px 48px", borderRadius: "20px", background: "rgba(232,96,10,0.05)", border: "1px solid rgba(232,96,10,0.1)" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontStyle: "italic", lineHeight: 1.6 }}>
            &ldquo;Connected Mate a transformé notre façon de penser les événements.&rdquo;
          </div>
          <div style={{ fontSize: "12px", color: "rgba(232,228,240,0.4)", marginTop: "12px" }}>— Directrice Événementiel, TechCorp Paris</div>
        </div>
      </section>
      <footer style={{ padding: "40px 48px", textAlign: "center", fontSize: "11px", color: "rgba(232,228,240,0.15)" }}>
        © 2025 Connected Mate — Bringing light to events
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 72 — Duotone Photography (Two-tone images, bold type)
   ============================================================ */
const DuotonePhotography: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F5", color: "#1A1A1A", fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d72-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d72-slideIn { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes d72-colorShift { 0%,100% { filter: sepia(0.3) hue-rotate(0deg); } 50% { filter: sepia(0.3) hue-rotate(15deg); } }
        .d72-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 50px rgba(232,96,10,0.12), 0 4px 12px rgba(0,0,0,0.06) !important; }
        .d72-btn:hover { background: #1A1A1A !important; color: #FAF8F5 !important; }
        .d72-tag:hover { background: ${orange} !important; color: #fff !important; }
      `}} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected<span style={{ color: orange }}>Mate</span></span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", fontWeight: 500 }}>
          {["Plateforme", "Keynotes", "Podcasts", "Tarifs"].map(t => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "80px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", animation: "d72-fadeUp .8s ease" }}>
        <div>
          <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
            {["SaaS", "Events", "Podcasts"].map(t => (
              <span key={t} className="d72-tag" style={{ padding: "6px 14px", borderRadius: "20px", border: `1.5px solid ${orange}`, fontSize: "11px", fontWeight: 600, color: orange, cursor: "pointer", transition: "all .3s" }}>{t}</span>
            ))}
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>
            Deux tons,<br />
            <span style={{ color: orange }}>mille possibilités</span>
          </h1>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8, maxWidth: "400px" }}>
            Connected Mate donne le ton à vos événements. Keynotes percutantes, podcasts immersifs, networking intelligent.
          </p>
          <button className="d72-btn" style={{ marginTop: "28px", padding: "14px 36px", background: orange, color: "#fff", border: `2px solid ${orange}`, fontSize: "13px", fontWeight: 700, borderRadius: "8px", cursor: "pointer", transition: "all .3s" }}>
            Découvrir →
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {[
            { name: "Connected Hub", bg: orange },
            { name: "Mate Analytics", bg: amber },
            { name: "QuickSync", bg: "#2A2A3E" },
            { name: "EventFlow", bg: "#E8600A" },
          ].map((app, i) => (
            <div key={i} className="d72-card" style={{ background: app.bg, borderRadius: "16px", padding: "28px", color: "#fff", transition: "all .3s", cursor: "pointer", boxShadow: "0 8px 24px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)", aspectRatio: "1", display: "flex", alignItems: "flex-end", animation: `d72-slideIn .6s ease ${i * 0.1}s both` }}>
              <span style={{ fontSize: "14px", fontWeight: 700 }}>{app.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "60px 48px", background: "#1A1A1A", color: "#FAF8F5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", textAlign: "center" }}>
          {[{ n: "5", l: "Applications" }, { n: "50K+", l: "Utilisateurs" }, { n: "2,400+", l: "Keynotes" }, { n: "98%", l: "Satisfaction" }].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "36px", fontWeight: 800, color: i % 2 === 0 ? orange : amber }}>{s.n}</div>
              <div style={{ fontSize: "12px", color: "rgba(250,248,245,0.5)", marginTop: "6px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "60px 48px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "24px", fontFamily: "'Playfair Display', serif", fontStyle: "italic", lineHeight: 1.5 }}>
            &ldquo;La simplicité visuelle de Connected Mate cache une puissance technique remarquable.&rdquo;
          </div>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "16px" }}>— Head of Events, Digital Paris Summit</div>
        </div>
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#bbb", borderTop: "1px solid #eee" }}>
        © 2025 Connected Mate — Crafted with contrast
      </footer>
    </div>
  );
};

/* ───── EXPORTS ─────────────────────────────────────────────── */
export const designs: HomepageDesign[] = [
  { id: 67, name: "Cinematic Noir", category: "Dark & Dramatic", description: "DA cinématographique sombre avec éclairage dramatique, typographie serif élégante et ambiance film noir pour Connected Mate", component: CinematicNoir },
  { id: 68, name: "Playful Memphis", category: "Fun & Geometric", description: "DA ludique inspirée du mouvement Memphis avec formes géométriques animées, couleurs vives et énergie joyeuse", component: PlayfulMemphis },
  { id: 69, name: "Isometric 3D", category: "Depth & Perspective", description: "DA pseudo-3D avec cartes en perspective isométrique, grille pulsante et effets de profondeur flottants", component: Isometric3D },
  { id: 70, name: "Newspaper Broadsheet", category: "Print Editorial", description: "DA journal classique façon broadsheet avec grille éditoriale, typographie serif et mise en page de presse", component: NewspaperBroadsheet },
  { id: 71, name: "Aurora Borealis", category: "Atmospheric & Luminous", description: "DA atmosphérique avec aurores boréales animées, particules stellaires et gradients lumineux éthérés", component: AuroraBorealis },
  { id: 72, name: "Duotone Photography", category: "Bold & Graphic", description: "DA bichromique avec blocs de couleur contrastés, typographie grasse et mise en page photographique", component: DuotonePhotography },
];
