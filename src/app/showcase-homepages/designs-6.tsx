"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 51 — Bento Dashboard (Modern SaaS / Framer-style)
   Full bento grid layout, layered shadows, animated cards
   ============================================================ */
const BentoDashboard: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d51";
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", color: "#111", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes ${id}-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes ${id}-pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes ${id}-slideRight { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        .${id}-card { transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease; }
        .${id}-card:hover { transform: translateY(-6px) !important; box-shadow: 0 20px 60px rgba(0,0,0,0.12) !important; }
        .${id}-navlink { transition: color 0.3s ease; }
        .${id}-navlink:hover { color: ${orange} !important; }
        .${id}-btn { transition: all 0.3s ease; }
        .${id}-btn:hover { transform: scale(1.04); box-shadow: 0 8px 32px rgba(232,96,10,0.35) !important; }
      `}} />

      {/* NAV — frosted glass */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 48px", background: "rgba(250,250,250,0.8)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: `linear-gradient(135deg, ${orange}, ${amber})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: "2px", alignItems: "flex-end" }}>
              {[12, 18, 10, 16].map((h, i) => <div key={i} style={{ width: "3px", height: `${h}px`, background: "#fff", borderRadius: "1px" }} />)}
            </div>
          </div>
          <span style={{ fontSize: "17px", fontWeight: 700, letterSpacing: "-0.02em" }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} className={`${id}-navlink`} style={{ fontSize: "14px", color: "#666", cursor: "pointer", fontWeight: 500 }}>{t}</span>
          ))}
          <button className={`${id}-btn`} style={{ padding: "10px 24px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 16px rgba(232,96,10,0.25)" }}>
            Commencer
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 48px 40px", maxWidth: "1200px", margin: "0 auto", textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out` }}>
        <div style={{ display: "inline-block", padding: "6px 20px", background: `${orange}10`, color: orange, fontSize: "13px", fontWeight: 600, borderRadius: "100px", marginBottom: "24px", border: `1px solid ${orange}20` }}>
          Nouveau — AI Assistant en accès anticipé
        </div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.05, margin: "0 0 20px", letterSpacing: "-0.03em", fontFamily: "'Playfair Display', Georgia, serif" }}>
          Connecter les idées,
          <br />
          <span style={{ background: `linear-gradient(135deg, ${orange}, ${amber})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#666", maxWidth: "560px", margin: "0 auto 36px" }}>
          La plateforme qui connecte keynotes inspirantes, podcasts captivants et apps de productivité — le tout pensé pour les équipes qui façonnent demain.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          <button className={`${id}-btn`} style={{ padding: "14px 36px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "14px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 24px rgba(232,96,10,0.3)" }}>
            Découvrir la plateforme
          </button>
          <button style={{ padding: "14px 36px", background: "#fff", color: "#333", border: "1px solid #e0e0e0", borderRadius: "14px", fontSize: "15px", fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "all 0.3s ease" }}>
            Voir la démo →
          </button>
        </div>
      </section>

      {/* BENTO GRID */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "auto auto", gap: "16px", padding: "40px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Big card — Connected Hub */}
        <div className={`${id}-card`} style={{ gridColumn: "1 / 3", background: "#fff", borderRadius: "24px", padding: "40px", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)", animation: `${id}-fadeUp 0.8s ease-out 0.1s both`, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: `linear-gradient(135deg, ${orange}15, ${amber}10)`, filter: "blur(40px)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: orange, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>App phare</div>
            <h3 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.02em" }}>Connected Hub</h3>
            <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.7, maxWidth: "420px", margin: "0 0 24px" }}>
              Projets, communication d&apos;équipe, suivi OKR et gestion documentaire — votre QG digital. Intègre Slack, Notion, Google Workspace et 50+ outils.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {["Web", "iOS", "Android"].map((p) => (
                <span key={p} style={{ padding: "4px 12px", background: "#f5f5f5", borderRadius: "8px", fontSize: "12px", fontWeight: 600, color: "#888" }}>{p}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats card */}
        <div className={`${id}-card`} style={{ background: `linear-gradient(135deg, ${orange}, ${amber})`, borderRadius: "24px", padding: "36px", color: "#fff", boxShadow: `0 8px 32px rgba(232,96,10,0.25)`, animation: `${id}-fadeUp 0.8s ease-out 0.2s both`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.8 }}>En chiffres</div>
          <div>
            {[{ v: "50+", l: "Keynotes" }, { v: "100+", l: "Podcasts" }, { v: "5", l: "Apps" }].map((s) => (
              <div key={s.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <span style={{ fontSize: "28px", fontWeight: 800 }}>{s.v}</span>
                <span style={{ fontSize: "13px", opacity: 0.8 }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Keynotes card */}
        <div className={`${id}-card`} style={{ background: "#fff", borderRadius: "24px", padding: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)", animation: `${id}-fadeUp 0.8s ease-out 0.3s both` }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${orange}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <span style={{ fontSize: "22px" }}>🎤</span>
          </div>
          <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px" }}>Keynotes</h3>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6, margin: 0 }}>IA, transformation digitale, leadership — les experts mondiaux sur une scène.</p>
        </div>

        {/* Podcasts card */}
        <div className={`${id}-card`} style={{ background: "#fff", borderRadius: "24px", padding: "32px", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)", animation: `${id}-fadeUp 0.8s ease-out 0.4s both` }}>
          <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: `${orange}12`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <span style={{ fontSize: "22px" }}>🎧</span>
          </div>
          <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px" }}>Podcasts</h3>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6, margin: 0 }}>100+ conversations avec les esprits les plus brillants de la tech. Sur Spotify, Apple, YouTube.</p>
        </div>

        {/* Quote card */}
        <div className={`${id}-card`} style={{ background: "#111", borderRadius: "24px", padding: "36px", color: "#fff", boxShadow: "0 8px 32px rgba(0,0,0,0.15)", animation: `${id}-fadeUp 0.8s ease-out 0.5s both` }}>
          <div style={{ fontSize: "40px", color: orange, lineHeight: 1, marginBottom: "12px" }}>&ldquo;</div>
          <p style={{ fontSize: "16px", lineHeight: 1.7, fontStyle: "italic", margin: "0 0 16px", fontFamily: "'Playfair Display', serif" }}>
            Connected Mate a transformé notre façon de collaborer. Un vrai game-changer.
          </p>
          <div style={{ fontSize: "13px", color: "#888" }}>— CTO, Scale-up Paris</div>
        </div>
      </section>

      {/* APPS SUITE */}
      <section style={{ padding: "80px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px", animation: `${id}-fadeUp 0.8s ease-out 0.6s both` }}>
          <div style={{ fontSize: "12px", fontWeight: 600, color: orange, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Écosystème</div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em", margin: 0, fontFamily: "'Playfair Display', serif" }}>5 apps, une seule mission</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px" }}>
          {[
            { name: "Connected Hub", status: "Live", desc: "Collaboration centrale" },
            { name: "Mate Analytics", status: "Live", desc: "Business intelligence" },
            { name: "QuickSync", status: "Beta", desc: "Sync chiffrée E2E" },
            { name: "EventFlow", status: "Live", desc: "Gestion événements" },
            { name: "AI Assistant", status: "Soon", desc: "IA générative" },
          ].map((app, i) => (
            <div key={app.name} className={`${id}-card`} style={{ background: "#fff", borderRadius: "20px", padding: "28px 20px", textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)", animation: `${id}-fadeUp 0.8s ease-out ${0.7 + i * 0.1}s both` }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: `linear-gradient(135deg, ${orange}${20 + i * 10}, ${amber}${15 + i * 10})`, margin: "0 auto 14px" }} />
              <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>{app.name}</div>
              <div style={{ fontSize: "12px", color: "#aaa", marginBottom: "10px" }}>{app.desc}</div>
              <span style={{ padding: "3px 10px", fontSize: "10px", fontWeight: 700, borderRadius: "100px", background: app.status === "Live" ? "#E8F5E9" : app.status === "Beta" ? `${orange}12` : "#f5f5f5", color: app.status === "Live" ? "#2E7D32" : app.status === "Beta" ? orange : "#999" }}>
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TOPICS MARQUEE */}
      <section style={{ overflow: "hidden", padding: "32px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        <div style={{ display: "flex", gap: "48px", animation: `${id}-slideRight 20s linear infinite`, whiteSpace: "nowrap" }}>
          {["Intelligence Artificielle", "Transformation Digitale", "Future of Work", "Green IT", "Cybersécurité", "Product Management", "API Design", "Leadership", "Innovation", "Intelligence Artificielle", "Transformation Digitale", "Future of Work"].map((t, i) => (
            <span key={i} style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ccc" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 16px", fontFamily: "'Playfair Display', serif" }}>Rejoignez les visionnaires</h2>
        <p style={{ fontSize: "16px", color: "#888", lineHeight: 1.7, margin: "0 0 32px" }}>10 000+ professionnels utilisent déjà Connected Mate pour transformer leur organisation.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Apple Podcasts", "Spotify", "YouTube", "LinkedIn"].map((s) => (
            <span key={s} className={`${id}-card`} style={{ padding: "10px 20px", background: "#fff", borderRadius: "12px", fontSize: "13px", fontWeight: 600, color: "#555", cursor: "pointer", boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#bbb" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Paris, France</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 52 — Dark Premium (Luxury tech / Apple-style)
   Deep black, cinematic typography, floating elements
   ============================================================ */
const DarkPremium: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d52";
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-glow { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
        @keyframes ${id}-float { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-16px) rotate(-2deg); } }
        @keyframes ${id}-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .${id}-link { transition: color 0.3s ease, opacity 0.3s ease; opacity: 0.4; }
        .${id}-link:hover { color: ${orange} !important; opacity: 1 !important; }
        .${id}-card { transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .${id}-card:hover { transform: translateY(-8px) !important; box-shadow: 0 24px 64px rgba(232,96,10,0.15) !important; border-color: ${orange}44 !important; }
      `}} />

      {/* AMBIENT GLOW */}
      <div style={{ position: "fixed", top: "20%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", borderRadius: "50%", background: `radial-gradient(circle, ${orange}12, transparent 70%)`, animation: `${id}-glow 6s ease-in-out infinite`, pointerEvents: "none", zIndex: 0 }} />

      {/* NAV */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `linear-gradient(135deg, ${orange}, ${amber})` }} />
          <span style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.01em" }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "36px", fontSize: "14px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} className={`${id}-link`} style={{ cursor: "pointer", fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — massive cinematic */}
      <section style={{ position: "relative", zIndex: 10, padding: "120px 48px 80px", textAlign: "center", animation: `${id}-fadeUp 1s ease-out` }}>
        <h1 style={{ fontSize: "clamp(56px, 9vw, 120px)", fontWeight: 800, lineHeight: 0.95, margin: 0, letterSpacing: "-0.04em", fontFamily: "'Playfair Display', Georgia, serif" }}>
          Connecter les idées,
          <br />
          <span style={{ fontStyle: "italic", background: `linear-gradient(135deg, ${orange}, ${amber})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: "520px", margin: "36px auto 0" }}>
          Keynotes, podcasts et applications SaaS pour les leaders tech qui façonnent le monde de demain.
        </p>
        <div style={{ marginTop: "40px", display: "inline-flex", gap: "16px" }}>
          <button style={{ padding: "16px 40px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "14px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 32px ${orange}44`, transition: "all 0.3s ease" }}>
            Explorer
          </button>
          <button style={{ padding: "16px 40px", background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "14px", fontSize: "15px", fontWeight: 600, cursor: "pointer", backdropFilter: "blur(20px)", transition: "all 0.3s ease" }}>
            Écouter le podcast →
          </button>
        </div>
      </section>

      {/* FLOATING PRODUCT CARDS */}
      <section style={{ position: "relative", zIndex: 10, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { name: "Connected Hub", desc: "Collaboration centrale pour les équipes distribuées. Projets, OKR, docs.", icon: "◆" },
          { name: "Mate Analytics", desc: "Dashboards BI intelligents. Alertes prédictives. Données en temps réel.", icon: "◈" },
          { name: "AI Assistant", desc: "Automatisation par IA générative. Emails, résumés, analyses de documents.", icon: "◇" },
        ].map((app, i) => (
          <div key={app.name} className={`${id}-card`} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "40px 32px", animation: `${id}-fadeUp 0.8s ease-out ${0.3 + i * 0.15}s both` }}>
            <div style={{ fontSize: "28px", color: orange, marginBottom: "20px", animation: `${id}-float 4s ease-in-out ${i * 0.5}s infinite` }}>{app.icon}</div>
            <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 12px", letterSpacing: "-0.01em" }}>{app.name}</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{app.desc}</p>
          </div>
        ))}
      </section>

      {/* STATS */}
      <section style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", gap: "80px", padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "40px" }}>
        {[{ v: "50+", l: "Keynotes" }, { v: "100+", l: "Épisodes Podcast" }, { v: "5", l: "Applications SaaS" }, { v: "10K+", l: "Utilisateurs" }].map((s, i) => (
          <div key={s.l} style={{ textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out ${0.8 + i * 0.1}s both` }}>
            <div style={{ fontSize: "48px", fontWeight: 800, background: `linear-gradient(135deg, ${orange}, ${amber})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: "8px", letterSpacing: "0.05em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* MARQUEE */}
      <section style={{ position: "relative", zIndex: 10, overflow: "hidden", padding: "28px 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ display: "flex", gap: "60px", animation: `${id}-marquee 30s linear infinite`, whiteSpace: "nowrap" }}>
          {["Intelligence Artificielle", "Transformation Digitale", "Future of Work", "Green IT", "Cybersécurité", "Product Management", "API Design", "Leadership Tech", "Intelligence Artificielle", "Transformation Digitale", "Future of Work", "Green IT", "Cybersécurité", "Product Management"].map((t, i) => (
            <span key={i} style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.12)" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "60px", color: `${orange}44`, lineHeight: 1 }}>&ldquo;</div>
        <p style={{ fontSize: "24px", lineHeight: 1.6, fontStyle: "italic", color: "rgba(255,255,255,0.7)", margin: "0 0 24px", fontFamily: "'Playfair Display', serif" }}>
          Connected Mate a transformé notre approche de l&apos;innovation. Leurs keynotes sont un accélérateur de vision.
        </p>
        <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.3)" }}>— Directrice Innovation, CAC40 Paris</div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "60px 48px 80px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 32px", fontFamily: "'Playfair Display', serif" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Apple Podcasts", "Spotify", "YouTube", "LinkedIn"].map((s) => (
            <span key={s} style={{ padding: "12px 24px", border: `1px solid ${orange}33`, color: orange, borderRadius: "12px", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: "relative", zIndex: 10, padding: "28px 48px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.2)" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Paris, France — Construit avec passion</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 53 — Editorial Serif (Magazine / Thought Leadership)
   Playfair Display dominant, asymmetric layout, rich typography
   ============================================================ */
const EditorialSerif: React.FC = () => {
  const orange = "#E8600A";
  const id = "d53";
  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F5", color: "#1A1A1A", fontFamily: "'Playfair Display', Georgia, serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-lineGrow { from { width: 0; } to { width: 60px; } }
        .${id}-link { transition: color 0.3s ease; }
        .${id}-link:hover { color: ${orange} !important; }
        .${id}-article { transition: all 0.4s ease; }
        .${id}-article:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.08) !important; }
      `}} />

      {/* NAV — editorial */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 60px", borderBottom: "1px solid #e5e0d5" }}>
        <span style={{ fontSize: "24px", fontWeight: 700, fontStyle: "italic" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "36px", fontSize: "13px", color: "#999", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog", "À propos"].map((t) => (
            <span key={t} className={`${id}-link`} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — asymmetric editorial */}
      <section style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "60px", padding: "80px 60px", maxWidth: "1200px", animation: `${id}-fadeUp 0.8s ease-out` }}>
        <div>
          <div style={{ width: "60px", height: "2px", background: orange, marginBottom: "32px", animation: `${id}-lineGrow 0.8s ease-out` }} />
          <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 700, lineHeight: 1.08, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
            Connecter
            <br />
            les idées,
            <br />
            <span style={{ color: orange, fontStyle: "italic" }}>inspirer</span>
            <br />
            le futur
          </h1>
          <p style={{ fontSize: "18px", lineHeight: 1.9, color: "#888", maxWidth: "440px", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Des keynotes qui redéfinissent l&apos;innovation, des podcasts qui captent l&apos;air du temps, des apps qui transforment le quotidien professionnel.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", paddingTop: "40px" }}>
          {[
            { n: "50+", l: "Conférences données", d: "IA, transformation digitale, leadership tech" },
            { n: "100+", l: "Épisodes de podcast", d: "Sur Spotify, Apple Podcasts, YouTube" },
            { n: "5", l: "Applications SaaS", d: "Connected Hub, Mate Analytics, QuickSync..." },
          ].map((s, i) => (
            <div key={s.l} style={{ padding: "24px", borderLeft: `3px solid ${i === 0 ? orange : "#e5e0d5"}`, animation: `${id}-fadeUp 0.8s ease-out ${0.2 + i * 0.15}s both` }}>
              <div style={{ fontSize: "36px", fontWeight: 800 }}>{s.n}</div>
              <div style={{ fontSize: "15px", fontWeight: 600, marginTop: "4px" }}>{s.l}</div>
              <div style={{ fontSize: "13px", color: "#aaa", marginTop: "4px", fontFamily: "'Inter', sans-serif" }}>{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CONTENT */}
      <section style={{ padding: "60px 60px", borderTop: "1px solid #e5e0d5" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, margin: 0 }}>À la une</h2>
          <span style={{ fontSize: "13px", color: orange, fontFamily: "'Inter', sans-serif", fontWeight: 600, cursor: "pointer" }}>Tout voir →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: "24px" }}>
          {[
            { cat: "KEYNOTE", title: "L'IA générative en entreprise : de la promesse à la réalité", author: "Alexander Martin", big: true },
            { cat: "PODCAST", title: "Le travail hybride en 2026 : culture async-first", author: "Sophie Durand", big: false },
            { cat: "APP", title: "Connected Hub 3.0 : la collaboration réinventée", author: "Marc Lefèvre", big: false },
          ].map((a, i) => (
            <div key={a.title} className={`${id}-article`} style={{ background: "#fff", borderRadius: "20px", padding: i === 0 ? "40px" : "28px", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)", animation: `${id}-fadeUp 0.8s ease-out ${0.5 + i * 0.1}s both` }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: orange, letterSpacing: "0.15em", fontFamily: "'Inter', sans-serif", marginBottom: "16px" }}>{a.cat}</div>
              <h3 style={{ fontSize: i === 0 ? "24px" : "18px", fontWeight: 700, lineHeight: 1.3, margin: "0 0 12px" }}>{a.title}</h3>
              <div style={{ fontSize: "13px", color: "#aaa", fontFamily: "'Inter', sans-serif" }}>Par {a.author}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ padding: "80px 60px", borderTop: "1px solid #e5e0d5", maxWidth: "800px" }}>
        <div style={{ width: "40px", height: "2px", background: orange, marginBottom: "32px" }} />
        <blockquote style={{ fontSize: "32px", lineHeight: 1.5, fontStyle: "italic", color: orange, margin: 0 }}>
          &ldquo;La technologie n&apos;a de sens que si elle connecte les humains entre eux. Le reste, c&apos;est du bruit.&rdquo;
        </blockquote>
        <div style={{ fontSize: "14px", color: "#aaa", marginTop: "20px", fontFamily: "'Inter', sans-serif" }}>— Alexander Martin, CEO Connected Mate</div>
      </section>

      {/* TOPICS */}
      <section style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "40px 60px 60px", borderTop: "1px solid #e5e0d5" }}>
        {["Intelligence Artificielle", "Transformation Digitale", "Future of Work", "Green IT", "Cybersécurité", "Product Management", "API Design", "Leadership", "Data Ethics"].map((t) => (
          <span key={t} style={{ padding: "10px 20px", background: "#fff", borderRadius: "100px", fontSize: "13px", fontWeight: 500, color: "#777", border: "1px solid #e5e0d5", fontFamily: "'Inter', sans-serif", cursor: "pointer", transition: "all 0.3s ease" }}>{t}</span>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 60px", borderTop: "1px solid #e5e0d5", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb", fontFamily: "'Inter', sans-serif" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Fait à Paris avec passion</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 54 — Glassmorphism Cloud (Frosted glass / Purple gradient)
   Glass cards, layered blurs, floating blobs
   ============================================================ */
const GlassmorphismCloud: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d54";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #1a0533 0%, #2d1b69 30%, #4a2c8a 60%, #6d4bb5 100%)", color: "#fff", fontFamily: "'Inter', sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-blob1 { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(60px, -40px) scale(1.1); } 66% { transform: translate(-30px, 30px) scale(0.9); } }
        @keyframes ${id}-blob2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-60px, 50px) scale(1.15); } }
        .${id}-glass { background: rgba(255,255,255,0.08); backdrop-filter: blur(24px); border: 1px solid rgba(255,255,255,0.12); transition: all 0.4s ease; }
        .${id}-glass:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.2); transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.2); }
      `}} />

      {/* Animated blobs */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(232,96,10,0.15)", filter: "blur(80px)", animation: `${id}-blob1 12s ease-in-out infinite` }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(245,166,35,0.12)", filter: "blur(60px)", animation: `${id}-blob2 10s ease-in-out infinite` }} />
      <div style={{ position: "absolute", top: "40%", left: "30%", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(50px)", animation: `${id}-blob1 8s ease-in-out 2s infinite` }} />

      {/* NAV — glass */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "30px", height: "30px", borderRadius: "10px", background: `linear-gradient(135deg, ${orange}, ${amber})`, boxShadow: `0 4px 16px ${orange}44` }} />
          <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", alignItems: "center" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", opacity: 0.7, transition: "opacity 0.3s" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 20px ${orange}44` }}>Commencer</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", zIndex: 10, padding: "100px 48px 60px", textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out` }}>
        <div className={`${id}-glass`} style={{ display: "inline-block", padding: "8px 24px", borderRadius: "100px", fontSize: "13px", fontWeight: 600, marginBottom: "28px" }}>
          AI Assistant — accès anticipé ouvert
        </div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 84px)", fontWeight: 800, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
          Connecter les idées,
          <br />
          inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.6, maxWidth: "540px", margin: "0 auto 36px", lineHeight: 1.7, fontWeight: 300 }}>
          Keynotes, podcasts et apps SaaS réunis dans une plateforme pour les leaders tech qui construisent le monde de demain.
        </p>
        <div style={{ display: "inline-flex", gap: "12px" }}>
          <button style={{ padding: "14px 36px", background: "#fff", color: "#111", border: "none", borderRadius: "14px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>Découvrir</button>
          <button className={`${id}-glass`} style={{ padding: "14px 36px", borderRadius: "14px", fontSize: "15px", fontWeight: 600, cursor: "pointer", color: "#fff" }}>Voir la démo →</button>
        </div>
      </section>

      {/* GLASS CARDS */}
      <section style={{ position: "relative", zIndex: 10, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { icon: "🎤", name: "Keynotes", count: "50+", desc: "IA, digital, leadership — des conférences inspirantes avec les meilleurs experts mondiaux." },
          { icon: "🎧", name: "Podcasts", count: "100+", desc: "Conversations profondes sur la tech. Disponible sur Spotify, Apple Podcasts et YouTube." },
          { icon: "⚡", name: "Apps SaaS", count: "5", desc: "Connected Hub, Mate Analytics, QuickSync, EventFlow, AI Assistant — votre productivité boostée." },
        ].map((item, i) => (
          <div key={item.name} className={`${id}-glass`} style={{ borderRadius: "24px", padding: "36px 28px", animation: `${id}-fadeUp 0.8s ease-out ${0.3 + i * 0.15}s both` }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>{item.icon}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: 700, margin: 0 }}>{item.name}</h3>
              <span style={{ fontSize: "24px", fontWeight: 800, color: amber }}>{item.count}</span>
            </div>
            <p style={{ fontSize: "14px", opacity: 0.6, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* APPS STRIP */}
      <section style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", gap: "12px", padding: "60px 48px", flexWrap: "wrap" }}>
        {["Connected Hub", "Mate Analytics", "QuickSync", "EventFlow", "AI Assistant"].map((app, i) => (
          <div key={app} className={`${id}-glass`} style={{ padding: "14px 24px", borderRadius: "14px", display: "flex", alignItems: "center", gap: "10px", animation: `${id}-fadeUp 0.8s ease-out ${0.6 + i * 0.1}s both` }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `linear-gradient(135deg, ${orange}, ${amber})`, opacity: 0.7 }} />
            <span style={{ fontSize: "14px", fontWeight: 600 }}>{app}</span>
          </div>
        ))}
      </section>

      {/* TESTIMONIAL */}
      <section style={{ position: "relative", zIndex: 10, padding: "60px 48px", textAlign: "center", maxWidth: "650px", margin: "0 auto" }}>
        <p style={{ fontSize: "22px", lineHeight: 1.6, fontStyle: "italic", opacity: 0.8, margin: "0 0 20px" }}>
          &ldquo;Une plateforme indispensable pour rester à la pointe de l&apos;innovation tech.&rdquo;
        </p>
        <div style={{ fontSize: "14px", opacity: 0.4 }}>— Head of Product, Startup Paris</div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "40px 48px 60px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 16px" }}>10 000+ visionnaires nous font confiance</h2>
        <p style={{ fontSize: "15px", opacity: 0.5, margin: "0 0 28px" }}>Rejoignez la communauté sur vos plateformes préférées.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Apple Podcasts", "Spotify", "YouTube", "LinkedIn"].map((s) => (
            <span key={s} className={`${id}-glass`} style={{ padding: "10px 20px", borderRadius: "12px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: "relative", zIndex: 10, padding: "24px 48px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", fontSize: "12px", opacity: 0.4 }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Built in the cloud, made in Paris</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 55 — Bold Brutalist (Anti-design / Statement)
   Massive type, hard borders, raw energy, no rounded corners
   ============================================================ */
const BoldBrutalist: React.FC = () => {
  const orange = "#E8600A";
  const id = "d55";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "'Space Grotesk', 'Arial', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-slideIn { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .${id}-cell { transition: all 0.3s ease; }
        .${id}-cell:hover { background: ${orange} !important; color: #fff !important; }
        .${id}-link { transition: color 0.2s; }
        .${id}-link:hover { color: ${orange} !important; }
      `}} />

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", borderBottom: "4px solid #000" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "20px", fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}>
          {["KEYNOTES", "PODCASTS", "APPS", "BLOG"].map((t) => (
            <span key={t} className={`${id}-link`} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO — massive */}
      <section style={{ padding: "48px 32px", borderBottom: "4px solid #000", animation: `${id}-fadeUp 0.6s ease-out` }}>
        <h1 style={{ fontSize: "clamp(64px, 12vw, 200px)", fontWeight: 700, lineHeight: 0.85, margin: 0, textTransform: "uppercase", letterSpacing: "-0.04em" }}>
          CONNECTER
          <br />
          <span style={{ WebkitTextStroke: "3px #000", color: "transparent" }}>LES IDÉES</span>
          <br />
          <span style={{ color: orange }}>INSPIRER</span>
          <br />
          LE FUTUR
          <span style={{ animation: `${id}-blink 1s infinite`, color: orange }}>_</span>
        </h1>
      </section>

      {/* DESCRIPTION STRIP */}
      <section style={{ padding: "24px 32px", borderBottom: "4px solid #000", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "32px", animation: `${id}-fadeUp 0.6s ease-out 0.1s both` }}>
        <div style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", paddingTop: "4px" }}>WHAT WE DO</div>
        <p style={{ fontSize: "20px", lineHeight: 1.6, fontWeight: 400, margin: 0, maxWidth: "600px" }}>
          Keynotes tech, podcasts visionnaires et applications SaaS de productivité. Pour les équipes qui refusent le statu quo.
        </p>
      </section>

      {/* STATS GRID */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderBottom: "4px solid #000" }}>
        {[{ v: "50+", l: "KEYNOTES" }, { v: "100+", l: "PODCASTS" }, { v: "5", l: "APPS SAAS" }, { v: "10K+", l: "USERS" }].map((s, i) => (
          <div key={s.l} className={`${id}-cell`} style={{ padding: "40px 24px", borderRight: i < 3 ? "4px solid #000" : "none", cursor: "pointer", animation: `${id}-fadeUp 0.6s ease-out ${0.2 + i * 0.1}s both` }}>
            <div style={{ fontSize: "48px", fontWeight: 700 }}>{s.v}</div>
            <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* APPS LIST */}
      <section style={{ borderBottom: "4px solid #000" }}>
        {["Connected Hub — Collaboration", "Mate Analytics — Intelligence", "QuickSync — Synchronisation", "EventFlow — Événements", "AI Assistant — Automatisation"].map((app, i) => (
          <div key={app} className={`${id}-cell`} style={{ padding: "24px 32px", borderBottom: i < 4 ? "2px solid #000" : "none", fontSize: "18px", fontWeight: 600, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", animation: `${id}-slideIn 0.5s ease-out ${0.5 + i * 0.08}s both` }}>
            <span>{app}</span>
            <span style={{ fontSize: "24px" }}>→</span>
          </div>
        ))}
      </section>

      {/* TOPICS */}
      <section style={{ display: "flex", flexWrap: "wrap", padding: "24px 32px", gap: "8px", borderBottom: "4px solid #000" }}>
        {["IA", "DIGITAL", "FUTURE OF WORK", "GREEN IT", "CYBER", "PRODUCT", "API", "LEADERSHIP", "DATA ETHICS"].map((t) => (
          <span key={t} style={{ padding: "8px 16px", border: "2px solid #000", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.2s" }}>{t}</span>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "40px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "24px", fontWeight: 700, textTransform: "uppercase" }}>NO BULLSHIT. JUST VALUE.</span>
        <button style={{ padding: "16px 40px", background: orange, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>
          REJOINDRE →
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "20px 32px", borderTop: "4px solid #000", display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 700 }}>
        <span>© 2026 CM SAS</span>
        <span>PARIS. RAW. REAL.</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 56 — Horizontal Scroll Experience (Immersive / Unique UX)
   Sections stacked for vertical scroll but designed as "screens"
   ============================================================ */
const HorizontalExperience: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d56";
  return (
    <div style={{ minHeight: "100vh", background: "#111", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-slideIn { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes ${id}-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(232,96,10,0.4); } 50% { box-shadow: 0 0 0 12px rgba(232,96,10,0); } }
        .${id}-section { border-bottom: 1px solid rgba(255,255,255,0.06); }
        .${id}-tag { transition: all 0.3s ease; cursor: pointer; }
        .${id}-tag:hover { background: ${orange} !important; color: #fff !important; border-color: ${orange} !important; }
      `}} />

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 48px", background: "rgba(17,17,17,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: orange, animation: `${id}-pulse 2s ease-in-out infinite` }} />
          <span style={{ fontSize: "15px", fontWeight: 600 }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "#666" }}>
          {["01 Keynotes", "02 Podcasts", "03 Apps", "04 Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", fontWeight: 500, transition: "color 0.3s" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* SCREEN 1 — Hero */}
      <section className={`${id}-section`} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 48px", animation: `${id}-fadeUp 0.8s ease-out` }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.3em", color: orange, marginBottom: "24px" }}>01 — INTRODUCTION</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 96px)", fontWeight: 700, lineHeight: 1.0, margin: "0 0 24px", letterSpacing: "-0.03em", maxWidth: "900px" }}>
          La plateforme qui
          <br />
          <span style={{ background: `linear-gradient(90deg, ${orange}, ${amber})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>connecte l&apos;avenir</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#666", maxWidth: "500px", lineHeight: 1.7, margin: "0 0 40px" }}>
          Keynotes · Podcasts · Apps SaaS — tout ce qu&apos;il faut pour les leaders tech qui construisent demain.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <button style={{ padding: "14px 36px", background: orange, color: "#fff", border: "none", fontSize: "14px", fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 24px ${orange}44`, transition: "all 0.3s" }}>Découvrir</button>
          <button style={{ padding: "14px 36px", background: "transparent", color: "#888", border: "1px solid #333", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>En savoir plus →</button>
        </div>
      </section>

      {/* SCREEN 2 — Keynotes */}
      <section className={`${id}-section`} style={{ minHeight: "80vh", display: "grid", gridTemplateColumns: "1fr 1fr", padding: "80px 48px", gap: "60px", alignItems: "center" }}>
        <div style={{ animation: `${id}-slideIn 0.8s ease-out` }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.3em", color: orange, marginBottom: "20px" }}>02 — KEYNOTES</div>
          <h2 style={{ fontSize: "42px", fontWeight: 700, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.02em" }}>50+ conférences qui redéfinissent l&apos;innovation</h2>
          <p style={{ fontSize: "16px", color: "#666", lineHeight: 1.7, margin: "0 0 28px" }}>
            IA générative, transformation digitale, travail hybride, leadership tech, cybersécurité — les sujets qui comptent, par les experts qui comptent.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["IA", "Digital", "Leadership", "Green IT", "Cyber", "Product"].map((t) => (
              <span key={t} className={`${id}-tag`} style={{ padding: "6px 14px", border: "1px solid #333", fontSize: "12px", fontWeight: 600, color: "#888" }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gap: "12px" }}>
          {["L'IA générative en entreprise", "Travail hybride : culture async-first", "Green IT : le digital responsable"].map((title, i) => (
            <div key={title} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.3s", cursor: "pointer" }}>
              <div>
                <div style={{ fontSize: "11px", color: orange, fontWeight: 600, marginBottom: "6px" }}>KEYNOTE #{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: "16px", fontWeight: 600 }}>{title}</div>
              </div>
              <span style={{ fontSize: "20px", color: "#444" }}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* SCREEN 3 — Apps */}
      <section className={`${id}-section`} style={{ padding: "80px 48px" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.3em", color: orange, marginBottom: "20px" }}>03 — APPS SAAS</div>
        <h2 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 40px" }}>5 applications, un écosystème</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "2px" }}>
          {[
            { name: "Connected Hub", sub: "Collaboration" },
            { name: "Mate Analytics", sub: "BI Dashboard" },
            { name: "QuickSync", sub: "File Sync E2E" },
            { name: "EventFlow", sub: "Event Mgmt" },
            { name: "AI Assistant", sub: "IA Générative" },
          ].map((app, i) => (
            <div key={app.name} style={{ background: "rgba(255,255,255,0.03)", padding: "36px 20px", textAlign: "center", borderRight: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none", transition: "all 0.3s", cursor: "pointer" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `linear-gradient(135deg, ${orange}${20 + i * 12}, ${amber}${15 + i * 12})`, margin: "0 auto 16px" }} />
              <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "4px" }}>{app.name}</div>
              <div style={{ fontSize: "12px", color: "#555" }}>{app.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREEN 4 — CTA */}
      <section style={{ padding: "80px 48px", textAlign: "center" }}>
        <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.3em", color: orange, marginBottom: "20px" }}>04 — REJOINDRE</div>
        <h2 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Prêt à connecter l&apos;avenir ?</h2>
        <p style={{ fontSize: "16px", color: "#666", margin: "0 0 32px" }}>Rejoignez 10 000+ professionnels qui façonnent demain.</p>
        <button style={{ padding: "16px 48px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 32px ${orange}33` }}>
          Commencer maintenant
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px 48px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#444" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Paris — All rights reserved</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 51, name: "Bento Dashboard", category: "SaaS", description: "Framer-style bento grid, frosted nav, animated cards, layered shadows, app suite showcase", component: BentoDashboard },
  { id: 52, name: "Dark Premium", category: "Luxury", description: "Cinematic dark mode, ambient glow, floating product cards, Apple-style grandeur", component: DarkPremium },
  { id: 53, name: "Editorial Serif", category: "Editorial", description: "Magazine layout, Playfair Display, asymmetric grid, featured articles, rich typography", component: EditorialSerif },
  { id: 54, name: "Glassmorphism Cloud", category: "Modern", description: "Purple gradient, frosted glass cards, animated blobs, blur effects, SaaS cloud feel", component: GlassmorphismCloud },
  { id: 55, name: "Bold Brutalist", category: "Brutalist", description: "Massive typography, hard borders, no radius, raw energy, outlined text, hover states", component: BoldBrutalist },
  { id: 56, name: "Horizontal Experience", category: "Immersive", description: "Full-screen sections, numbered navigation, screen-by-screen storytelling, sticky nav", component: HorizontalExperience },
];
