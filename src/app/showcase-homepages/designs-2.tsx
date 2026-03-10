"use client";
import Link from "next/link";
import React from "react";
import type { HomepageDesign } from "./designs-1";

/* ────────────────────────── SHARED ────────────────────────── */
const stats = [["50+", "Conférences"], ["100+", "Épisodes podcast"], ["5", "Applications"]] as const;
const cards = [
  { title: "Keynotes", desc: "Conférences sur l'innovation, l'IA et la transformation digitale.", href: "/keynote" },
  { title: "Podcasts", desc: "Épisodes avec des leaders tech et entrepreneurs.", href: "/podcasts" },
  { title: "Nos Apps", desc: "Outils pour transformer votre quotidien professionnel.", href: "/apps" },
  { title: "Blog", desc: "Articles et analyses sur la tech et l'innovation.", href: "/blog" },
];

/* 11 - Glassmorphism */
const Design11: React.FC = () => (
  <div style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 700, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", borderRadius: 24, padding: "60px 40px", border: "1px solid rgba(255,255,255,0.2)" }}>
        <h1 style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, margin: 0 }}>Connecter les idées,<br />inspirer le futur</h1>
        <p style={{ fontSize: 17, opacity: 0.8, marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies pour créer des expériences uniques.</p>
        <div style={{ marginTop: 36 }}>
          <Link href="/keynote" style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(10px)", color: "#fff", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 600, borderRadius: 12, border: "1px solid rgba(255,255,255,0.3)" }}>Découvrir</Link>
        </div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "center" }}>
        {stats.map(([n, l]) => (
          <div key={l} style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.15)" }}>
            <div style={{ fontSize: 36, fontWeight: 700 }}>{n}</div><div style={{ fontSize: 13, opacity: 0.7, marginTop: 4 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#fff", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)", borderRadius: 16, padding: 28, border: "1px solid rgba(255,255,255,0.12)", display: "block" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, opacity: 0.65, margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}><p style={{ fontSize: 13, opacity: 0.5, margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 12 - Mono Terminal */
const Design12: React.FC = () => (
  <div style={{ background: "#0a0a0a", color: "#00FF00", fontFamily: "'Courier New', monospace", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "flex-start", padding: "80px 24px" }}>
      <div style={{ maxWidth: 800, width: "100%" }}>
        <div style={{ fontSize: 13, opacity: 0.5, marginBottom: 16 }}>user@connectedmate:~$ cat welcome.txt</div>
        <h1 style={{ fontSize: 42, fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
          {"> "}Connecter les idées,<br />{"> "}inspirer le futur
        </h1>
        <p style={{ fontSize: 14, color: "#00CC00", marginTop: 20, lineHeight: 1.8, borderLeft: "2px solid #00FF00", paddingLeft: 16 }}>
          Connected Mate connecte les personnes et les technologies pour créer des expériences uniques.
        </p>
        <div style={{ marginTop: 32 }}>
          <Link href="/keynote" style={{ color: "#0a0a0a", background: "#00FF00", padding: "10px 24px", textDecoration: "none", fontSize: 13, fontWeight: 700 }}>[ENTER] Keynotes</Link>
        </div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px", borderTop: "1px solid #003300" }}>
      <div style={{ fontSize: 13, opacity: 0.5, marginBottom: 16 }}>$ stats --show</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l} style={{ border: "1px solid #003300", padding: 20 }}><div style={{ fontSize: 32, fontWeight: 700 }}>{n}</div><div style={{ fontSize: 12, color: "#00CC00", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#00FF00", border: "1px solid #003300", padding: 24, display: "block" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>$ ./{c.title.toLowerCase()}</h3>
          <p style={{ fontSize: 13, color: "#00CC00", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px", borderTop: "1px solid #003300" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>$ connect --social</h2>
      <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 44, height: 44, border: "1px solid #00FF00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "24px", textAlign: "center", borderTop: "1px solid #003300" }}><p style={{ fontSize: 12, color: "#006600", margin: 0 }}>© 2026 Connected Mate SAS // EOF</p></footer>
  </div>
);

/* 13 - Art Deco */
const Design13: React.FC = () => (
  <div style={{ background: "#0D1B2A", color: "#D4AF37", fontFamily: "'Georgia', serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 700 }}>
        <div style={{ fontSize: 14, letterSpacing: 8, textTransform: "uppercase", marginBottom: 32 }}>◆ Connected Mate ◆</div>
        <h1 style={{ fontSize: 56, fontWeight: 400, lineHeight: 1.1, margin: 0, borderTop: "2px solid #D4AF37", borderBottom: "2px solid #D4AF37", padding: "24px 0" }}>
          Connecter les idées,<br />inspirer le futur
        </h1>
        <p style={{ fontSize: 16, color: "rgba(212,175,55,0.6)", marginTop: 24, lineHeight: 1.8 }}>Connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ border: "2px solid #D4AF37", color: "#D4AF37", padding: "14px 40px", textDecoration: "none", fontSize: 12, letterSpacing: 4, textTransform: "uppercase" }}>Explorer</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "1px solid rgba(212,175,55,0.2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 40, fontWeight: 700 }}>{n}</div><div style={{ fontSize: 13, opacity: 0.6, marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.3)", padding: 28, display: "block" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, opacity: 0.5, margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 36, fontWeight: 400, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, border: "2px solid #D4AF37", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.2)" }}><p style={{ fontSize: 13, opacity: 0.4, margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 14 - Scandinavian */
const Design14: React.FC = () => (
  <div style={{ background: "#FEFCF3", color: "#2C2417", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 600 }}>
        <h1 style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.15, margin: 0, letterSpacing: "-0.02em" }}>Connecter les idées,<br />inspirer le futur</h1>
        <p style={{ fontSize: 16, color: "#8B7355", marginTop: 20, lineHeight: 1.8 }}>Connected Mate connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "#DEB887", color: "#2C2417", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 600, borderRadius: 8 }}>Découvrir</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "1px solid rgba(222,184,135,0.3)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 36, fontWeight: 700, color: "#DEB887" }}>{n}</div><div style={{ fontSize: 13, color: "#8B7355", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#2C2417", background: "#fff", borderRadius: 12, padding: 28, display: "block", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "#8B7355", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 32, fontWeight: 600, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "#DEB887", color: "#2C2417", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(222,184,135,0.3)" }}><p style={{ fontSize: 13, color: "#8B7355", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 15 - Duotone Bold */
const Design15: React.FC = () => (
  <div style={{ background: "#4A0E4E", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px", background: "linear-gradient(135deg, #4A0E4E 0%, #FF6B6B 100%)" }}>
      <div style={{ maxWidth: 700 }}>
        <h1 style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.05, margin: 0 }}>Connecter les idées,<br />inspirer le futur</h1>
        <p style={{ fontSize: 18, opacity: 0.85, marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "#fff", color: "#4A0E4E", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 700, borderRadius: 999 }}>Découvrir</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 40, fontWeight: 700, color: "#FF6B6B" }}>{n}</div><div style={{ fontSize: 13, opacity: 0.6, marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#fff", background: "rgba(255,107,107,0.15)", borderRadius: 16, padding: 28, display: "block", border: "1px solid rgba(255,107,107,0.2)" }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, opacity: 0.6, margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "#FF6B6B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}><p style={{ fontSize: 13, opacity: 0.4, margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 16 - Comic Pop */
const Design16: React.FC = () => (
  <div style={{ background: "#FFF8DC", color: "#111", fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px", backgroundImage: "radial-gradient(circle, #ddd 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
      <div style={{ maxWidth: 700, background: "#fff", border: "4px solid #000", borderRadius: 24, padding: "48px 40px", boxShadow: "8px 8px 0 #000" }}>
        <div style={{ fontSize: 14, background: "#FF4444", color: "#fff", display: "inline-block", padding: "4px 16px", borderRadius: 999, fontWeight: 700, marginBottom: 20 }}>BANG!</div>
        <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.1, margin: 0 }}>Connecter les <span style={{ color: "#FF4444" }}>idées</span>,<br />inspirer le <span style={{ color: "#4444FF" }}>futur</span>!</h1>
        <p style={{ fontSize: 16, color: "#555", marginTop: 16, lineHeight: 1.6 }}>Connected Mate connecte les personnes et les technologies!</p>
        <div style={{ marginTop: 32 }}><Link href="/keynote" style={{ background: "#FF4444", color: "#fff", padding: "14px 32px", textDecoration: "none", fontSize: 16, fontWeight: 900, borderRadius: 12, border: "3px solid #000" }}>POW! →</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l} style={{ background: "#fff", border: "3px solid #000", borderRadius: 16, padding: 20, boxShadow: "4px 4px 0 #000" }}><div style={{ fontSize: 36, fontWeight: 900, color: "#FF4444" }}>{n}</div><div style={{ fontSize: 13, marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c, i) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#111", background: ["#FFD700", "#87CEEB", "#98FB98", "#FFB6C1"][i], border: "3px solid #000", borderRadius: 16, padding: 24, display: "block", boxShadow: "4px 4px 0 #000" }}>
          <h3 style={{ fontSize: 20, fontWeight: 900, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "#333", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 32, fontWeight: 900, margin: 0 }}>Restons connectés!</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "#FF4444", color: "#fff", border: "3px solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "3px solid #000" }}><p style={{ fontSize: 13, color: "#666", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 17 - Neumorphism */
const Design17: React.FC = () => {
  const neu = { background: "#E0E5EC", boxShadow: "8px 8px 16px #b8bcc2, -8px -8px 16px #ffffff", borderRadius: 16 };
  return (
    <div style={{ background: "#E0E5EC", color: "#444", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, ...neu, padding: "60px 40px" }}>
          <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, margin: 0, color: "#333" }}>Connecter les idées,<br />inspirer le futur</h1>
          <p style={{ fontSize: 16, color: "#777", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
          <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ ...neu, color: "#E8600A", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 600, display: "inline-block" }}>Découvrir</Link></div>
        </div>
      </section>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
          {stats.map(([n, l]) => (<div key={l} style={{ ...neu, padding: 24 }}><div style={{ fontSize: 36, fontWeight: 700, color: "#E8600A" }}>{n}</div><div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{l}</div></div>))}
        </div>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
        {cards.map((c) => (
          <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#444", ...neu, padding: 28, display: "block" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0, color: "#333" }}>{c.title}</h3>
            <p style={{ fontSize: 14, color: "#888", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0, color: "#333" }}>Restons connectés</h2>
        <div style={{ marginTop: 24, display: "flex", gap: 16, justifyContent: "center" }}>
          {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, ...neu, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#E8600A" }}>{s}</div>))}
        </div>
      </div>
      <footer style={{ padding: "32px 24px", textAlign: "center" }}><p style={{ fontSize: 13, color: "#999", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
    </div>
  );
};

/* 18 - Vintage Paper */
const Design18: React.FC = () => (
  <div style={{ background: "#F5E6D3", color: "#3E2723", fontFamily: "'Courier New', monospace", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 600 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, textTransform: "uppercase", color: "#8D6E63", marginBottom: 32, borderBottom: "2px double #8D6E63", paddingBottom: 12 }}>Est. 2026 · Connected Mate</div>
        <h1 style={{ fontSize: 44, fontWeight: 400, lineHeight: 1.2, margin: 0, fontStyle: "italic" }}>Connecter les idées, inspirer le futur</h1>
        <p style={{ fontSize: 14, color: "#795548", marginTop: 20, lineHeight: 1.8 }}>Connecte les personnes et les technologies pour créer des expériences uniques.</p>
        <div style={{ marginTop: 36, borderTop: "2px double #8D6E63", paddingTop: 24 }}>
          <Link href="/keynote" style={{ border: "2px solid #3E2723", color: "#3E2723", padding: "12px 32px", textDecoration: "none", fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>Explorer</Link>
        </div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "2px double #8D6E63" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 36, fontWeight: 700 }}>{n}</div><div style={{ fontSize: 12, color: "#795548", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#3E2723", border: "1px solid #8D6E63", padding: 24, display: "block" }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 13, color: "#795548", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 400, margin: 0, fontStyle: "italic" }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 44, height: 44, border: "2px solid #3E2723", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "2px double #8D6E63" }}><p style={{ fontSize: 12, color: "#8D6E63", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 19 - Aurora Borealis */
const Design19: React.FC = () => (
  <div style={{ background: "#0B0B2B", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh", position: "relative" }}>
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "100vh", background: "radial-gradient(ellipse at 30% 20%, rgba(0,255,136,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(138,43,226,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(0,191,255,0.06) 0%, transparent 50%)", pointerEvents: "none", zIndex: 0 }} />
    <div style={{ position: "relative", zIndex: 1 }}>
      <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700 }}>
          <h1 style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, margin: 0 }}>Connecter les <span style={{ background: "linear-gradient(135deg, #00FF88, #8A2BE2, #00BFFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>idées</span>,<br />inspirer le <span style={{ background: "linear-gradient(135deg, #8A2BE2, #00BFFF, #00FF88)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>futur</span></h1>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
          <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "linear-gradient(135deg, #00FF88, #8A2BE2)", color: "#fff", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 600, borderRadius: 12 }}>Découvrir</Link></div>
        </div>
      </section>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
          {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 36, fontWeight: 700, background: "linear-gradient(135deg, #00FF88, #8A2BE2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{n}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4 }}>{l}</div></div>))}
        </div>
      </div>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
        {cards.map((c) => (
          <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#fff", background: "rgba(255,255,255,0.03)", borderRadius: 16, padding: 28, display: "block", border: "1px solid rgba(255,255,255,0.06)" }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{c.title}</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
          </Link>
        ))}
      </div>
      <div style={{ textAlign: "center", padding: "60px 24px" }}>
        <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>Restons connectés</h2>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
          {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, rgba(0,255,136,0.2), rgba(138,43,226,0.2))", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s}</div>))}
        </div>
      </div>
      <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.06)" }}><p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
    </div>
  </div>
);

/* 20 - Constructivist */
const Design20: React.FC = () => (
  <div style={{ background: "#F5E6C8", color: "#1a1a1a", fontFamily: "'Impact', 'Arial Black', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", padding: "80px 24px", background: "linear-gradient(135deg, #CC0000 0%, #CC0000 50%, #1a1a1a 50%, #1a1a1a 100%)" }}>
      <div style={{ maxWidth: 800, width: "100%", color: "#fff" }}>
        <h1 style={{ fontSize: 72, fontWeight: 900, lineHeight: 0.95, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          CONNECTER<br />LES IDÉES,<br />INSPIRER<br />LE FUTUR
        </h1>
        <div style={{ marginTop: 32, transform: "rotate(-3deg)" }}>
          <Link href="/keynote" style={{ background: "#F5E6C8", color: "#CC0000", padding: "16px 40px", textDecoration: "none", fontSize: 16, fontWeight: 900, textTransform: "uppercase", letterSpacing: 3 }}>KEYNOTES!</Link>
        </div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "4px solid #CC0000" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l} style={{ background: "#CC0000", color: "#fff", padding: 20 }}><div style={{ fontSize: 40, fontWeight: 900 }}>{n}</div><div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: 2, marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#1a1a1a", border: "3px solid #1a1a1a", padding: 24, display: "block", fontFamily: "Arial, sans-serif" }}>
          <h3 style={{ fontSize: 20, fontWeight: 900, margin: 0, textTransform: "uppercase" }}>{c.title}</h3>
          <p style={{ fontSize: 13, color: "#555", margin: "8px 0 0", lineHeight: 1.5, fontWeight: 400 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px", background: "#1a1a1a", color: "#fff" }}>
      <h2 style={{ fontSize: 36, fontWeight: 900, margin: 0, textTransform: "uppercase" }}>RESTONS CONNECTÉS</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, background: "#CC0000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", background: "#CC0000", color: "#fff" }}><p style={{ fontSize: 13, margin: 0, textTransform: "uppercase", letterSpacing: 2 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

export const designs: HomepageDesign[] = [
  { id: 11, name: "Glassmorphism", category: "Modern", description: "Cartes en verre givré sur dégradé, backdrop-filter blur", component: Design11 },
  { id: 12, name: "Mono Terminal", category: "Tech", description: "Esthétique terminal CLI, vert sur noir, monospace", component: Design12 },
  { id: 13, name: "Art Deco", category: "Luxury", description: "Or géométrique, bleu marine profond, motifs 1920s", component: Design13 },
  { id: 14, name: "Scandinavian", category: "Minimalist", description: "Blancs chauds, accents bois clair, minimal cosy", component: Design14 },
  { id: 15, name: "Duotone Bold", category: "Gradient", description: "Corail et violet profond, contraste audacieux", component: Design15 },
  { id: 16, name: "Comic Pop", category: "Playful", description: "Style BD, contours épais, bulles, couleurs vives", component: Design16 },
  { id: 17, name: "Neumorphism", category: "Modern", description: "Ombres douces relief/creux sur gris clair", component: Design17 },
  { id: 18, name: "Vintage Paper", category: "Retro", description: "Papier vieilli, typo machine à écrire, tons sépia", component: Design18 },
  { id: 19, name: "Aurora Borealis", category: "Gradient", description: "Ciel sombre, aurores boréales vert/violet/bleu", component: Design19 },
  { id: 20, name: "Constructivist", category: "Brutalist", description: "Constructivisme russe, rouge/noir/crème, diagonales", component: Design20 },
];
