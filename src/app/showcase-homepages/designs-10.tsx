"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 73 — Liquid Morphism (Fluid blobs, organic motion)
   ============================================================ */
const LiquidMorphism: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "#FEFCF9", color: "#1A1A2E", fontFamily: "'Inter', sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d73-blob1 { 0%,100% { border-radius: 42% 58% 62% 38% / 45% 55% 45% 55%; transform: rotate(0deg) scale(1); } 33% { border-radius: 55% 45% 38% 62% / 52% 48% 52% 48%; transform: rotate(120deg) scale(1.05); } 66% { border-radius: 38% 62% 55% 45% / 48% 52% 48% 52%; transform: rotate(240deg) scale(0.95); } }
        @keyframes d73-blob2 { 0%,100% { border-radius: 55% 45% 48% 52% / 42% 58% 42% 58%; } 50% { border-radius: 42% 58% 55% 45% / 55% 45% 55% 45%; } }
        @keyframes d73-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d73-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        .d73-card:hover { transform: translateY(-8px) scale(1.02) !important; box-shadow: 0 24px 48px rgba(232,96,10,0.12), 0 8px 16px rgba(0,0,0,0.04) !important; }
        .d73-btn:hover { transform: scale(1.05) !important; box-shadow: 0 12px 36px rgba(232,96,10,0.3) !important; }
      `}} />
      <div style={{ position: "absolute", top: "-15%", right: "-10%", width: "500px", height: "500px", background: `linear-gradient(135deg, rgba(232,96,10,0.12), rgba(245,166,35,0.08))`, filter: "blur(60px)", animation: "d73-blob1 12s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "400px", height: "400px", background: `linear-gradient(135deg, rgba(245,166,35,0.08), rgba(232,96,10,0.06))`, filter: "blur(50px)", animation: "d73-blob2 10s ease-in-out infinite", pointerEvents: "none" }} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", position: "relative", zIndex: 10 }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>
          <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: orange, marginRight: "8px" }} />Connected Mate
        </span>
        <div style={{ display: "flex", gap: "8px" }}>
          {["Plateforme", "Keynotes", "Podcasts", "Tarifs"].map(t => (
            <span key={t} style={{ padding: "8px 18px", borderRadius: "24px", background: "rgba(26,26,46,0.04)", fontSize: "13px", fontWeight: 500, cursor: "pointer", transition: "all .3s" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "100px 48px 60px", textAlign: "center", position: "relative", zIndex: 2, animation: "d73-fadeUp .8s ease" }}>
        <div style={{ display: "inline-block", padding: "8px 20px", borderRadius: "24px", background: "rgba(232,96,10,0.08)", color: orange, fontSize: "12px", fontWeight: 600, marginBottom: "24px" }}>
          Plateforme événementielle nouvelle génération
        </div>
        <h1 style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>
          Des événements<br />
          qui <span style={{ color: orange, position: "relative" }}>coulent de source</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#888", maxWidth: "480px", margin: "24px auto 0", lineHeight: 1.8 }}>
          Connected Mate fluidifie chaque étape de vos keynotes, podcasts et sessions live. Organique, intuitif, puissant.
        </p>
        <button className="d73-btn" style={{ marginTop: "32px", padding: "16px 44px", background: orange, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, borderRadius: "60px", cursor: "pointer", transition: "all .3s", boxShadow: "0 8px 24px rgba(232,96,10,0.2)" }}>
          Essayer gratuitement
        </button>
      </section>
      <section style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {[
          { name: "Connected Hub", desc: "Hub central avec interface fluide pour gérer contenus keynotes et replays", color: "rgba(232,96,10,0.06)" },
          { name: "Mate Analytics", desc: "Analytics organiques avec visualisations de données en mouvement", color: "rgba(245,166,35,0.06)" },
          { name: "QuickSync", desc: "Networking liquide — connexions qui s'écoulent naturellement entre participants", color: "rgba(100,150,232,0.06)" },
          { name: "EventFlow", desc: "Flux d'événements continu, du planning à l'exécution sans friction", color: "rgba(150,200,100,0.06)" },
          { name: "AI Assistant", desc: "Intelligence fluide qui anticipe vos besoins et suggère des optimisations", color: "rgba(200,100,200,0.06)" },
          { name: "Podcast Studio", desc: "Production podcast intégrée avec diffusion multi-plateformes", color: "rgba(232,180,96,0.06)" },
        ].map((app, i) => (
          <div key={i} className="d73-card" style={{ background: app.color, borderRadius: "24px", padding: "32px", transition: "all .4s", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.04)", animation: `d73-float 4s ease-in-out ${i * 0.4}s infinite` }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 8px" }}>{app.name}</h3>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, margin: 0 }}>{app.desc}</p>
          </div>
        ))}
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#ccc" }}>
        © 2025 Connected Mate — Flow with us
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 74 — Cyberpunk Glitch (Neon accents, scanlines, distortion)
   ============================================================ */
const CyberpunkGlitch: React.FC = () => {
  const orange = "#E8600A";
  const neon = "#FF4500";
  const cyan = "#00E5FF";
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#E0E0E8", fontFamily: "'Space Grotesk', monospace", margin: 0, position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d74-scanline { from { transform: translateY(-100%); } to { transform: translateY(100vh); } }
        @keyframes d74-glitch { 0%,100% { transform: translate(0); } 20% { transform: translate(-2px, 2px); } 40% { transform: translate(2px, -1px); } 60% { transform: translate(-1px, -2px); } 80% { transform: translate(1px, 1px); } }
        @keyframes d74-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d74-flicker { 0%,100% { opacity: 1; } 92% { opacity: 1; } 93% { opacity: 0.3; } 94% { opacity: 1; } 96% { opacity: 0.5; } 97% { opacity: 1; } }
        @keyframes d74-neonPulse { 0%,100% { text-shadow: 0 0 10px ${neon}, 0 0 20px ${neon}; } 50% { text-shadow: 0 0 20px ${neon}, 0 0 40px ${neon}, 0 0 60px ${neon}; } }
        .d74-card:hover { border-color: ${neon} !important; box-shadow: 0 0 20px rgba(255,69,0,0.3), inset 0 0 20px rgba(255,69,0,0.05) !important; transform: translateY(-4px) !important; }
        .d74-btn:hover { box-shadow: 0 0 30px ${neon}, 0 0 60px rgba(255,69,0,0.3) !important; }
        .d74-link:hover { color: ${cyan} !important; }
      `}} />
      <div style={{ position: "absolute", inset: 0, background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.01) 2px, rgba(255,255,255,0.01) 4px)`, pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${neon}, transparent)`, animation: "d74-scanline 3s linear infinite", pointerEvents: "none", zIndex: 2, opacity: 0.4 }} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", position: "relative", zIndex: 10, borderBottom: `1px solid rgba(255,69,0,0.15)` }}>
        <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: neon, animation: "d74-neonPulse 3s ease-in-out infinite" }}>
          ▸ CONNECTED_MATE
        </span>
        <div style={{ display: "flex", gap: "24px", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {["SYS://Platform", "DAT://Keynotes", "AUD://Podcasts", "NET://Sync"].map(t => (
            <span key={t} className="d74-link" style={{ cursor: "pointer", color: "rgba(224,224,232,0.4)", transition: "color .3s" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "100px 48px 60px", position: "relative", zIndex: 3, animation: "d74-fadeUp 1s ease" }}>
        <div style={{ fontSize: "10px", letterSpacing: "0.3em", color: cyan, marginBottom: "20px", fontFamily: "monospace" }}>
          // INITIALIZING EVENT PROTOCOL v4.2...
        </div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 84px)", fontWeight: 900, lineHeight: 1, margin: 0, letterSpacing: "-0.02em", animation: "d74-glitch 5s ease-in-out infinite" }}>
          <span style={{ color: neon }}>HACK</span> YOUR<br />EVENTS
        </h1>
        <p style={{ fontSize: "14px", color: "rgba(224,224,232,0.4)", maxWidth: "440px", lineHeight: 1.8, marginTop: "24px", fontFamily: "'Inter', sans-serif" }}>
          Connected Mate &gt; Système d&apos;orchestration événementielle next-gen. Keynotes augmentées. Podcasts immersifs. Networking algorithmique.
        </p>
        <button className="d74-btn" style={{ marginTop: "32px", padding: "14px 40px", background: "transparent", color: neon, border: `2px solid ${neon}`, fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", transition: "all .3s", boxShadow: `0 0 15px rgba(255,69,0,0.2)` }}>
          ▸ EXECUTE
        </button>
      </section>
      <section style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", position: "relative", zIndex: 3 }}>
        {[
          { name: "Connected Hub", code: "HUB-001", desc: "Centralisation contenus live & on-demand" },
          { name: "Mate Analytics", code: "ANL-002", desc: "Data pipeline audience temps réel" },
          { name: "QuickSync", code: "SYN-003", desc: "P2P networking protocol avancé" },
          { name: "EventFlow", code: "EVT-004", desc: "Orchestration multi-track events" },
          { name: "AI Assistant", code: "AIS-005", desc: "Prédiction & optimisation ML-driven" },
          { name: "Podcast Engine", code: "POD-006", desc: "Diffusion cross-platform automatisée" },
        ].map((app, i) => (
          <div key={i} className="d74-card" style={{ background: "rgba(255,69,0,0.03)", border: `1px solid rgba(255,69,0,0.1)`, borderRadius: "4px", padding: "28px", transition: "all .3s", cursor: "pointer", animation: `d74-flicker 4s ease-in-out ${i * 0.5}s infinite` }}>
            <div style={{ fontSize: "9px", color: cyan, letterSpacing: "0.2em", marginBottom: "12px", fontFamily: "monospace" }}>[{app.code}]</div>
            <h3 style={{ fontSize: "15px", fontWeight: 700, margin: "0 0 8px", color: "#E0E0E8" }}>{app.name}</h3>
            <p style={{ fontSize: "12px", color: "rgba(224,224,232,0.35)", lineHeight: 1.6, margin: 0 }}>{app.desc}</p>
          </div>
        ))}
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "10px", color: "rgba(224,224,232,0.15)", letterSpacing: "0.1em", fontFamily: "monospace", position: "relative", zIndex: 3 }}>
        © 2025 CONNECTED_MATE — ALL SYSTEMS OPERATIONAL
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 75 — Vintage Poster (Retro poster art, bold flat colors)
   ============================================================ */
const VintagePoster: React.FC = () => {
  const orange = "#E8600A";
  const cream = "#FDF6EC";
  const brown = "#3E2723";
  return (
    <div style={{ minHeight: "100vh", background: cream, color: brown, fontFamily: "'Playfair Display', serif", margin: 0, position: "relative" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d75-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d75-stamp { 0% { transform: scale(2) rotate(-15deg); opacity: 0; } 100% { transform: scale(1) rotate(-6deg); opacity: 1; } }
        @keyframes d75-slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        .d75-card:hover { transform: rotate(-1deg) scale(1.03) !important; box-shadow: 8px 8px 0 ${orange} !important; }
        .d75-btn:hover { background: ${brown} !important; }
      `}} />
      <div style={{ position: "absolute", top: "40px", right: "60px", padding: "12px 20px", border: `3px solid ${orange}`, borderRadius: "4px", fontSize: "10px", fontWeight: 700, color: orange, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif", transform: "rotate(-6deg)", animation: "d75-stamp .6s ease both", zIndex: 10 }}>
        Édition 2025
      </div>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", borderBottom: `2px solid ${brown}` }}>
        <span style={{ fontSize: "18px", fontWeight: 900 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          {["Plateforme", "Keynotes", "Podcasts", "À propos"].map(t => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "80px 48px 60px", animation: "d75-fadeUp .8s ease" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "clamp(42px, 5.5vw, 72px)", fontWeight: 900, lineHeight: 1.05, margin: 0 }}>
              L&apos;affiche de vos<br />
              <span style={{ color: orange, fontStyle: "italic" }}>événements</span>
            </h1>
            <p style={{ fontSize: "16px", fontFamily: "'Inter', sans-serif", color: "#8B7355", lineHeight: 1.8, marginTop: "24px", maxWidth: "420px" }}>
              Depuis 2020, Connected Mate crée les plus belles scènes pour vos keynotes, podcasts et conférences. Un savoir-faire artisanal du digital.
            </p>
            <button className="d75-btn" style={{ marginTop: "28px", padding: "16px 40px", background: orange, color: cream, border: "none", fontSize: "14px", fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", borderRadius: "4px", cursor: "pointer", transition: "all .3s", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Réserver votre place
            </button>
          </div>
          <div style={{ background: orange, borderRadius: "8px", padding: "48px 36px", color: cream, textAlign: "center", boxShadow: "8px 8px 0 rgba(62,39,35,0.15)" }}>
            <div style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1 }}>5</div>
            <div style={{ fontSize: "14px", fontFamily: "'Space Grotesk', sans-serif", marginTop: "8px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Applications intégrées</div>
            <div style={{ marginTop: "24px", fontSize: "12px", fontFamily: "'Inter', sans-serif", lineHeight: 1.8, opacity: 0.8 }}>
              Hub · Analytics · QuickSync · EventFlow · AI Assistant
            </div>
          </div>
        </div>
      </section>
      <section style={{ padding: "40px 48px 80px", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }}>
        {[
          { name: "Connected Hub", year: "2020" },
          { name: "Mate Analytics", year: "2021" },
          { name: "QuickSync", year: "2022" },
          { name: "EventFlow", year: "2023" },
          { name: "AI Assistant", year: "2024" },
        ].map((app, i) => (
          <div key={i} className="d75-card" style={{ background: "#fff", border: `2px solid ${brown}`, borderRadius: "6px", padding: "24px", textAlign: "center", transition: "all .3s", cursor: "pointer", boxShadow: "4px 4px 0 rgba(62,39,35,0.1)" }}>
            <div style={{ fontSize: "10px", fontFamily: "'Space Grotesk', sans-serif", color: orange, fontWeight: 700, marginBottom: "8px" }}>EST. {app.year}</div>
            <div style={{ fontSize: "14px", fontWeight: 700 }}>{app.name}</div>
          </div>
        ))}
      </section>
      <footer style={{ padding: "32px 48px", borderTop: `2px solid ${brown}`, textAlign: "center", fontSize: "11px", fontFamily: "'Inter', sans-serif", color: "#8B7355" }}>
        © 2025 Connected Mate — Artisan du digital depuis 2020
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 76 — Vertical Scroll Theater (Full-screen sections)
   ============================================================ */
const ScrollTheater: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#1A1A1A", fontFamily: "'Inter', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d76-fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d76-scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes d76-slideLeft { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes d76-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .d76-section:hover { background: rgba(232,96,10,0.02) !important; }
        .d76-btn:hover { transform: translateY(-3px) !important; box-shadow: 0 16px 40px rgba(232,96,10,0.25) !important; }
      `}} />
      <nav style={{ position: "sticky", top: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", zIndex: 100, borderBottom: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 1px 3px rgba(0,0,0,0.02)" }}>
        <span style={{ fontSize: "15px", fontWeight: 700 }}>Connected<span style={{ color: orange }}>Mate</span></span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", fontWeight: 500, color: "#666" }}>
          {["Plateforme", "Keynotes", "Podcasts", "Contact"].map(t => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "80px 48px", animation: "d76-fadeUp 1s ease" }}>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 800, lineHeight: 1.05, margin: 0, letterSpacing: "-0.03em" }}>
          Chaque événement<br />mérite sa <span style={{ color: orange }}>scène</span>
        </h1>
        <p style={{ fontSize: "17px", color: "#888", maxWidth: "500px", lineHeight: 1.8, marginTop: "24px" }}>
          Connected Mate est la plateforme tout-en-un pour des keynotes, podcasts et conférences exceptionnels.
        </p>
        <button className="d76-btn" style={{ marginTop: "36px", padding: "18px 52px", background: orange, color: "#fff", border: "none", fontSize: "15px", fontWeight: 700, borderRadius: "60px", cursor: "pointer", transition: "all .3s", boxShadow: "0 8px 24px rgba(232,96,10,0.2)" }}>
          Commencer
        </button>
      </section>
      <section className="d76-section" style={{ padding: "80px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.05)", transition: "background .3s", animation: "d76-scaleIn .8s ease" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: orange, fontWeight: 600, marginBottom: "16px" }}>Connected Hub</div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.15, margin: "0 0 16px" }}>Votre centre de commande événementiel</h2>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8 }}>Centralisez keynotes, replays, et sessions live. Un hub unique pour piloter toute votre stratégie de contenu.</p>
        </div>
        <div style={{ background: `linear-gradient(135deg, ${orange}, ${amber})`, borderRadius: "24px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "48px", fontWeight: 800, boxShadow: "0 16px 48px rgba(232,96,10,0.2)" }}>
          HUB
        </div>
      </section>
      <section className="d76-section" style={{ padding: "80px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", borderTop: "1px solid rgba(0,0,0,0.05)", transition: "background .3s" }}>
        <div style={{ background: "#1A1A2E", borderRadius: "24px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 16px 48px rgba(26,26,46,0.2)" }}>
          <div style={{ textAlign: "center", color: "#fff" }}>
            <div style={{ fontSize: "48px", fontWeight: 800, animation: "d76-pulse 2s ease-in-out infinite" }}>180K</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginTop: "8px" }}>Utilisateurs actifs</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: orange, fontWeight: 600, marginBottom: "16px" }}>Mate Analytics</div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, lineHeight: 1.15, margin: "0 0 16px" }}>Des données qui racontent une histoire</h2>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8 }}>Tableaux de bord temps réel, métriques d&apos;engagement, insights prédictifs. Comprenez votre audience comme jamais.</p>
        </div>
      </section>
      <section style={{ padding: "80px 48px", background: "#1A1A2E", color: "#fff", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 40px" }}>5 applications, <span style={{ color: amber }}>1 plateforme</span></h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
          {["Connected Hub", "Mate Analytics", "QuickSync", "EventFlow", "AI Assistant"].map((name, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: i === 0 ? orange : "rgba(255,255,255,0.08)", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: 700 }}>{i + 1}</div>
              <div style={{ fontSize: "12px", fontWeight: 600 }}>{name}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#bbb" }}>
        © 2025 Connected Mate — Every event deserves a stage
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 77 — Bauhaus Geometric (Primary colors, strict geometry)
   ============================================================ */
const BauhausGeometric: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const blue = "#1A3A6E";
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF5", color: "#1A1A1A", fontFamily: "'Space Grotesk', sans-serif", margin: 0, position: "relative" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d77-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes d77-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d77-slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        .d77-card:hover { transform: translateY(-6px) !important; box-shadow: 0 12px 36px rgba(0,0,0,0.1) !important; }
        .d77-btn:hover { background: ${blue} !important; }
      `}} />
      <div style={{ position: "absolute", top: "100px", right: "80px", width: "160px", height: "160px", borderRadius: "50%", border: `3px solid ${orange}`, animation: "d77-rotate 20s linear infinite", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "300px", right: "160px", width: "80px", height: "80px", background: amber, opacity: 0.1 }} />
      <div style={{ position: "absolute", bottom: "200px", left: "60px", width: "0", height: "0", borderLeft: "50px solid transparent", borderRight: "50px solid transparent", borderBottom: `86px solid ${blue}`, opacity: 0.08 }} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: orange }} />
          <span style={{ fontSize: "16px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {["Plateforme", "Design", "Keynotes", "Contact"].map(t => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "80px 48px 60px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", animation: "d77-fadeUp .8s ease" }}>
        <div>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 900, lineHeight: 1.1, margin: 0, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
            La forme<br />suit la <span style={{ color: orange }}>fonction</span>
          </h1>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.8, marginTop: "20px", maxWidth: "400px" }}>
            Inspirée du Bauhaus, Connected Mate applique les principes de design fonctionnel à l&apos;événementiel digital. Chaque feature a sa raison d&apos;être.
          </p>
          <button className="d77-btn" style={{ marginTop: "28px", padding: "16px 40px", background: orange, color: "#fff", border: "none", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", transition: "all .3s" }}>
            Explorer
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div style={{ background: orange, borderRadius: "50%", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px", fontWeight: 700 }}>HUB</div>
          <div style={{ background: blue, aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px", fontWeight: 700 }}>ANALYTICS</div>
          <div style={{ background: amber, aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px", fontWeight: 700, clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}>SYNC</div>
          <div style={{ background: "#1A1A1A", borderRadius: "8px", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px", fontWeight: 700 }}>FLOW</div>
        </div>
      </section>
      <section style={{ padding: "60px 48px", background: "#1A1A1A", color: "#FAFAF5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "24px", textAlign: "center" }}>
          {[
            { name: "Connected Hub", shape: "circle" },
            { name: "Mate Analytics", shape: "square" },
            { name: "QuickSync", shape: "triangle" },
            { name: "EventFlow", shape: "rect" },
            { name: "AI Assistant", shape: "diamond" },
          ].map((app, i) => (
            <div key={i} className="d77-card" style={{ padding: "28px 16px", borderRadius: "8px", border: "1px solid rgba(250,250,245,0.1)", transition: "all .3s", cursor: "pointer", animation: `d77-slideIn .6s ease ${i * 0.1}s both` }}>
              <div style={{ fontSize: "11px", color: amber, fontWeight: 700, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{app.shape}</div>
              <div style={{ fontSize: "13px", fontWeight: 700 }}>{app.name}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "60px 48px", display: "flex", justifyContent: "center", gap: "60px" }}>
        {[{ n: "5", l: "Applications" }, { n: "2,400+", l: "Keynotes" }, { n: "98%", l: "Satisfaction" }].map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 900, color: orange }}>{s.n}</div>
            <div style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "6px" }}>{s.l}</div>
          </div>
        ))}
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#bbb", borderTop: "2px solid #1A1A1A" }}>
        © 2025 Connected Mate — Form follows function
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 78 — Stacked Cards (Overlapping layers, parallax depth)
   ============================================================ */
const StackedCards: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #F8F6F3 0%, #EEEAE5 100%)", color: "#1A1A1A", fontFamily: "'Inter', sans-serif", margin: 0, position: "relative" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes d78-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes d78-stack { from { opacity: 0; transform: translateY(20px) rotate(2deg); } to { opacity: 1; transform: translateY(0) rotate(0deg); } }
        @keyframes d78-float { 0%,100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-8px) rotate(-2deg); } }
        @keyframes d78-float2 { 0%,100% { transform: translateY(0) rotate(1deg); } 50% { transform: translateY(-6px) rotate(1deg); } }
        .d78-card:hover { transform: translateY(-10px) rotate(0deg) !important; box-shadow: 0 24px 60px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.06) !important; z-index: 10 !important; }
        .d78-btn:hover { transform: translateY(-3px) !important; box-shadow: 0 16px 40px rgba(232,96,10,0.3) !important; }
      `}} />
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected <span style={{ color: orange }}>Mate</span></span>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", fontWeight: 500, color: "#666" }}>
          {["Plateforme", "Keynotes", "Podcasts", "Contact"].map(t => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>
      <section style={{ padding: "80px 48px 40px", textAlign: "center", animation: "d78-fadeUp .8s ease" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 5.5vw, 68px)", fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
          Empilez les <span style={{ color: orange }}>succès</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#888", maxWidth: "460px", margin: "20px auto 0", lineHeight: 1.8 }}>
          Chaque couche de Connected Mate ajoute de la valeur à vos événements. Keynotes, analytics, networking — tout s&apos;empile harmonieusement.
        </p>
        <button className="d78-btn" style={{ marginTop: "32px", padding: "16px 44px", background: orange, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, borderRadius: "14px", cursor: "pointer", transition: "all .3s", boxShadow: "0 8px 24px rgba(232,96,10,0.2)" }}>
          Commencer gratuitement
        </button>
      </section>
      <section style={{ padding: "40px 48px 100px", position: "relative", display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: "700px", height: "400px" }}>
          {[
            { name: "Connected Hub", desc: "Centralisez keynotes & replays", bg: "#fff", rot: "-3deg", top: "30px", left: "0", z: 1, anim: "d78-float" },
            { name: "Mate Analytics", desc: "Données d'engagement en temps réel", bg: "#1A1A2E", color: "#fff", rot: "1deg", top: "15px", left: "80px", z: 2, anim: "d78-float2" },
            { name: "QuickSync", desc: "Networking intelligent entre participants", bg: orange, color: "#fff", rot: "-1deg", top: "0", left: "160px", z: 3, anim: "d78-float" },
            { name: "EventFlow", desc: "Orchestration multi-track fluide", bg: amber, color: "#fff", rot: "2deg", top: "20px", left: "240px", z: 4, anim: "d78-float2" },
            { name: "AI Assistant", desc: "Prédictions & recommandations IA", bg: "#2A2A3E", color: "#fff", rot: "-2deg", top: "10px", left: "320px", z: 5, anim: "d78-float" },
          ].map((card, i) => (
            <div key={i} className="d78-card" style={{
              position: "absolute",
              top: card.top,
              left: card.left,
              width: "340px",
              background: card.bg,
              color: (card as { color?: string }).color || "#1A1A1A",
              borderRadius: "20px",
              padding: "36px",
              transform: `rotate(${card.rot})`,
              zIndex: card.z,
              transition: "all .4s",
              cursor: "pointer",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              animation: `${card.anim} ${3 + i * 0.3}s ease-in-out infinite`,
              border: card.bg === "#fff" ? "1px solid rgba(0,0,0,0.06)" : "none",
            }}>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>{card.name}</h3>
              <p style={{ fontSize: "13px", opacity: 0.7, lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "60px 48px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "48px" }}>
          {[{ n: "5", l: "Apps empilées" }, { n: "50K+", l: "Utilisateurs" }, { n: "99.9%", l: "Uptime" }].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "36px", fontWeight: 800, color: orange }}>{s.n}</div>
              <div style={{ fontSize: "11px", color: "#888", marginTop: "4px" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#bbb" }}>
        © 2025 Connected Mate — Stack your success
      </footer>
    </div>
  );
};

/* ───── EXPORTS ─────────────────────────────────────────────── */
export const designs: HomepageDesign[] = [
  { id: 73, name: "Liquid Morphism", category: "Organic & Fluid", description: "DA organique avec blobs morphiques animés, formes fluides et mouvements liquides naturels", component: LiquidMorphism },
  { id: 74, name: "Cyberpunk Glitch", category: "Tech & Futuristic", description: "DA cyberpunk avec scanlines, effets glitch, néons pulsants et esthétique terminal futuriste", component: CyberpunkGlitch },
  { id: 75, name: "Vintage Poster", category: "Retro & Artisanal", description: "DA affiche vintage avec typographie classique, couleurs chaudes et style poster rétro artisanal", component: VintagePoster },
  { id: 76, name: "Scroll Theater", category: "Immersive & Narrative", description: "DA théâtrale en scroll vertical avec sections plein écran, transitions douces et narration progressive", component: ScrollTheater },
  { id: 77, name: "Bauhaus Geometric", category: "Geometric & Functional", description: "DA Bauhaus avec formes géométriques primaires, couleurs franches et design fonctionnaliste strict", component: BauhausGeometric },
  { id: 78, name: "Stacked Cards", category: "Layered & Playful", description: "DA en cartes empilées avec profondeur parallaxe, rotations subtiles et effets de couches superposées", component: StackedCards },
];
