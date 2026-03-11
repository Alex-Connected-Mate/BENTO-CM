"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 57 — Organic Curves (Soft, rounded, warm)
   Pill shapes, organic blobs, warm gradients, gentle animations
   ============================================================ */
const OrganicCurves: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const peach = "#FDEBD0";
  const id = "d57";
  return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(180deg, #fff 0%, ${peach} 100%)`, color: "#2C2015", fontFamily: "'Inter', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-morph { 0%, 100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; } 50% { border-radius: 58% 42% 30% 70% / 55% 55% 45% 45%; } }
        @keyframes ${id}-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .${id}-pill { transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .${id}-pill:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 16px 48px rgba(232,96,10,0.15) !important; }
        .${id}-link:hover { color: ${orange} !important; }
      `}} />

      {/* Organic blob */}
      <div style={{ position: "absolute", top: "10%", right: "10%", width: "300px", height: "300px", background: `linear-gradient(135deg, ${orange}15, ${amber}10)`, animation: `${id}-morph 8s ease-in-out infinite`, filter: "blur(40px)", pointerEvents: "none" }} />

      {/* NAV */}
      <nav style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: `linear-gradient(135deg, ${orange}, ${amber})`, boxShadow: `0 4px 12px ${orange}33` }} />
          <span style={{ fontSize: "17px", fontWeight: 700 }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} className={`${id}-link`} style={{ padding: "8px 18px", borderRadius: "100px", fontSize: "14px", fontWeight: 500, color: "#888", cursor: "pointer", transition: "all 0.3s" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer", boxShadow: `0 4px 16px ${orange}30`, transition: "all 0.3s" }}>
            Commencer
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", zIndex: 10, padding: "100px 48px 60px", textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out` }}>
        <div style={{ display: "inline-block", padding: "8px 24px", background: "#fff", borderRadius: "100px", fontSize: "13px", fontWeight: 600, color: orange, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", marginBottom: "28px" }}>
          Nouveau — AI Assistant disponible en beta
        </div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 72px)", fontWeight: 800, lineHeight: 1.08, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
          Connecter les idées,
          <br />
          <span style={{ background: `linear-gradient(135deg, ${orange}, ${amber})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "18px", color: "#999", maxWidth: "520px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          Keynotes inspirantes, podcasts captivants et 5 applications SaaS pour transformer votre organisation.
        </p>
        <div style={{ display: "inline-flex", gap: "12px" }}>
          <button style={{ padding: "16px 40px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: `0 8px 32px ${orange}30` }}>Explorer</button>
          <button style={{ padding: "16px 40px", background: "#fff", color: "#555", border: "none", borderRadius: "100px", fontSize: "15px", fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>Écouter →</button>
        </div>
      </section>

      {/* PILL CARDS */}
      <section style={{ position: "relative", zIndex: 10, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { icon: "🎤", title: "50+ Keynotes", desc: "IA, transformation digitale, leadership tech — des conférences qui redéfinissent l'innovation et inspirent les décideurs." },
          { icon: "🎧", title: "100+ Podcasts", desc: "Conversations profondes avec les meilleurs esprits de la tech. Disponible sur Spotify, Apple Podcasts, YouTube et Deezer." },
          { icon: "⚡", title: "5 Apps SaaS", desc: "Connected Hub, Mate Analytics, QuickSync, EventFlow, AI Assistant — un écosystème complet de productivité." },
        ].map((item, i) => (
          <div key={item.title} className={`${id}-pill`} style={{ background: "#fff", borderRadius: "28px", padding: "40px 32px", boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.06)", animation: `${id}-fadeUp 0.8s ease-out ${0.2 + i * 0.12}s both` }}>
            <div style={{ fontSize: "40px", marginBottom: "16px", animation: `${id}-float 3s ease-in-out ${i * 0.4}s infinite` }}>{item.icon}</div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 10px" }}>{item.title}</h3>
            <p style={{ fontSize: "14px", color: "#999", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* APP PILLS */}
      <section style={{ position: "relative", zIndex: 10, display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", padding: "60px 48px" }}>
        {[
          { name: "Connected Hub", status: "Live" },
          { name: "Mate Analytics", status: "Live" },
          { name: "QuickSync", status: "Beta" },
          { name: "EventFlow", status: "Live" },
          { name: "AI Assistant", status: "Soon" },
        ].map((app, i) => (
          <div key={app.name} className={`${id}-pill`} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "14px 24px", background: "#fff", borderRadius: "100px", boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)", animation: `${id}-fadeUp 0.8s ease-out ${0.6 + i * 0.08}s both` }}>
            <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: `linear-gradient(135deg, ${orange}, ${amber})`, opacity: 0.7 }} />
            <span style={{ fontSize: "14px", fontWeight: 600 }}>{app.name}</span>
            <span style={{ fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "100px", background: app.status === "Live" ? "#E8F5E9" : app.status === "Beta" ? `${orange}12` : "#f5f5f5", color: app.status === "Live" ? "#2E7D32" : app.status === "Beta" ? orange : "#999" }}>{app.status}</span>
          </div>
        ))}
      </section>

      {/* QUOTE */}
      <section style={{ position: "relative", zIndex: 10, padding: "60px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ background: "#fff", borderRadius: "32px", padding: "48px 40px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
          <p style={{ fontSize: "22px", lineHeight: 1.6, fontStyle: "italic", color: "#555", margin: "0 0 20px", fontFamily: "'Playfair Display', serif" }}>
            &ldquo;Connected Mate a transformé notre façon de penser l&apos;innovation. Un game-changer pour notre équipe.&rdquo;
          </p>
          <div style={{ fontSize: "13px", color: "#bbb" }}>— Directrice Innovation, CAC40</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "40px 48px 80px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 24px", letterSpacing: "-0.02em" }}>Rejoignez 10 000+ visionnaires</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
          {["Apple Podcasts", "Spotify", "YouTube", "LinkedIn"].map((s) => (
            <span key={s} className={`${id}-pill`} style={{ padding: "10px 22px", background: "#fff", borderRadius: "100px", fontSize: "13px", fontWeight: 600, color: "#777", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#ccc" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Paris, France</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 58 — Notion-style Minimal (Clean workspace aesthetic)
   Ultra minimal, monochrome, focus on content structure
   ============================================================ */
const NotionMinimal: React.FC = () => {
  const orange = "#E8600A";
  const id = "d58";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#37352F", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .${id}-row { transition: background 0.2s ease; }
        .${id}-row:hover { background: #F7F6F3 !important; }
        .${id}-link:hover { color: ${orange} !important; }
      `}} />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px 12px 14px", borderBottom: "1px solid #EBEBEA" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: `linear-gradient(135deg, ${orange}, #F5A623)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: "1.5px", alignItems: "flex-end" }}>
              {[8, 12, 7, 11].map((h, i) => <div key={i} style={{ width: "2px", height: `${h}px`, background: "#fff", borderRadius: "1px" }} />)}
            </div>
          </div>
          <span style={{ fontSize: "14px", fontWeight: 600 }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} className={`${id}-link`} style={{ padding: "6px 12px", borderRadius: "6px", fontSize: "14px", color: "#888", cursor: "pointer", transition: "all 0.2s" }}>{t}</span>
          ))}
          <button style={{ marginLeft: "8px", padding: "6px 16px", background: orange, color: "#fff", border: "none", borderRadius: "6px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Commencer</button>
        </div>
      </nav>

      {/* HERO — notion page style */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "80px 24px 40px", animation: `${id}-fadeUp 0.6s ease-out` }}>
        <div style={{ fontSize: "11px", fontWeight: 600, color: orange, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>Connected Mate — Plateforme</div>
        <h1 style={{ fontSize: "42px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "16px", color: "#999", lineHeight: 1.7, margin: "0 0 32px" }}>
          La plateforme qui réunit keynotes tech, podcasts visionnaires et applications SaaS pour les leaders qui façonnent le monde de demain.
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          <button style={{ padding: "8px 20px", background: orange, color: "#fff", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Explorer</button>
          <button style={{ padding: "8px 20px", background: "#F7F6F3", color: "#37352F", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>En savoir plus →</button>
        </div>
      </section>

      {/* DATABASE TABLE — Notion-style */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "24px", animation: `${id}-fadeUp 0.6s ease-out 0.1s both` }}>
        <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Nos piliers</div>
        <div style={{ border: "1px solid #EBEBEA", borderRadius: "8px", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "8px 16px", background: "#F7F6F3", fontSize: "12px", fontWeight: 600, color: "#999" }}>
            <span>Nom</span><span>Quantité</span><span>Status</span><span>Catégorie</span>
          </div>
          {[
            { name: "Keynotes", qty: "50+", status: "Active", cat: "Contenu" },
            { name: "Podcasts", qty: "100+", status: "Active", cat: "Contenu" },
            { name: "Connected Hub", qty: "v3.0", status: "Live", cat: "App" },
            { name: "Mate Analytics", qty: "v2.1", status: "Live", cat: "App" },
            { name: "QuickSync", qty: "v1.0", status: "Beta", cat: "App" },
            { name: "EventFlow", qty: "v2.0", status: "Live", cat: "App" },
            { name: "AI Assistant", qty: "v0.9", status: "Soon", cat: "App" },
            { name: "Blog", qty: "6+", status: "Active", cat: "Contenu" },
          ].map((row, i) => (
            <div key={row.name} className={`${id}-row`} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "10px 16px", borderTop: "1px solid #EBEBEA", fontSize: "14px", cursor: "pointer", animation: `${id}-fadeUp 0.4s ease-out ${0.15 + i * 0.04}s both` }}>
              <span style={{ fontWeight: 500 }}>{row.name}</span>
              <span style={{ color: "#999" }}>{row.qty}</span>
              <span><span style={{ padding: "2px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: 600, background: row.status === "Live" || row.status === "Active" ? "#DBEDDB" : row.status === "Beta" ? "#FDEBD0" : "#F0F0F0", color: row.status === "Live" || row.status === "Active" ? "#2E7D32" : row.status === "Beta" ? orange : "#999" }}>{row.status}</span></span>
              <span style={{ color: "#999" }}>{row.cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CALLOUT */}
      <section style={{ maxWidth: "720px", margin: "32px auto", padding: "0 24px" }}>
        <div style={{ background: `${orange}08`, border: `1px solid ${orange}20`, borderRadius: "8px", padding: "20px 24px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "20px" }}>💡</span>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>Le saviez-vous ?</div>
            <div style={{ fontSize: "14px", color: "#777", lineHeight: 1.6 }}>10 000+ professionnels utilisent Connected Mate pour rester à la pointe de l&apos;innovation tech. Nos keynotes couvrent l&apos;IA, la transformation digitale, le Green IT, et bien plus.</div>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section style={{ maxWidth: "720px", margin: "0 auto", padding: "24px" }}>
        <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "16px" }}>Expertises</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Intelligence Artificielle", "Transformation Digitale", "Future of Work", "Green IT", "Cybersécurité", "Product Management", "API Design", "Leadership Tech", "Data Ethics"].map((t) => (
            <span key={t} style={{ padding: "4px 12px", background: "#F7F6F3", borderRadius: "4px", fontSize: "13px", color: "#666", cursor: "pointer", transition: "background 0.2s" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ maxWidth: "720px", margin: "32px auto", padding: "0 24px" }}>
        <div style={{ borderLeft: `3px solid ${orange}`, paddingLeft: "20px" }}>
          <p style={{ fontSize: "18px", lineHeight: 1.6, fontStyle: "italic", color: "#666", margin: "0 0 12px" }}>
            &ldquo;La technologie n&apos;a de sens que si elle connecte les humains entre eux.&rdquo;
          </p>
          <div style={{ fontSize: "13px", color: "#bbb" }}>— Alexander Martin, CEO</div>
        </div>
      </section>

      <footer style={{ maxWidth: "720px", margin: "60px auto 0", padding: "20px 24px", borderTop: "1px solid #EBEBEA", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#ccc" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Made with care in Paris</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 59 — Split Screen Hero (Dynamic, asymmetric)
   50/50 split with animation, contrasted sections
   ============================================================ */
const SplitScreen: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d59";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-slideLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes ${id}-slideRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .${id}-card { transition: all 0.4s ease; }
        .${id}-card:hover { transform: translateY(-6px); box-shadow: 0 16px 48px rgba(0,0,0,0.1) !important; }
      `}} />

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `linear-gradient(135deg, ${orange}, ${amber})` }} />
          <span style={{ fontSize: "16px", fontWeight: 700 }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "28px", alignItems: "center", fontSize: "14px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", fontWeight: 500, transition: "color 0.3s" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: "#111", color: "#fff", border: "none", borderRadius: "10px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Rejoindre</button>
        </div>
      </nav>

      {/* SPLIT HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "80vh" }}>
        {/* Left — text */}
        <div style={{ padding: "80px 48px", display: "flex", flexDirection: "column", justifyContent: "center", animation: `${id}-slideLeft 0.8s ease-out` }}>
          <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", color: orange, textTransform: "uppercase", marginBottom: "20px" }}>Plateforme d&apos;innovation</div>
          <h1 style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
            Connecter
            <br />
            les idées,
            <br />
            <span style={{ color: orange }}>inspirer</span> le futur
          </h1>
          <p style={{ fontSize: "16px", color: "#888", lineHeight: 1.7, maxWidth: "420px", margin: "0 0 32px" }}>
            Keynotes, podcasts et applications SaaS pour les leaders tech qui façonnent le monde de demain.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ padding: "14px 32px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${orange}30` }}>Explorer</button>
            <button style={{ padding: "14px 32px", background: "#f5f5f5", color: "#555", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>Écouter →</button>
          </div>
        </div>

        {/* Right — visual / cards */}
        <div style={{ background: "#111", padding: "60px 40px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px", animation: `${id}-slideRight 0.8s ease-out` }}>
          {[
            { label: "KEYNOTES", value: "50+", sub: "IA, Digital, Leadership, Green IT" },
            { label: "PODCASTS", value: "100+", sub: "Spotify, Apple, YouTube, Deezer" },
            { label: "APPS", value: "5", sub: "Hub, Analytics, Sync, Events, AI" },
          ].map((item, i) => (
            <div key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px", borderBottom: "1px solid rgba(255,255,255,0.06)", animation: `${id}-fadeUp 0.6s ease-out ${0.3 + i * 0.1}s both` }}>
              <div>
                <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: orange, marginBottom: "6px" }}>{item.label}</div>
                <div style={{ fontSize: "13px", color: "#666" }}>{item.sub}</div>
              </div>
              <div style={{ fontSize: "40px", fontWeight: 800, color: "#fff" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section style={{ overflow: "hidden", padding: "20px 0", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ display: "flex", gap: "48px", animation: `${id}-marquee 25s linear infinite`, whiteSpace: "nowrap" }}>
          {["Connected Hub", "Mate Analytics", "QuickSync", "EventFlow", "AI Assistant", "Connected Hub", "Mate Analytics", "QuickSync", "EventFlow", "AI Assistant", "Connected Hub", "Mate Analytics"].map((t, i) => (
            <span key={i} style={{ fontSize: "14px", fontWeight: 600, color: "#ddd", letterSpacing: "0.05em" }}>{t}</span>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", padding: "60px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Connected Hub", desc: "Projets, OKR, docs. Intègre Slack, Notion et 50+ outils." },
          { title: "Mate Analytics", desc: "Dashboards BI intelligents. Alertes prédictives automatisées." },
          { title: "EventFlow", desc: "Billetterie, streaming hybride, networking et feedback." },
          { title: "AI Assistant", desc: "Emails, résumés, analyses. IA contextuelle personnalisée." },
        ].map((f, i) => (
          <div key={f.title} className={`${id}-card`} style={{ padding: "28px", borderRadius: "16px", border: "1px solid #eee", animation: `${id}-fadeUp 0.6s ease-out ${0.5 + i * 0.1}s both` }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${orange}12`, marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "12px", height: "12px", borderRadius: "3px", background: orange }} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
            <p style={{ fontSize: "13px", color: "#999", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#ccc" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Paris, France</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 60 — Retro Terminal (Developer / Hacker aesthetic)
   Green-on-black, monospace, CLI-style navigation
   ============================================================ */
const RetroTerminal: React.FC = () => {
  const green = "#4ADE80";
  const orange = "#E8600A";
  const id = "d60";
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: green, fontFamily: "'JetBrains Mono', 'Courier New', monospace", margin: 0, padding: "24px" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes ${id}-typeIn { from { width: 0; } to { width: 100%; } }
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-scanline { 0% { top: 0; } 100% { top: 100%; } }
      `}} />

      {/* Scanline overlay */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 100, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)" }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ borderBottom: `1px solid ${green}22`, paddingBottom: "16px", marginBottom: "32px", animation: `${id}-fadeUp 0.4s ease-out` }}>
          <div style={{ fontSize: "12px", opacity: 0.4 }}>Connected Mate OS v4.2.1 — Terminal Session</div>
          <div style={{ fontSize: "12px", opacity: 0.3, marginTop: "4px" }}>Last login: Mon Mar 11 09:42:17 2026 from paris-office</div>
        </div>

        {/* Welcome */}
        <div style={{ marginBottom: "40px", animation: `${id}-fadeUp 0.4s ease-out 0.1s both` }}>
          <div><span style={{ opacity: 0.5 }}>cm@server:~$</span> cat /etc/motd</div>
          <pre style={{ fontSize: "clamp(14px, 2vw, 20px)", lineHeight: 1.4, margin: "16px 0", whiteSpace: "pre-wrap", color: green }}>
{`  ╔═══════════════════════════════════════════╗
  ║  CONNECTED MATE                           ║
  ║  Connecter les idées, inspirer le futur   ║
  ║  ────────────────────────────────────────  ║
  ║  Keynotes · Podcasts · Apps SaaS          ║
  ╚═══════════════════════════════════════════╝`}
          </pre>
        </div>

        {/* System info */}
        <div style={{ marginBottom: "32px", animation: `${id}-fadeUp 0.4s ease-out 0.2s both` }}>
          <div><span style={{ opacity: 0.5 }}>cm@server:~$</span> cm-status --all</div>
          <div style={{ marginTop: "12px", paddingLeft: "16px", display: "grid", gap: "6px", fontSize: "14px" }}>
            {[
              { k: "keynotes", v: "50+  [████████████████████ ] active", c: green },
              { k: "podcasts", v: "100+ [████████████████████ ] streaming", c: green },
              { k: "apps    ", v: "5    [████████████████░░░░ ] 4/5 live", c: "#FFD700" },
              { k: "users   ", v: "10K+ [████████████████████ ] growing", c: green },
            ].map((line) => (
              <div key={line.k} style={{ opacity: 0.7 }}>
                <span style={{ color: orange }}>{line.k}</span>: <span style={{ color: line.c }}>{line.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Apps list */}
        <div style={{ marginBottom: "32px", animation: `${id}-fadeUp 0.4s ease-out 0.3s both` }}>
          <div><span style={{ opacity: 0.5 }}>cm@server:~$</span> ls -la /apps/</div>
          <div style={{ marginTop: "12px", paddingLeft: "16px", display: "grid", gap: "4px", fontSize: "13px" }}>
            {[
              "drwxr-xr-x  connected-hub/     — Collaboration (Web, iOS, Android)  [LIVE]",
              "drwxr-xr-x  mate-analytics/    — Business Intelligence (Web)        [LIVE]",
              "drwxr-xr-x  quicksync/         — File Sync E2E (Desktop)            [BETA]",
              "drwxr-xr-x  eventflow/         — Event Management (Web, iOS)        [LIVE]",
              "drwxr-xr-x  ai-assistant/      — Generative AI (Web)               [SOON]",
            ].map((line) => (
              <div key={line} style={{ opacity: 0.6 }}>{line}</div>
            ))}
          </div>
        </div>

        {/* Topics */}
        <div style={{ marginBottom: "32px", animation: `${id}-fadeUp 0.4s ease-out 0.4s both` }}>
          <div><span style={{ opacity: 0.5 }}>cm@server:~$</span> cm-topics --list</div>
          <div style={{ marginTop: "12px", paddingLeft: "16px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["ai", "digital-transformation", "future-of-work", "green-it", "cybersecurity", "product-mgmt", "api-design", "leadership"].map((t) => (
              <span key={t} style={{ padding: "4px 12px", border: `1px solid ${green}33`, fontSize: "12px", color: green, opacity: 0.7 }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginBottom: "32px", animation: `${id}-fadeUp 0.4s ease-out 0.5s both` }}>
          <div><span style={{ opacity: 0.5 }}>cm@server:~$</span> ./connect.sh</div>
          <div style={{ marginTop: "16px", display: "inline-block", padding: "12px 32px", border: `1px solid ${green}`, fontSize: "14px", cursor: "pointer", transition: "all 0.3s" }}>
            [ LANCER LA CONNEXION ]
          </div>
          <span style={{ animation: `${id}-blink 1s infinite`, marginLeft: "8px" }}>█</span>
        </div>

        {/* Footer */}
        <div style={{ borderTop: `1px solid ${green}11`, paddingTop: "16px", fontSize: "11px", opacity: 0.25 }}>
          © 2026 Connected Mate SAS — Paris — Process complete. Exit code: 0
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 61 — Magazine Grid (Asymmetric editorial, bold)
   Large hero image area, mixed card sizes
   ============================================================ */
const MagazineGrid: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d61";
  return (
    <div style={{ minHeight: "100vh", background: "#F5F3EE", color: "#1A1A1A", fontFamily: "'Inter', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .${id}-card { transition: all 0.4s ease; cursor: pointer; }
        .${id}-card:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(0,0,0,0.12) !important; }
      `}} />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "22px", fontWeight: 700, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#888", fontWeight: 500 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog", "À propos"].map((t) => (
            <span key={t} style={{ cursor: "pointer", transition: "color 0.3s" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO GRID */}
      <section style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gridTemplateRows: "auto auto", gap: "16px", padding: "40px 48px", animation: `${id}-fadeUp 0.8s ease-out` }}>
        {/* Main hero */}
        <div className={`${id}-card`} style={{ gridRow: "1 / 3", background: `linear-gradient(135deg, #111, #222)`, borderRadius: "24px", padding: "60px 48px", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "flex-end", minHeight: "500px", boxShadow: "0 8px 32px rgba(0,0,0,0.12)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "250px", height: "250px", borderRadius: "50%", background: `linear-gradient(135deg, ${orange}33, ${amber}22)`, filter: "blur(50px)" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", color: orange, marginBottom: "16px" }}>PLATEFORME D&apos;INNOVATION</div>
            <h1 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.1, margin: "0 0 16px", letterSpacing: "-0.02em", fontFamily: "'Playfair Display', serif" }}>
              Connecter les idées,
              <br />
              inspirer le futur
            </h1>
            <p style={{ fontSize: "16px", opacity: 0.5, maxWidth: "400px", lineHeight: 1.7, margin: "0 0 24px" }}>
              Keynotes tech, podcasts visionnaires et applications SaaS de productivité pour les leaders de demain.
            </p>
            <button style={{ padding: "14px 32px", background: `linear-gradient(135deg, ${orange}, ${amber})`, color: "#fff", border: "none", borderRadius: "12px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${orange}44` }}>
              Découvrir →
            </button>
          </div>
        </div>

        {/* Side card 1 */}
        <div className={`${id}-card`} style={{ background: "#fff", borderRadius: "24px", padding: "36px 32px", boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: orange, marginBottom: "12px" }}>KEYNOTES</div>
          <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 8px", fontFamily: "'Playfair Display', serif" }}>50+ conférences</h3>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6, margin: "0 0 16px" }}>IA, transformation digitale, leadership tech, Green IT, cybersécurité et plus.</p>
          <div style={{ display: "flex", gap: "40px" }}>
            {[{ v: "250+", l: "Abonnés" }, { v: "50+", l: "Speakers" }].map((s) => (
              <div key={s.l}><div style={{ fontSize: "24px", fontWeight: 800, color: orange }}>{s.v}</div><div style={{ fontSize: "11px", color: "#bbb" }}>{s.l}</div></div>
            ))}
          </div>
        </div>

        {/* Side card 2 */}
        <div className={`${id}-card`} style={{ background: `linear-gradient(135deg, ${orange}, ${amber})`, borderRadius: "24px", padding: "36px 32px", color: "#fff", boxShadow: `0 8px 32px ${orange}25` }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", opacity: 0.8, marginBottom: "12px" }}>PODCASTS</div>
          <h3 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 8px" }}>100+ épisodes</h3>
          <p style={{ fontSize: "14px", opacity: 0.8, lineHeight: 1.6, margin: "0 0 16px" }}>Les conversations les plus captivantes de la tech francophone.</p>
          <div style={{ display: "flex", gap: "8px" }}>
            {["Spotify", "Apple", "YouTube"].map((p) => (
              <span key={p} style={{ padding: "4px 12px", background: "rgba(255,255,255,0.2)", borderRadius: "100px", fontSize: "12px", fontWeight: 600 }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* APPS ROW */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", padding: "20px 48px 60px" }}>
        {[
          { name: "Connected Hub", desc: "Collaboration" },
          { name: "Mate Analytics", desc: "BI Dashboard" },
          { name: "QuickSync", desc: "Sync E2E" },
          { name: "EventFlow", desc: "Événements" },
          { name: "AI Assistant", desc: "IA Générative" },
        ].map((app, i) => (
          <div key={app.name} className={`${id}-card`} style={{ background: "#fff", borderRadius: "16px", padding: "24px 20px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", animation: `${id}-fadeUp 0.6s ease-out ${0.3 + i * 0.08}s both` }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `linear-gradient(135deg, ${orange}20, ${amber}15)`, margin: "0 auto 12px" }} />
            <div style={{ fontSize: "13px", fontWeight: 700 }}>{app.name}</div>
            <div style={{ fontSize: "11px", color: "#bbb", marginTop: "4px" }}>{app.desc}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #e5e0d5", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#ccc" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Paris, France</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 62 — Neon Dark (Tech / Night mode, vibrant accents)
   Near-black with bright orange neon effects
   ============================================================ */
const NeonDark: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d62";
  return (
    <div style={{ minHeight: "100vh", background: "#080808", color: "#fff", fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-glow { 0%, 100% { text-shadow: 0 0 20px ${orange}44, 0 0 40px ${orange}22; } 50% { text-shadow: 0 0 40px ${orange}66, 0 0 80px ${orange}33; } }
        @keyframes ${id}-pulse { 0%, 100% { box-shadow: 0 0 0 0 ${orange}44; } 50% { box-shadow: 0 0 0 8px ${orange}00; } }
        @keyframes ${id}-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .${id}-card { transition: all 0.4s ease; border: 1px solid rgba(232,96,10,0.1); }
        .${id}-card:hover { border-color: ${orange}44 !important; box-shadow: 0 16px 48px rgba(232,96,10,0.15) !important; transform: translateY(-4px); }
        .${id}-link { transition: all 0.3s ease; }
        .${id}-link:hover { color: ${orange} !important; text-shadow: 0 0 10px ${orange}44; }
      `}} />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `1px solid ${orange}11` }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: orange, boxShadow: `0 0 12px ${orange}66`, animation: `${id}-pulse 2s ease-in-out infinite` }} />
          <span style={{ fontSize: "16px", fontWeight: 700, color: orange }}>Connected Mate</span>
        </div>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} className={`${id}-link`} style={{ cursor: "pointer", color: "#666", fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 60px", textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out` }}>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 110px)", fontWeight: 700, lineHeight: 0.95, margin: "0 0 24px", letterSpacing: "-0.03em", animation: `${id}-glow 3s ease-in-out infinite` }}>
          CONNECTER
          <br />
          <span style={{ color: orange }}>L&apos;AVENIR</span>
        </h1>
        <p style={{ fontSize: "17px", color: "#555", maxWidth: "520px", margin: "0 auto 40px", lineHeight: 1.7 }}>
          Keynotes tech · Podcasts visionnaires · Applications SaaS — tout ce qu&apos;il faut pour les leaders qui construisent demain.
        </p>
        <div style={{ display: "inline-flex", gap: "12px" }}>
          <button style={{ padding: "14px 40px", background: orange, color: "#fff", border: "none", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: `0 0 32px ${orange}44, 0 4px 16px ${orange}33`, transition: "all 0.3s" }}>
            Explorer
          </button>
          <button style={{ padding: "14px 40px", background: "transparent", color: orange, border: `1px solid ${orange}44`, fontSize: "14px", fontWeight: 600, cursor: "pointer", transition: "all 0.3s" }}>
            Écouter →
          </button>
        </div>
      </section>

      {/* CARDS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { icon: "🎤", title: "50+ Keynotes", desc: "IA générative, transformation digitale, leadership tech — les conférences qui comptent." },
          { icon: "🎧", title: "100+ Podcasts", desc: "Conversations profondes avec les meilleurs esprits tech. Sur toutes les plateformes." },
          { icon: "⚡", title: "5 Apps SaaS", desc: "Connected Hub, Mate Analytics, QuickSync, EventFlow, AI Assistant." },
        ].map((item, i) => (
          <div key={item.title} className={`${id}-card`} style={{ background: "#111", borderRadius: "20px", padding: "36px 28px", animation: `${id}-fadeUp 0.8s ease-out ${0.2 + i * 0.12}s both` }}>
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>{item.icon}</div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 10px", color: orange }}>{item.title}</h3>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* MARQUEE */}
      <section style={{ overflow: "hidden", padding: "28px 0", margin: "40px 0", borderTop: `1px solid ${orange}0A`, borderBottom: `1px solid ${orange}0A` }}>
        <div style={{ display: "flex", gap: "60px", animation: `${id}-marquee 25s linear infinite`, whiteSpace: "nowrap" }}>
          {["IA", "DIGITAL", "LEADERSHIP", "GREEN IT", "CYBER", "PRODUCT", "API", "DATA ETHICS", "IA", "DIGITAL", "LEADERSHIP", "GREEN IT", "CYBER", "PRODUCT"].map((t, i) => (
            <span key={i} style={{ fontSize: "13px", letterSpacing: "0.25em", color: `${orange}22`, fontWeight: 700 }}>{t}</span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "80px", padding: "40px 48px 80px" }}>
        {[{ v: "50+", l: "Keynotes" }, { v: "100+", l: "Podcasts" }, { v: "5", l: "Apps" }, { v: "10K+", l: "Users" }].map((s, i) => (
          <div key={s.l} style={{ textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out ${0.6 + i * 0.1}s both` }}>
            <div style={{ fontSize: "40px", fontWeight: 800, color: orange, textShadow: `0 0 20px ${orange}33` }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#555", marginTop: "8px", letterSpacing: "0.1em" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${orange}0A`, display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#333" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span style={{ color: `${orange}66` }}>The future glows bright</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 57, name: "Organic Curves", category: "Warm", description: "Pill shapes, morphing blobs, peach gradient, floating icons, soft shadows, warm & friendly", component: OrganicCurves },
  { id: 58, name: "Notion Minimal", category: "Minimal", description: "Workspace aesthetic, database table, callout blocks, clean rows, Notion-inspired structure", component: NotionMinimal },
  { id: 59, name: "Split Screen", category: "Dynamic", description: "50/50 hero split light/dark, contrasted sections, slide animations, marquee products", component: SplitScreen },
  { id: 60, name: "Retro Terminal", category: "Developer", description: "Green-on-black CLI, ASCII art, progress bars, scanlines, command-line navigation", component: RetroTerminal },
  { id: 61, name: "Magazine Grid", category: "Editorial", description: "Asymmetric hero grid, large feature card, sidebar content, editorial typography", component: MagazineGrid },
  { id: 62, name: "Neon Dark", category: "Dark", description: "Near-black with neon orange glow, text-shadow effects, pulsing indicators, vibrant accents", component: NeonDark },
];
