"use client";
import Link from "next/link";
import React from "react";
import type { HomepageDesign } from "./designs-1";

const stats = [["50+", "Conférences"], ["100+", "Épisodes podcast"], ["5", "Applications"]] as const;
const cards = [
  { title: "Keynotes", desc: "Conférences sur l'innovation, l'IA et la transformation digitale.", href: "/keynote" },
  { title: "Podcasts", desc: "Épisodes avec des leaders tech et entrepreneurs.", href: "/podcasts" },
  { title: "Nos Apps", desc: "Outils pour transformer votre quotidien professionnel.", href: "/apps" },
  { title: "Blog", desc: "Articles et analyses sur la tech et l'innovation.", href: "/blog" },
];

/* 21 - Organic Blob */
const Design21: React.FC = () => (
  <div style={{ background: "#F5F0E1", color: "#2D4A2D", fontFamily: "'Georgia', serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "60% 40% 70% 30%", background: "rgba(74,124,89,0.1)" }} />
      <div style={{ position: "absolute", bottom: -50, left: -80, width: 300, height: 300, borderRadius: "40% 60% 30% 70%", background: "rgba(74,124,89,0.08)" }} />
      <div style={{ maxWidth: 650, position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.15, margin: 0 }}>Connecter les <span style={{ color: "#4A7C59" }}>idées</span>,<br />inspirer le <span style={{ color: "#4A7C59" }}>futur</span></h1>
        <p style={{ fontSize: 16, color: "#6B8B6B", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "#4A7C59", color: "#fff", padding: "14px 36px", textDecoration: "none", fontSize: 14, borderRadius: 999 }}>Découvrir</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "1px solid rgba(74,124,89,0.2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 36, fontWeight: 700, color: "#4A7C59" }}>{n}</div><div style={{ fontSize: 13, color: "#6B8B6B", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#2D4A2D", background: "#fff", borderRadius: 24, padding: 28, display: "block", boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "#6B8B6B", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 32, fontWeight: 400, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "#4A7C59", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(74,124,89,0.2)" }}><p style={{ fontSize: 13, color: "#6B8B6B", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 22 - Grid System */
const Design22: React.FC = () => (
  <div style={{ background: "#fff", color: "#111", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px", borderBottom: "2px solid #2563EB" }}>
      <div style={{ maxWidth: 700 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#2563EB", marginBottom: 20, textTransform: "uppercase", letterSpacing: 3 }}>Connected Mate</div>
        <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.08, margin: 0, letterSpacing: "-0.03em" }}>Connecter les idées,<br />inspirer le futur</h1>
        <p style={{ fontSize: 17, color: "#666", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "#2563EB", color: "#fff", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 600, borderRadius: 6 }}>Découvrir</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 40, fontWeight: 800, color: "#2563EB" }}>{n}</div><div style={{ fontSize: 13, color: "#999", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#111", border: "1px solid #E5E7EB", borderRadius: 8, padding: 28, display: "block" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "#666", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#2563EB", marginTop: 12, display: "block" }}>Voir →</span>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px", borderTop: "1px solid #E5E7EB" }}>
      <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: 8, background: "#2563EB", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #E5E7EB" }}><p style={{ fontSize: 13, color: "#999", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 23 - Vaporwave */
const Design23: React.FC = () => (
  <div style={{ background: "linear-gradient(180deg, #1a0533 0%, #2d1b69 40%, #FF71CE 100%)", color: "#fff", fontFamily: "'Arial', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 700 }}>
        <div style={{ fontSize: 24, marginBottom: 16 }}>🌴 ✨ 🌴</div>
        <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, margin: 0, background: "linear-gradient(90deg, #FF71CE, #B967FF, #05FFA1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connecter les idées, inspirer le futur</h1>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies. ✨</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "linear-gradient(90deg, #FF71CE, #B967FF)", color: "#fff", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 700, borderRadius: 8 }}>Découvrir 🌺</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 40, fontWeight: 900, color: "#05FFA1" }}>{n}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c, i) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#fff", background: ["rgba(255,113,206,0.15)", "rgba(185,103,255,0.15)", "rgba(5,255,161,0.15)", "rgba(255,113,206,0.15)"][i], borderRadius: 16, padding: 28, display: "block", border: "1px solid rgba(255,255,255,0.1)" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 32, fontWeight: 900, margin: 0 }}>Restons connectés 🌴</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #FF71CE, #B967FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}><p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", margin: 0 }}>© 2026 Connected Mate SAS ✨</p></footer>
  </div>
);

/* 24 - Dark Forest */
const Design24: React.FC = () => (
  <div style={{ background: "#0D2818", color: "#C8D5B9", fontFamily: "'Georgia', serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 650 }}>
        <div style={{ fontSize: 12, letterSpacing: 5, textTransform: "uppercase", color: "#DAA520", marginBottom: 28 }}>Connected Mate</div>
        <h1 style={{ fontSize: 50, fontWeight: 400, lineHeight: 1.15, margin: 0 }}>Connecter les <span style={{ color: "#DAA520" }}>idées</span>,<br />inspirer le <span style={{ color: "#DAA520" }}>futur</span></h1>
        <p style={{ fontSize: 16, color: "rgba(200,213,185,0.6)", marginTop: 20, lineHeight: 1.8 }}>Connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ border: "1px solid #DAA520", color: "#DAA520", padding: "12px 36px", textDecoration: "none", fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>Explorer</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "1px solid rgba(218,165,32,0.2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 36, fontWeight: 700, color: "#DAA520" }}>{n}</div><div style={{ fontSize: 13, opacity: 0.5, marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#C8D5B9", background: "rgba(58,90,64,0.2)", border: "1px solid rgba(58,90,64,0.3)", padding: 28, display: "block", borderRadius: 8 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, opacity: 0.5, margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 32, fontWeight: 400, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(218,165,32,0.2)", border: "1px solid #DAA520", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "#DAA520" }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(218,165,32,0.15)" }}><p style={{ fontSize: 13, color: "rgba(200,213,185,0.3)", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 25 - Geometric Abstract */
const Design25: React.FC = () => (
  <div style={{ background: "#FFFDF5", color: "#111", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 60, right: 80, width: 120, height: 120, background: "#FF3333", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: 100, left: 60, width: 100, height: 100, background: "#2563EB" }} />
      <div style={{ position: "absolute", top: "40%", left: "15%", width: 0, height: 0, borderLeft: "50px solid transparent", borderRight: "50px solid transparent", borderBottom: "86px solid #FFD700" }} />
      <div style={{ maxWidth: 700, position: "relative", zIndex: 1 }}>
        <h1 style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.05, margin: 0 }}>Connecter les <span style={{ color: "#FF3333" }}>idées</span>,<br />inspirer le <span style={{ color: "#2563EB" }}>futur</span></h1>
        <p style={{ fontSize: 17, color: "#666", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center" }}>
          <Link href="/keynote" style={{ background: "#FF3333", color: "#fff", padding: "14px 32px", textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Keynotes</Link>
          <Link href="/podcasts" style={{ background: "#2563EB", color: "#fff", padding: "14px 32px", textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Podcasts</Link>
        </div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "3px solid #111" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l], i) => (<div key={l}><div style={{ fontSize: 40, fontWeight: 900, color: ["#FF3333", "#2563EB", "#FFD700"][i] }}>{n}</div><div style={{ fontSize: 13, color: "#999", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
      {cards.map((c, i) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#111", border: `3px solid ${["#FF3333", "#2563EB", "#FFD700", "#111"][i]}`, padding: 28, display: "block" }}>
          <h3 style={{ fontSize: 18, fontWeight: 900, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "#666", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 36, fontWeight: 900, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s, i) => (<div key={s} style={{ width: 48, height: 48, background: ["#FF3333", "#2563EB", "#FFD700"][i], color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, borderRadius: i === 0 ? "50%" : i === 1 ? 0 : 8 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "3px solid #111" }}><p style={{ fontSize: 13, color: "#999", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 26 - Soft Gradient */
const Design26: React.FC = () => (
  <div style={{ background: "linear-gradient(135deg, #E8D5F5 0%, #F5D5E0 50%, #F5E0D5 100%)", color: "#4A3060", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 650 }}>
        <h1 style={{ fontSize: 48, fontWeight: 600, lineHeight: 1.15, margin: 0 }}>Connecter les idées,<br />inspirer le futur</h1>
        <p style={{ fontSize: 16, color: "rgba(74,48,96,0.6)", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "rgba(255,255,255,0.6)", backdropFilter: "blur(10px)", color: "#4A3060", padding: "14px 36px", textDecoration: "none", fontSize: 14, fontWeight: 600, borderRadius: 999, border: "1px solid rgba(255,255,255,0.5)" }}>Découvrir</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l} style={{ background: "rgba(255,255,255,0.4)", borderRadius: 20, padding: 24 }}><div style={{ fontSize: 36, fontWeight: 700, color: "#7B4A9E" }}>{n}</div><div style={{ fontSize: 13, color: "rgba(74,48,96,0.5)", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#4A3060", background: "rgba(255,255,255,0.5)", backdropFilter: "blur(10px)", borderRadius: 20, padding: 28, display: "block" }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "rgba(74,48,96,0.5)", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 32, fontWeight: 600, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.5)", color: "#7B4A9E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center" }}><p style={{ fontSize: 13, color: "rgba(74,48,96,0.4)", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 27 - Industrial Steel */
const Design27: React.FC = () => (
  <div style={{ background: "#2A2A2A", color: "#D0D0D0", fontFamily: "'Arial', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", padding: "80px 24px", backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 4px)" }}>
      <div style={{ maxWidth: 800, width: "100%" }}>
        <div style={{ fontSize: 12, letterSpacing: 6, textTransform: "uppercase", color: "#FF6B00", marginBottom: 24 }}>⚠ CONNECTED MATE</div>
        <h1 style={{ fontSize: 60, fontWeight: 900, lineHeight: 1, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>CONNECTER LES <span style={{ color: "#FF6B00" }}>IDÉES</span>,<br />INSPIRER LE FUTUR</h1>
        <p style={{ fontSize: 15, color: "#888", marginTop: 20, lineHeight: 1.7, maxWidth: 500 }}>Connecte les personnes et les technologies pour créer des expériences uniques.</p>
        <div style={{ marginTop: 36 }}><Link href="/keynote" style={{ background: "#FF6B00", color: "#fff", padding: "14px 36px", textDecoration: "none", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>KEYNOTES</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "2px solid #FF6B00" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l} style={{ border: "1px solid #444", padding: 20 }}><div style={{ fontSize: 36, fontWeight: 900, color: "#FF6B00" }}>{n}</div><div style={{ fontSize: 12, color: "#888", marginTop: 4, textTransform: "uppercase", letterSpacing: 1 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#D0D0D0", border: "1px solid #444", padding: 24, display: "block" }}>
          <h3 style={{ fontSize: 16, fontWeight: 900, margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>{c.title}</h3>
          <p style={{ fontSize: 13, color: "#888", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px", borderTop: "1px solid #444" }}>
      <h2 style={{ fontSize: 28, fontWeight: 900, margin: 0, textTransform: "uppercase" }}>RESTONS CONNECTÉS</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, background: "#FF6B00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#fff" }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid #444" }}><p style={{ fontSize: 12, color: "#666", margin: 0, textTransform: "uppercase", letterSpacing: 2 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 28 - Luxury Fashion */
const Design28: React.FC = () => (
  <div style={{ background: "#000", color: "#fff", fontFamily: "'Helvetica Neue', Helvetica, sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 800 }}>
        <h1 style={{ fontSize: 72, fontWeight: 100, lineHeight: 1.05, margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>Connecter<br />les idées</h1>
        <div style={{ width: 60, height: 1, background: "#fff", margin: "32px auto" }} />
        <p style={{ fontSize: 14, fontWeight: 300, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Inspirer le futur</p>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l}><div style={{ fontSize: 48, fontWeight: 100, letterSpacing: "0.05em" }}>{n}</div><div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 8, textTransform: "uppercase", letterSpacing: 3 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 100px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 1, background: "rgba(255,255,255,0.1)" }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#fff", background: "#000", padding: 40, display: "block" }}>
          <h3 style={{ fontSize: 24, fontWeight: 100, margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>{c.title}</h3>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "12px 0 0", lineHeight: 1.6, fontWeight: 300 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "80px 24px" }}>
      <h2 style={{ fontSize: 36, fontWeight: 100, margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>Restons connectés</h2>
      <div style={{ marginTop: 32, display: "flex", gap: 20, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 48, height: 48, border: "1px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "40px 24px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}><p style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", margin: 0, letterSpacing: 3, textTransform: "uppercase" }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 29 - Tropical */
const Design29: React.FC = () => (
  <div style={{ background: "#FFF8F0", color: "#2D3436", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px", background: "linear-gradient(180deg, #E0F7FA 0%, #FFF8F0 100%)" }}>
      <div style={{ maxWidth: 700 }}>
        <h1 style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.08, margin: 0 }}>Connecter les <span style={{ color: "#20B2AA" }}>idées</span>,<br />inspirer le <span style={{ color: "#FF7F50" }}>futur</span></h1>
        <p style={{ fontSize: 17, color: "#636E72", marginTop: 20, lineHeight: 1.7 }}>Connected Mate connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 36, display: "flex", gap: 12, justifyContent: "center" }}>
          <Link href="/keynote" style={{ background: "#20B2AA", color: "#fff", padding: "14px 32px", textDecoration: "none", fontSize: 14, fontWeight: 700, borderRadius: 12 }}>Keynotes</Link>
          <Link href="/podcasts" style={{ background: "#FF7F50", color: "#fff", padding: "14px 32px", textDecoration: "none", fontSize: 14, fontWeight: 700, borderRadius: 12 }}>Podcasts</Link>
        </div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, textAlign: "center" }}>
        {stats.map(([n, l], i) => (<div key={l}><div style={{ fontSize: 40, fontWeight: 800, color: ["#20B2AA", "#FF7F50", "#F4A460"][i] }}>{n}</div><div style={{ fontSize: 13, color: "#636E72", marginTop: 4 }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
      {cards.map((c, i) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#2D3436", background: ["#E0F7FA", "#FFF0E6", "#FFF8E1", "#E8F5E9"][i], borderRadius: 16, padding: 28, display: "block" }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>{c.title}</h3>
          <p style={{ fontSize: 14, color: "#636E72", margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s, i) => (<div key={s} style={{ width: 48, height: 48, borderRadius: "50%", background: ["#20B2AA", "#FF7F50", "#F4A460"][i], color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.06)" }}><p style={{ fontSize: 13, color: "#B2BEC3", margin: 0 }}>© 2026 Connected Mate SAS</p></footer>
  </div>
);

/* 30 - Blueprint */
const Design30: React.FC = () => (
  <div style={{ background: "#0055A4", color: "#fff", fontFamily: "'Courier New', monospace", minHeight: "100vh", backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
    <section style={{ minHeight: "85vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "80px 24px" }}>
      <div style={{ maxWidth: 700 }}>
        <div style={{ fontSize: 12, letterSpacing: 4, textTransform: "uppercase", opacity: 0.6, marginBottom: 24 }}>PLAN // CONNECTED MATE // REV.2026</div>
        <h1 style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.1, margin: 0, borderTop: "2px solid rgba(255,255,255,0.3)", borderBottom: "2px solid rgba(255,255,255,0.3)", padding: "20px 0" }}>Connecter les idées,<br />inspirer le futur</h1>
        <p style={{ fontSize: 14, opacity: 0.6, marginTop: 20, lineHeight: 1.8 }}>// Connecte les personnes et les technologies.</p>
        <div style={{ marginTop: 32 }}><Link href="/keynote" style={{ border: "2px solid #fff", color: "#fff", padding: "12px 32px", textDecoration: "none", fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>EXPLORER</Link></div>
      </div>
    </section>
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", borderTop: "1px dashed rgba(255,255,255,0.2)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "center" }}>
        {stats.map(([n, l]) => (<div key={l} style={{ border: "1px dashed rgba(255,255,255,0.3)", padding: 20 }}><div style={{ fontSize: 36, fontWeight: 700 }}>{n}</div><div style={{ fontSize: 11, opacity: 0.5, marginTop: 4, letterSpacing: 1, textTransform: "uppercase" }}>{l}</div></div>))}
      </div>
    </div>
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px 80px", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
      {cards.map((c) => (
        <Link key={c.title} href={c.href} style={{ textDecoration: "none", color: "#fff", border: "1px dashed rgba(255,255,255,0.3)", padding: 24, display: "block" }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>{c.title}</h3>
          <p style={{ fontSize: 12, opacity: 0.5, margin: "8px 0 0", lineHeight: 1.5 }}>{c.desc}</p>
        </Link>
      ))}
    </div>
    <div style={{ textAlign: "center", padding: "60px 24px" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, textTransform: "uppercase", letterSpacing: 2 }}>Restons connectés</h2>
      <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
        {["YT", "🎙", "♪"].map((s) => (<div key={s} style={{ width: 44, height: 44, border: "1px dashed rgba(255,255,255,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{s}</div>))}
      </div>
    </div>
    <footer style={{ padding: "32px 24px", textAlign: "center", borderTop: "1px dashed rgba(255,255,255,0.2)" }}><p style={{ fontSize: 11, opacity: 0.4, margin: 0, letterSpacing: 2 }}>© 2026 CONNECTED MATE SAS</p></footer>
  </div>
);

export const designs: HomepageDesign[] = [
  { id: 21, name: "Organic Blob", category: "Organic", description: "Formes organiques, vert terre, beige chaud", component: Design21 },
  { id: 22, name: "Grid System", category: "Corporate", description: "Grille stricte, bleu (#2563EB), typographie systématique", component: Design22 },
  { id: 23, name: "Vaporwave", category: "Retro", description: "Rose/violet/cyan, nostalgie internet 90s", component: Design23 },
  { id: 24, name: "Dark Forest", category: "Dark", description: "Vert forêt profond, mousse, feuille d'or", component: Design24 },
  { id: 25, name: "Geometric Abstract", category: "Modern", description: "Formes géométriques, couleurs primaires, Bauhaus", component: Design25 },
  { id: 26, name: "Soft Gradient", category: "Gradient", description: "Dégradés pastels lavande→rose→pêche, rêveur", component: Design26 },
  { id: 27, name: "Industrial Steel", category: "Brutalist", description: "Gris métallique, stencil, accents orange", component: Design27 },
  { id: 28, name: "Luxury Fashion", category: "Luxury", description: "Tout noir, texte blanc dramatique, haute couture", component: Design28 },
  { id: 29, name: "Tropical", category: "Organic", description: "Turquoise vif, corail, sable, vibes île", component: Design29 },
  { id: 30, name: "Blueprint", category: "Tech", description: "Fond bleu technique, grille blanche, dessin technique", component: Design30 },
];
