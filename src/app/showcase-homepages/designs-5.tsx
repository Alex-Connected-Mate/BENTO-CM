"use client";
import Link from "next/link";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ───────────────────────────────────────────────
   Design 41 – Royal Purple (Luxury)
   ─────────────────────────────────────────────── */
const RoyalPurple: React.FC = () => {
  const purple = "#2D0A4E";
  const gold = "#FFD700";
  const lightPurple = "#4A1A6B";
  const cream = "#FFF8E7";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Georgia', 'Times New Roman', serif", background: purple, color: cream, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 60px", borderBottom: `1px solid ${gold}33` }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: gold, letterSpacing: 2, textTransform: "uppercase" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: 36 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ color: cream, fontSize: 14, letterSpacing: 3, textTransform: "uppercase", cursor: "pointer", borderBottom: `1px solid transparent`, transition: "all 0.3s" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "120px 40px 80px", position: "relative" }}>
        <div style={{ position: "absolute", top: 40, left: "50%", transform: "translateX(-50%)", width: 120, height: 1, background: gold }} />
        <h1 style={{ fontSize: 64, fontWeight: 400, color: cream, lineHeight: 1.2, maxWidth: 800, margin: "0 auto 24px", letterSpacing: 1 }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: 20, color: `${cream}BB`, maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.8, fontStyle: "italic" }}>
          Là où la technologie rencontre l&apos;humanité, nous créons des ponts entre les esprits innovants et les idées de demain.
        </p>
        <div style={{ display: "inline-block", padding: "16px 48px", border: `2px solid ${gold}`, color: gold, fontSize: 14, letterSpacing: 4, textTransform: "uppercase", cursor: "pointer" }}>
          Découvrir
        </div>
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", width: 120, height: 1, background: gold }} />
      </section>

      {/* Stats */}
      <section style={{ display: "flex", justifyContent: "center", gap: 80, padding: "60px 40px", borderTop: `1px solid ${gold}22`, borderBottom: `1px solid ${gold}22` }}>
        {[
          { num: "50+", label: "Conférences" },
          { num: "100+", label: "Épisodes podcast" },
          { num: "5", label: "Applications" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 56, color: gold, fontWeight: 300, marginBottom: 8 }}>{s.num}</div>
            <div style={{ fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: `${cream}99` }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section style={{ padding: "100px 60px" }}>
        <h2 style={{ textAlign: "center", fontSize: 36, color: gold, fontWeight: 400, marginBottom: 60, letterSpacing: 2 }}>Nos Univers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, maxWidth: 1200, margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des conférences magistrales sur l'innovation et la technologie qui transforment les perspectives." },
            { title: "Podcasts", desc: "Des conversations profondes avec les esprits les plus brillants du monde tech." },
            { title: "Apps", desc: "Des applications élégantes conçues pour enrichir votre quotidien numérique." },
            { title: "Blog", desc: "Des réflexions et analyses sur les tendances qui façonnent notre avenir." },
          ].map((f) => (
            <div key={f.title} style={{ background: lightPurple, padding: 40, borderTop: `3px solid ${gold}`, textAlign: "center" }}>
              <h3 style={{ color: gold, fontSize: 22, fontWeight: 400, marginBottom: 16, letterSpacing: 1 }}>{f.title}</h3>
              <p style={{ color: `${cream}AA`, fontSize: 15, lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 40px", background: lightPurple }}>
        <h2 style={{ fontSize: 40, color: gold, fontWeight: 400, marginBottom: 20 }}>Restons connectés</h2>
        <p style={{ color: `${cream}BB`, fontSize: 16, marginBottom: 36, fontStyle: "italic" }}>Rejoignez notre cercle d&apos;excellence</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "12px 28px", border: `1px solid ${gold}66`, color: gold, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px 20px", borderTop: `1px solid ${gold}33`, fontSize: 13, color: `${cream}66`, letterSpacing: 2 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 42 – Sunset Desert (Gradient)
   ─────────────────────────────────────────────── */
const SunsetDesert: React.FC = () => {
  const sand = "#EDC9AF";
  const darkText = "#2E1A0E";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#1A0A1E" }}>
      {/* Hero with gradient */}
      <section style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF4E7A 35%, #C850C0 65%, #6C3BAA 100%)", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 60px" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>Connected Mate</div>
          <div style={{ display: "flex", gap: 32 }}>
            {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
              <span key={item} style={{ color: "#ffffffDD", fontSize: 15, cursor: "pointer", fontWeight: 500 }}>{item}</span>
            ))}
          </div>
        </nav>

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: "0 40px", textAlign: "center" }}>
          <h1 style={{ fontSize: 72, fontWeight: 800, color: "#fff", lineHeight: 1.1, maxWidth: 850, margin: "0 0 24px", textShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
            Connecter les idées, inspirer le futur
          </h1>
          <p style={{ fontSize: 22, color: "#ffffffCC", maxWidth: 600, margin: "0 0 40px", lineHeight: 1.7 }}>
            Nous connectons les personnes et la technologie pour façonner le monde de demain à travers des expériences uniques.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <span style={{ padding: "16px 40px", background: "#fff", color: darkText, borderRadius: 50, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>Explorer</span>
            <span style={{ padding: "16px 40px", background: "transparent", color: "#fff", borderRadius: 50, fontWeight: 600, fontSize: 16, cursor: "pointer", border: "2px solid #ffffffAA" }}>En savoir plus</span>
          </div>
        </div>

        {/* Wave bottom */}
        <div style={{ height: 80, background: "linear-gradient(to bottom, transparent, #FFF5ED)" }} />
      </section>

      {/* Stats on sand bg */}
      <section style={{ background: "#FFF5ED", padding: "80px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 60, maxWidth: 900, margin: "0 auto" }}>
          {[
            { num: "50+", label: "Conférences", color: "#FF6B35" },
            { num: "100+", label: "Épisodes podcast", color: "#C850C0" },
            { num: "5", label: "Applications", color: "#6C3BAA" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", flex: 1, padding: "40px 20px", background: "#fff", borderRadius: 20, boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: s.color, marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontSize: 15, color: "#666", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#FFF5ED", padding: "40px 60px 100px" }}>
        <h2 style={{ textAlign: "center", fontSize: 42, color: darkText, fontWeight: 700, marginBottom: 60 }}>Ce que nous faisons</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, maxWidth: 1000, margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Plus de 50 conférences inspirantes sur l'IA, l'innovation et les technologies émergentes.", gradient: "linear-gradient(135deg, #FF6B35, #FF4E7A)" },
            { title: "Podcasts", desc: "100+ épisodes de conversations captivantes avec les leaders de la tech.", gradient: "linear-gradient(135deg, #FF4E7A, #C850C0)" },
            { title: "Apps", desc: "5 applications innovantes pour connecter et inspirer au quotidien.", gradient: "linear-gradient(135deg, #C850C0, #6C3BAA)" },
            { title: "Blog", desc: "Articles et analyses approfondies sur les tendances technologiques.", gradient: "linear-gradient(135deg, #6C3BAA, #4A2C8A)" },
          ].map((f) => (
            <div key={f.title} style={{ background: f.gradient, padding: 48, borderRadius: 24, color: "#fff" }}>
              <h3 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>{f.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "#ffffffCC" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #FF6B35, #C850C0, #6C3BAA)", padding: "100px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 48, color: "#fff", fontWeight: 800, marginBottom: 16 }}>Restons connectés</h2>
        <p style={{ color: "#ffffffBB", fontSize: 18, marginBottom: 40 }}>Suivez-nous sur les réseaux sociaux</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "14px 32px", background: "#ffffff33", color: "#fff", borderRadius: 50, fontSize: 15, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(10px)" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#1A0A1E", textAlign: "center", padding: "40px 20px", color: sand, fontSize: 14 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 43 – Pixel Art (Retro)
   ─────────────────────────────────────────────── */
const PixelArt: React.FC = () => {
  const pixelBorder = (color: string, size = 4) =>
    `${size}px solid ${color}`;
  const neon = "#39FF14";
  const pink = "#FF6EC7";
  const cyan = "#00FFFF";
  const darkBg = "#0D0D0D";
  const cardBg = "#1A1A2E";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Courier New', monospace", background: darkBg, color: "#fff", minHeight: "100vh", imageRendering: "pixelated" as React.CSSProperties["imageRendering"] }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: pixelBorder(neon, 3) }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: neon, textShadow: `0 0 10px ${neon}` }}>
          {">"} CONNECTED_MATE
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["KEYNOTES", "PODCASTS", "APPS", "BLOG"].map((item) => (
            <span key={item} style={{ color: cyan, fontSize: 13, cursor: "pointer", border: pixelBorder(cyan, 2), padding: "6px 14px" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "100px 40px", textAlign: "center", background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${neon}08 2px, ${neon}08 4px)` }}>
        <div style={{ display: "inline-block", border: pixelBorder(pink, 4), padding: "60px 80px", background: `${cardBg}EE`, boxShadow: `8px 8px 0 ${pink}, 0 0 40px ${pink}33` }}>
          <div style={{ fontSize: 14, color: pink, marginBottom: 20, letterSpacing: 4 }}>{">>> LOADING..."}</div>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1.3, marginBottom: 20, textShadow: `3px 3px 0 ${pink}` }}>
            Connecter les idées,<br />inspirer le futur
          </h1>
          <p style={{ fontSize: 16, color: "#aaa", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.7 }}>
            // Connecting people &amp; technology to build a brighter digital future
          </p>
          <span style={{ display: "inline-block", padding: "12px 32px", background: neon, color: darkBg, fontWeight: 700, fontSize: 16, cursor: "pointer", border: "none", boxShadow: `4px 4px 0 ${cyan}` }}>
            {"[START]"}
          </span>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "60px 40px", display: "flex", justifyContent: "center", gap: 40 }}>
        {[
          { num: "50+", label: "CONFERENCES", color: neon },
          { num: "100+", label: "EPISODES", color: pink },
          { num: "005", label: "APPS", color: cyan },
        ].map((s) => (
          <div key={s.label} style={{ border: pixelBorder(s.color, 3), padding: "32px 48px", textAlign: "center", background: cardBg, boxShadow: `6px 6px 0 ${s.color}` }}>
            <div style={{ fontSize: 44, fontWeight: 700, color: s.color, textShadow: `0 0 20px ${s.color}55` }}>{s.num}</div>
            <div style={{ fontSize: 12, color: "#888", letterSpacing: 3, marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section style={{ padding: "60px 40px 100px" }}>
        <h2 style={{ textAlign: "center", fontSize: 28, color: cyan, marginBottom: 48, textShadow: `0 0 15px ${cyan}55` }}>{"<SELECT_MENU>"}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {[
            { title: "KEYNOTES", desc: "50+ talks sur l'innovation et l'IA.", color: neon, icon: "K" },
            { title: "PODCASTS", desc: "100+ épisodes tech & culture.", color: pink, icon: "P" },
            { title: "APPS", desc: "5 apps innovantes & connectées.", color: cyan, icon: "A" },
            { title: "BLOG", desc: "Articles tech & tendances.", color: "#FFD700", icon: "B" },
          ].map((f) => (
            <div key={f.title} style={{ border: pixelBorder(f.color, 3), padding: 28, background: cardBg, boxShadow: `4px 4px 0 ${f.color}` }}>
              <div style={{ width: 48, height: 48, border: pixelBorder(f.color, 2), display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, color: f.color, marginBottom: 16, fontWeight: 700 }}>{f.icon}</div>
              <h3 style={{ color: f.color, fontSize: 18, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 40px", borderTop: pixelBorder(pink, 3), borderBottom: pixelBorder(pink, 3), background: cardBg }}>
        <h2 style={{ fontSize: 32, color: pink, marginBottom: 12, textShadow: `0 0 15px ${pink}55` }}>Restons connectés</h2>
        <p style={{ color: "#888", fontSize: 14, marginBottom: 32 }}>{"// JOIN THE NETWORK"}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s, i) => {
            const colors = [neon, pink, cyan, "#FFD700"];
            return (
              <span key={s} style={{ padding: "10px 24px", border: pixelBorder(colors[i], 2), color: colors[i], fontSize: 13, fontWeight: 700, cursor: "pointer", boxShadow: `3px 3px 0 ${colors[i]}` }}>{s.toUpperCase()}</span>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "32px 20px", color: "#555", fontSize: 13 }}>
        {">"} © 2026 Connected Mate {"<"}
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 44 – Zen Garden (Minimalist)
   ─────────────────────────────────────────────── */
const ZenGarden: React.FC = () => {
  const stone = "#808080";
  const sand = "#F5F0E1";
  const pureWhite = "#FFFFFF";
  const softBlack = "#2A2A2A";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Helvetica Neue', 'Arial', sans-serif", background: pureWhite, color: softBlack, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "48px 80px" }}>
        <div style={{ fontSize: 18, fontWeight: 300, letterSpacing: 6, textTransform: "uppercase", color: stone }}>Connected Mate</div>
        <div style={{ display: "flex", gap: 48 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ color: stone, fontSize: 13, cursor: "pointer", letterSpacing: 2, fontWeight: 300 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "160px 80px 120px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ width: 40, height: 1, background: stone, marginBottom: 48 }} />
        <h1 style={{ fontSize: 52, fontWeight: 300, color: softBlack, lineHeight: 1.5, marginBottom: 32, letterSpacing: -0.5 }}>
          Connecter les idées,<br />inspirer le futur
        </h1>
        <p style={{ fontSize: 18, color: stone, maxWidth: 460, lineHeight: 2, fontWeight: 300 }}>
          Un espace de réflexion où la technologie et l&apos;humanité convergent en harmonie.
        </p>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 80px", background: sand }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 120, maxWidth: 800, margin: "0 auto" }}>
          {[
            { num: "50+", label: "Conférences" },
            { num: "100+", label: "Épisodes" },
            { num: "5", label: "Applications" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 42, fontWeight: 200, color: softBlack, marginBottom: 12 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: stone, letterSpacing: 3, textTransform: "uppercase", fontWeight: 300 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div style={{ height: 120, background: pureWhite }} />

      {/* Features */}
      <section style={{ padding: "0 80px 120px", maxWidth: 1000, margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences qui cultivent la sagesse technologique." },
          { title: "Podcasts", desc: "Des dialogues apaisés sur les idées qui comptent." },
          { title: "Apps", desc: "Des outils numériques conçus avec intention." },
          { title: "Blog", desc: "Des mots choisis pour éclairer le chemin." },
        ].map((f, i) => (
          <div key={f.title} style={{ display: "flex", alignItems: "flex-start", padding: "48px 0", borderTop: i === 0 ? `1px solid ${stone}33` : `1px solid ${stone}22` }}>
            <div style={{ width: 200, flexShrink: 0 }}>
              <h3 style={{ fontSize: 16, fontWeight: 400, color: softBlack, letterSpacing: 2, margin: 0 }}>{f.title}</h3>
            </div>
            <p style={{ fontSize: 16, color: stone, lineHeight: 2, fontWeight: 300, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Large whitespace */}
      <div style={{ height: 80, background: pureWhite }} />

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "100px 40px", background: sand }}>
        <h2 style={{ fontSize: 32, fontWeight: 300, color: softBlack, marginBottom: 40, letterSpacing: 1 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ color: stone, fontSize: 13, letterSpacing: 2, cursor: "pointer", fontWeight: 300 }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "48px 20px", color: stone, fontSize: 12, letterSpacing: 3, fontWeight: 300 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 45 – Electric Yellow (Brutalist)
   ─────────────────────────────────────────────── */
const ElectricYellow: React.FC = () => {
  const yellow = "#FFE500";
  const black = "#000000";
  const white = "#FFFFFF";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Arial Black', 'Impact', sans-serif", background: yellow, color: black, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: `4px solid ${black}` }}>
        <div style={{ fontSize: 28, fontWeight: 900, textTransform: "uppercase", letterSpacing: -1 }}>CONNECTED MATE</div>
        <div style={{ display: "flex", gap: 4 }}>
          {["KEYNOTES", "PODCASTS", "APPS", "BLOG"].map((item) => (
            <span key={item} style={{ background: black, color: yellow, padding: "10px 16px", fontSize: 12, fontWeight: 900, cursor: "pointer", letterSpacing: 1 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "80px 40px", borderBottom: `4px solid ${black}` }}>
        <h1 style={{ fontSize: 96, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase", maxWidth: 900, margin: "0 0 32px", letterSpacing: -3 }}>
          CONNECTER LES IDÉES, INSPIRER LE FUTUR
        </h1>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <p style={{ fontSize: 20, maxWidth: 500, lineHeight: 1.5, fontFamily: "Arial, sans-serif", fontWeight: 400 }}>
            Nous relions les humains et la technologie. Sans compromis. Sans limites. Le futur commence maintenant.
          </p>
          <div style={{ background: black, color: yellow, padding: "20px 48px", fontSize: 18, fontWeight: 900, cursor: "pointer", textTransform: "uppercase" }}>
            GO →
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderBottom: `4px solid ${black}` }}>
        {[
          { num: "50+", label: "CONFÉRENCES" },
          { num: "100+", label: "ÉPISODES PODCAST" },
          { num: "5", label: "APPLICATIONS" },
        ].map((s, i) => (
          <div key={s.label} style={{ padding: "48px 32px", textAlign: "center", borderRight: i < 2 ? `4px solid ${black}` : "none" }}>
            <div style={{ fontSize: 72, fontWeight: 900 }}>{s.num}</div>
            <div style={{ fontSize: 14, letterSpacing: 3, marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section style={{ padding: "60px 40px", borderBottom: `4px solid ${black}` }}>
        {[
          { title: "KEYNOTES", desc: "50+ conférences. Scène. Impact. Transformation." },
          { title: "PODCASTS", desc: "100+ épisodes. Voix. Idées. Conversations brutes." },
          { title: "APPS", desc: "5 applications. Code. Design. Innovation pure." },
          { title: "BLOG", desc: "Articles. Opinions. Analyses sans filtre." },
        ].map((f, i) => (
          <div key={f.title} style={{ display: "flex", alignItems: "center", padding: "24px 0", borderBottom: i < 3 ? `2px solid ${black}` : "none" }}>
            <div style={{ width: 80, height: 80, background: black, color: yellow, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 900, marginRight: 32, flexShrink: 0 }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 style={{ fontSize: 28, fontWeight: 900, margin: "0 0 4px", letterSpacing: 2 }}>{f.title}</h3>
              <p style={{ fontSize: 16, margin: 0, fontFamily: "Arial, sans-serif", fontWeight: 400 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 40px", background: black, color: yellow, borderBottom: `4px solid ${yellow}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: 56, fontWeight: 900, textTransform: "uppercase", letterSpacing: -2, margin: 0 }}>RESTONS CONNECTÉS</h2>
          <div style={{ display: "flex", gap: 8 }}>
            {["TW", "LI", "YT", "IG"].map((s) => (
              <span key={s} style={{ width: 56, height: 56, background: yellow, color: black, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, cursor: "pointer" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "24px 20px", fontSize: 14, fontWeight: 900, letterSpacing: 2, background: yellow, borderTop: `4px solid ${black}` }}>
        © 2026 CONNECTED MATE
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 46 – Ocean Deep (Dark)
   ─────────────────────────────────────────────── */
const OceanDeep: React.FC = () => {
  const deepBlue = "#001B48";
  const midBlue = "#002D6A";
  const cyan = "#00CED1";
  const paleCyan = "#B2F0F0";
  const white = "#E8F4F8";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Segoe UI', 'Roboto', sans-serif", background: deepBlue, color: white, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 60px", background: `${deepBlue}CC`, backdropFilter: "blur(12px)", position: "sticky" as const, top: 0, zIndex: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: cyan }}>Connected Mate</div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ color: paleCyan, fontSize: 14, cursor: "pointer", fontWeight: 500, letterSpacing: 0.5 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero with bioluminescent effect */}
      <section style={{ padding: "140px 60px 100px", textAlign: "center", background: `radial-gradient(ellipse at 50% 80%, ${cyan}15 0%, transparent 60%), radial-gradient(ellipse at 20% 20%, ${cyan}08 0%, transparent 40%), radial-gradient(ellipse at 80% 40%, #0077B633 0%, transparent 50%)`, position: "relative" }}>
        {/* Floating particles (decorative dots) */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ position: "absolute", width: 4 + i * 2, height: 4 + i * 2, borderRadius: "50%", background: `${cyan}${(20 + i * 10).toString(16)}`, top: `${15 + i * 12}%`, left: `${10 + i * 15}%`, boxShadow: `0 0 ${8 + i * 4}px ${cyan}44` }} />
        ))}
        <h1 style={{ fontSize: 60, fontWeight: 700, color: white, lineHeight: 1.3, maxWidth: 800, margin: "0 auto 24px" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: 20, color: paleCyan, maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 300 }}>
          Plongez dans les profondeurs de l&apos;innovation. Nous connectons les esprits et la technologie dans un océan d&apos;idées.
        </p>
        <span style={{ display: "inline-block", padding: "16px 48px", background: `linear-gradient(135deg, ${cyan}, #0099CC)`, color: deepBlue, borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: `0 4px 20px ${cyan}44` }}>
          Plonger
        </span>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 60px", background: midBlue }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 80, maxWidth: 900, margin: "0 auto" }}>
          {[
            { num: "50+", label: "Conférences" },
            { num: "100+", label: "Épisodes podcast" },
            { num: "5", label: "Applications" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 52, fontWeight: 700, color: cyan, textShadow: `0 0 30px ${cyan}55`, marginBottom: 8 }}>{s.num}</div>
              <div style={{ fontSize: 14, color: paleCyan, letterSpacing: 1, fontWeight: 300 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "100px 60px" }}>
        <h2 style={{ textAlign: "center", fontSize: 38, color: white, marginBottom: 60, fontWeight: 600 }}>Explorer les profondeurs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des conférences lumineuses qui éclairent les abysses de l'innovation.", glow: cyan },
            { title: "Podcasts", desc: "Des voix qui résonnent dans les courants de la pensée technologique.", glow: "#0099CC" },
            { title: "Apps", desc: "Des outils forgés dans les profondeurs pour naviguer le futur.", glow: "#006994" },
            { title: "Blog", desc: "Des récits des explorateurs du monde numérique.", glow: "#20B2AA" },
          ].map((f) => (
            <div key={f.title} style={{ background: midBlue, padding: 36, borderRadius: 16, border: `1px solid ${f.glow}33`, boxShadow: `0 0 20px ${f.glow}15, inset 0 1px 0 ${f.glow}22` }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: `${f.glow}22`, border: `1px solid ${f.glow}55`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, boxShadow: `0 0 15px ${f.glow}33` }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: f.glow, boxShadow: `0 0 10px ${f.glow}` }} />
              </div>
              <h3 style={{ color: white, fontSize: 20, marginBottom: 12, fontWeight: 600 }}>{f.title}</h3>
              <p style={{ color: paleCyan, fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "100px 40px", background: `radial-gradient(ellipse at 50% 50%, ${cyan}10 0%, transparent 70%)` }}>
        <h2 style={{ fontSize: 42, color: white, marginBottom: 16, fontWeight: 600 }}>Restons connectés</h2>
        <p style={{ color: paleCyan, fontSize: 16, marginBottom: 40, fontWeight: 300 }}>Naviguez avec nous vers de nouvelles découvertes</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "12px 28px", background: midBlue, color: cyan, borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", border: `1px solid ${cyan}44`, boxShadow: `0 0 10px ${cyan}15` }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px 20px", borderTop: `1px solid ${cyan}22`, color: paleCyan, fontSize: 13, fontWeight: 300 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 47 – Cottagecore (Organic)
   ─────────────────────────────────────────────── */
const Cottagecore: React.FC = () => {
  const cream = "#FFFDD0";
  const sage = "#9CAF88";
  const driedFlower = "#DEB887";
  const warmBrown = "#6B4226";
  const lightSage = "#E8F0E0";
  const softPink = "#F5E1D0";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Georgia', 'Palatino Linotype', serif", background: cream, color: warmBrown, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 60px", borderBottom: `2px dashed ${sage}88` }}>
        <div style={{ fontSize: 24, fontWeight: 400, color: warmBrown, fontStyle: "italic" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ color: sage, fontSize: 15, cursor: "pointer", fontStyle: "italic" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "100px 60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: 700, textAlign: "center", padding: "60px 80px", background: lightSage, borderRadius: 200, border: `3px solid ${sage}55` }}>
          <div style={{ fontSize: 32, color: sage, marginBottom: 16 }}>~</div>
          <h1 style={{ fontSize: 48, fontWeight: 400, color: warmBrown, lineHeight: 1.4, marginBottom: 20, fontStyle: "italic" }}>
            Connecter les idées, inspirer le futur
          </h1>
          <p style={{ fontSize: 18, color: `${warmBrown}CC`, maxWidth: 480, margin: "0 auto 36px", lineHeight: 1.9 }}>
            Comme un jardin qui fleurit, nous cultivons les liens entre les personnes et la technologie, avec soin et authenticité.
          </p>
          <span style={{ display: "inline-block", padding: "14px 40px", background: sage, color: cream, borderRadius: 30, fontSize: 16, cursor: "pointer", fontStyle: "italic" }}>
            Découvrir notre jardin
          </span>
          <div style={{ fontSize: 32, color: sage, marginTop: 16 }}>~</div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "60px 60px", background: softPink, borderTop: `2px dashed ${driedFlower}88`, borderBottom: `2px dashed ${driedFlower}88` }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 80, maxWidth: 800, margin: "0 auto" }}>
          {[
            { num: "50+", label: "Conférences" },
            { num: "100+", label: "Épisodes podcast" },
            { num: "5", label: "Applications" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 44, fontWeight: 400, color: warmBrown, marginBottom: 8, fontStyle: "italic" }}>{s.num}</div>
              <div style={{ fontSize: 14, color: sage, letterSpacing: 1 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 60px" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, color: warmBrown, fontWeight: 400, marginBottom: 60, fontStyle: "italic" }}>Nos petits trésors</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, maxWidth: 900, margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des conférences chaleureuses, comme un thé partagé autour d'idées nouvelles.", bg: lightSage },
            { title: "Podcasts", desc: "Des conversations douces et profondes, au coin du feu numérique.", bg: softPink },
            { title: "Apps", desc: "Des outils artisanaux, confectionnés avec amour pour simplifier votre quotidien.", bg: softPink },
            { title: "Blog", desc: "Des histoires et réflexions cueillies dans le jardin de l'innovation.", bg: lightSage },
          ].map((f) => (
            <div key={f.title} style={{ background: f.bg, padding: "40px 36px", borderRadius: 20, border: `1px solid ${driedFlower}55` }}>
              <h3 style={{ color: warmBrown, fontSize: 22, fontWeight: 400, marginBottom: 12, fontStyle: "italic" }}>{f.title}</h3>
              <p style={{ color: `${warmBrown}BB`, fontSize: 15, lineHeight: 1.9 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 40px", background: lightSage, borderTop: `2px dashed ${sage}55` }}>
        <div style={{ fontSize: 28, color: sage, marginBottom: 4 }}>~</div>
        <h2 style={{ fontSize: 36, color: warmBrown, fontWeight: 400, marginBottom: 24, fontStyle: "italic" }}>Restons connectés</h2>
        <p style={{ color: `${warmBrown}AA`, fontSize: 15, marginBottom: 32, fontStyle: "italic" }}>Rejoignez notre communauté bienveillante</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", background: cream, color: sage, borderRadius: 20, fontSize: 14, cursor: "pointer", border: `1px solid ${sage}55`, fontStyle: "italic" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px 20px", color: `${warmBrown}99`, fontSize: 14, fontStyle: "italic", borderTop: `2px dashed ${driedFlower}55` }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 48 – Futurism (Modern)
   ─────────────────────────────────────────────── */
const Futurism: React.FC = () => {
  const red = "#FF3333";
  const black = "#0A0A0A";
  const darkGray = "#1A1A1A";
  const white = "#FFFFFF";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Arial Black', 'Helvetica', sans-serif", background: black, color: white, minHeight: "100vh", overflow: "hidden" }}>
      {/* Nav - angled */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", background: red, transform: "skewY(-1deg)", marginTop: -4 }}>
        <div style={{ transform: "skewY(1deg)", fontSize: 22, fontWeight: 900, letterSpacing: 3, textTransform: "uppercase" }}>CONNECTED MATE</div>
        <div style={{ transform: "skewY(1deg)", display: "flex", gap: 24 }}>
          {["KEYNOTES", "PODCASTS", "APPS", "BLOG"].map((item) => (
            <span key={item} style={{ color: white, fontSize: 12, fontWeight: 900, cursor: "pointer", letterSpacing: 2 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero with dynamic angles */}
      <section style={{ padding: "120px 60px 100px", position: "relative" }}>
        {/* Speed lines */}
        <div style={{ position: "absolute", top: 60, right: 60, width: 300, height: 4, background: red, transform: "rotate(-5deg)" }} />
        <div style={{ position: "absolute", top: 90, right: 100, width: 200, height: 3, background: `${red}88`, transform: "rotate(-5deg)" }} />
        <div style={{ position: "absolute", top: 115, right: 140, width: 120, height: 2, background: `${red}44`, transform: "rotate(-5deg)" }} />

        <div style={{ maxWidth: 800 }}>
          <div style={{ display: "inline-block", background: red, padding: "6px 20px", transform: "skewX(-10deg)", marginBottom: 24 }}>
            <span style={{ display: "inline-block", transform: "skewX(10deg)", fontSize: 14, fontWeight: 900, letterSpacing: 4 }}>VELOCITÀ</span>
          </div>
          <h1 style={{ fontSize: 80, fontWeight: 900, lineHeight: 0.95, textTransform: "uppercase", marginBottom: 24, letterSpacing: -2 }}>
            <span style={{ color: red }}>CONNECTER</span> LES IDÉES,{" "}
            <span style={{ color: red }}>INSPIRER</span> LE FUTUR
          </h1>
          <p style={{ fontSize: 18, color: "#999", maxWidth: 500, lineHeight: 1.6, fontFamily: "Arial, sans-serif", fontWeight: 400, marginBottom: 40 }}>
            La vitesse de l&apos;innovation. La puissance de la connexion. Nous propulsons les idées vers l&apos;avenir à toute allure.
          </p>
          <span style={{ display: "inline-block", padding: "18px 48px", background: red, color: white, fontWeight: 900, fontSize: 16, cursor: "pointer", transform: "skewX(-5deg)", letterSpacing: 2, textTransform: "uppercase" }}>
            <span style={{ display: "inline-block", transform: "skewX(5deg)" }}>ACCÉLÉRER →</span>
          </span>
        </div>
      </section>

      {/* Stats - angular stripe */}
      <section style={{ background: red, transform: "skewY(-2deg)", margin: "40px 0", padding: "60px 60px" }}>
        <div style={{ transform: "skewY(2deg)", display: "flex", justifyContent: "center", gap: 100 }}>
          {[
            { num: "50+", label: "CONFÉRENCES" },
            { num: "100+", label: "ÉPISODES" },
            { num: "5", label: "APPLICATIONS" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 56, fontWeight: 900, marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 12, letterSpacing: 4, fontWeight: 900 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 60px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, maxWidth: 1200, margin: "0 auto" }}>
          {[
            { title: "KEYNOTES", desc: "Conférences dynamiques propulsées par la passion de l'innovation." },
            { title: "PODCASTS", desc: "Des dialogues à haute vélocité sur les forces qui redéfinissent le monde." },
            { title: "APPS", desc: "Applications véloces et percutantes pour le monde moderne." },
            { title: "BLOG", desc: "Écrits incisifs sur la marche implacable du progrès." },
          ].map((f, i) => (
            <div key={f.title} style={{ background: darkGray, padding: "36px 28px", borderLeft: `4px solid ${red}`, transform: `skewX(-3deg)`, position: "relative" }}>
              <div style={{ transform: "skewX(3deg)" }}>
                <div style={{ fontSize: 48, fontWeight: 900, color: `${red}33`, position: "absolute", top: 12, right: 16 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ color: red, fontSize: 20, fontWeight: 900, marginBottom: 12, letterSpacing: 2 }}>{f.title}</h3>
                <p style={{ color: "#AAA", fontSize: 14, lineHeight: 1.7, fontFamily: "Arial, sans-serif", fontWeight: 400 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 60px", textAlign: "center", borderTop: `4px solid ${red}` }}>
        <h2 style={{ fontSize: 52, fontWeight: 900, color: white, marginBottom: 12, textTransform: "uppercase", letterSpacing: 2 }}>Restons connectés</h2>
        <p style={{ color: "#666", fontSize: 14, marginBottom: 36, fontFamily: "Arial, sans-serif", letterSpacing: 3, textTransform: "uppercase" }}>Rejoignez le mouvement</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "14px 28px", background: red, color: white, fontWeight: 900, fontSize: 13, cursor: "pointer", transform: "skewX(-5deg)", letterSpacing: 1, textTransform: "uppercase" }}>
              <span style={{ display: "inline-block", transform: "skewX(5deg)" }}>{s}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "32px 20px", background: red, transform: "skewY(1deg)", marginBottom: -4 }}>
        <span style={{ display: "inline-block", transform: "skewY(-1deg)", fontSize: 13, fontWeight: 900, letterSpacing: 3 }}>© 2026 CONNECTED MATE</span>
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 49 – Watercolor (Organic)
   ─────────────────────────────────────────────── */
const Watercolor: React.FC = () => {
  const softBlue = "#D6EAF8";
  const softPink = "#FADBD8";
  const softLavender = "#E8DAEF";
  const softGreen = "#D5F5E3";
  const textColor = "#2C3E50";
  const mutedText = "#7F8C8D";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif", background: "#FDFEFE", color: textColor, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 60px" }}>
        <div style={{ fontSize: 22, fontWeight: 400, color: textColor, fontStyle: "italic" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: 28 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ color: mutedText, fontSize: 15, cursor: "pointer" }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero with watercolor blobs */}
      <section style={{ position: "relative", padding: "120px 60px 100px", textAlign: "center", overflow: "hidden" }}>
        {/* Watercolor blobs using radial gradients */}
        <div style={{ position: "absolute", top: -60, left: -80, width: 500, height: 400, background: `radial-gradient(ellipse at 40% 50%, ${softBlue}AA 0%, ${softBlue}44 40%, transparent 70%)`, borderRadius: "60% 40% 55% 45%", transform: "rotate(-15deg)" }} />
        <div style={{ position: "absolute", top: 20, right: -40, width: 450, height: 380, background: `radial-gradient(ellipse at 50% 50%, ${softPink}99 0%, ${softPink}33 45%, transparent 70%)`, borderRadius: "45% 55% 40% 60%", transform: "rotate(10deg)" }} />
        <div style={{ position: "absolute", bottom: -20, left: "30%", width: 400, height: 300, background: `radial-gradient(ellipse at 50% 50%, ${softLavender}88 0%, ${softLavender}22 50%, transparent 70%)`, borderRadius: "50% 50% 45% 55%", transform: "rotate(5deg)" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1 style={{ fontSize: 56, fontWeight: 400, color: textColor, lineHeight: 1.4, maxWidth: 700, margin: "0 auto 24px", fontStyle: "italic" }}>
            Connecter les idées, inspirer le futur
          </h1>
          <p style={{ fontSize: 19, color: mutedText, maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.9 }}>
            Comme l&apos;aquarelle sur le papier, nous laissons les idées se mêler et créer de nouvelles teintes d&apos;innovation.
          </p>
          <span style={{ display: "inline-block", padding: "14px 44px", background: `linear-gradient(135deg, ${softBlue}, ${softLavender})`, color: textColor, borderRadius: 30, fontSize: 16, cursor: "pointer", border: "none" }}>
            Explorer
          </span>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, maxWidth: 900, margin: "0 auto" }}>
          {[
            { num: "50+", label: "Conférences", bg: softBlue },
            { num: "100+", label: "Épisodes podcast", bg: softPink },
            { num: "5", label: "Applications", bg: softGreen },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", flex: 1, padding: "40px 24px", background: `radial-gradient(ellipse at 50% 50%, ${s.bg} 0%, ${s.bg}55 60%, transparent 100%)`, borderRadius: "50%" }}>
              <div style={{ fontSize: 42, fontWeight: 400, color: textColor, marginBottom: 8, fontStyle: "italic" }}>{s.num}</div>
              <div style={{ fontSize: 14, color: mutedText }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "40px 60px 100px" }}>
        <h2 style={{ textAlign: "center", fontSize: 36, color: textColor, fontWeight: 400, marginBottom: 60, fontStyle: "italic" }}>Nos créations</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28, maxWidth: 1100, margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des touches d'inspiration sur la toile de l'innovation technologique.", bg: softBlue },
            { title: "Podcasts", desc: "Des nuances de conversation qui colorent votre compréhension du monde.", bg: softPink },
            { title: "Apps", desc: "Des applications délicatement conçues, comme des coups de pinceau précis.", bg: softLavender },
            { title: "Blog", desc: "Des mots qui se répandent comme l'encre sur le papier humide.", bg: softGreen },
          ].map((f) => (
            <div key={f.title} style={{ padding: "36px 28px", background: `linear-gradient(180deg, ${f.bg}AA 0%, ${f.bg}33 100%)`, borderRadius: 24, textAlign: "center" }}>
              <h3 style={{ color: textColor, fontSize: 20, fontWeight: 400, marginBottom: 12, fontStyle: "italic" }}>{f.title}</h3>
              <p style={{ color: mutedText, fontSize: 14, lineHeight: 1.8 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `linear-gradient(135deg, ${softBlue}55, ${softPink}55, ${softLavender}55, ${softGreen}55)` }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: 38, color: textColor, fontWeight: 400, marginBottom: 24, fontStyle: "italic" }}>Restons connectés</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            {[
              { name: "Twitter", bg: softBlue },
              { name: "LinkedIn", bg: softPink },
              { name: "YouTube", bg: softLavender },
              { name: "Instagram", bg: softGreen },
            ].map((s) => (
              <span key={s.name} style={{ padding: "12px 28px", background: s.bg, color: textColor, borderRadius: 20, fontSize: 14, cursor: "pointer" }}>{s.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px 20px", color: mutedText, fontSize: 14, fontStyle: "italic" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Design 50 – Chrome Tech (Tech)
   ─────────────────────────────────────────────── */
const ChromeTech: React.FC = () => {
  const silver = "#C0C0C0";
  const darkCharcoal = "#1A1A2E";
  const midGray = "#2D2D44";
  const lightSilver = "#E8E8E8";
  const blueAccent = "#4A90D9";

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: "'SF Pro Display', 'Helvetica Neue', 'Arial', sans-serif", background: darkCharcoal, color: lightSilver, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 60px", background: `linear-gradient(180deg, ${midGray} 0%, ${darkCharcoal} 100%)`, borderBottom: `1px solid ${silver}22` }}>
        <div style={{ fontSize: 22, fontWeight: 600, background: `linear-gradient(135deg, ${silver}, #fff, ${silver})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: 32 }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ color: silver, fontSize: 14, cursor: "pointer", fontWeight: 400 }}>{item}</span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "120px 60px 100px", textAlign: "center", background: `radial-gradient(ellipse at 50% 0%, ${midGray} 0%, ${darkCharcoal} 70%)` }}>
        <div style={{ display: "inline-block", padding: "6px 20px", borderRadius: 20, background: `linear-gradient(135deg, ${silver}22, ${silver}11)`, border: `1px solid ${silver}33`, marginBottom: 32, fontSize: 13, color: silver, letterSpacing: 2 }}>
          INNOVATION • TECHNOLOGIE • AVENIR
        </div>
        <h1 style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.2, maxWidth: 800, margin: "0 auto 24px", background: `linear-gradient(135deg, #FFFFFF, ${silver}, #FFFFFF)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: 18, color: silver, maxWidth: 540, margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 300 }}>
          À l&apos;intersection de l&apos;humain et de la machine, nous construisons les ponts technologiques de demain.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
          <span style={{ display: "inline-block", padding: "16px 40px", background: `linear-gradient(135deg, ${silver}, #fff)`, color: darkCharcoal, borderRadius: 8, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Commencer</span>
          <span style={{ display: "inline-block", padding: "16px 40px", background: "transparent", color: silver, borderRadius: 8, fontWeight: 500, fontSize: 15, cursor: "pointer", border: `1px solid ${silver}55` }}>En savoir plus</span>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "80px 60px", borderTop: `1px solid ${silver}15`, borderBottom: `1px solid ${silver}15` }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 60, maxWidth: 1000, margin: "0 auto" }}>
          {[
            { num: "50+", label: "Conférences" },
            { num: "100+", label: "Épisodes podcast" },
            { num: "5", label: "Applications" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", flex: 1, padding: "36px 20px", background: `linear-gradient(180deg, ${midGray}AA 0%, ${midGray}44 100%)`, borderRadius: 12, border: `1px solid ${silver}15` }}>
              <div style={{ fontSize: 48, fontWeight: 700, marginBottom: 8, background: `linear-gradient(135deg, #FFFFFF, ${silver})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
              <div style={{ fontSize: 14, color: silver, fontWeight: 300 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "100px 60px" }}>
        <h2 style={{ textAlign: "center", fontSize: 36, fontWeight: 600, marginBottom: 60, background: `linear-gradient(135deg, #fff, ${silver})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Nos solutions</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, maxWidth: 1200, margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Conférences de pointe sur l'IA, le cloud et les technologies émergentes.", icon: "◆" },
            { title: "Podcasts", desc: "Interviews exclusives avec les architectes du futur numérique.", icon: "◉" },
            { title: "Apps", desc: "Suite d'applications haute performance pour l'ère connectée.", icon: "⬡" },
            { title: "Blog", desc: "Veille technologique et analyses de tendances sectorielles.", icon: "◈" },
          ].map((f) => (
            <div key={f.title} style={{ padding: 32, background: `linear-gradient(180deg, ${midGray} 0%, ${darkCharcoal} 100%)`, borderRadius: 16, border: `1px solid ${silver}15`, position: "relative", overflow: "hidden" }}>
              {/* Subtle chrome reflection */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${silver}44, transparent)` }} />
              <div style={{ fontSize: 28, marginBottom: 16, color: silver }}>{f.icon}</div>
              <h3 style={{ color: lightSilver, fontSize: 18, fontWeight: 600, marginBottom: 12 }}>{f.title}</h3>
              <p style={{ color: silver, fontSize: 14, lineHeight: 1.8, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "100px 40px", background: `linear-gradient(180deg, ${darkCharcoal} 0%, ${midGray} 50%, ${darkCharcoal} 100%)` }}>
        <h2 style={{ fontSize: 40, fontWeight: 600, marginBottom: 16, background: `linear-gradient(135deg, #fff, ${silver})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Restons connectés</h2>
        <p style={{ color: silver, fontSize: 15, marginBottom: 40, fontWeight: 300 }}>Rejoignez l&apos;écosystème Connected Mate</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ padding: "12px 28px", background: `linear-gradient(135deg, ${silver}22, ${silver}11)`, color: silver, borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", border: `1px solid ${silver}22` }}>{s}</span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "40px 20px", borderTop: `1px solid ${silver}15`, color: silver, fontSize: 13, fontWeight: 300 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ───────────────────────────────────────────────
   Export all designs
   ─────────────────────────────────────────────── */
export const designs: HomepageDesign[] = [
  {
    id: 41,
    name: "Royal Purple",
    category: "Luxury",
    description: "Deep purple with gold highlights, regal and majestic with ornate details",
    component: RoyalPurple,
  },
  {
    id: 42,
    name: "Sunset Desert",
    category: "Gradient",
    description: "Warm sunset gradients from orange to pink to purple, with desert sand accents",
    component: SunsetDesert,
  },
  {
    id: 43,
    name: "Pixel Art",
    category: "Retro",
    description: "Pixelated 8-bit aesthetic with bright neon colors and blocky retro gaming shapes",
    component: PixelArt,
  },
  {
    id: 44,
    name: "Zen Garden",
    category: "Minimalist",
    description: "Stone gray and white with extreme whitespace and meditative calm",
    component: ZenGarden,
  },
  {
    id: 45,
    name: "Electric Yellow",
    category: "Brutalist",
    description: "Bright yellow backgrounds with black text, bold sans-serif, high contrast and energetic",
    component: ElectricYellow,
  },
  {
    id: 46,
    name: "Ocean Deep",
    category: "Dark",
    description: "Deep ocean blue with bioluminescent cyan accents, underwater mysterious feel",
    component: OceanDeep,
  },
  {
    id: 47,
    name: "Cottagecore",
    category: "Organic",
    description: "Warm cream with sage green and dried flower accents, cozy and handcrafted",
    component: Cottagecore,
  },
  {
    id: 48,
    name: "Futurism",
    category: "Modern",
    description: "Sharp angles with speed lines, red and black inspired by Italian futurism movement",
    component: Futurism,
  },
  {
    id: 49,
    name: "Watercolor",
    category: "Organic",
    description: "Soft watercolor-style backgrounds with delicate, artistic, flowing gradients",
    component: Watercolor,
  },
  {
    id: 50,
    name: "Chrome Tech",
    category: "Tech",
    description: "Silver metallic gradients on dark charcoal, clean tech aesthetic with reflective surfaces",
    component: ChromeTech,
  },
];
