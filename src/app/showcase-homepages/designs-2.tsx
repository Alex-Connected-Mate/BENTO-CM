"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export interface HomepageDesign {
  id: number;
  name: string;
  category: string;
  description: string;
  component: React.FC;
}

/* ──────────────────────────────────────────────
   DESIGN 11 – Glassmorphism
   ────────────────────────────────────────────── */
const Design11: React.FC = () => {
  const glassCard: React.CSSProperties = {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(16px)",
    WebkitBackdropFilter: "blur(16px)",
    borderRadius: 20,
    border: "1px solid rgba(255,255,255,0.25)",
    padding: 32,
    color: "#fff",
  };
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)", fontFamily: "'Segoe UI', sans-serif", color: "#fff" }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", ...glassCard, borderRadius: 0, border: "none", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
        <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: 1 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: 32 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer", opacity: 0.85, fontSize: 15 }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "100px 24px 60px" }}>
        <h1 style={{ fontSize: 56, fontWeight: 800, margin: 0, lineHeight: 1.15, textShadow: "0 2px 30px rgba(0,0,0,0.2)" }}>Connecter les idées,<br />inspirer le futur</h1>
        <p style={{ fontSize: 20, maxWidth: 600, margin: "24px auto 40px", opacity: 0.9, lineHeight: 1.6 }}>
          Nous connectons les personnes et la technologie pour façonner un avenir meilleur à travers des conférences, podcasts et applications innovantes.
        </p>
        <button style={{ ...glassCard, padding: "16px 48px", fontSize: 18, fontWeight: 600, cursor: "pointer", border: "1px solid rgba(255,255,255,0.4)", display: "inline-block" }}>Découvrir</button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: 40, padding: "40px 24px", flexWrap: "wrap" }}>
        {[{ n: "50+", l: "Conférences" }, { n: "100+", l: "Épisodes podcast" }, { n: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ ...glassCard, textAlign: "center", minWidth: 200 }}>
            <div style={{ fontSize: 42, fontWeight: 800 }}>{s.n}</div>
            <div style={{ fontSize: 15, opacity: 0.8, marginTop: 8 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28, padding: "60px 48px", maxWidth: 1200, margin: "0 auto" }}>
        {[
          { t: "Keynotes", d: "Des conférences inspirantes sur l'IA, la tech et l'innovation avec des experts mondiaux." },
          { t: "Podcasts", d: "Plus de 100 épisodes explorant les tendances technologiques et les esprits brillants." },
          { t: "Apps", d: "Des applications innovantes qui transforment votre quotidien numérique." },
          { t: "Blog", d: "Articles et analyses approfondis sur les dernières avancées technologiques." },
        ].map((f) => (
          <div key={f.t} style={{ ...glassCard }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginTop: 0 }}>{f.t}</h3>
            <p style={{ lineHeight: 1.6, opacity: 0.85, fontSize: 15 }}>{f.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 24px" }}>
        <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 20 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ ...glassCard, padding: "12px 28px", cursor: "pointer", fontSize: 14, fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "32px 24px", borderTop: "1px solid rgba(255,255,255,0.15)", fontSize: 14, opacity: 0.7 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 12 – Mono Terminal
   ────────────────────────────────────────────── */
const Design12: React.FC = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(iv);
  }, []);
  const cursor = cursorVisible ? "█" : " ";
  const green = "#00FF00";
  const base: React.CSSProperties = { fontFamily: "'Courier New', monospace", background: "#0a0a0a", color: green, minHeight: "100vh", padding: "24px 48px", fontSize: 15, lineHeight: 1.8 };
  const line = (prefix: string, text: string) => (
    <div><span style={{ color: "#888" }}>{prefix}</span> {text}</div>
  );
  return (
    <div style={base}>
      <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
{`
 ██████╗ ██████╗ ███╗   ██╗███╗   ██╗███████╗ ██████╗████████╗███████╗██████╗
██╔════╝██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██║     ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██║        ██║   █████╗  ██║  ██║
██║     ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██║        ██║   ██╔══╝  ██║  ██║
╚██████╗╚██████╔╝██║ ╚████║██║ ╚████║███████╗╚██████╗   ██║   ███████╗██████╔╝
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═╝   ╚══════╝╚═════╝
                            ███╗   ███╗ █████╗ ████████╗███████╗
                            ████╗ ████║██╔══██╗╚══██╔══╝██╔════╝
                            ██╔████╔██║███████║   ██║   █████╗
                            ██║╚██╔╝██║██╔══██║   ██║   ██╔══╝
                            ██║ ╚═╝ ██║██║  ██║   ██║   ███████╗
                            ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
`}
      </pre>
      <div style={{ borderBottom: `1px solid ${green}`, margin: "16px 0", opacity: 0.3 }} />
      {line("$", `echo "Connecter les idées, inspirer le futur" ${cursor}`)}
      <br />
      {line(">", "Nous connectons les personnes et la technologie pour façonner")}
      {line(">", "un avenir meilleur à travers des conférences, podcasts et apps.")}
      <br />
      <div style={{ color: "#888" }}>{"// ─── STATS ──────────────────────────────────────"}</div>
      <div style={{ display: "flex", gap: 48, margin: "12px 0", flexWrap: "wrap" }}>
        {[{ n: "50+", l: "conférences" }, { n: "100+", l: "épisodes_podcast" }, { n: "5", l: "applications" }].map((s) => (
          <div key={s.l}>
            <span style={{ color: "#FFD700", fontWeight: "bold", fontSize: 28 }}>{s.n}</span>
            <span style={{ marginLeft: 8 }}>{s.l}</span>
          </div>
        ))}
      </div>
      <br />
      <div style={{ color: "#888" }}>{"// ─── MODULES ─────────────────────────────────────"}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, margin: "16px 0" }}>
        {[
          { t: "keynotes", d: "Conférences inspirantes sur l'IA et l'innovation." },
          { t: "podcasts", d: "100+ épisodes sur les tendances tech." },
          { t: "apps", d: "Applications qui transforment le quotidien." },
          { t: "blog", d: "Articles approfondis sur la tech." },
        ].map((f) => (
          <div key={f.t} style={{ border: `1px solid ${green}`, padding: 16, borderRadius: 0 }}>
            <div style={{ color: "#FFD700" }}>{"{"} module: &quot;{f.t}&quot; {"}"}</div>
            <div style={{ opacity: 0.7, marginTop: 8, fontSize: 13 }}>{`// ${f.d}`}</div>
          </div>
        ))}
      </div>
      <br />
      <div style={{ color: "#888" }}>{"// ─── CONNECT ─────────────────────────────────────"}</div>
      <div style={{ margin: "12px 0" }}>
        {line("$", "restons_connectés --social")}
        <div style={{ display: "flex", gap: 24, marginTop: 8 }}>
          {["twitter", "linkedin", "youtube", "github"].map((s) => (
            <span key={s} style={{ cursor: "pointer", textDecoration: "underline" }}>[{s}]</span>
          ))}
        </div>
      </div>
      <br />
      <div style={{ borderTop: `1px solid ${green}`, paddingTop: 16, opacity: 0.5, fontSize: 13 }}>
        {"/* © 2026 Connected Mate – All rights reserved */"}
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 13 – Art Deco
   ────────────────────────────────────────────── */
const Design13: React.FC = () => {
  const gold = "#D4AF37";
  const navy = "#0D1B2A";
  const cream = "#F5F0E1";
  const heading: React.CSSProperties = { fontFamily: "'Georgia', serif", letterSpacing: 4, textTransform: "uppercase" as const };
  const decoLine: React.CSSProperties = { width: 120, height: 2, background: gold, margin: "16px auto" };
  return (
    <div style={{ minHeight: "100vh", background: navy, color: cream, fontFamily: "'Georgia', serif" }}>
      {/* Deco top border */}
      <div style={{ height: 6, background: `repeating-linear-gradient(90deg, ${gold} 0px, ${gold} 20px, transparent 20px, transparent 30px)` }} />

      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "36px 48px", gap: 48 }}>
        <div style={{ ...decoLine, flex: "none", width: 80 }} />
        <span style={{ ...heading, fontSize: 14, color: gold }}>Keynotes</span>
        <span style={{ ...heading, fontSize: 14, color: gold }}>Podcasts</span>
        <span style={{ ...heading, fontSize: 28, color: gold, letterSpacing: 6 }}>Connected Mate</span>
        <span style={{ ...heading, fontSize: 14, color: gold }}>Apps</span>
        <span style={{ ...heading, fontSize: 14, color: gold }}>Blog</span>
        <div style={{ ...decoLine, flex: "none", width: 80 }} />
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px", position: "relative" }}>
        {/* Sunburst */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          width: 500, height: 500, opacity: 0.06,
          background: `repeating-conic-gradient(${gold} 0deg, transparent 5deg, transparent 10deg)`,
          borderRadius: "50%",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{ ...decoLine }} />
          <h1 style={{ ...heading, fontSize: 52, color: gold, lineHeight: 1.3, margin: "24px 0" }}>
            Connecter les idées,<br />inspirer le futur
          </h1>
          <div style={{ ...decoLine }} />
          <p style={{ fontSize: 18, maxWidth: 550, margin: "28px auto 0", lineHeight: 1.7, opacity: 0.8 }}>
            Nous connectons les personnes et la technologie pour façonner un avenir meilleur.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: 60, padding: "40px 24px", flexWrap: "wrap" }}>
        {[{ n: "50+", l: "Conférences" }, { n: "100+", l: "Épisodes" }, { n: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 48, fontWeight: 700, color: gold, ...heading }}>{s.n}</div>
            <div style={{ ...decoLine, margin: "8px auto" }} />
            <div style={{ fontSize: 14, ...heading, letterSpacing: 3 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32, padding: "60px 48px", maxWidth: 1100, margin: "0 auto" }}>
        {[
          { t: "Keynotes", d: "Des conférences inspirantes avec des experts mondiaux de l'IA et du futur." },
          { t: "Podcasts", d: "Plus de 100 épisodes explorant les tendances technologiques." },
          { t: "Apps", d: "Applications innovantes pour votre quotidien numérique." },
          { t: "Blog", d: "Analyses approfondies sur les avancées technologiques." },
        ].map((f) => (
          <div key={f.t} style={{ border: `1px solid ${gold}`, padding: 32, textAlign: "center", position: "relative" }}>
            <div style={{ position: "absolute", top: -1, left: -1, right: -1, height: 3, background: gold }} />
            <h3 style={{ ...heading, fontSize: 18, color: gold, marginTop: 8 }}>{f.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.75 }}>{f.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 24px" }}>
        <div style={{ ...decoLine }} />
        <h2 style={{ ...heading, fontSize: 32, color: gold, margin: "24px 0" }}>Restons connectés</h2>
        <div style={{ ...decoLine }} />
        <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 32 }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ border: `1px solid ${gold}`, padding: "12px 28px", cursor: "pointer", ...heading, fontSize: 12, color: gold }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "32px 24px", borderTop: `1px solid ${gold}`, fontSize: 13, ...heading, opacity: 0.5 }}>
        © 2026 Connected Mate
      </footer>
      <div style={{ height: 6, background: `repeating-linear-gradient(90deg, ${gold} 0px, ${gold} 20px, transparent 20px, transparent 30px)` }} />
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 14 – Scandinavian
   ────────────────────────────────────────────── */
const Design14: React.FC = () => {
  const bg = "#FEFCF3";
  const wood = "#DEB887";
  const dark = "#2C2C2C";
  const muted = "#8B8680";
  return (
    <div style={{ minHeight: "100vh", background: bg, color: dark, fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 64px" }}>
        <span style={{ fontSize: 20, fontWeight: 300, letterSpacing: 2 }}>connected mate</span>
        <div style={{ display: "flex", gap: 36 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ fontSize: 14, cursor: "pointer", color: muted, fontWeight: 300, letterSpacing: 1 }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "100px 64px 80px", maxWidth: 900 }}>
        <div style={{ width: 48, height: 3, background: wood, marginBottom: 32 }} />
        <h1 style={{ fontSize: 52, fontWeight: 300, lineHeight: 1.3, margin: 0 }}>
          Connecter les idées,<br />inspirer le futur
        </h1>
        <p style={{ fontSize: 18, color: muted, maxWidth: 520, lineHeight: 1.8, marginTop: 24, fontWeight: 300 }}>
          Nous connectons les personnes et la technologie pour façonner un avenir meilleur à travers des conférences, podcasts et applications innovantes.
        </p>
        <button style={{ marginTop: 36, padding: "14px 40px", background: "transparent", border: `1px solid ${dark}`, fontSize: 14, fontWeight: 300, letterSpacing: 2, cursor: "pointer", color: dark }}>Explorer</button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", gap: 0, borderTop: `1px solid ${wood}`, borderBottom: `1px solid ${wood}`, margin: "0 64px" }}>
        {[{ n: "50+", l: "Conférences" }, { n: "100+", l: "Épisodes podcast" }, { n: "5", l: "Applications" }].map((s, i) => (
          <div key={s.l} style={{ flex: 1, padding: "40px 32px", borderRight: i < 2 ? `1px solid ${wood}` : "none" }}>
            <div style={{ fontSize: 36, fontWeight: 300 }}>{s.n}</div>
            <div style={{ fontSize: 13, color: muted, marginTop: 8, letterSpacing: 1, fontWeight: 300 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40, padding: "80px 64px", maxWidth: 1000 }}>
        {[
          { t: "Keynotes", d: "Des conférences inspirantes sur l'IA, la tech et l'innovation avec des experts mondiaux." },
          { t: "Podcasts", d: "Plus de 100 épisodes explorant les tendances technologiques et les esprits brillants." },
          { t: "Apps", d: "Des applications innovantes qui transforment votre quotidien numérique." },
          { t: "Blog", d: "Articles et analyses approfondis sur les dernières avancées technologiques." },
        ].map((f) => (
          <div key={f.t} style={{ padding: "32px 0", borderTop: `1px solid ${wood}` }}>
            <h3 style={{ fontSize: 20, fontWeight: 400, margin: "0 0 12px" }}>{f.t}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8, color: muted, fontWeight: 300, margin: 0 }}>{f.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 64px", background: wood, margin: "0 64px", borderRadius: 4 }}>
        <h2 style={{ fontSize: 28, fontWeight: 300, margin: "0 0 24px" }}>Restons connectés</h2>
        <div style={{ display: "flex", gap: 20 }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: bg, cursor: "pointer", fontSize: 13, fontWeight: 300, letterSpacing: 1, borderRadius: 2 }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "48px 24px", fontSize: 13, color: muted, fontWeight: 300, letterSpacing: 1 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 15 – Duotone Bold
   ────────────────────────────────────────────── */
const Design15: React.FC = () => {
  const coral = "#FF6B6B";
  const purple = "#4A0E4E";
  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Arial Black', 'Arial', sans-serif" }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", background: purple, color: "#fff" }}>
        <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: 2 }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["KEYNOTES", "PODCASTS", "APPS", "BLOG"].map((t) => (
            <span key={t} style={{ fontSize: 12, cursor: "pointer", fontWeight: 900, letterSpacing: 2 }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: coral, padding: "100px 48px 80px", color: purple }}>
        <h1 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, margin: 0, maxWidth: 800, textTransform: "uppercase" as const }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: 20, maxWidth: 600, lineHeight: 1.6, marginTop: 28, fontWeight: 400, fontFamily: "'Arial', sans-serif" }}>
          Nous connectons les personnes et la technologie pour façonner un avenir meilleur à travers des conférences, podcasts et applications.
        </p>
        <button style={{ marginTop: 32, padding: "18px 48px", background: purple, color: coral, border: "none", fontSize: 16, fontWeight: 900, cursor: "pointer", letterSpacing: 2, textTransform: "uppercase" as const }}>Découvrir</button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", background: purple, color: coral }}>
        {[{ n: "50+", l: "Conférences" }, { n: "100+", l: "Épisodes podcast" }, { n: "5", l: "Applications" }].map((s, i) => (
          <div key={s.l} style={{ flex: 1, padding: "48px 32px", textAlign: "center", borderRight: i < 2 ? `2px solid ${coral}` : "none" }}>
            <div style={{ fontSize: 56, fontWeight: 900 }}>{s.n}</div>
            <div style={{ fontSize: 14, marginTop: 8, fontWeight: 400, fontFamily: "'Arial', sans-serif", textTransform: "uppercase" as const, letterSpacing: 3 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }}>
        {[
          { t: "Keynotes", d: "Des conférences inspirantes sur l'IA, la tech et l'innovation.", bg: coral, fg: purple },
          { t: "Podcasts", d: "Plus de 100 épisodes explorant les tendances technologiques.", bg: purple, fg: coral },
          { t: "Apps", d: "Des applications innovantes qui transforment votre quotidien.", bg: purple, fg: coral },
          { t: "Blog", d: "Articles et analyses approfondis sur les avancées tech.", bg: coral, fg: purple },
        ].map((f) => (
          <div key={f.t} style={{ background: f.bg, color: f.fg, padding: "60px 48px" }}>
            <h3 style={{ fontSize: 32, fontWeight: 900, margin: "0 0 16px", textTransform: "uppercase" as const }}>{f.t}</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, fontFamily: "'Arial', sans-serif", fontWeight: 400, margin: 0 }}>{f.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ background: coral, padding: "80px 48px", textAlign: "center", color: purple }}>
        <h2 style={{ fontSize: 48, fontWeight: 900, textTransform: "uppercase" as const, margin: "0 0 32px" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ background: purple, color: coral, padding: "14px 32px", fontWeight: 900, fontSize: 14, cursor: "pointer", letterSpacing: 2 }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ background: purple, color: coral, textAlign: "center", padding: "28px", fontSize: 14, fontWeight: 900, letterSpacing: 2 }}>
        © 2026 CONNECTED MATE
      </footer>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 16 – Comic Pop
   ────────────────────────────────────────────── */
const Design16: React.FC = () => {
  const yellow = "#FFD700";
  const red = "#FF2D2D";
  const blue = "#1E90FF";
  const outline = "3px solid #000";
  const comicFont: React.CSSProperties = { fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive", fontWeight: 700 };
  const dotBg = (color: string) =>
    `radial-gradient(circle, ${color} 1px, transparent 1px)`;
  return (
    <div style={{ minHeight: "100vh", background: "#FFF8DC", ...comicFont }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", background: yellow, border: outline, borderLeft: "none", borderRight: "none" }}>
        <span style={{ fontSize: 28, color: red, textShadow: "2px 2px 0 #000", WebkitTextStroke: "1px #000" }}>Connected Mate!</span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ background: "#fff", border: outline, padding: "8px 18px", cursor: "pointer", fontSize: 14, transform: "rotate(-1deg)" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "60px 40px", backgroundImage: dotBg("#ddd"), backgroundSize: "8px 8px", borderBottom: outline, textAlign: "center", position: "relative" }}>
        {/* Speech bubble */}
        <div style={{ display: "inline-block", background: "#fff", border: outline, borderRadius: 24, padding: "40px 60px", position: "relative", maxWidth: 700 }}>
          <h1 style={{ fontSize: 48, margin: 0, lineHeight: 1.2, color: "#000" }}>
            Connecter les idées,<br />
            <span style={{ color: red }}>inspirer le futur!</span>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 400, marginTop: 16, lineHeight: 1.6, color: "#333" }}>
            Nous connectons les personnes et la technologie pour façonner un avenir meilleur! POW!
          </p>
          {/* Bubble tail */}
          <div style={{ position: "absolute", bottom: -20, left: "50%", marginLeft: -15, width: 0, height: 0, borderLeft: "15px solid transparent", borderRight: "15px solid transparent", borderTop: `20px solid #000` }} />
          <div style={{ position: "absolute", bottom: -16, left: "50%", marginLeft: -12, width: 0, height: 0, borderLeft: "12px solid transparent", borderRight: "12px solid transparent", borderTop: "17px solid #fff" }} />
        </div>
        <div style={{ marginTop: 40 }}>
          <span style={{ display: "inline-block", background: red, color: "#fff", padding: "16px 40px", border: outline, fontSize: 22, cursor: "pointer", transform: "rotate(-2deg)", boxShadow: "4px 4px 0 #000" }}>BOOM! Découvrir</span>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: 32, padding: "40px 24px", flexWrap: "wrap", background: blue, borderBottom: outline }}>
        {[{ n: "50+", l: "Conférences" }, { n: "100+", l: "Épisodes" }, { n: "5", l: "Apps" }].map((s, i) => (
          <div key={s.l} style={{ background: yellow, border: outline, padding: "24px 40px", textAlign: "center", transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`, boxShadow: "4px 4px 0 #000" }}>
            <div style={{ fontSize: 40 }}>{s.n}</div>
            <div style={{ fontSize: 14, marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, padding: "48px 40px", backgroundImage: dotBg("#eee"), backgroundSize: "6px 6px" }}>
        {[
          { t: "Keynotes", d: "Conférences inspirantes sur l'IA et l'innovation!", c: yellow },
          { t: "Podcasts", d: "100+ épisodes sur les tendances tech!", c: "#98FB98" },
          { t: "Apps", d: "Applications qui transforment votre quotidien!", c: "#FF9999" },
          { t: "Blog", d: "Articles approfondis sur la tech!", c: "#87CEEB" },
        ].map((f, i) => (
          <div key={f.t} style={{ background: f.c, border: outline, padding: 28, transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`, boxShadow: "5px 5px 0 #000" }}>
            <h3 style={{ fontSize: 24, margin: "0 0 8px", textTransform: "uppercase" as const }}>{f.t}</h3>
            <p style={{ fontSize: 14, fontWeight: 400, lineHeight: 1.5, margin: 0 }}>{f.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 24px", background: yellow, borderTop: outline, borderBottom: outline }}>
        <h2 style={{ fontSize: 40, margin: "0 0 24px", textShadow: "2px 2px 0 " + red }}>Restons connectés!</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s, i) => (
            <span key={s} style={{ background: [red, blue, "#FF6347", "#333"][i], color: "#fff", border: outline, padding: "12px 24px", cursor: "pointer", fontSize: 14, boxShadow: "3px 3px 0 #000", transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "24px", fontSize: 14, background: "#FFF8DC" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 17 – Neumorphism
   ────────────────────────────────────────────── */
const Design17: React.FC = () => {
  const bg = "#E0E5EC";
  const raised: React.CSSProperties = {
    background: bg,
    borderRadius: 16,
    boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
    padding: 32,
  };
  const inset: React.CSSProperties = {
    background: bg,
    borderRadius: 12,
    boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff",
    padding: 20,
  };
  const dark = "#3a3f47";
  const accent = "#6C63FF";
  return (
    <div style={{ minHeight: "100vh", background: bg, color: dark, fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ ...raised, padding: "12px 28px", fontSize: 20, fontWeight: 700, color: accent }}>Connected Mate</span>
        <div style={{ display: "flex", gap: 16 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ ...raised, padding: "10px 24px", cursor: "pointer", fontSize: 14, fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px" }}>
        <div style={{ ...raised, display: "inline-block", padding: "60px 80px", maxWidth: 700 }}>
          <h1 style={{ fontSize: 44, fontWeight: 700, margin: 0, lineHeight: 1.2, color: accent }}>Connecter les idées,<br />inspirer le futur</h1>
          <p style={{ fontSize: 17, maxWidth: 500, margin: "20px auto 32px", lineHeight: 1.7, color: "#6b7280" }}>
            Nous connectons les personnes et la technologie pour façonner un avenir meilleur à travers des conférences, podcasts et applications innovantes.
          </p>
          <span style={{ ...raised, display: "inline-block", padding: "14px 44px", cursor: "pointer", fontSize: 16, fontWeight: 600, color: accent }}>Explorer</span>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: 40, padding: "40px 24px", flexWrap: "wrap" }}>
        {[{ n: "50+", l: "Conférences" }, { n: "100+", l: "Épisodes podcast" }, { n: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ ...inset, textAlign: "center", minWidth: 180, padding: "28px 40px" }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: accent }}>{s.n}</div>
            <div style={{ fontSize: 13, color: "#6b7280", marginTop: 8 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 32, padding: "60px 48px", maxWidth: 1100, margin: "0 auto" }}>
        {[
          { t: "Keynotes", d: "Des conférences inspirantes sur l'IA, la tech et l'innovation avec des experts mondiaux." },
          { t: "Podcasts", d: "Plus de 100 épisodes explorant les tendances technologiques et les esprits brillants." },
          { t: "Apps", d: "Des applications innovantes qui transforment votre quotidien numérique." },
          { t: "Blog", d: "Articles et analyses approfondis sur les dernières avancées technologiques." },
        ].map((f) => (
          <div key={f.t} style={{ ...raised }}>
            <div style={{ ...inset, display: "inline-block", padding: "10px 20px", marginBottom: 16, fontWeight: 700, color: accent, fontSize: 15 }}>{f.t}</div>
            <p style={{ lineHeight: 1.7, color: "#6b7280", fontSize: 14, margin: 0 }}>{f.d}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: accent, marginBottom: 28 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ ...raised, padding: "12px 28px", cursor: "pointer", fontSize: 14, fontWeight: 600, color: dark }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "32px 24px", fontSize: 14, color: "#6b7280" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 18 – Vintage Paper
   ────────────────────────────────────────────── */
const Design18: React.FC = () => {
  const paper = "#F5E6D3";
  const sepia = "#5C4033";
  const faded = "#8B7355";
  const stamp: React.CSSProperties = {
    border: `3px double ${sepia}`,
    padding: "12px 24px",
    borderRadius: 4,
    display: "inline-block",
    transform: "rotate(-3deg)",
    opacity: 0.85,
  };
  return (
    <div style={{ minHeight: "100vh", background: paper, color: sepia, fontFamily: "'Courier New', 'Courier', monospace" }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `2px solid ${sepia}` }}>
        <span style={{ fontSize: 22, fontWeight: 700, fontStyle: "italic" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: 28 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ fontSize: 14, cursor: "pointer", textDecoration: "underline", color: faded }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: "80px 24px 60px", position: "relative" }}>
        <div style={{ ...stamp, position: "absolute", top: 40, right: 80, transform: "rotate(12deg)", color: "#B22222", borderColor: "#B22222", fontSize: 12, fontWeight: 700 }}>
          EST. 2024
        </div>
        <div style={{ maxWidth: 650, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: 6, textTransform: "uppercase" as const, marginBottom: 20, color: faded }}>━━━ Édition Spéciale ━━━</div>
          <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.3, margin: 0, fontStyle: "italic" }}>
            Connecter les idées,<br />inspirer le futur
          </h1>
          <div style={{ width: 200, height: 1, background: sepia, margin: "24px auto", opacity: 0.4 }} />
          <p style={{ fontSize: 16, lineHeight: 1.8, color: faded, fontStyle: "italic" }}>
            Nous connectons les personnes et la technologie pour façonner un avenir meilleur à travers des conférences, podcasts et applications innovantes.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: 48, padding: "40px 24px", flexWrap: "wrap" }}>
        {[{ n: "50+", l: "Conférences" }, { n: "100+", l: "Épisodes podcast" }, { n: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ ...stamp, textAlign: "center", transform: `rotate(${Math.random() > 0.5 ? 2 : -2}deg)` }}>
            <div style={{ fontSize: 32, fontWeight: 700 }}>{s.n}</div>
            <div style={{ fontSize: 12, marginTop: 4, color: faded, textTransform: "uppercase" as const, letterSpacing: 2 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 48px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ fontSize: 11, letterSpacing: 6, textTransform: "uppercase" as const, marginBottom: 32, color: faded, textAlign: "center" }}>━━━ Nos Rubriques ━━━</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {[
            { t: "Keynotes", d: "Des conférences inspirantes sur l'IA, la tech et l'innovation avec des experts mondiaux." },
            { t: "Podcasts", d: "Plus de 100 épisodes explorant les tendances technologiques et les esprits brillants." },
            { t: "Apps", d: "Des applications innovantes qui transforment votre quotidien numérique." },
            { t: "Blog", d: "Articles et analyses approfondis sur les dernières avancées technologiques." },
          ].map((f) => (
            <div key={f.t} style={{ borderTop: `1px solid ${sepia}`, paddingTop: 20, opacity: 0.9 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 8px", fontStyle: "italic" }}>{f.t}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.8, color: faded, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, fontStyle: "italic", marginBottom: 24 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ ...stamp, cursor: "pointer", fontSize: 13, transform: "rotate(0deg)" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "32px 24px", borderTop: `2px solid ${sepia}`, fontSize: 13, color: faded, fontStyle: "italic" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 19 – Aurora Borealis
   ────────────────────────────────────────────── */
const Design19: React.FC = () => {
  const sky = "#0B0B2B";
  return (
    <div style={{ minHeight: "100vh", background: sky, color: "#E0E8FF", fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif", position: "relative", overflow: "hidden" }}>
      {/* Aurora effect layers */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.35,
        background: "linear-gradient(180deg, transparent 30%, rgba(0,255,128,0.15) 50%, rgba(100,0,255,0.12) 65%, rgba(0,200,255,0.1) 75%, transparent 90%)",
      }} />
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", opacity: 0.2,
        background: "radial-gradient(ellipse at 30% 20%, rgba(0,255,128,0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(138,43,226,0.2) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(0,191,255,0.15) 0%, transparent 60%)",
        animation: "none",
      }} />

      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{
          position: "fixed", width: i % 3 === 0 ? 2 : 1, height: i % 3 === 0 ? 2 : 1,
          background: "#fff", borderRadius: "50%", opacity: 0.3 + (i % 5) * 0.15,
          top: `${(i * 37) % 100}%`, left: `${(i * 53 + 17) % 100}%`,
          pointerEvents: "none",
        }} />
      ))}

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* NAV */}
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
          <span style={{ fontSize: 22, fontWeight: 600, background: "linear-gradient(90deg, #00FF80, #00BFFF, #8A2BE2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connected Mate</span>
          <div style={{ display: "flex", gap: 32 }}>
            {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
              <span key={t} style={{ fontSize: 14, cursor: "pointer", opacity: 0.7, fontWeight: 300 }}>{t}</span>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <section style={{ textAlign: "center", padding: "120px 24px 80px" }}>
          <h1 style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.2, margin: 0, background: "linear-gradient(135deg, #00FF80, #00BFFF, #8A2BE2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Connecter les idées,<br />inspirer le futur
          </h1>
          <p style={{ fontSize: 19, maxWidth: 580, margin: "28px auto 0", lineHeight: 1.7, opacity: 0.6, fontWeight: 300 }}>
            Nous connectons les personnes et la technologie pour façonner un avenir meilleur à travers des conférences, podcasts et applications.
          </p>
          <button style={{ marginTop: 40, padding: "16px 48px", background: "linear-gradient(135deg, rgba(0,255,128,0.2), rgba(138,43,226,0.2))", border: "1px solid rgba(0,255,128,0.3)", borderRadius: 30, color: "#00FF80", fontSize: 16, cursor: "pointer", fontWeight: 500, backdropFilter: "blur(8px)" }}>Explorer</button>
        </section>

        {/* STATS */}
        <section style={{ display: "flex", justifyContent: "center", gap: 48, padding: "40px 24px", flexWrap: "wrap" }}>
          {[{ n: "50+", l: "Conférences", c: "#00FF80" }, { n: "100+", l: "Épisodes podcast", c: "#00BFFF" }, { n: "5", l: "Applications", c: "#8A2BE2" }].map((s) => (
            <div key={s.l} style={{ textAlign: "center", padding: "24px 40px", background: "rgba(255,255,255,0.03)", borderRadius: 16, border: `1px solid ${s.c}33` }}>
              <div style={{ fontSize: 44, fontWeight: 800, color: s.c }}>{s.n}</div>
              <div style={{ fontSize: 13, marginTop: 8, opacity: 0.6 }}>{s.l}</div>
            </div>
          ))}
        </section>

        {/* FEATURES */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24, padding: "60px 48px", maxWidth: 1100, margin: "0 auto" }}>
          {[
            { t: "Keynotes", d: "Des conférences inspirantes sur l'IA, la tech et l'innovation.", c: "#00FF80" },
            { t: "Podcasts", d: "Plus de 100 épisodes explorant les tendances technologiques.", c: "#00BFFF" },
            { t: "Apps", d: "Applications innovantes qui transforment votre quotidien.", c: "#8A2BE2" },
            { t: "Blog", d: "Articles approfondis sur les avancées technologiques.", c: "#FF69B4" },
          ].map((f) => (
            <div key={f.t} style={{ padding: 28, background: "rgba(255,255,255,0.03)", borderRadius: 16, border: `1px solid ${f.c}22` }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, margin: "0 0 12px", color: f.c }}>{f.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.6, margin: 0, fontWeight: 300 }}>{f.d}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section style={{ textAlign: "center", padding: "80px 24px" }}>
          <h2 style={{ fontSize: 36, fontWeight: 600, background: "linear-gradient(90deg, #00FF80, #00BFFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 28 }}>Restons connectés</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
              <span key={s} style={{ padding: "12px 28px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,255,128,0.15)", borderRadius: 20, cursor: "pointer", fontSize: 14, fontWeight: 400 }}>{s}</span>
            ))}
          </div>
        </section>

        <footer style={{ textAlign: "center", padding: "32px 24px", fontSize: 13, opacity: 0.4, fontWeight: 300 }}>
          © 2026 Connected Mate
        </footer>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────
   DESIGN 20 – Constructivist
   ────────────────────────────────────────────── */
const Design20: React.FC = () => {
  const red = "#CC0000";
  const cream = "#F5F0E6";
  const black = "#1A1A1A";
  const heading: React.CSSProperties = { fontFamily: "'Impact', 'Arial Black', sans-serif", textTransform: "uppercase" as const, letterSpacing: 2 };
  return (
    <div style={{ minHeight: "100vh", background: cream, color: black, fontFamily: "'Arial', sans-serif", overflow: "hidden" }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 48px", background: black, color: cream }}>
        <span style={{ ...heading, fontSize: 20, color: red }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: 24 }}>
          {["KEYNOTES", "PODCASTS", "APPS", "BLOG"].map((t) => (
            <span key={t} style={{ ...heading, fontSize: 12, cursor: "pointer", color: cream }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* HERO – diagonal layout */}
      <section style={{ position: "relative", padding: "80px 48px 100px", overflow: "hidden" }}>
        {/* Diagonal stripe */}
        <div style={{ position: "absolute", top: 0, left: "-10%", width: "60%", height: "100%", background: red, transform: "skewX(-12deg)", zIndex: 0 }} />
        <div style={{ position: "absolute", top: 20, left: "42%", width: 4, height: "80%", background: black, transform: "rotate(12deg)" }} />
        <div style={{ position: "absolute", bottom: 30, right: "10%", width: 200, height: 200, border: `6px solid ${red}`, borderRadius: "50%", opacity: 0.3 }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ ...heading, fontSize: 64, lineHeight: 1.0, margin: 0, color: cream, maxWidth: 500, textShadow: `3px 3px 0 ${black}` }}>
            Connecter<br />les idées,<br />inspirer<br />le futur
          </h1>
          <p style={{ fontSize: 16, maxWidth: 400, lineHeight: 1.6, marginTop: 24, marginLeft: "50%", color: black, fontWeight: 500 }}>
            Nous connectons les personnes et la technologie pour façonner un avenir meilleur à travers des conférences, podcasts et applications.
          </p>
        </div>
      </section>

      {/* STATS - propaganda poster style */}
      <section style={{ display: "flex", background: black, color: cream }}>
        {[{ n: "50+", l: "CONFÉRENCES" }, { n: "100+", l: "ÉPISODES" }, { n: "5", l: "APPLICATIONS" }].map((s, i) => (
          <div key={s.l} style={{ flex: 1, padding: "40px 24px", textAlign: "center", borderRight: i < 2 ? `3px solid ${red}` : "none", position: "relative" }}>
            {/* Diagonal accent */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, background: red }} />
            <div style={{ ...heading, fontSize: 56, color: red }}>{s.n}</div>
            <div style={{ ...heading, fontSize: 12, marginTop: 8, letterSpacing: 4 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 48px", position: "relative" }}>
        {/* Background diagonal lines */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 300, height: "100%", opacity: 0.04, background: `repeating-linear-gradient(45deg, ${black} 0px, ${black} 2px, transparent 2px, transparent 20px)` }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, position: "relative" }}>
          {[
            { t: "KEYNOTES", d: "Des conférences inspirantes sur l'IA, la tech et l'innovation avec des experts." },
            { t: "PODCASTS", d: "Plus de 100 épisodes explorant les tendances technologiques mondiales." },
            { t: "APPS", d: "Applications innovantes qui transforment votre quotidien numérique." },
            { t: "BLOG", d: "Articles et analyses approfondis sur les avancées technologiques." },
          ].map((f, i) => (
            <div key={f.t} style={{ padding: 32, borderBottom: `3px solid ${black}`, borderRight: i % 2 === 0 ? `3px solid ${black}` : "none" }}>
              <h3 style={{ ...heading, fontSize: 24, margin: "0 0 12px", color: red }}>{f.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: red, padding: "60px 48px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: black }} />
        <h2 style={{ ...heading, fontSize: 48, color: cream, margin: "0 0 32px", textShadow: `2px 2px 0 ${black}` }}>RESTONS CONNECTÉS</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {["TWITTER", "LINKEDIN", "YOUTUBE", "GITHUB"].map((s) => (
            <span key={s} style={{ background: black, color: cream, padding: "14px 32px", ...heading, fontSize: 13, cursor: "pointer", border: `2px solid ${cream}` }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ background: black, color: cream, textAlign: "center", padding: "24px", ...heading, fontSize: 13, letterSpacing: 4 }}>
        © 2026 CONNECTED MATE
      </footer>
    </div>
  );
};

/* ──────────────────────────────────────────────
   EXPORTS
   ────────────────────────────────────────────── */
export const designs: HomepageDesign[] = [
  {
    id: 11,
    name: "Glassmorphism",
    category: "Modern",
    description: "Frosted glass cards over gradient background with backdrop-filter blur and semi-transparent whites.",
    component: Design11,
  },
  {
    id: 12,
    name: "Mono Terminal",
    category: "Tech",
    description: "Pure terminal/CLI aesthetic with green-on-black monospace text and blinking cursor.",
    component: Design12,
  },
  {
    id: 13,
    name: "Art Deco",
    category: "Luxury",
    description: "Gold geometric patterns on deep navy with fan and sunburst motifs in elegant 1920s style.",
    component: Design13,
  },
  {
    id: 14,
    name: "Scandinavian",
    category: "Minimalist",
    description: "Warm whites and light wood accents with clean sans-serif typography and cozy minimal layout.",
    component: Design14,
  },
  {
    id: 15,
    name: "Duotone Bold",
    category: "Gradient",
    description: "Two-tone design using coral and deep purple with bold contrast and strong typography.",
    component: Design15,
  },
  {
    id: 16,
    name: "Comic Pop",
    category: "Playful",
    description: "Comic book style with thick outlines, halftone dots, bright colors, and speech bubbles.",
    component: Design16,
  },
  {
    id: 17,
    name: "Neumorphism",
    category: "Modern",
    description: "Soft raised and inset shadows on light gray background creating subtle depth effects.",
    component: Design17,
  },
  {
    id: 18,
    name: "Vintage Paper",
    category: "Retro",
    description: "Aged paper background with typewriter font, sepia tones, and old stamp aesthetics.",
    component: Design18,
  },
  {
    id: 19,
    name: "Aurora Borealis",
    category: "Gradient",
    description: "Dark sky with aurora gradient effects in green, purple, and blue for an ethereal feel.",
    component: Design19,
  },
  {
    id: 20,
    name: "Constructivist",
    category: "Brutalist",
    description: "Russian constructivism inspired with red, black, and cream, diagonal lines, and bold propaganda poster style.",
    component: Design20,
  },
];
