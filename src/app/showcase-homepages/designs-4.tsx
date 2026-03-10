"use client";
import Link from "next/link";
import React from "react";
import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 31 — Candy Pop (Playful)
   ============================================================ */
const CandyPop: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFB6C1 0%, #FFD700 50%, #40E0D0 100%)", fontFamily: "'Nunito', 'Comic Sans MS', sans-serif", color: "#333", overflow: "hidden" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px" }}>
        <div style={{ fontSize: "28px", fontWeight: 900, color: "#FF69B4", textShadow: "2px 2px 0 #FFD700" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ background: "#fff", color: "#FF69B4", padding: "10px 22px", borderRadius: "50px", fontWeight: 700, fontSize: "14px", cursor: "pointer", boxShadow: "3px 3px 0 #FFD700" }}>{item}</span>
          ))}
        </div>
      </nav>
      <section style={{ textAlign: "center", padding: "80px 20px 60px" }}>
        <div style={{ display: "inline-block", background: "#fff", borderRadius: "40px", padding: "50px 70px", boxShadow: "8px 8px 0 #FF69B4, 16px 16px 0 #40E0D0" }}>
          <h1 style={{ fontSize: "52px", fontWeight: 900, color: "#FF69B4", margin: "0 0 16px", lineHeight: 1.2 }}>Connecter les idées,<br />inspirer le futur</h1>
          <p style={{ fontSize: "20px", color: "#666", maxWidth: "550px", margin: "0 auto 30px", lineHeight: 1.6 }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
          <button style={{ background: "#FF69B4", color: "#fff", border: "none", padding: "16px 44px", borderRadius: "50px", fontSize: "18px", fontWeight: 700, cursor: "pointer", boxShadow: "4px 4px 0 #FFD700" }}>Découvrir →</button>
        </div>
      </section>
      <section style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "20px 40px 60px", flexWrap: "wrap" }}>
        {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes podcast" }, { num: "5", label: "Applications" }].map((s) => (
          <div key={s.label} style={{ background: "#fff", borderRadius: "30px", padding: "30px 50px", textAlign: "center", boxShadow: "5px 5px 0 #40E0D0" }}>
            <div style={{ fontSize: "42px", fontWeight: 900, color: "#FF69B4" }}>{s.num}</div>
            <div style={{ fontSize: "16px", color: "#666", fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", padding: "0 40px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA.", bg: "#FF69B4" },
          { title: "Podcasts", desc: "Écoutez des conversations captivantes avec des leaders tech.", bg: "#40E0D0" },
          { title: "Apps", desc: "Des applications innovantes pour le quotidien.", bg: "#FFD700" },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques.", bg: "#FF6B6B" },
        ].map((card) => (
          <div key={card.title} style={{ background: "#fff", borderRadius: "30px", padding: "36px 30px", boxShadow: `6px 6px 0 ${card.bg}`, cursor: "pointer" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: card.bg, marginBottom: "18px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", color: "#fff", fontWeight: 900 }}>{card.title[0]}</div>
            <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#333", margin: "0 0 10px" }}>{card.title}</h3>
            <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
          </div>
        ))}
      </section>
      <section style={{ textAlign: "center", padding: "60px 20px 40px" }}>
        <div style={{ background: "#fff", display: "inline-block", borderRadius: "40px", padding: "40px 60px", boxShadow: "6px 6px 0 #FFD700" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 900, color: "#FF69B4", margin: "0 0 16px" }}>Restons connectés</h2>
          <p style={{ fontSize: "16px", color: "#666", margin: "0 0 24px" }}>Suivez-nous sur les réseaux sociaux !</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <span key={s} style={{ background: "#FF69B4", color: "#fff", padding: "10px 22px", borderRadius: "50px", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>
      <footer style={{ textAlign: "center", padding: "40px 20px", color: "#FF69B4", fontWeight: 700, fontSize: "14px" }}>© 2026 Connected Mate</footer>
    </div>
  );
};

/* ============================================================
   DESIGN 32 — Newspaper Classic (Editorial)
   ============================================================ */
const NewspaperClassic: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF5", fontFamily: "'Times New Roman', Georgia, serif", color: "#1a1a1a" }}>
      <header style={{ textAlign: "center", padding: "30px 40px 0", borderBottom: "3px double #1a1a1a" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", color: "#888", marginBottom: "8px" }}>Vol. LXII · No. 42 · Mars 2026</div>
        <h1 style={{ fontSize: "56px", fontWeight: 400, fontStyle: "italic", margin: "0 0 6px", fontFamily: "Georgia, serif" }}>Connected Mate</h1>
        <div style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#888", marginBottom: "16px" }}>Conférences · Podcasts · Applications · Innovation</div>
      </header>
      <nav style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "14px 40px", borderBottom: "1px solid #ccc" }}>
        {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
          <span key={item} style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", color: "#1a1a1a" }}>{item}</span>
        ))}
      </nav>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1px 1fr", gap: "0", padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ paddingRight: "30px" }}>
          <h2 style={{ fontSize: "38px", fontWeight: 700, lineHeight: 1.15, margin: "0 0 16px", fontFamily: "Georgia, serif" }}>Connecter les idées, inspirer le futur</h2>
          <div style={{ width: "60px", height: "2px", background: "#1a1a1a", marginBottom: "16px" }}></div>
          <p style={{ fontSize: "18px", lineHeight: 1.7, margin: "0 0 20px", color: "#333" }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré. Depuis nos débuts, Connected Mate s'engage à rapprocher les esprits les plus brillants de l'industrie technologique.</p>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#555", columnCount: 2, columnGap: "24px", columnRule: "1px solid #ddd" }}>
            Nos conférences rassemblent les plus grands experts mondiaux de l'intelligence artificielle et de l'innovation. Chaque keynote est une occasion unique d'explorer les frontières du possible. Nos podcasts vous plongent au coeur des conversations qui façonnent l'avenir du numérique. Et nos applications transforment ces visions en outils concrets pour votre quotidien.
          </p>
        </div>
        <div style={{ background: "#ccc" }}></div>
        <div style={{ paddingLeft: "30px" }}>
          <div style={{ borderTop: "2px solid #1a1a1a", borderBottom: "1px solid #ccc", padding: "16px 0", marginBottom: "24px" }}>
            <div style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 700, marginBottom: "12px" }}>En Chiffres</div>
            {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes podcast" }, { num: "5", label: "Applications" }].map((s) => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px dotted #ccc" }}>
                <span style={{ fontSize: "14px" }}>{s.label}</span>
                <span style={{ fontSize: "14px", fontWeight: 700 }}>{s.num}</span>
              </div>
            ))}
          </div>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA." },
            { title: "Podcasts", desc: "Écoutez des conversations captivantes." },
            { title: "Apps", desc: "Des applications innovantes pour le quotidien." },
            { title: "Blog", desc: "Articles et analyses sur les tendances tech." },
          ].map((item, i) => (
            <div key={item.title} style={{ paddingBottom: "16px", marginBottom: "16px", borderBottom: i < 3 ? "1px solid #ddd" : "none" }}>
              <h4 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 6px" }}>{item.title}</h4>
              <p style={{ fontSize: "13px", lineHeight: 1.6, margin: 0, color: "#555" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <section style={{ textAlign: "center", borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc", padding: "30px 40px", maxWidth: "1100px", margin: "0 auto" }}>
        <h3 style={{ fontSize: "24px", fontWeight: 400, fontStyle: "italic", margin: "0 0 12px" }}>Restons connectés</h3>
        <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", textDecoration: "underline" }}>{s}</span>
          ))}
        </div>
      </section>
      <footer style={{ textAlign: "center", padding: "24px 20px", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "#888" }}>© 2026 Connected Mate</footer>
    </div>
  );
};

/* ============================================================
   DESIGN 33 — Holographic (Tech)
   ============================================================ */
const Holographic: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: "#fff", overflow: "hidden" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at 20% 50%, rgba(120,0,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(0,200,255,0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(255,0,128,0.1) 0%, transparent 50%)", pointerEvents: "none", zIndex: 0 }}></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
          <div style={{ fontSize: "24px", fontWeight: 700, background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connected Mate</div>
          <div style={{ display: "flex", gap: "32px" }}>
            {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
              <span key={item} style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", cursor: "pointer", letterSpacing: "0.5px" }}>{item}</span>
            ))}
          </div>
        </nav>
        <section style={{ textAlign: "center", padding: "100px 20px 80px" }}>
          <div style={{ display: "inline-block", padding: "2px", borderRadius: "24px", background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7, #ff6ec7)" }}>
            <div style={{ background: "#0a0a0f", borderRadius: "22px", padding: "60px 80px" }}>
              <h1 style={{ fontSize: "54px", fontWeight: 800, margin: "0 0 20px", lineHeight: 1.15, background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connecter les idées,<br />inspirer le futur</h1>
              <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.6)", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7 }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
              <button style={{ background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7)", border: "none", color: "#fff", padding: "14px 40px", borderRadius: "50px", fontSize: "16px", fontWeight: 600, cursor: "pointer" }}>Explorer</button>
            </div>
          </div>
        </section>
        <section style={{ display: "flex", justifyContent: "center", gap: "40px", padding: "0 40px 80px", flexWrap: "wrap" }}>
          {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes podcast" }, { num: "5", label: "Applications" }].map((s) => (
            <div key={s.label} style={{ padding: "2px", borderRadius: "16px", background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7)" }}>
              <div style={{ background: "#12121a", borderRadius: "14px", padding: "28px 48px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", fontWeight: 800, background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.num}</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </section>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", padding: "0 48px 80px", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA." },
            { title: "Podcasts", desc: "Écoutez des conversations captivantes avec des leaders tech." },
            { title: "Apps", desc: "Des applications innovantes pour le quotidien." },
            { title: "Blog", desc: "Articles et analyses sur les tendances technologiques." },
          ].map((card) => (
            <div key={card.title} style={{ padding: "1px", borderRadius: "16px", background: "linear-gradient(135deg, rgba(255,110,199,0.4), rgba(120,115,245,0.4), rgba(79,195,247,0.4))" }}>
              <div style={{ background: "#12121a", borderRadius: "15px", padding: "32px 24px", height: "100%", boxSizing: "border-box" as const }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px", background: "linear-gradient(135deg, #ff6ec7, #4fc3f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{card.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </section>
        <section style={{ textAlign: "center", padding: "60px 20px" }}>
          <h2 style={{ fontSize: "30px", fontWeight: 700, margin: "0 0 20px", background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Restons connectés</h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <span key={s} style={{ padding: "1px", borderRadius: "50px", background: "linear-gradient(135deg, #ff6ec7, #7873f5, #4fc3f7)", display: "inline-block" }}>
                <span style={{ display: "block", background: "#0a0a0f", borderRadius: "50px", padding: "10px 24px", fontSize: "13px", color: "rgba(255,255,255,0.7)", cursor: "pointer" }}>{s}</span>
              </span>
            ))}
          </div>
        </section>
        <footer style={{ textAlign: "center", padding: "30px 20px", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>© 2026 Connected Mate</footer>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 34 — Clay Morph (Modern)
   ============================================================ */
const ClayMorph: React.FC = () => {
  const cardShadow = "8px 8px 16px rgba(0,0,0,0.08), -4px -4px 12px rgba(255,255,255,0.8), inset 1px 1px 2px rgba(255,255,255,0.6)";
  return (
    <div style={{ minHeight: "100vh", background: "#F0EBE3", fontFamily: "'Inter', 'Segoe UI', sans-serif", color: "#3d3228" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <div style={{ fontSize: "24px", fontWeight: 800, color: "#8B5E3C" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "12px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ background: "#F0EBE3", padding: "10px 22px", borderRadius: "16px", fontSize: "14px", fontWeight: 600, cursor: "pointer", boxShadow: "4px 4px 8px rgba(0,0,0,0.08), -2px -2px 6px rgba(255,255,255,0.7)", color: "#5a4a3a" }}>{item}</span>
          ))}
        </div>
      </nav>
      <section style={{ textAlign: "center", padding: "80px 20px 60px" }}>
        <div style={{ display: "inline-block", background: "linear-gradient(145deg, #f5f0e8, #e8e2d8)", borderRadius: "32px", padding: "56px 72px", boxShadow: cardShadow }}>
          <h1 style={{ fontSize: "48px", fontWeight: 800, color: "#5a3e28", margin: "0 0 16px", lineHeight: 1.2 }}>Connecter les idées,<br />inspirer le futur</h1>
          <p style={{ fontSize: "18px", color: "#8a7a6a", maxWidth: "520px", margin: "0 auto 30px", lineHeight: 1.7 }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
          <button style={{ background: "linear-gradient(145deg, #C4956A, #A67B52)", border: "none", color: "#fff", padding: "14px 40px", borderRadius: "20px", fontSize: "16px", fontWeight: 700, cursor: "pointer", boxShadow: "4px 4px 10px rgba(0,0,0,0.12), -2px -2px 6px rgba(255,255,255,0.3)" }}>Découvrir</button>
        </div>
      </section>
      <section style={{ display: "flex", justifyContent: "center", gap: "28px", padding: "0 40px 60px", flexWrap: "wrap" }}>
        {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes podcast" }, { num: "5", label: "Applications" }].map((s) => (
          <div key={s.label} style={{ background: "linear-gradient(145deg, #f5f0e8, #e8e2d8)", borderRadius: "24px", padding: "28px 44px", textAlign: "center", boxShadow: cardShadow }}>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#8B5E3C" }}>{s.num}</div>
            <div style={{ fontSize: "14px", color: "#8a7a6a", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px", padding: "0 48px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA.", icon: "K" },
          { title: "Podcasts", desc: "Écoutez des conversations captivantes avec des leaders tech.", icon: "P" },
          { title: "Apps", desc: "Des applications innovantes pour le quotidien.", icon: "A" },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques.", icon: "B" },
        ].map((card) => (
          <div key={card.title} style={{ background: "linear-gradient(145deg, #f5f0e8, #e8e2d8)", borderRadius: "24px", padding: "32px 28px", boxShadow: cardShadow }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "18px", background: "linear-gradient(145deg, #C4956A, #A67B52)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "16px", boxShadow: "3px 3px 8px rgba(0,0,0,0.1)", color: "#fff", fontWeight: 700 }}>{card.icon}</div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#5a3e28", margin: "0 0 10px" }}>{card.title}</h3>
            <p style={{ fontSize: "14px", color: "#8a7a6a", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
          </div>
        ))}
      </section>
      <section style={{ textAlign: "center", padding: "40px 20px 60px" }}>
        <div style={{ display: "inline-block", background: "linear-gradient(145deg, #f5f0e8, #e8e2d8)", borderRadius: "28px", padding: "40px 56px", boxShadow: cardShadow }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: "#5a3e28", margin: "0 0 16px" }}>Restons connectés</h2>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <span key={s} style={{ background: "linear-gradient(145deg, #C4956A, #A67B52)", color: "#fff", padding: "10px 22px", borderRadius: "14px", fontWeight: 600, fontSize: "13px", cursor: "pointer", boxShadow: "3px 3px 8px rgba(0,0,0,0.1)" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>
      <footer style={{ textAlign: "center", padding: "30px 20px", fontSize: "13px", color: "#8a7a6a" }}>© 2026 Connected Mate</footer>
    </div>
  );
};

/* ============================================================
   DESIGN 35 — Matrix Digital (Tech)
   ============================================================ */
const MatrixDigital: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#0D0208", fontFamily: "'Courier New', 'Fira Code', monospace", color: "#00FF41", overflow: "hidden" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)", pointerEvents: "none", zIndex: 2 }}></div>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at center, rgba(0,255,65,0.03) 0%, transparent 70%)", pointerEvents: "none", zIndex: 1 }}></div>
      <div style={{ position: "relative", zIndex: 3 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "1px solid #003B00" }}>
          <div style={{ fontSize: "22px", fontWeight: 700 }}>&gt;_ Connected_Mate</div>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
              <span key={item} style={{ fontSize: "13px", cursor: "pointer", color: "#00FF41", opacity: 0.8 }}>[{item}]</span>
            ))}
          </div>
        </nav>
        <section style={{ padding: "100px 48px 60px" }}>
          <div style={{ maxWidth: "800px" }}>
            <div style={{ fontSize: "12px", color: "#008F11", marginBottom: "12px" }}>root@connectedmate:~$ cat /welcome.txt</div>
            <h1 style={{ fontSize: "44px", fontWeight: 700, margin: "0 0 20px", lineHeight: 1.25, textShadow: "0 0 20px rgba(0,255,65,0.3)" }}>Connecter les idées,<br />inspirer le futur</h1>
            <p style={{ fontSize: "16px", color: "#008F11", maxWidth: "600px", lineHeight: 1.8, margin: "0 0 30px" }}>&gt; Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
            <div style={{ display: "inline-block", border: "1px solid #00FF41", padding: "12px 32px", cursor: "pointer", fontSize: "14px" }}>&gt; ENTER_SYSTEM</div>
          </div>
        </section>
        <section style={{ display: "flex", gap: "0", padding: "0 48px 60px", flexWrap: "wrap" }}>
          {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes_podcast" }, { num: "5", label: "Applications" }].map((s, i) => (
            <div key={s.label} style={{ border: "1px solid #003B00", padding: "24px 40px", flex: 1, minWidth: "200px", borderRight: i < 2 ? "none" : undefined }}>
              <div style={{ fontSize: "32px", fontWeight: 700, textShadow: "0 0 15px rgba(0,255,65,0.4)" }}>{s.num}</div>
              <div style={{ fontSize: "12px", color: "#008F11", marginTop: "6px" }}>{s.label}</div>
            </div>
          ))}
        </section>
        <section style={{ padding: "0 48px 80px", maxWidth: "1100px" }}>
          <div style={{ fontSize: "12px", color: "#008F11", marginBottom: "20px" }}>root@connectedmate:~$ ls /services/</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            {[
              { title: "keynotes/", desc: "Des conférences inspirantes sur l'innovation et l'IA." },
              { title: "podcasts/", desc: "Écoutez des conversations captivantes avec des leaders tech." },
              { title: "apps/", desc: "Des applications innovantes pour le quotidien." },
              { title: "blog/", desc: "Articles et analyses sur les tendances technologiques." },
            ].map((card) => (
              <div key={card.title} style={{ border: "1px solid #003B00", padding: "24px", background: "rgba(0,255,65,0.02)" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px", color: "#00FF41" }}>{card.title}</h3>
                <p style={{ fontSize: "13px", color: "#008F11", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ padding: "40px 48px 60px", borderTop: "1px solid #003B00" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 700, margin: "0 0 20px", textShadow: "0 0 15px rgba(0,255,65,0.3)" }}>Restons connectés</h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <span key={s} style={{ border: "1px solid #00FF41", padding: "8px 20px", fontSize: "13px", cursor: "pointer" }}>[{s}]</span>
            ))}
          </div>
        </section>
        <footer style={{ padding: "24px 48px", borderTop: "1px solid #003B00", fontSize: "12px", color: "#008F11" }}>© 2026 Connected Mate — All systems operational</footer>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 36 — Memphis (Playful)
   ============================================================ */
const Memphis: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", fontFamily: "'Poppins', 'Futura', sans-serif", color: "#222", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", top: "60px", left: "40px", width: "80px", height: "80px", background: "#FFD700", borderRadius: "50%", zIndex: 0 }}></div>
      <div style={{ position: "absolute", top: "200px", right: "80px", width: "0", height: "0", borderLeft: "50px solid transparent", borderRight: "50px solid transparent", borderBottom: "86px solid #FF6B9D", zIndex: 0 }}></div>
      <div style={{ position: "absolute", top: "400px", left: "100px", width: "60px", height: "60px", background: "#4ECDC4", transform: "rotate(45deg)", zIndex: 0 }}></div>
      <div style={{ position: "absolute", bottom: "300px", right: "120px", width: "70px", height: "70px", background: "#FFD700", borderRadius: "50%", zIndex: 0 }}></div>
      <div style={{ position: "absolute", bottom: "100px", left: "200px", width: "0", height: "0", borderLeft: "40px solid transparent", borderRight: "40px solid transparent", borderBottom: "70px solid #4ECDC4", zIndex: 0 }}></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
          <div style={{ fontSize: "28px", fontWeight: 900, color: "#222" }}>
            <span style={{ color: "#FF6B9D" }}>C</span>onnected <span style={{ color: "#4ECDC4" }}>M</span>ate
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {[
              { label: "Keynotes", bg: "#FF6B9D" },
              { label: "Podcasts", bg: "#4ECDC4" },
              { label: "Apps", bg: "#FFD700" },
              { label: "Blog", bg: "#7B68EE" },
            ].map((item) => (
              <span key={item.label} style={{ background: item.bg, color: "#fff", padding: "10px 22px", fontWeight: 700, fontSize: "13px", cursor: "pointer", border: "3px solid #222" }}>{item.label}</span>
            ))}
          </div>
        </nav>
        <section style={{ textAlign: "center", padding: "80px 20px 60px" }}>
          <div style={{ display: "inline-block", background: "#fff", border: "4px solid #222", padding: "50px 70px", position: "relative" }}>
            <div style={{ position: "absolute", top: "-12px", left: "-12px", width: "100%", height: "100%", border: "4px solid #FF6B9D", zIndex: -1, padding: "50px 70px", boxSizing: "content-box" }}></div>
            <h1 style={{ fontSize: "50px", fontWeight: 900, margin: "0 0 16px", lineHeight: 1.2 }}>
              <span style={{ color: "#FF6B9D" }}>Connecter</span> les idées,<br /><span style={{ color: "#4ECDC4" }}>inspirer</span> le futur
            </h1>
            <p style={{ fontSize: "18px", color: "#555", maxWidth: "520px", margin: "0 auto 30px", lineHeight: 1.6 }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
            <button style={{ background: "#FFD700", color: "#222", border: "3px solid #222", padding: "14px 40px", fontSize: "16px", fontWeight: 800, cursor: "pointer" }}>EXPLORER →</button>
          </div>
        </section>
        <section style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "0 40px 60px", flexWrap: "wrap" }}>
          {[
            { num: "50+", label: "Conférences", bg: "#FF6B9D" },
            { num: "100+", label: "Épisodes podcast", bg: "#4ECDC4" },
            { num: "5", label: "Applications", bg: "#FFD700" },
          ].map((s) => (
            <div key={s.label} style={{ background: s.bg, border: "3px solid #222", padding: "24px 44px", textAlign: "center" }}>
              <div style={{ fontSize: "38px", fontWeight: 900, color: "#222" }}>{s.num}</div>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "#222" }}>{s.label}</div>
            </div>
          ))}
        </section>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", padding: "0 48px 80px", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA.", bg: "#FF6B9D" },
            { title: "Podcasts", desc: "Écoutez des conversations captivantes avec des leaders tech.", bg: "#4ECDC4" },
            { title: "Apps", desc: "Des applications innovantes pour le quotidien.", bg: "#FFD700" },
            { title: "Blog", desc: "Articles et analyses sur les tendances technologiques.", bg: "#7B68EE" },
          ].map((card) => (
            <div key={card.title} style={{ background: "#fff", border: "3px solid #222", padding: "30px 24px" }}>
              <div style={{ width: "50px", height: "50px", background: card.bg, borderRadius: "50%", border: "3px solid #222", marginBottom: "16px" }}></div>
              <h3 style={{ fontSize: "20px", fontWeight: 800, margin: "0 0 10px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </section>
        <section style={{ textAlign: "center", padding: "40px 20px 60px" }}>
          <div style={{ display: "inline-block", background: "#4ECDC4", border: "3px solid #222", padding: "36px 56px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 16px", color: "#222" }}>Restons connectés</h2>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
                <span key={s} style={{ background: "#fff", border: "3px solid #222", padding: "8px 20px", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}>{s}</span>
              ))}
            </div>
          </div>
        </section>
        <footer style={{ textAlign: "center", padding: "30px 20px", fontSize: "14px", fontWeight: 700, borderTop: "3px solid #222" }}>© 2026 Connected Mate</footer>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 37 — Noir Cinema (Dark)
   ============================================================ */
const NoirCinema: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#000", fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#fff", overflow: "hidden" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)", pointerEvents: "none" }}></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "30px 60px" }}>
          <div style={{ fontSize: "22px", fontWeight: 300, letterSpacing: "6px", textTransform: "uppercase" }}>Connected Mate</div>
          <div style={{ display: "flex", gap: "32px" }}>
            {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
              <span key={item} style={{ fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer", color: "rgba(255,255,255,0.6)" }}>{item}</span>
            ))}
          </div>
        </nav>
        <section style={{ textAlign: "center", padding: "120px 20px 80px", position: "relative" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", pointerEvents: "none" }}></div>
          <h1 style={{ fontSize: "60px", fontWeight: 300, margin: "0 0 24px", lineHeight: 1.2, letterSpacing: "2px" }}>Connecter les idées,<br /><em>inspirer le futur</em></h1>
          <div style={{ width: "80px", height: "1px", background: "rgba(255,255,255,0.3)", margin: "0 auto 24px" }}></div>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.5)", maxWidth: "480px", margin: "0 auto 40px", lineHeight: 1.8, fontWeight: 300 }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
          <span style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 44px", fontSize: "13px", letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer" }}>Entrer</span>
        </section>
        <section style={{ display: "flex", justifyContent: "center", gap: "0", padding: "0 60px 80px" }}>
          {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes podcast" }, { num: "5", label: "Applications" }].map((s, i) => (
            <div key={s.label} style={{ textAlign: "center", padding: "30px 50px", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
              <div style={{ fontSize: "42px", fontWeight: 300, letterSpacing: "2px" }}>{s.num}</div>
              <div style={{ fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>{s.label}</div>
            </div>
          ))}
        </section>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", maxWidth: "900px", margin: "0 auto", padding: "0 60px 80px", background: "rgba(255,255,255,0.05)" }}>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA." },
            { title: "Podcasts", desc: "Écoutez des conversations captivantes avec des leaders tech." },
            { title: "Apps", desc: "Des applications innovantes pour le quotidien." },
            { title: "Blog", desc: "Articles et analyses sur les tendances technologiques." },
          ].map((card) => (
            <div key={card.title} style={{ background: "#000", padding: "40px 36px", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.03) 0%, transparent 60%)", pointerEvents: "none" }}></div>
              <h3 style={{ fontSize: "24px", fontWeight: 300, letterSpacing: "2px", margin: "0 0 12px" }}>{card.title}</h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, margin: 0, fontWeight: 300 }}>{card.desc}</p>
            </div>
          ))}
        </section>
        <section style={{ textAlign: "center", padding: "60px 20px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 300, letterSpacing: "4px", margin: "0 0 24px" }}>Restons connectés</h2>
          <div style={{ width: "60px", height: "1px", background: "rgba(255,255,255,0.3)", margin: "0 auto 24px" }}></div>
          <div style={{ display: "flex", gap: "24px", justifyContent: "center" }}>
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <span key={s} style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", color: "rgba(255,255,255,0.5)" }}>{s}</span>
            ))}
          </div>
        </section>
        <footer style={{ textAlign: "center", padding: "30px 20px", fontSize: "12px", letterSpacing: "3px", color: "rgba(255,255,255,0.25)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>© 2026 Connected Mate</footer>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 38 — Terracotta Earth (Organic)
   ============================================================ */
const TerracottaEarth: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#FFF8E7", fontFamily: "Georgia, 'Palatino', serif", color: "#3D2B1F" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: "2px solid #CC5A36" }}>
        <div style={{ fontSize: "26px", fontWeight: 700, color: "#CC5A36" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "28px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ fontSize: "15px", color: "#B2AC88", cursor: "pointer", fontWeight: 600 }}>{item}</span>
          ))}
        </div>
      </nav>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "80vh", alignItems: "center" }}>
        <div style={{ padding: "80px 60px" }}>
          <div style={{ width: "50px", height: "4px", background: "#CC5A36", marginBottom: "24px" }}></div>
          <h1 style={{ fontSize: "48px", fontWeight: 700, color: "#3D2B1F", margin: "0 0 20px", lineHeight: 1.25 }}>Connecter les idées, inspirer le futur</h1>
          <p style={{ fontSize: "18px", color: "#8B7355", lineHeight: 1.8, margin: "0 0 32px", maxWidth: "440px" }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
          <button style={{ background: "#CC5A36", color: "#FFF8E7", border: "none", padding: "14px 36px", fontSize: "16px", fontWeight: 600, cursor: "pointer", borderRadius: "4px" }}>Découvrir</button>
        </div>
        <div style={{ background: "linear-gradient(135deg, #CC5A36 0%, #A0522D 50%, #B2AC88 100%)", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", color: "#FFF8E7" }}>
            {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes podcast" }, { num: "5", label: "Applications" }].map((s) => (
              <div key={s.label} style={{ marginBottom: "28px" }}>
                <div style={{ fontSize: "44px", fontWeight: 700 }}>{s.num}</div>
                <div style={{ fontSize: "14px", opacity: 0.8, letterSpacing: "1px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "80px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#CC5A36", margin: "0 0 40px", textAlign: "center" }}>Nos Expertises</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA." },
            { title: "Podcasts", desc: "Écoutez des conversations captivantes avec des leaders tech." },
            { title: "Apps", desc: "Des applications innovantes pour le quotidien." },
            { title: "Blog", desc: "Articles et analyses sur les tendances technologiques." },
          ].map((card) => (
            <div key={card.title} style={{ background: "#FFF", border: "1px solid #E8DCC8", borderRadius: "8px", padding: "32px 28px", borderTop: "4px solid #CC5A36" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#CC5A36", margin: "0 0 12px" }}>{card.title}</h3>
              <p style={{ fontSize: "15px", color: "#8B7355", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "linear-gradient(135deg, #CC5A36, #A0522D)", padding: "60px 48px", textAlign: "center" }}>
        <h2 style={{ fontSize: "30px", fontWeight: 700, color: "#FFF8E7", margin: "0 0 20px" }}>Restons connectés</h2>
        <p style={{ fontSize: "16px", color: "rgba(255,248,231,0.7)", margin: "0 0 24px" }}>Suivez-nous sur les réseaux sociaux</p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <span key={s} style={{ border: "1px solid rgba(255,248,231,0.4)", color: "#FFF8E7", padding: "10px 24px", borderRadius: "4px", fontSize: "14px", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>
      <footer style={{ textAlign: "center", padding: "30px 20px", fontSize: "14px", color: "#B2AC88", background: "#3D2B1F" }}>© 2026 Connected Mate</footer>
    </div>
  );
};

/* ============================================================
   DESIGN 39 — Arctic Frost (Gradient)
   ============================================================ */
const ArcticFrost: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #E8F4FD 0%, #F5FAFD 40%, #FFFFFF 100%)", fontFamily: "'Inter', 'Helvetica Neue', sans-serif", color: "#2C3E50" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <div style={{ fontSize: "24px", fontWeight: 700, color: "#5B9BD5" }}>Connected Mate</div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <span key={item} style={{ fontSize: "14px", color: "#7EB3D8", cursor: "pointer", fontWeight: 500 }}>{item}</span>
          ))}
        </div>
      </nav>
      <section style={{ textAlign: "center", padding: "100px 20px 80px" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", borderRadius: "24px", padding: "60px 80px", border: "1px solid rgba(91,155,213,0.15)", boxShadow: "0 8px 32px rgba(91,155,213,0.08)" }}>
          <h1 style={{ fontSize: "50px", fontWeight: 800, margin: "0 0 18px", lineHeight: 1.2, background: "linear-gradient(135deg, #5B9BD5, #8EC5E8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connecter les idées,<br />inspirer le futur</h1>
          <p style={{ fontSize: "18px", color: "#7A98B3", maxWidth: "500px", margin: "0 auto 32px", lineHeight: 1.7 }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
          <button style={{ background: "linear-gradient(135deg, #5B9BD5, #8EC5E8)", border: "none", color: "#fff", padding: "14px 40px", borderRadius: "12px", fontSize: "16px", fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 16px rgba(91,155,213,0.3)" }}>Explorer</button>
        </div>
      </section>
      <section style={{ display: "flex", justifyContent: "center", gap: "32px", padding: "0 40px 80px", flexWrap: "wrap" }}>
        {[{ num: "50+", label: "Conférences" }, { num: "100+", label: "Épisodes podcast" }, { num: "5", label: "Applications" }].map((s) => (
          <div key={s.label} style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "28px 48px", textAlign: "center", border: "1px solid rgba(91,155,213,0.1)", boxShadow: "0 4px 20px rgba(91,155,213,0.06)" }}>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#5B9BD5" }}>{s.num}</div>
            <div style={{ fontSize: "14px", color: "#7A98B3", marginTop: "4px" }}>{s.label}</div>
          </div>
        ))}
      </section>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", padding: "0 48px 80px", maxWidth: "1100px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des conférences inspirantes sur l'innovation et l'IA." },
          { title: "Podcasts", desc: "Écoutez des conversations captivantes avec des leaders tech." },
          { title: "Apps", desc: "Des applications innovantes pour le quotidien." },
          { title: "Blog", desc: "Articles et analyses sur les tendances technologiques." },
        ].map((card) => (
          <div key={card.title} style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)", borderRadius: "16px", padding: "32px 28px", border: "1px solid rgba(91,155,213,0.1)", boxShadow: "0 4px 20px rgba(91,155,213,0.06)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "linear-gradient(135deg, #E8F4FD, #D4E9F7)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "linear-gradient(135deg, #5B9BD5, #8EC5E8)" }}></div>
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#3D6B8E", margin: "0 0 10px" }}>{card.title}</h3>
            <p style={{ fontSize: "14px", color: "#7A98B3", lineHeight: 1.7, margin: 0 }}>{card.desc}</p>
          </div>
        ))}
      </section>
      <section style={{ textAlign: "center", padding: "60px 20px 40px" }}>
        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)", borderRadius: "20px", padding: "40px 60px", border: "1px solid rgba(91,155,213,0.1)", boxShadow: "0 4px 20px rgba(91,155,213,0.06)" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#3D6B8E", margin: "0 0 16px" }}>Restons connectés</h2>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
            {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
              <span key={s} style={{ background: "linear-gradient(135deg, #5B9BD5, #8EC5E8)", color: "#fff", padding: "10px 22px", borderRadius: "10px", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>{s}</span>
            ))}
          </div>
        </div>
      </section>
      <footer style={{ textAlign: "center", padding: "30px 20px", fontSize: "13px", color: "#7A98B3" }}>© 2026 Connected Mate</footer>
    </div>
  );
};

/* ============================================================
   DESIGN 40 — Street Art (Brutalist)
   ============================================================ */
const StreetArt: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#808080", fontFamily: "'Impact', 'Arial Black', sans-serif", color: "#fff", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "repeating-conic-gradient(rgba(0,0,0,0.03) 0% 25%, transparent 0% 50%) 0 0 / 4px 4px", pointerEvents: "none", zIndex: 0 }}></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "4px solid #FF006E" }}>
          <div style={{ fontSize: "32px", fontWeight: 900, color: "#FF006E", textTransform: "uppercase", letterSpacing: "-1px", textShadow: "3px 3px 0 #000" }}>Connected Mate</div>
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { label: "KEYNOTES", bg: "#FF006E" },
              { label: "PODCASTS", bg: "#00FF87" },
              { label: "APPS", bg: "#FFBE0B" },
              { label: "BLOG", bg: "#3A86FF" },
            ].map((item) => (
              <span key={item.label} style={{ background: item.bg, color: "#000", padding: "8px 18px", fontWeight: 900, fontSize: "12px", cursor: "pointer", textTransform: "uppercase" }}>{item.label}</span>
            ))}
          </div>
        </nav>
        <section style={{ padding: "80px 40px 60px", position: "relative" }}>
          <div style={{ position: "absolute", top: "20px", right: "100px", width: "8px", height: "120px", background: "linear-gradient(180deg, #FF006E, transparent)", borderRadius: "0 0 4px 4px" }}></div>
          <div style={{ position: "absolute", top: "50px", right: "200px", width: "6px", height: "80px", background: "linear-gradient(180deg, #00FF87, transparent)", borderRadius: "0 0 3px 3px" }}></div>
          <div style={{ position: "absolute", top: "10px", right: "150px", width: "10px", height: "160px", background: "linear-gradient(180deg, #FFBE0B, transparent)", borderRadius: "0 0 5px 5px" }}></div>
          <div style={{ maxWidth: "800px" }}>
            <h1 style={{ fontSize: "72px", fontWeight: 900, margin: "0 0 20px", lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "-2px" }}>
              <span style={{ color: "#FF006E", textShadow: "4px 4px 0 #000" }}>Connecter</span><br />
              <span style={{ color: "#00FF87", textShadow: "4px 4px 0 #000" }}>les idées,</span><br />
              <span style={{ color: "#FFBE0B", textShadow: "4px 4px 0 #000" }}>inspirer</span>{" "}
              <span style={{ color: "#3A86FF", textShadow: "4px 4px 0 #000" }}>le futur</span>
            </h1>
            <p style={{ fontSize: "18px", color: "#ccc", maxWidth: "550px", lineHeight: 1.7, fontFamily: "'Arial', sans-serif", fontWeight: 400, margin: "0 0 32px" }}>Nous connectons les personnes et la technologie pour créer un avenir plus innovant et inspiré.</p>
            <button style={{ background: "#FF006E", color: "#fff", border: "4px solid #000", padding: "16px 40px", fontSize: "18px", fontWeight: 900, cursor: "pointer", textTransform: "uppercase", letterSpacing: "2px" }}>ENTRER</button>
          </div>
        </section>
        <section style={{ display: "flex", gap: "16px", padding: "20px 40px 60px", flexWrap: "wrap" }}>
          {[
            { num: "50+", label: "CONFÉRENCES", bg: "#FF006E" },
            { num: "100+", label: "ÉPISODES PODCAST", bg: "#00FF87" },
            { num: "5", label: "APPLICATIONS", bg: "#FFBE0B" },
          ].map((s, i) => (
            <div key={s.label} style={{ background: s.bg, color: "#000", padding: "24px 36px", border: "4px solid #000", transform: `rotate(${i % 2 === 0 ? -2 : 1.5}deg)`, flex: 1, minWidth: "200px" }}>
              <div style={{ fontSize: "48px", fontWeight: 900, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: "12px", fontWeight: 900, letterSpacing: "2px", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </section>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px", padding: "0 40px 80px", maxWidth: "1100px" }}>
          {[
            { title: "KEYNOTES", desc: "Des conférences inspirantes sur l'innovation et l'IA.", bg: "#FF006E", rot: -1 },
            { title: "PODCASTS", desc: "Écoutez des conversations captivantes avec des leaders tech.", bg: "#00FF87", rot: 0.5 },
            { title: "APPS", desc: "Des applications innovantes pour le quotidien.", bg: "#FFBE0B", rot: -0.5 },
            { title: "BLOG", desc: "Articles et analyses sur les tendances technologiques.", bg: "#3A86FF", rot: 1 },
          ].map((card) => (
            <div key={card.title} style={{ background: "#1a1a1a", border: `4px solid ${card.bg}`, padding: "28px 24px", transform: `rotate(${card.rot}deg)` }}>
              <div style={{ background: card.bg, color: "#000", display: "inline-block", padding: "4px 14px", fontWeight: 900, fontSize: "14px", marginBottom: "14px" }}>{card.title}</div>
              <p style={{ fontSize: "14px", color: "#aaa", lineHeight: 1.7, margin: 0, fontFamily: "'Arial', sans-serif", fontWeight: 400 }}>{card.desc}</p>
            </div>
          ))}
        </section>
        <section style={{ padding: "40px 40px 60px" }}>
          <div style={{ background: "#1a1a1a", border: "4px solid #FF006E", padding: "40px", display: "inline-block" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 900, margin: "0 0 20px", textTransform: "uppercase", color: "#FF006E", textShadow: "3px 3px 0 #000" }}>Restons connectés</h2>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { label: "Twitter", bg: "#FF006E" },
                { label: "LinkedIn", bg: "#3A86FF" },
                { label: "YouTube", bg: "#00FF87" },
                { label: "Instagram", bg: "#FFBE0B" },
              ].map((s) => (
                <span key={s.label} style={{ background: s.bg, color: "#000", padding: "8px 20px", fontWeight: 900, fontSize: "13px", cursor: "pointer", textTransform: "uppercase", border: "3px solid #000" }}>{s.label}</span>
              ))}
            </div>
          </div>
        </section>
        <footer style={{ padding: "24px 40px", borderTop: "4px solid #FF006E", fontSize: "14px", fontWeight: 900, color: "#FF006E", textTransform: "uppercase", letterSpacing: "2px" }}>© 2026 Connected Mate</footer>
      </div>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  {
    id: 31,
    name: "Candy Pop",
    category: "Playful",
    description: "Bubblegum pink, turquoise and yellow with rounded shapes and a fun bouncy feel",
    component: CandyPop,
  },
  {
    id: 32,
    name: "Newspaper Classic",
    category: "Editorial",
    description: "Strict columns, serif headlines, thin rules, grayscale classic newspaper layout",
    component: NewspaperClassic,
  },
  {
    id: 33,
    name: "Holographic",
    category: "Tech",
    description: "Iridescent rainbow gradients on dark with chrome-like surfaces and futuristic shimmer",
    component: Holographic,
  },
  {
    id: 34,
    name: "Clay Morph",
    category: "Modern",
    description: "Soft shadows, pastel backgrounds, rounded 3D-looking cards with a warm tactile feel",
    component: ClayMorph,
  },
  {
    id: 35,
    name: "Matrix Digital",
    category: "Tech",
    description: "Black background with green digital rain inspiration, monospace hacker aesthetic",
    component: MatrixDigital,
  },
  {
    id: 36,
    name: "Memphis",
    category: "Playful",
    description: "80s Memphis Group style with squiggles, triangles, bold patterns in pink, blue, yellow and mint",
    component: Memphis,
  },
  {
    id: 37,
    name: "Noir Cinema",
    category: "Dark",
    description: "Pure black and white with dramatic lighting effects, film noir shadows, elegant",
    component: NoirCinema,
  },
  {
    id: 38,
    name: "Terracotta Earth",
    category: "Organic",
    description: "Warm terracotta, cream and sage green with a mediterranean feel",
    component: TerracottaEarth,
  },
  {
    id: 39,
    name: "Arctic Frost",
    category: "Gradient",
    description: "Ice blue, white and pale blue gradients with a crystalline clean and cold aesthetic",
    component: ArcticFrost,
  },
  {
    id: 40,
    name: "Street Art",
    category: "Brutalist",
    description: "Spray paint aesthetic with bright neon on concrete gray, drip effects and urban energy",
    component: StreetArt,
  },
];

