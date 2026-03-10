"use client";
import Link from "next/link";
import React from "react";

export interface HomepageDesign {
  id: number;
  name: string;
  category: string;
  description: string;
  component: React.FC;
}

/* =========================================================
   DESIGN 21 — Organic Blob
   ========================================================= */
const OrganicBlob: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F0E8", fontFamily: "'Georgia', serif", color: "#2D2D2D", overflow: "hidden", position: "relative" }}>
      {/* Blob background shapes */}
      <div style={{ position: "absolute", top: "-120px", right: "-80px", width: "500px", height: "500px", borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%", background: "rgba(74,124,89,0.15)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-100px", left: "-60px", width: "400px", height: "400px", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", background: "rgba(74,124,89,0.1)", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "40%", left: "50%", width: "300px", height: "300px", borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%", background: "rgba(194,166,128,0.12)", zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px 60px" }}>
        <div style={{ fontSize: "24px", fontWeight: 700, color: "#4A7C59" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "30px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", color: "#4A7C59", fontSize: "15px", letterSpacing: "0.5px" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 20px 60px" }}>
        <h1 style={{ fontSize: "56px", lineHeight: 1.2, color: "#4A7C59", maxWidth: "700px", margin: "0 auto 24px" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "20px", color: "#6B6B5E", maxWidth: "550px", margin: "0 auto 40px", lineHeight: 1.6 }}>
          Nous connectons les personnes et la technologie pour créer un avenir plus innovant et humain.
        </p>
        <div style={{ display: "inline-block", padding: "16px 40px", background: "#4A7C59", color: "#F5F0E8", borderRadius: "50px", fontSize: "16px", cursor: "pointer", fontWeight: 600 }}>
          Découvrir
        </div>
      </section>

      {/* Stats blobs */}
      <section style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", gap: "50px", padding: "60px 20px", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s) => (
          <div key={s.label} style={{ width: "200px", height: "200px", borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%", background: "#4A7C59", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#F5F0E8" }}>
            <div style={{ fontSize: "42px", fontWeight: 700 }}>{s.num}</div>
            <div style={{ fontSize: "14px", marginTop: "6px", opacity: 0.85 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ position: "relative", zIndex: 1, padding: "60px 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "30px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Conférences inspirantes sur l'innovation et l'IA avec les meilleurs experts mondiaux.", icon: "🎤" },
          { title: "Podcasts", desc: "Des conversations profondes sur la tech, l'avenir et les idées qui changent le monde.", icon: "🎧" },
          { title: "Apps", desc: "Des applications innovantes qui connectent les communautés tech du monde entier.", icon: "📱" },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques et l'innovation.", icon: "✍️" },
        ].map((f) => (
          <div key={f.title} style={{ background: "rgba(255,255,255,0.7)", borderRadius: "30px 10px 30px 10px", padding: "36px 28px", backdropFilter: "blur(4px)" }}>
            <div style={{ fontSize: "36px", marginBottom: "14px" }}>{f.icon}</div>
            <h3 style={{ fontSize: "22px", color: "#4A7C59", marginBottom: "10px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6B6B5E" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "36px", color: "#4A7C59", marginBottom: "16px" }}>Restons connectés</h2>
        <p style={{ color: "#6B6B5E", marginBottom: "24px" }}>Suivez-nous sur les réseaux</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 22px", border: "2px solid #4A7C59", borderRadius: "50px", color: "#4A7C59", fontSize: "14px", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "30px", color: "#9E9E86", fontSize: "14px", borderTop: "1px solid rgba(74,124,89,0.2)" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 22 — Grid System
   ========================================================= */
const GridSystem: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", fontFamily: "'Helvetica Neue', Arial, sans-serif", color: "#1A1A1A" }}>
      {/* Grid overlay hint */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "repeating-linear-gradient(90deg, rgba(37,99,235,0.03) 0px, rgba(37,99,235,0.03) 1px, transparent 1px, transparent calc(100% / 12))",
        backgroundSize: "100% 100%",
      }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", padding: "24px 40px", borderBottom: "2px solid #2563EB", alignItems: "center" }}>
        <div style={{ gridColumn: "1 / 4", fontSize: "18px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "3px", color: "#2563EB" }}>
          Connected Mate
        </div>
        <div style={{ gridColumn: "7 / 13", display: "flex", justifyContent: "flex-end", gap: "32px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px", cursor: "pointer", color: "#1A1A1A", fontWeight: 500 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", padding: "80px 40px 60px", alignItems: "end" }}>
        <div style={{ gridColumn: "1 / 8" }}>
          <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "4px", color: "#2563EB", marginBottom: "16px", fontWeight: 600 }}>
            Innovation · Tech · AI
          </div>
          <h1 style={{ fontSize: "64px", lineHeight: 1.05, fontWeight: 800, margin: "0 0 24px" }}>
            Connecter les idées,<br />inspirer le futur
          </h1>
        </div>
        <div style={{ gridColumn: "9 / 13" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#666", marginBottom: "28px" }}>
            Nous connectons les personnes et la technologie pour bâtir ensemble un futur innovant et inspirant.
          </p>
          <div style={{ display: "inline-block", padding: "14px 32px", background: "#2563EB", color: "#FFF", fontSize: "13px", textTransform: "uppercase", letterSpacing: "2px", cursor: "pointer", fontWeight: 600 }}>
            Explorer
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", padding: "40px", background: "#2563EB", color: "#FFF" }}>
        {[
          { num: "50+", label: "Conférences", col: "1 / 5" },
          { num: "100+", label: "Épisodes podcast", col: "5 / 9" },
          { num: "5", label: "Applications", col: "9 / 13" },
        ].map((s) => (
          <div key={s.label} style={{ gridColumn: s.col, textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 800 }}>{s.num}</div>
            <div style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "3px", marginTop: "8px", opacity: 0.8 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", padding: "60px 40px" }}>
        {[
          { title: "Keynotes", desc: "Conférences inspirantes sur l'innovation et l'IA avec les meilleurs experts.", col: "1 / 4" },
          { title: "Podcasts", desc: "Des conversations profondes sur la tech et les idées qui transforment le monde.", col: "4 / 7" },
          { title: "Apps", desc: "Des applications innovantes connectant les communautés tech globales.", col: "7 / 10" },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques et l'innovation.", col: "10 / 13" },
        ].map((f) => (
          <div key={f.title} style={{ gridColumn: f.col, borderTop: "3px solid #2563EB", paddingTop: "24px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#666" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", padding: "60px 40px", borderTop: "2px solid #E5E5E5" }}>
        <div style={{ gridColumn: "1 / 6" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, margin: 0 }}>Restons connectés</h2>
        </div>
        <div style={{ gridColumn: "7 / 13", display: "flex", gap: "16px", alignItems: "center", justifyContent: "flex-end" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", border: "2px solid #2563EB", color: "#2563EB", fontSize: "12px", textTransform: "uppercase", letterSpacing: "2px", cursor: "pointer", fontWeight: 600 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "20px", padding: "24px 40px", borderTop: "2px solid #2563EB" }}>
        <div style={{ gridColumn: "1 / 13", fontSize: "12px", color: "#999", textTransform: "uppercase", letterSpacing: "2px" }}>
          © 2026 Connected Mate
        </div>
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 23 — Vaporwave
   ========================================================= */
const Vaporwave: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #1a0033 0%, #2d1b69 30%, #ff71ce 70%, #ffb86c 100%)", fontFamily: "'Courier New', monospace", color: "#FFF", overflow: "hidden", position: "relative" }}>
      {/* Sun */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: "300px", height: "300px", borderRadius: "50%", background: "linear-gradient(180deg, #FF71CE, #FFB86C)", opacity: 0.3, zIndex: 0 }} />
      {/* Grid floor */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
        background: "linear-gradient(180deg, transparent 0%, rgba(5,255,161,0.1) 100%)",
        backgroundImage: `
          linear-gradient(rgba(5,255,161,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(5,255,161,0.3) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        transform: "perspective(400px) rotateX(45deg)",
        transformOrigin: "bottom",
        zIndex: 0,
      }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px 50px" }}>
        <div style={{ fontSize: "22px", fontWeight: 700, color: "#05FFA1", textShadow: "0 0 10px #05FFA1" }}>
          🌴 Connected Mate 🌴
        </div>
        <div style={{ display: "flex", gap: "28px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", color: "#FF71CE", fontSize: "14px", textShadow: "0 0 8px #FF71CE" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "100px 20px 60px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "8px", color: "#B967FF", textTransform: "uppercase", marginBottom: "20px", textShadow: "0 0 10px #B967FF" }}>
          ✦ A E S T H E T I C ✦
        </div>
        <h1 style={{ fontSize: "52px", lineHeight: 1.2, background: "linear-gradient(90deg, #FF71CE, #B967FF, #05FFA1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", maxWidth: "700px", margin: "0 auto 24px", fontWeight: 700 }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", color: "#FF71CE", maxWidth: "500px", margin: "0 auto 36px", lineHeight: 1.6, opacity: 0.9 }}>
          Nous connectons les personnes et la technologie pour un avenir plus radieux et créatif.
        </p>
        <div style={{ display: "inline-block", padding: "16px 40px", background: "linear-gradient(90deg, #FF71CE, #B967FF)", color: "#FFF", borderRadius: "4px", fontSize: "16px", cursor: "pointer", fontWeight: 700, boxShadow: "0 0 30px rgba(185,103,255,0.5)" }}>
          E N T R E R ⟶
        </div>
      </section>

      {/* Stats */}
      <section style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center", gap: "60px", padding: "60px 20px", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "54px", fontWeight: 700, color: "#05FFA1", textShadow: "0 0 20px rgba(5,255,161,0.6)" }}>{s.num}</div>
            <div style={{ fontSize: "13px", color: "#B967FF", letterSpacing: "3px", textTransform: "uppercase", marginTop: "6px" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ position: "relative", zIndex: 1, padding: "40px 50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "🎤 Keynotes", desc: "Conférences inspirantes sur l'IA et l'innovation avec les top experts." },
          { title: "🎧 Podcasts", desc: "Conversations profondes sur la tech et les idées du futur." },
          { title: "📱 Apps", desc: "Applications connectant les communautés tech mondiales." },
          { title: "✍️ Blog", desc: "Articles sur les tendances technologiques et l'innovation." },
        ].map((f) => (
          <div key={f.title} style={{ background: "rgba(26,0,51,0.6)", border: "1px solid #B967FF", padding: "30px 24px", backdropFilter: "blur(8px)", boxShadow: "0 0 15px rgba(185,103,255,0.2)" }}>
            <h3 style={{ fontSize: "20px", color: "#FF71CE", marginBottom: "10px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.7)" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "80px 20px 40px" }}>
        <h2 style={{ fontSize: "32px", color: "#05FFA1", marginBottom: "16px", textShadow: "0 0 15px rgba(5,255,161,0.5)" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid #FF71CE", color: "#FF71CE", fontSize: "13px", cursor: "pointer", letterSpacing: "2px" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "30px", color: "#B967FF", fontSize: "13px", letterSpacing: "2px" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 24 — Dark Forest
   ========================================================= */
const DarkForest: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0D2818", fontFamily: "'Garamond', 'Times New Roman', serif", color: "#E8E0D0" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 60px", borderBottom: "1px solid rgba(218,165,32,0.2)" }}>
        <div style={{ fontSize: "22px", fontWeight: 400, color: "#DAA520", letterSpacing: "4px", textTransform: "uppercase" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", color: "#DAA520", fontSize: "14px", letterSpacing: "2px", textTransform: "uppercase" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "120px 20px 80px", background: "linear-gradient(180deg, #0D2818 0%, #1A3A2A 50%, #0D2818 100%)" }}>
        <div style={{ width: "60px", height: "1px", background: "#DAA520", margin: "0 auto 30px" }} />
        <h1 style={{ fontSize: "54px", lineHeight: 1.3, fontWeight: 400, color: "#DAA520", maxWidth: "650px", margin: "0 auto 28px", fontStyle: "italic" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", color: "#8FAF80", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.8 }}>
          Nous connectons les personnes et la technologie pour créer un avenir où nature et innovation coexistent harmonieusement.
        </p>
        <div style={{ display: "inline-block", padding: "14px 44px", border: "1px solid #DAA520", color: "#DAA520", fontSize: "13px", cursor: "pointer", letterSpacing: "3px", textTransform: "uppercase" }}>
          Explorer
        </div>
        <div style={{ width: "60px", height: "1px", background: "#DAA520", margin: "40px auto 0" }} />
      </section>

      {/* Stats */}
      <section style={{ display: "flex", justifyContent: "center", gap: "80px", padding: "60px 20px", background: "#3A5A40", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 300, color: "#DAA520" }}>{s.num}</div>
            <div style={{ fontSize: "12px", color: "#C5D5B0", letterSpacing: "3px", textTransform: "uppercase", marginTop: "8px" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ padding: "80px 60px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Conférences inspirantes sur l'innovation et l'IA.", icon: "🌿" },
          { title: "Podcasts", desc: "Conversations profondes sur la tech et le futur.", icon: "🍃" },
          { title: "Apps", desc: "Applications connectant les communautés tech.", icon: "🌱" },
          { title: "Blog", desc: "Articles sur les tendances et l'innovation.", icon: "🌾" },
        ].map((f) => (
          <div key={f.title} style={{ background: "rgba(58,90,64,0.3)", padding: "40px 30px", borderLeft: "2px solid #DAA520" }}>
            <div style={{ fontSize: "28px", marginBottom: "16px" }}>{f.icon}</div>
            <h3 style={{ fontSize: "22px", color: "#DAA520", marginBottom: "12px", fontWeight: 400, fontStyle: "italic" }}>{f.title}</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#8FAF80" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 20px", background: "linear-gradient(180deg, #0D2818, #1A3A2A)" }}>
        <h2 style={{ fontSize: "34px", color: "#DAA520", marginBottom: "20px", fontWeight: 400, fontStyle: "italic" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid rgba(218,165,32,0.4)", color: "#DAA520", fontSize: "13px", cursor: "pointer", letterSpacing: "2px" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "30px", color: "#3A5A40", fontSize: "13px", letterSpacing: "2px" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 25 — Geometric Abstract
   ========================================================= */
const GeometricAbstract: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#FFFDF5", fontFamily: "'Helvetica Neue', Arial, sans-serif", color: "#1A1A1A", overflow: "hidden", position: "relative" }}>
      {/* Abstract shapes */}
      <div style={{ position: "absolute", top: "60px", right: "100px", width: "200px", height: "200px", background: "#DC2626", zIndex: 0, transform: "rotate(15deg)" }} />
      <div style={{ position: "absolute", top: "200px", right: "250px", width: "150px", height: "150px", borderRadius: "50%", background: "#2563EB", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "120px", right: "60px", width: "0", height: "0", borderLeft: "80px solid transparent", borderRight: "80px solid transparent", borderBottom: "140px solid #FACC15", zIndex: 0 }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 50px", borderBottom: "4px solid #1A1A1A" }}>
        <div style={{ fontSize: "20px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "2px" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "28px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", fontSize: "14px", fontWeight: 700, textTransform: "uppercase" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 50px 60px", maxWidth: "700px" }}>
        <div style={{ display: "inline-block", width: "40px", height: "40px", background: "#DC2626", marginBottom: "24px" }} />
        <h1 style={{ fontSize: "62px", lineHeight: 1.1, fontWeight: 900, margin: "0 0 24px", textTransform: "uppercase" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", color: "#555", lineHeight: 1.7, marginBottom: "36px" }}>
          Nous connectons les personnes et la technologie pour construire un futur audacieux et géométriquement parfait.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ padding: "16px 36px", background: "#2563EB", color: "#FFF", fontSize: "14px", cursor: "pointer", fontWeight: 700, textTransform: "uppercase" }}>Découvrir</div>
          <div style={{ padding: "16px 36px", background: "#FACC15", color: "#1A1A1A", fontSize: "14px", cursor: "pointer", fontWeight: 700, textTransform: "uppercase" }}>En savoir +</div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ position: "relative", zIndex: 1, display: "flex", padding: "0 50px 60px", gap: "40px", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences", bg: "#DC2626", color: "#FFF" },
          { num: "100+", label: "Épisodes podcast", bg: "#2563EB", color: "#FFF" },
          { num: "5", label: "Applications", bg: "#FACC15", color: "#1A1A1A" },
        ].map((s) => (
          <div key={s.label} style={{ padding: "30px 40px", background: s.bg, color: s.color }}>
            <div style={{ fontSize: "42px", fontWeight: 900 }}>{s.num}</div>
            <div style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ position: "relative", zIndex: 1, padding: "60px 50px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4px", maxWidth: "1000px", background: "#1A1A1A" }}>
        {[
          { title: "Keynotes", desc: "Conférences inspirantes sur l'innovation et l'IA avec les meilleurs experts mondiaux." },
          { title: "Podcasts", desc: "Des conversations profondes sur la tech et les idées qui changent le monde." },
          { title: "Apps", desc: "Des applications innovantes qui connectent les communautés tech du monde entier." },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques et l'innovation." },
        ].map((f, i) => (
          <div key={f.title} style={{ background: "#FFFDF5", padding: "40px 30px" }}>
            <div style={{ display: "inline-block", width: "30px", height: "30px", background: i % 2 === 0 ? "#DC2626" : "#2563EB", marginBottom: "16px", borderRadius: i % 3 === 0 ? "50%" : "0" }} />
            <h3 style={{ fontSize: "24px", fontWeight: 900, textTransform: "uppercase", marginBottom: "10px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#666" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 1, padding: "80px 50px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "4px solid #1A1A1A", flexWrap: "wrap", gap: "20px" }}>
        <h2 style={{ fontSize: "40px", fontWeight: 900, textTransform: "uppercase", margin: 0 }}>Restons connectés</h2>
        <div style={{ display: "flex", gap: "12px" }}>
          {[
            { name: "Twitter", bg: "#DC2626" },
            { name: "LinkedIn", bg: "#2563EB" },
            { name: "YouTube", bg: "#FACC15" },
            { name: "Instagram", bg: "#1A1A1A" },
          ].map((s) => (
            <span key={s.name} style={{ padding: "12px 24px", background: s.bg, color: s.bg === "#FACC15" ? "#1A1A1A" : "#FFF", fontSize: "13px", cursor: "pointer", fontWeight: 700, textTransform: "uppercase" }}>{s.name}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "28px", borderTop: "4px solid #1A1A1A", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 26 — Soft Gradient
   ========================================================= */
const SoftGradient: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #E8D5F5 0%, #F5D5E0 35%, #FDE8D5 65%, #F5E6D5 100%)", fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif", color: "#4A3D5C" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 60px" }}>
        <div style={{ fontSize: "22px", fontWeight: 600, color: "#7C5C9C" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "28px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", color: "#9C7CB5", fontSize: "15px", fontWeight: 500 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "100px 20px 60px" }}>
        <h1 style={{ fontSize: "52px", lineHeight: 1.3, fontWeight: 300, color: "#5C3D7A", maxWidth: "650px", margin: "0 auto 24px" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", color: "#8C6DA8", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.7, fontWeight: 300 }}>
          Nous connectons les personnes et la technologie pour un avenir doux, créatif et inspirant.
        </p>
        <div style={{ display: "inline-block", padding: "16px 44px", background: "linear-gradient(135deg, #B28CD5, #D4A0B9)", color: "#FFF", borderRadius: "50px", fontSize: "16px", cursor: "pointer", fontWeight: 500, boxShadow: "0 8px 30px rgba(178,140,213,0.3)" }}>
          Commencer
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "60px 20px", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s) => (
          <div key={s.label} style={{ background: "rgba(255,255,255,0.5)", borderRadius: "24px", padding: "30px 40px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.04)", backdropFilter: "blur(10px)" }}>
            <div style={{ fontSize: "40px", fontWeight: 300, color: "#7C5C9C" }}>{s.num}</div>
            <div style={{ fontSize: "13px", color: "#A88BC0", marginTop: "6px", fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ padding: "40px 60px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Conférences inspirantes sur l'innovation et l'IA avec les meilleurs experts.", grad: "linear-gradient(135deg, rgba(178,140,213,0.15), rgba(212,160,185,0.15))" },
          { title: "Podcasts", desc: "Des conversations profondes sur la tech et les idées du futur.", grad: "linear-gradient(135deg, rgba(212,160,185,0.15), rgba(253,190,160,0.15))" },
          { title: "Apps", desc: "Des applications innovantes connectant les communautés tech.", grad: "linear-gradient(135deg, rgba(253,190,160,0.15), rgba(245,230,213,0.15))" },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques.", grad: "linear-gradient(135deg, rgba(245,230,213,0.15), rgba(178,140,213,0.15))" },
        ].map((f) => (
          <div key={f.title} style={{ background: f.grad, borderRadius: "20px", padding: "36px 28px", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.4)" }}>
            <h3 style={{ fontSize: "22px", color: "#5C3D7A", marginBottom: "10px", fontWeight: 500 }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#8C6DA8" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h2 style={{ fontSize: "34px", color: "#5C3D7A", marginBottom: "20px", fontWeight: 300 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 28px", background: "rgba(255,255,255,0.5)", borderRadius: "50px", color: "#7C5C9C", fontSize: "14px", cursor: "pointer", fontWeight: 500, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "30px", color: "#A88BC0", fontSize: "14px" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 27 — Industrial Steel
   ========================================================= */
const IndustrialSteel: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#2A2A2A", fontFamily: "'Impact', 'Arial Black', sans-serif", color: "#D4D4D4", position: "relative" }}>
      {/* Rivet texture via repeated bg */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none", opacity: 0.05,
        backgroundImage: "radial-gradient(circle, #FFF 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 50px", background: "linear-gradient(180deg, #3A3A3A, #2A2A2A)", borderBottom: "3px solid #FF6B00" }}>
        <div style={{ fontSize: "24px", fontWeight: 900, color: "#FF6B00", letterSpacing: "4px", textTransform: "uppercase" }}>
          ⚙ Connected Mate
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", color: "#AAA", fontSize: "13px", textTransform: "uppercase", letterSpacing: "3px", fontFamily: "'Courier New', monospace", fontWeight: 700 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 50px 60px", background: "linear-gradient(135deg, #333 0%, #2A2A2A 100%)" }}>
        <div style={{ display: "inline-block", padding: "6px 16px", background: "#FF6B00", color: "#000", fontSize: "11px", fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "24px" }}>
          ⚠ ATTENTION
        </div>
        <h1 style={{ fontSize: "58px", lineHeight: 1.1, fontWeight: 900, textTransform: "uppercase", margin: "0 0 24px", color: "#E5E5E5", letterSpacing: "2px" }}>
          Connecter les idées,<br />inspirer le futur
        </h1>
        <p style={{ fontSize: "16px", color: "#888", maxWidth: "500px", lineHeight: 1.7, fontFamily: "'Courier New', monospace", fontWeight: 400 }}>
          Nous connectons les personnes et la technologie. Construction en cours. Zone industrielle d{"'"}innovation.
        </p>
        <div style={{ marginTop: "36px", display: "inline-block", padding: "16px 40px", border: "3px solid #FF6B00", color: "#FF6B00", fontSize: "14px", cursor: "pointer", fontWeight: 900, textTransform: "uppercase", letterSpacing: "3px" }}>
          Entrer ▶
        </div>
      </section>

      {/* Stats */}
      <section style={{ position: "relative", zIndex: 1, display: "flex", background: "#1E1E1E", borderTop: "3px solid #444", borderBottom: "3px solid #444", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s, i) => (
          <div key={s.label} style={{ flex: 1, textAlign: "center", padding: "40px 20px", borderRight: i < 2 ? "2px solid #444" : "none", minWidth: "200px" }}>
            <div style={{ fontSize: "52px", fontWeight: 900, color: "#FF6B00" }}>{s.num}</div>
            <div style={{ fontSize: "11px", color: "#888", letterSpacing: "4px", textTransform: "uppercase", marginTop: "8px", fontFamily: "'Courier New', monospace" }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ position: "relative", zIndex: 1, padding: "60px 50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "KEYNOTES", desc: "Conférences sur l'innovation et l'IA. Heavy-duty knowledge.", num: "01" },
          { title: "PODCASTS", desc: "Conversations profondes sur la tech et le futur.", num: "02" },
          { title: "APPS", desc: "Applications connectant les communautés tech.", num: "03" },
          { title: "BLOG", desc: "Articles sur les tendances technologiques.", num: "04" },
        ].map((f) => (
          <div key={f.title} style={{ background: "#333", padding: "30px 24px", borderLeft: "4px solid #FF6B00", position: "relative" }}>
            <div style={{ position: "absolute", top: "10px", right: "14px", fontSize: "40px", fontWeight: 900, color: "rgba(255,107,0,0.1)" }}>{f.num}</div>
            <h3 style={{ fontSize: "18px", color: "#FF6B00", marginBottom: "10px", letterSpacing: "3px" }}>{f.title}</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#999", fontFamily: "'Courier New', monospace", fontWeight: 400 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "60px 20px", background: "#1E1E1E", borderTop: "3px solid #444" }}>
        <h2 style={{ fontSize: "32px", color: "#E5E5E5", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "4px" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "12px 24px", background: "#333", border: "2px solid #555", color: "#AAA", fontSize: "12px", cursor: "pointer", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Courier New', monospace" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", color: "#666", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "'Courier New', monospace", borderTop: "2px solid #FF6B00" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 28 — Luxury Fashion
   ========================================================= */
const LuxuryFashion: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#000", fontFamily: "'Helvetica Neue', 'Arial', sans-serif", color: "#FFF" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px 60px" }}>
        <div style={{ fontSize: "14px", fontWeight: 100, letterSpacing: "8px", textTransform: "uppercase" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "36px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", fontSize: "12px", fontWeight: 100, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero — full bleed */}
      <section style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0 40px", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "1px", height: "60%", background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
        <div style={{ fontSize: "11px", letterSpacing: "10px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "40px", fontWeight: 100 }}>
          Innovation · Technology · AI
        </div>
        <h1 style={{ fontSize: "72px", lineHeight: 1.1, fontWeight: 100, margin: "0 0 30px", maxWidth: "800px", letterSpacing: "2px" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.5)", maxWidth: "400px", lineHeight: 1.8, fontWeight: 100, letterSpacing: "1px" }}>
          Nous connectons les personnes et la technologie pour créer un avenir élégant et visionnaire.
        </p>
        <div style={{ marginTop: "50px", padding: "16px 60px", border: "1px solid rgba(255,255,255,0.3)", color: "#FFF", fontSize: "11px", cursor: "pointer", fontWeight: 100, letterSpacing: "6px", textTransform: "uppercase" }}>
          Découvrir
        </div>
      </section>

      {/* Stats — wide spread */}
      <section style={{ display: "flex", justifyContent: "space-around", padding: "80px 60px", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", flexWrap: "wrap", gap: "20px" }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "60px", fontWeight: 100, letterSpacing: "4px" }}>{s.num}</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", letterSpacing: "5px", textTransform: "uppercase", marginTop: "12px", fontWeight: 100 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards — editorial layout */}
      <section style={{ padding: "80px 60px" }}>
        {[
          { title: "Keynotes", desc: "Conférences inspirantes sur l'innovation et l'intelligence artificielle avec les meilleurs experts mondiaux." },
          { title: "Podcasts", desc: "Des conversations profondes sur la technologie et les idées qui transforment le monde." },
          { title: "Apps", desc: "Des applications innovantes qui connectent les communautés tech du monde entier." },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques et l'innovation de demain." },
        ].map((f, i) => (
          <div key={f.title} style={{ display: "flex", alignItems: "baseline", padding: "40px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", gap: "60px" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", fontWeight: 100, letterSpacing: "3px", minWidth: "30px" }}>0{i + 1}</div>
            <h3 style={{ fontSize: "36px", fontWeight: 100, letterSpacing: "4px", textTransform: "uppercase", minWidth: "200px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "rgba(255,255,255,0.5)", fontWeight: 100, maxWidth: "400px" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "100px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ fontSize: "40px", fontWeight: 100, letterSpacing: "6px", textTransform: "uppercase", marginBottom: "30px" }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", cursor: "pointer", letterSpacing: "4px", textTransform: "uppercase", fontWeight: 100 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "30px", fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "5px", textTransform: "uppercase", fontWeight: 100 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 29 — Tropical
   ========================================================= */
const Tropical: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#FFF8F0", fontFamily: "'Trebuchet MS', 'Verdana', sans-serif", color: "#2D3748" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 50px", background: "#20B2AA" }}>
        <div style={{ fontSize: "24px", fontWeight: 700, color: "#FFF" }}>🌺 Connected Mate</div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", color: "rgba(255,255,255,0.9)", fontSize: "15px", fontWeight: 600 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #20B2AA 0%, #48D1CC 50%, #FF7F50 100%)", padding: "100px 50px 80px", textAlign: "center", position: "relative" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🌴🌊🌺</div>
        <h1 style={{ fontSize: "52px", lineHeight: 1.2, fontWeight: 700, color: "#FFF", maxWidth: "650px", margin: "0 auto 24px", textShadow: "0 2px 10px rgba(0,0,0,0.15)" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.9)", maxWidth: "500px", margin: "0 auto 36px", lineHeight: 1.6 }}>
          Nous connectons les personnes et la technologie avec l{"'"}énergie et la créativité des tropiques!
        </p>
        <div style={{ display: "inline-block", padding: "16px 44px", background: "#FFF", color: "#FF7F50", borderRadius: "50px", fontSize: "16px", cursor: "pointer", fontWeight: 700, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
          Plonger 🤿
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "50px 20px", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences", bg: "#20B2AA" },
          { num: "100+", label: "Épisodes podcast", bg: "#FF7F50" },
          { num: "5", label: "Applications", bg: "#F4A460" },
        ].map((s) => (
          <div key={s.label} style={{ background: s.bg, borderRadius: "20px", padding: "30px 40px", textAlign: "center", color: "#FFF", minWidth: "180px", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: "42px", fontWeight: 700 }}>{s.num}</div>
            <div style={{ fontSize: "14px", marginTop: "4px", opacity: 0.9 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ padding: "40px 50px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "🎤 Keynotes", desc: "Conférences inspirantes sur l'innovation et l'IA avec les meilleurs experts.", border: "#20B2AA" },
          { title: "🎧 Podcasts", desc: "Des conversations profondes sur la tech et les idées qui transforment.", border: "#FF7F50" },
          { title: "📱 Apps", desc: "Des applications connectant les communautés tech du monde entier.", border: "#F4A460" },
          { title: "✍️ Blog", desc: "Articles et analyses sur les tendances technologiques.", border: "#20B2AA" },
        ].map((f) => (
          <div key={f.title} style={{ background: "#FFF", borderRadius: "16px", padding: "32px 24px", borderTop: `4px solid ${f.border}`, boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}>
            <h3 style={{ fontSize: "20px", color: "#2D3748", marginBottom: "10px", fontWeight: 700 }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#718096" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 20px", background: "linear-gradient(135deg, #FF7F50, #F4A460)" }}>
        <h2 style={{ fontSize: "34px", color: "#FFF", marginBottom: "20px", fontWeight: 700 }}>Restons connectés 🤙</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "14px", flexWrap: "wrap" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 28px", background: "rgba(255,255,255,0.25)", borderRadius: "50px", color: "#FFF", fontSize: "14px", cursor: "pointer", fontWeight: 600, backdropFilter: "blur(4px)" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "30px", background: "#20B2AA", color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   DESIGN 30 — Blueprint
   ========================================================= */
const Blueprint: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0066CC", fontFamily: "'Courier New', monospace", color: "#FFF", position: "relative" }}>
      {/* Grid lines */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }} />
      {/* Thicker grid */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
        `,
        backgroundSize: "200px 200px",
      }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 50px", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
        <div style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "2px" }}>
          ┌─ CONNECTED MATE ─┐
        </div>
        <div style={{ display: "flex", gap: "28px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ cursor: "pointer", fontSize: "13px", color: "rgba(255,255,255,0.7)", letterSpacing: "1px" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: "relative", zIndex: 1, padding: "100px 50px 60px", maxWidth: "800px" }}>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "8px", letterSpacing: "2px" }}>
          ├── PROJET: HOMEPAGE v3.0
        </div>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "24px", letterSpacing: "2px" }}>
          ├── DATE: 2026-03-10
        </div>
        <h1 style={{ fontSize: "48px", lineHeight: 1.2, fontWeight: 700, margin: "0 0 24px", fontFamily: "'Courier New', monospace" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", maxWidth: "550px", lineHeight: 1.8 }}>
          /* Nous connectons les personnes et la technologie pour construire un avenir techniquement précis et innovant. */
        </p>
        <div style={{ marginTop: "36px", display: "inline-block", padding: "14px 36px", border: "1px solid rgba(255,255,255,0.5)", color: "#FFF", fontSize: "13px", cursor: "pointer", letterSpacing: "2px" }}>
          [EXPLORER] →
        </div>

        {/* Dimension line decorations */}
        <div style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>
          <div style={{ width: "100px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
          <span>800px</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.3)" }} />
        </div>
      </section>

      {/* Stats */}
      <section style={{ position: "relative", zIndex: 1, display: "flex", gap: "0", borderTop: "1px solid rgba(255,255,255,0.2)", borderBottom: "1px solid rgba(255,255,255,0.2)", flexWrap: "wrap" }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s, i) => (
          <div key={s.label} style={{ flex: 1, textAlign: "center", padding: "40px 20px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.2)" : "none", minWidth: "200px" }}>
            <div style={{ fontSize: "44px", fontWeight: 700 }}>{s.num}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "2px", marginTop: "8px" }}>// {s.label}</div>
          </div>
        ))}
      </section>

      {/* Feature cards */}
      <section style={{ position: "relative", zIndex: 1, padding: "60px 50px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Conférences inspirantes sur l'innovation et l'IA.", ref: "REF-KN-001" },
          { title: "Podcasts", desc: "Conversations profondes sur la tech et le futur.", ref: "REF-PD-002" },
          { title: "Apps", desc: "Applications connectant les communautés tech.", ref: "REF-AP-003" },
          { title: "Blog", desc: "Articles sur les tendances technologiques.", ref: "REF-BL-004" },
        ].map((f) => (
          <div key={f.title} style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "28px 22px", position: "relative" }}>
            <div style={{ position: "absolute", top: "8px", right: "10px", fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "1px" }}>{f.ref}</div>
            <h3 style={{ fontSize: "18px", marginBottom: "10px", fontWeight: 700 }}>┌ {f.title}</h3>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}>│ {f.desc}</p>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", marginTop: "12px" }}>└──────</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "60px 20px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px", fontWeight: 700 }}>[ Restons connectés ]</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 22px", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", fontSize: "12px", cursor: "pointer", letterSpacing: "1px" }}>&lt;{s}/&gt;</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "24px", color: "rgba(255,255,255,0.4)", fontSize: "12px", borderTop: "1px solid rgba(255,255,255,0.2)", letterSpacing: "2px" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* =========================================================
   EXPORTS
   ========================================================= */
export const designs: HomepageDesign[] = [
  {
    id: 21,
    name: "Organic Blob",
    category: "Organic",
    description: "Flowing organic shapes, earth green (#4A7C59), warm beige, blob-shaped sections",
    component: OrganicBlob,
  },
  {
    id: 22,
    name: "Grid System",
    category: "Corporate",
    description: "Strict 12-column grid visible, blue (#2563EB) accents, systematic typography",
    component: GridSystem,
  },
  {
    id: 23,
    name: "Vaporwave",
    category: "Retro",
    description: "Pink (#FF71CE), purple (#B967FF), cyan (#05FFA1), 90s internet nostalgia, palm trees emoji, sunset gradients",
    component: Vaporwave,
  },
  {
    id: 24,
    name: "Dark Forest",
    category: "Dark",
    description: "Deep forest green (#0D2818), moss (#3A5A40), gold leaf accents (#DAA520), nature-tech fusion",
    component: DarkForest,
  },
  {
    id: 25,
    name: "Geometric Abstract",
    category: "Modern",
    description: "Bold geometric shapes as design elements, primary colors (red/blue/yellow), Bauhaus-inspired",
    component: GeometricAbstract,
  },
  {
    id: 26,
    name: "Soft Gradient",
    category: "Gradient",
    description: "Very soft pastel gradients, lavender to rose to peach, gentle rounded cards, dreamy feel",
    component: SoftGradient,
  },
  {
    id: 27,
    name: "Industrial Steel",
    category: "Brutalist",
    description: "Metallic grays, riveted steel plate texture, stencil-like fonts, orange (#FF6B00) warning accents",
    component: IndustrialSteel,
  },
  {
    id: 28,
    name: "Luxury Fashion",
    category: "Luxury",
    description: "All black (#000), dramatic white text, ultra-thin fonts, full-bleed sections, high fashion editorial",
    component: LuxuryFashion,
  },
  {
    id: 29,
    name: "Tropical",
    category: "Organic",
    description: "Bright teal (#20B2AA), coral (#FF7F50), sandy (#F4A460), island vibes, fun and energetic",
    component: Tropical,
  },
  {
    id: 30,
    name: "Blueprint",
    category: "Tech",
    description: "Blueprint blue (#0066CC) background, white grid lines, technical drawing aesthetic, white text",
    component: Blueprint,
  },
];
