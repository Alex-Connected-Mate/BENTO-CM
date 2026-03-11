"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 63 — Japanese Zen (Wabi-sabi, whitespace, delicate)
   ============================================================ */
const JapaneseZen: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const stone = "#A8A08E";
  const id = "d63";
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF7", color: "#2D2D2D", fontFamily: "'Playfair Display', Georgia, serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-lineGrow { from { height: 0; } to { height: 60px; } }
        @keyframes ${id}-breathe { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .${id}-link { transition: color 0.4s ease; }
        .${id}-link:hover { color: ${orange} !important; }
        .${id}-card { transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .${id}-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.06) !important; }
      `}} />

      <nav style={{ display: "flex", justifyContent: "center", padding: "48px 60px", gap: "48px", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: stone, fontFamily: "'Inter', sans-serif" }}>
        {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
          <span key={t} className={`${id}-link`} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", padding: "60px 48px 80px", animation: `${id}-fadeUp 1s ease-out` }}>
        <div style={{ width: "1px", height: "60px", background: stone, margin: "0 auto 40px", opacity: 0.4, animation: `${id}-lineGrow 1s ease-out` }} />
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, lineHeight: 1.25, margin: 0, letterSpacing: "0.03em" }}>
          Connecter
          <br />
          les <span style={{ fontStyle: "italic", color: orange }}>idées</span>
        </h1>
        <div style={{ width: "1px", height: "40px", background: stone, margin: "36px auto", opacity: 0.3 }} />
        <p style={{ fontSize: "16px", color: stone, lineHeight: 2.2, maxWidth: "440px", margin: "0 auto 40px", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
          Dans le calme naît la clarté. Keynotes inspirantes, podcasts captivants et applications de productivité — chaque geste est intentionnel.
        </p>
        <button style={{ padding: "14px 40px", border: `1px solid ${stone}66`, color: stone, background: "transparent", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", cursor: "pointer", transition: "all 0.4s ease" }}>
          Découvrir
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#e5e0d5", maxWidth: "800px", margin: "0 auto" }}>
        {[{ v: "50+", l: "Keynotes" }, { v: "100+", l: "Podcasts" }, { v: "5", l: "Applications" }].map((s, i) => (
          <div key={s.l} className={`${id}-card`} style={{ background: "#FAFAF7", padding: "48px 32px", textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out ${0.3 + i * 0.15}s both` }}>
            <div style={{ fontSize: "36px", fontWeight: 300, color: orange, fontStyle: "italic", animation: `${id}-breathe 4s ease-in-out ${i}s infinite` }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: stone, marginTop: "8px", fontFamily: "'Inter', sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "80px 60px", maxWidth: "700px", margin: "0 auto", animation: `${id}-fadeUp 0.8s ease-out 0.6s both` }}>
        <div style={{ width: "40px", height: "1px", background: orange, marginBottom: "32px" }} />
        <blockquote style={{ fontSize: "24px", fontStyle: "italic", lineHeight: 1.6, color: orange, margin: 0 }}>
          &ldquo;La technologie n&apos;a de sens que si elle connecte les humains entre eux.&rdquo;
        </blockquote>
        <div style={{ fontSize: "13px", color: stone, marginTop: "20px", fontFamily: "'Inter', sans-serif" }}>— Alexander Martin, CEO</div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1px", background: "#e5e0d5", maxWidth: "900px", margin: "40px auto 0" }}>
        {["Connected Hub", "Mate Analytics", "QuickSync", "EventFlow", "AI Assistant"].map((app, i) => (
          <div key={app} className={`${id}-card`} style={{ background: "#FAFAF7", padding: "28px 16px", textAlign: "center", animation: `${id}-fadeUp 0.6s ease-out ${0.8 + i * 0.08}s both` }}>
            <div style={{ fontSize: "13px", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>{app}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "48px 60px", textAlign: "center", fontSize: "12px", color: "#ddd", fontFamily: "'Inter', sans-serif", marginTop: "60px" }}>
        <span>© 2026 Connected Mate SAS — Paris</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 64 — Dashboard Overview (Dark analytics, data-rich)
   ============================================================ */
const DashboardOverview: React.FC = () => {
  const blue = "#3B82F6";
  const green = "#10B981";
  const orange = "#E8600A";
  const id = "d64";
  return (
    <div style={{ minHeight: "100vh", background: "#0F172A", color: "#E2E8F0", fontFamily: "'Inter', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes ${id}-grow { from { width: 0; } to { width: var(--target-width); } }
        .${id}-card { transition: all 0.3s ease; border: 1px solid #334155; }
        .${id}-card:hover { border-color: ${blue} !important; box-shadow: 0 8px 32px rgba(59,130,246,0.1) !important; }
        .${id}-row { transition: background 0.2s ease; }
        .${id}-row:hover { background: rgba(59,130,246,0.05) !important; }
      `}} />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 24px", background: "#1E293B", borderBottom: "1px solid #334155" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: `linear-gradient(135deg, ${orange}, #F5A623)` }} />
          <span style={{ fontSize: "14px", fontWeight: 700 }}>CM <span style={{ color: blue }}>Analytics</span></span>
        </div>
        <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#64748B", alignItems: "center" }}>
          {["Dashboard", "Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", transition: "color 0.2s" }}>{t}</span>
          ))}
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: green, animation: `${id}-pulse 2s infinite` }} />
        </div>
      </nav>

      <section style={{ padding: "24px", animation: `${id}-fadeUp 0.6s ease-out` }}>
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 4px" }}>Dashboard Connected Mate</h1>
          <p style={{ fontSize: "13px", color: "#64748B", margin: 0 }}>Vue d&apos;ensemble de la plateforme — Mars 2026</p>
        </div>

        {/* Metric cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "20px" }}>
          {[
            { v: "50+", l: "Keynotes", d: "+8 ce trimestre", c: green },
            { v: "100+", l: "Podcasts", d: "+12 ce mois", c: green },
            { v: "5", l: "Apps SaaS", d: "4 live, 1 beta", c: blue },
            { v: "10.2K", l: "Utilisateurs actifs", d: "+18% MoM", c: green },
          ].map((stat, i) => (
            <div key={stat.l} className={`${id}-card`} style={{ background: "#1E293B", borderRadius: "12px", padding: "16px", animation: `${id}-fadeUp 0.5s ease-out ${i * 0.08}s both` }}>
              <div style={{ fontSize: "11px", color: "#64748B", marginBottom: "6px" }}>{stat.l}</div>
              <div style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.02em" }}>{stat.v}</div>
              <div style={{ fontSize: "11px", color: stat.c, marginTop: "4px", fontWeight: 600 }}>{stat.d}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "12px" }}>
          {/* Activity feed */}
          <div className={`${id}-card`} style={{ background: "#1E293B", borderRadius: "12px", padding: "16px", animation: `${id}-fadeUp 0.5s ease-out 0.3s both` }}>
            <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>Activité récente</div>
            {[
              { t: "Keynote : L'IA en entreprise — publiée", time: "Il y a 2h" },
              { t: "Podcast #104 : Future of Work — en ligne", time: "Il y a 5h" },
              { t: "Connected Hub v3.1 — déployée", time: "Hier" },
              { t: "AI Assistant — beta ouverte à 500 users", time: "Il y a 2j" },
              { t: "Blog : Green IT et responsabilité — publié", time: "Il y a 3j" },
              { t: "EventFlow : 2 000 inscrits au prochain event", time: "Il y a 5j" },
            ].map((item, i) => (
              <div key={i} className={`${id}-row`} style={{ padding: "10px 0", borderTop: i > 0 ? "1px solid #334155" : "none", fontSize: "13px", color: "#94A3B8", display: "flex", justifyContent: "space-between" }}>
                <span>{item.t}</span>
                <span style={{ color: "#475569", fontSize: "12px", flexShrink: 0, marginLeft: "12px" }}>{item.time}</span>
              </div>
            ))}
          </div>

          {/* Apps status + topics */}
          <div style={{ display: "grid", gap: "12px" }}>
            <div className={`${id}-card`} style={{ background: "#1E293B", borderRadius: "12px", padding: "16px", animation: `${id}-fadeUp 0.5s ease-out 0.4s both` }}>
              <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>Apps — Status</div>
              {[
                { n: "Connected Hub", s: "Live", p: 100 },
                { n: "Mate Analytics", s: "Live", p: 100 },
                { n: "QuickSync", s: "Beta", p: 75 },
                { n: "EventFlow", s: "Live", p: 100 },
                { n: "AI Assistant", s: "Beta", p: 40 },
              ].map((app) => (
                <div key={app.n} style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span style={{ color: "#94A3B8" }}>{app.n}</span>
                    <span style={{ color: app.s === "Live" ? green : orange, fontWeight: 600 }}>{app.s}</span>
                  </div>
                  <div style={{ height: "3px", background: "#334155", borderRadius: "2px" }}>
                    <div style={{ height: "100%", width: `${app.p}%`, background: app.s === "Live" ? green : orange, borderRadius: "2px", transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`${id}-card`} style={{ background: "#1E293B", borderRadius: "12px", padding: "16px", animation: `${id}-fadeUp 0.5s ease-out 0.5s both` }}>
              <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "12px" }}>Top Expertises</div>
              {[{ n: "IA / ML", p: 92 }, { n: "Digital Transform.", p: 78 }, { n: "Future of Work", p: 65 }].map((cat) => (
                <div key={cat.n} style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                    <span style={{ color: "#94A3B8" }}>{cat.n}</span>
                    <span style={{ color: blue }}>{cat.p}%</span>
                  </div>
                  <div style={{ height: "3px", background: "#334155", borderRadius: "2px" }}>
                    <div style={{ height: "100%", width: `${cat.p}%`, background: blue, borderRadius: "2px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ============================================================
   DESIGN 65 — Gradient Maximalism (Bold, colorful, energetic)
   ============================================================ */
const GradientMaximalism: React.FC = () => {
  const orange = "#E8600A";
  const amber = "#F5A623";
  const id = "d65";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#111", fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ${id}-gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes ${id}-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes ${id}-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .${id}-card { transition: all 0.4s ease; }
        .${id}-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 24px 64px rgba(232,96,10,0.2) !important; }
      `}} />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 800, background: `linear-gradient(135deg, ${orange}, #FF6B6B, #845EC2, ${amber})`, backgroundSize: "200% 200%", animation: `${id}-gradientShift 4s ease infinite`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "14px", fontWeight: 600 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", color: "#888", transition: "color 0.3s" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: `linear-gradient(135deg, ${orange}, #FF6B6B, #845EC2)`, backgroundSize: "200% 200%", animation: `${id}-gradientShift 4s ease infinite`, color: "#fff", border: "none", borderRadius: "100px", fontSize: "14px", fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 20px ${orange}33` }}>Rejoindre</button>
        </div>
      </nav>

      <section style={{ padding: "80px 48px 40px", textAlign: "center", animation: `${id}-fadeUp 0.8s ease-out` }}>
        <div style={{ display: "inline-block", padding: "8px 24px", background: `linear-gradient(135deg, ${orange}15, #845EC215)`, borderRadius: "100px", fontSize: "13px", fontWeight: 700, color: orange, marginBottom: "28px" }}>AI Assistant en beta — Rejoignez 500 early adopters</div>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 100px)", fontWeight: 800, lineHeight: 1.0, margin: "0 0 20px", letterSpacing: "-0.04em" }}>
          <span style={{ background: `linear-gradient(135deg, ${orange}, #FF6B6B, #845EC2, ${amber})`, backgroundSize: "200% 200%", animation: `${id}-gradientShift 6s ease infinite`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connecter les idées,</span>
          <br />
          inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", color: "#888", maxWidth: "540px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          50+ keynotes, 100+ podcasts et 5 apps SaaS — la plateforme complète pour les leaders tech qui construisent demain.
        </p>
        <div style={{ display: "inline-flex", gap: "12px" }}>
          <button style={{ padding: "16px 40px", background: `linear-gradient(135deg, ${orange}, #FF6B6B, #845EC2)`, backgroundSize: "200% 200%", animation: `${id}-gradientShift 4s ease infinite`, color: "#fff", border: "none", borderRadius: "16px", fontSize: "16px", fontWeight: 800, cursor: "pointer", boxShadow: `0 8px 32px ${orange}33` }}>Explorer</button>
          <button style={{ padding: "16px 40px", background: "#f5f5f5", color: "#555", border: "none", borderRadius: "16px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>Écouter →</button>
        </div>
      </section>

      {/* Colored stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", padding: "40px 48px", maxWidth: "1000px", margin: "0 auto" }}>
        {[
          { v: "50+", l: "Keynotes", bg: `linear-gradient(135deg, ${orange}, #FF6B6B)` },
          { v: "100+", l: "Podcasts", bg: "linear-gradient(135deg, #FF6B6B, #845EC2)" },
          { v: "5", l: "Apps SaaS", bg: `linear-gradient(135deg, #845EC2, ${amber})` },
          { v: "10K+", l: "Users", bg: `linear-gradient(135deg, ${amber}, ${orange})` },
        ].map((s, i) => (
          <div key={s.l} className={`${id}-card`} style={{ background: s.bg, borderRadius: "20px", padding: "32px 24px", color: "#fff", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.1)", animation: `${id}-fadeUp 0.6s ease-out ${0.2 + i * 0.1}s both` }}>
            <div style={{ fontSize: "40px", fontWeight: 900 }}>{s.v}</div>
            <div style={{ fontSize: "13px", opacity: 0.9, marginTop: "4px", fontWeight: 600 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* Apps */}
      <section style={{ display: "flex", justifyContent: "center", gap: "12px", padding: "40px 48px", flexWrap: "wrap" }}>
        {["Connected Hub", "Mate Analytics", "QuickSync", "EventFlow", "AI Assistant"].map((app, i) => (
          <div key={app} className={`${id}-card`} style={{ padding: "16px 28px", background: "#fff", borderRadius: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)", fontSize: "14px", fontWeight: 700, cursor: "pointer", animation: `${id}-bounce 2s ease-in-out ${i * 0.3}s infinite` }}>{app}</div>
        ))}
      </section>

      {/* Marquee */}
      <section style={{ overflow: "hidden", padding: "24px 0", margin: "20px 0" }}>
        <div style={{ display: "flex", gap: "40px", animation: `${id}-marquee 20s linear infinite`, whiteSpace: "nowrap" }}>
          {["IA Générative", "Digital Transform.", "Future of Work", "Green IT", "Cybersécurité", "Product Mgmt", "API Design", "Leadership", "Data Ethics", "IA Générative", "Digital Transform.", "Future of Work", "Green IT"].map((t, i) => (
            <span key={i} style={{ fontSize: "32px", fontWeight: 900, background: `linear-gradient(135deg, ${orange}22, #845EC222)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.02em" }}>{t}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#ccc" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Paris — Made with love</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 66 — Swiss Grid (International Typographic style)
   ============================================================ */
const SwissGrid: React.FC = () => {
  const red = "#E8600A";
  const id = "d66";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0 }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ${id}-fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .${id}-row { transition: background 0.2s ease; }
        .${id}-row:hover { background: #f5f5f5 !important; }
      `}} />

      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "32px 48px", borderBottom: "1px solid #eee" }}>
        <div>
          <span style={{ fontSize: "14px", fontWeight: 700 }}>Connected Mate</span>
          <div style={{ fontSize: "11px", color: "#999", marginTop: "4px" }}>Keynotes · Podcasts · SaaS</div>
        </div>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#999" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "60px 48px 40px", animation: `${id}-fadeUp 0.6s ease-out` }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px", alignItems: "start" }}>
          <div style={{ width: "80px", height: "80px", background: red, borderRadius: "4px" }} />
          <div>
            <h1 style={{ fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 700, lineHeight: 1.0, margin: "0 0 20px", letterSpacing: "-0.03em" }}>
              Connecter les idées,
              <br />
              inspirer le futur
            </h1>
            <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#666", maxWidth: "500px", margin: 0 }}>
              La plateforme qui connecte keynotes tech, podcasts visionnaires et applications SaaS de productivité.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 48px", borderTop: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px" }}>
          <div style={{ fontSize: "11px", color: "#999", fontWeight: 500, paddingTop: "4px" }}>Chiffres</div>
          <div style={{ display: "flex", gap: "60px" }}>
            {[{ v: "50+", l: "Keynotes" }, { v: "100+", l: "Podcasts" }, { v: "5", l: "Apps" }, { v: "10K+", l: "Users" }].map((s, i) => (
              <div key={s.l} style={{ animation: `${id}-fadeUp 0.5s ease-out ${0.1 + i * 0.08}s both` }}>
                <div style={{ fontSize: "32px", fontWeight: 700 }}>{s.v}</div>
                <div style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 48px", borderTop: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px" }}>
          <div style={{ fontSize: "11px", color: "#999", fontWeight: 500, paddingTop: "4px" }}>Applications</div>
          <div>
            {["Connected Hub — Collaboration & OKR", "Mate Analytics — Business Intelligence", "QuickSync — File Sync E2E", "EventFlow — Event Management", "AI Assistant — IA Générative"].map((app, i) => (
              <div key={app} className={`${id}-row`} style={{ padding: "14px 0", borderBottom: "1px solid #eee", fontSize: "15px", fontWeight: 500, display: "flex", justifyContent: "space-between", cursor: "pointer", animation: `${id}-fadeUp 0.5s ease-out ${0.3 + i * 0.06}s both` }}>
                <span>{app}</span>
                <span style={{ color: "#ccc" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 48px", borderTop: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px" }}>
          <div style={{ fontSize: "11px", color: "#999", fontWeight: 500, paddingTop: "4px" }}>Expertises</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["IA", "Transformation Digitale", "Future of Work", "Green IT", "Cybersécurité", "Product", "API Design", "Leadership", "Data Ethics"].map((t) => (
              <span key={t} style={{ padding: "6px 16px", border: "1px solid #ddd", fontSize: "12px", color: "#666" }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 48px", borderTop: "1px solid #eee" }}>
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "40px" }}>
          <div style={{ fontSize: "11px", color: "#999", fontWeight: 500 }}>Citation</div>
          <blockquote style={{ fontSize: "22px", lineHeight: 1.5, fontWeight: 300, margin: 0, color: "#333" }}>
            &ldquo;La technologie n&apos;a de sens que si elle connecte les humains entre eux. Le reste, c&apos;est du bruit.&rdquo;
            <div style={{ fontSize: "13px", color: "#999", marginTop: "12px" }}>— Alexander Martin, CEO</div>
          </blockquote>
        </div>
      </section>

      <footer style={{ padding: "28px 48px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#ccc" }}>
        <span>© 2026 Connected Mate SAS</span>
        <span>Zürich — Paris</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 63, name: "Japanese Zen", category: "Minimal", description: "Wabi-sabi aesthetic, vertical lines, breathing animations, stone colors, centered layout with Playfair serif", component: JapaneseZen },
  { id: 64, name: "Dashboard Overview", category: "Dashboard", description: "Dark analytics with metric cards, progress bars, activity feed, app status, real CM data", component: DashboardOverview },
  { id: 65, name: "Gradient Maximalism", category: "Bold", description: "Multi-color gradients everywhere, animated background-shift, bouncing apps, large marquee", component: GradientMaximalism },
  { id: 66, name: "Swiss Grid", category: "Swiss", description: "International Typographic style, strict 120px/1fr grid, red accent, Helvetica, precise rows", component: SwissGrid },
];
