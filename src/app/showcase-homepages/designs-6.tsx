"use client";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 51 — Neon Arcade (Gaming/Entertainment)
   ============================================================ */
const NeonArcade: React.FC = () => {
  const neon = "#00FF88";
  const pink = "#FF2D87";
  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D", color: "#fff", fontFamily: "'Courier New', monospace", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `1px solid ${neon}22` }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: neon, textShadow: `0 0 20px ${neon}66` }}>CONNECTED//MATE</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          {["Arcade", "Leaderboard", "Shop", "Join"].map((t) => (
            <span key={t} style={{ cursor: "pointer", color: "#888" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 80px", textAlign: "center" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.3em", textTransform: "uppercase", color: pink, marginBottom: "24px" }}>INSERT COIN TO START</div>
        <h1 style={{ fontSize: "clamp(60px, 9vw, 130px)", fontWeight: 900, lineHeight: 0.95, margin: 0, textTransform: "uppercase", textShadow: `0 0 40px ${neon}44, 0 0 80px ${pink}22` }}>
          LEVEL<br />
          <span style={{ color: neon }}>UP</span>
        </h1>
        <p style={{ fontSize: "16px", color: "#666", maxWidth: "500px", margin: "32px auto 0", lineHeight: 1.8 }}>
          Des expériences interactives qui repoussent les limites du digital. Bienvenue dans le futur du jeu.
        </p>
        <button style={{ marginTop: "40px", padding: "16px 48px", background: "transparent", color: neon, border: `2px solid ${neon}`, fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer", boxShadow: `0 0 20px ${neon}33, inset 0 0 20px ${neon}11` }}>
          PLAY NOW
        </button>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", padding: "0 48px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ v: "10K+", l: "PLAYERS" }, { v: "∞", l: "LEVELS" }, { v: "24/7", l: "ONLINE" }].map((s) => (
          <div key={s.l} style={{ background: "#1A1A1A", padding: "40px 24px", textAlign: "center", border: `1px solid ${neon}11` }}>
            <div style={{ fontSize: "36px", fontWeight: 900, color: neon }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#555", letterSpacing: "0.2em", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "80px 48px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", color: pink, marginBottom: "32px", textTransform: "uppercase" }}>Featured Games</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {["Cyber Sprint", "Neon Drift", "Pixel Wars", "Code Breaker"].map((g, i) => (
            <div key={g} style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? neon : pink}11, transparent)`, border: `1px solid ${i % 2 === 0 ? neon : pink}22`, padding: "32px 24px", position: "relative" }}>
              <div style={{ fontSize: "48px", fontWeight: 900, color: `${i % 2 === 0 ? neon : pink}22`, position: "absolute", top: "8px", right: "16px" }}>0{i + 1}</div>
              <div style={{ fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{g}</div>
              <div style={{ fontSize: "12px", color: "#666", lineHeight: 1.6 }}>Une expérience immersive unique.</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "32px 48px", borderTop: `1px solid ${neon}11`, display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#444" }}>
        <span>© 2024 Connected Mate</span>
        <span style={{ color: neon }}>GAME OVER? NEVER.</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 52 — Botanical Garden (Nature/Wellness)
   ============================================================ */
const BotanicalGarden: React.FC = () => {
  const sage = "#7A8B6F";
  const cream = "#F5F0E8";
  return (
    <div style={{ minHeight: "100vh", background: cream, color: "#2C2C2C", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 400, fontStyle: "italic", color: sage }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", color: "#999", fontFamily: "sans-serif" }}>
          {["Garden", "Journal", "Seeds", "About"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "80px 48px 60px", maxWidth: "800px" }}>
        <div style={{ width: "40px", height: "2px", background: sage, marginBottom: "32px" }} />
        <h1 style={{ fontSize: "clamp(48px, 7vw, 90px)", fontWeight: 400, lineHeight: 1.1, margin: 0, fontStyle: "italic" }}>
          Cultivons
          <br />
          <span style={{ color: sage }}>ensemble</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 2, color: "#888", maxWidth: "420px", marginTop: "32px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Un espace dédié à la croissance, à la créativité et à la connexion avec la nature qui nous entoure.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#ddd" }}>
        {["Printemps", "Été", "Automne"].map((s) => (
          <div key={s} style={{ background: cream, padding: "60px 40px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontStyle: "italic", color: sage, marginBottom: "8px" }}>{s}</div>
            <div style={{ fontSize: "12px", color: "#bbb", fontFamily: "sans-serif" }}>Collection saisonnière</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "80px 48px", maxWidth: "600px" }}>
        <p style={{ fontSize: "24px", fontStyle: "italic", lineHeight: 1.7, color: sage }}>
          &ldquo;Dans chaque graine se cache une forêt entière. Chaque idée est un jardin en devenir.&rdquo;
        </p>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span>Grow with us</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 53 — Space Mission (Sci-Fi/Tech)
   ============================================================ */
const SpaceMission: React.FC = () => {
  const blue = "#4A9EFF";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #000 0%, #0A1628 50%, #0F2847 100%)", color: "#fff", fontFamily: "'Helvetica Neue', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase" }}>CM <span style={{ color: blue }}>Mission</span></span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.5 }}>
          {["Mission", "Crew", "Launch", "Contact"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "140px 48px 80px", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: blue, marginBottom: "32px" }}>Mission #001 — Lancement imminent</div>
        <h1 style={{ fontSize: "clamp(56px, 8vw, 120px)", fontWeight: 800, lineHeight: 0.95, margin: 0, letterSpacing: "-0.03em" }}>
          EXPLORE
          <br />
          <span style={{ color: blue }}>THE VOID</span>
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.4)", maxWidth: "500px", margin: "32px auto 0", lineHeight: 1.8 }}>
          Au-delà des frontières connues, nous construisons les technologies qui propulseront l&apos;humanité vers les étoiles.
        </p>
        <div style={{ marginTop: "48px", display: "inline-flex", gap: "16px" }}>
          <button style={{ padding: "14px 40px", background: blue, color: "#fff", border: "none", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>Launch</button>
          <button style={{ padding: "14px 40px", background: "transparent", color: blue, border: `1px solid ${blue}44`, fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>Mission Brief</button>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", margin: "0 48px" }}>
        {[{ v: "T-00:00", l: "Launch" }, { v: "384K", l: "km Distance" }, { v: "99.9%", l: "Success Rate" }, { v: "∞", l: "Possibilities" }].map((s) => (
          <div key={s.l} style={{ background: "rgba(74,158,255,0.05)", border: "1px solid rgba(74,158,255,0.1)", padding: "32px 20px", textAlign: "center" }}>
            <div style={{ fontSize: "28px", fontWeight: 700, color: blue, fontFamily: "monospace" }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#666", marginTop: "8px", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "48px", textAlign: "center", fontSize: "12px", color: "#444", marginTop: "80px" }}>
        <span>© 2024 Connected Mate — Mission Control</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 54 — Art Deco Luxe (Fashion/Luxury)
   ============================================================ */
const ArtDecoLuxe: React.FC = () => {
  const gold = "#C9A96E";
  return (
    <div style={{ minHeight: "100vh", background: "#1A1A1A", color: "#fff", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 48px", gap: "60px" }}>
        {["Collection", "Atelier"].map((t) => (
          <span key={t} style={{ fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#777", cursor: "pointer", fontFamily: "sans-serif" }}>{t}</span>
        ))}
        <span style={{ fontSize: "28px", fontWeight: 400, color: gold, letterSpacing: "0.15em" }}>CM</span>
        {["Journal", "Contact"].map((t) => (
          <span key={t} style={{ fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#777", cursor: "pointer", fontFamily: "sans-serif" }}>{t}</span>
        ))}
      </nav>

      <section style={{ padding: "100px 48px 60px", textAlign: "center" }}>
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto 40px" }} />
        <h1 style={{ fontSize: "clamp(48px, 7vw, 100px)", fontWeight: 400, lineHeight: 1.1, margin: 0, letterSpacing: "0.05em" }}>
          L&apos;ART DE
          <br />
          <span style={{ fontStyle: "italic", color: gold }}>CONNECTER</span>
        </h1>
        <div style={{ width: "60px", height: "1px", background: gold, margin: "40px auto" }} />
        <p style={{ fontSize: "15px", color: "#777", maxWidth: "500px", margin: "0 auto", lineHeight: 2, fontFamily: "sans-serif", fontWeight: 300 }}>
          L&apos;élégance intemporelle rencontre l&apos;innovation digitale. Chaque détail est une œuvre d&apos;art.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", maxWidth: "900px", margin: "60px auto", gap: "1px", background: "#333" }}>
        {["Keynotes", "Podcasts", "Applications", "Blog"].map((item) => (
          <div key={item} style={{ background: "#1A1A1A", padding: "60px 40px", textAlign: "center" }}>
            <div style={{ fontSize: "24px", fontStyle: "italic", color: gold, marginBottom: "8px" }}>{item}</div>
            <div style={{ fontSize: "12px", color: "#666", fontFamily: "sans-serif", letterSpacing: "0.1em" }}>Découvrir →</div>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px 48px", borderTop: `1px solid ${gold}22` }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#555", fontFamily: "sans-serif" }}>Depuis 2024</div>
        <div style={{ fontSize: "36px", fontStyle: "italic", color: gold, marginTop: "16px" }}>Connected Mate</div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${gold}11`, textAlign: "center", fontSize: "11px", color: "#555", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Fait avec passion</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 55 — Retro Terminal (Developer/Hacker)
   ============================================================ */
const RetroTerminal: React.FC = () => {
  const green = "#33FF33";
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A", color: green, fontFamily: "'Courier New', 'Lucida Console', monospace", margin: 0, padding: "24px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", opacity: 0.4, marginBottom: "8px" }}>Connected Mate OS v4.2.1 — Terminal</div>
        <div style={{ borderTop: `1px solid ${green}22`, paddingTop: "16px" }}>
          <div style={{ marginBottom: "40px" }}>
            <span style={{ opacity: 0.5 }}>user@cm-server:~$</span> cat welcome.txt
          </div>

          <pre style={{ fontSize: "clamp(16px, 3vw, 32px)", lineHeight: 1.4, margin: "0 0 40px", whiteSpace: "pre-wrap" }}>
{`╔══════════════════════════════════╗
║   CONNECTED MATE                 ║
║   Connecter les idées,           ║
║   inspirer le futur.             ║
╚══════════════════════════════════╝`}
          </pre>

          <div style={{ marginBottom: "32px" }}>
            <span style={{ opacity: 0.5 }}>user@cm-server:~$</span> ls -la /projects/
          </div>

          <div style={{ display: "grid", gap: "4px", fontSize: "14px", marginBottom: "40px", paddingLeft: "16px" }}>
            {[
              "drwxr-xr-x  keynotes/      — 50+ conférences",
              "drwxr-xr-x  podcasts/      — 100+ épisodes",
              "drwxr-xr-x  apps/          — 5 applications",
              "-rw-r--r--  README.md      — Documentation",
            ].map((line) => (
              <div key={line} style={{ opacity: 0.7 }}>{line}</div>
            ))}
          </div>

          <div style={{ marginBottom: "16px" }}>
            <span style={{ opacity: 0.5 }}>user@cm-server:~$</span> echo &quot;Mission&quot;
          </div>
          <p style={{ fontSize: "16px", lineHeight: 1.8, opacity: 0.6, margin: "0 0 40px", paddingLeft: "16px", maxWidth: "600px" }}>
            Nous transformons la complexité technologique en expériences humaines. Chaque ligne de code raconte une histoire.
          </p>

          <div style={{ marginBottom: "16px" }}>
            <span style={{ opacity: 0.5 }}>user@cm-server:~$</span> ./connect.sh
          </div>
          <div style={{ display: "inline-block", padding: "12px 32px", border: `1px solid ${green}`, fontSize: "14px", cursor: "pointer", marginBottom: "40px" }}>
            [ LANCER LA CONNEXION ]
          </div>

          <div style={{ borderTop: `1px solid ${green}22`, paddingTop: "16px", fontSize: "11px", opacity: 0.3 }}>
            © 2024 Connected Mate — Process complete. Exit code: 0
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   DESIGN 56 — Watercolor Dream (Artistic/Creative)
   ============================================================ */
const WatercolorDream: React.FC = () => {
  const lavender = "#9B8EC1";
  const peach = "#F4A77A";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #FDF6F0 0%, #F0E8F5 50%, #E8F0F5 100%)", color: "#4A4A4A", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 400, fontStyle: "italic", color: lavender }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#aaa", fontFamily: "sans-serif" }}>
          {["Galerie", "Atelier", "Journal", "Contact"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "100px 48px 60px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 110px)", fontWeight: 400, lineHeight: 1.05, margin: 0, fontStyle: "italic" }}>
          Rêver en
          <br />
          <span style={{ color: lavender }}>couleurs</span>
        </h1>
        <p style={{ fontSize: "17px", color: "#aaa", maxWidth: "460px", margin: "32px auto 0", lineHeight: 1.9, fontFamily: "sans-serif", fontWeight: 300 }}>
          Où la technologie rencontre la poésie. Chaque projet est une aquarelle digitale, unique et éphémère.
        </p>
        <div style={{ marginTop: "40px", display: "inline-block", padding: "14px 40px", background: `linear-gradient(135deg, ${lavender}, ${peach})`, color: "#fff", fontSize: "13px", fontWeight: 600, fontFamily: "sans-serif", letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: "100px", cursor: "pointer" }}>
          Explorer
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "60px 48px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ n: "Keynotes", c: lavender }, { n: "Podcasts", c: peach }, { n: "Apps", c: "#7ABFB0" }].map((item) => (
          <div key={item.n} style={{ background: "#fff", borderRadius: "16px", padding: "40px 24px", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: `${item.c}22`, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: item.c }} />
            </div>
            <div style={{ fontSize: "18px", fontStyle: "italic", color: item.c }}>{item.n}</div>
            <div style={{ fontSize: "12px", color: "#bbb", marginTop: "8px", fontFamily: "sans-serif" }}>Découvrir</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "60px 48px", textAlign: "center" }}>
        <p style={{ fontSize: "24px", fontStyle: "italic", color: lavender, lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
          &ldquo;Chaque pixel est une goutte de peinture sur la toile infinie du web.&rdquo;
        </p>
      </section>

      <footer style={{ padding: "24px 48px", textAlign: "center", fontSize: "12px", color: "#ccc", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Peint avec amour</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 57 — Brutalist Manifesto (Counter-Culture)
   ============================================================ */
const BrutalistManifesto: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", fontFamily: "'Arial', sans-serif", margin: 0 }}>
      <nav style={{ padding: "20px 24px", borderBottom: "3px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "16px", fontWeight: 900, textTransform: "uppercase" }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "16px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase" }}>
          {["ABOUT", "WORK", "CONTACT"].map((t) => (
            <span key={t} style={{ cursor: "pointer", textDecoration: "underline" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "40px 24px" }}>
        <h1 style={{ fontSize: "clamp(64px, 12vw, 180px)", fontWeight: 900, lineHeight: 0.85, margin: 0, textTransform: "uppercase", letterSpacing: "-0.04em" }}>
          NO
          <br />
          BULLSHIT
          <br />
          <span style={{ color: "#fff", WebkitTextStroke: "3px #000" }}>DESIGN</span>
        </h1>
      </section>

      <section style={{ padding: "24px", borderTop: "3px solid #000", borderBottom: "3px solid #000" }}>
        <p style={{ fontSize: "18px", lineHeight: 1.6, fontWeight: 400, maxWidth: "700px" }}>
          Nous rejetons le superflu. Nous embrassons le fonctionnel. Chaque pixel a une raison d&apos;exister. Le reste est du bruit.
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "3px solid #000" }}>
        {["50+ KEYNOTES", "100+ PODCASTS", "5 APPS", "∞ IDEAS"].map((item, i) => (
          <div key={item} style={{ padding: "40px 24px", borderRight: i % 2 === 0 ? "3px solid #000" : "none", borderBottom: i < 2 ? "3px solid #000" : "none" }}>
            <div style={{ fontSize: "32px", fontWeight: 900 }}>{item}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "40px 24px" }}>
        <div style={{ display: "inline-block", padding: "16px 32px", background: "#000", color: "#fff", fontSize: "14px", fontWeight: 900, textTransform: "uppercase", cursor: "pointer" }}>
          VOIR LE TRAVAIL →
        </div>
      </section>

      <footer style={{ padding: "20px 24px", borderTop: "3px solid #000", fontSize: "12px", fontWeight: 700, display: "flex", justifyContent: "space-between" }}>
        <span>© 2024 CM</span>
        <span>RAW. REAL. RADICAL.</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 58 — Zen Meditation (Wellness/Mindfulness)
   ============================================================ */
const ZenMeditation: React.FC = () => {
  const stone = "#A8A08E";
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAF7", color: "#3A3A3A", fontFamily: "'Palatino', 'Book Antiqua', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "center", padding: "48px", gap: "48px", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: stone, fontFamily: "sans-serif" }}>
        {["Respirer", "Écouter", "Créer", "Être"].map((t) => (
          <span key={t} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ padding: "80px 48px", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ width: "1px", height: "60px", background: stone, margin: "0 auto 40px", opacity: 0.4 }} />
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 300, lineHeight: 1.3, margin: 0, letterSpacing: "0.05em" }}>
          Le silence
          <br />
          est une <span style={{ fontStyle: "italic", color: stone }}>réponse</span>
        </h1>
        <div style={{ width: "1px", height: "60px", background: stone, margin: "40px auto", opacity: 0.4 }} />
        <p style={{ fontSize: "16px", color: stone, lineHeight: 2, maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif", fontWeight: 300 }}>
          Dans le calme naît la clarté. Nous créons des espaces digitaux qui invitent à la réflexion.
        </p>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "80px", padding: "60px 48px" }}>
        {[{ v: "50+", l: "Moments" }, { v: "100+", l: "Histoires" }, { v: "5", l: "Chemins" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 300, color: stone }}>{s.v}</div>
            <div style={{ fontSize: "11px", color: "#ccc", marginTop: "8px", fontFamily: "sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ padding: "60px 48px 80px", textAlign: "center" }}>
        <div style={{ display: "inline-block", padding: "16px 48px", border: `1px solid ${stone}66`, color: stone, fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>
          Commencer le voyage
        </div>
      </section>

      <footer style={{ padding: "24px 48px", textAlign: "center", fontSize: "12px", color: "#ddd", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate — Namaste</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 59 — Cyber Punk City (Futuristic/Urban)
   ============================================================ */
const CyberPunkCity: React.FC = () => {
  const magenta = "#FF00FF";
  const cyan = "#00FFFF";
  return (
    <div style={{ minHeight: "100vh", background: "#0A000F", color: "#fff", fontFamily: "'Helvetica Neue', sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `1px solid ${magenta}22` }}>
        <span style={{ fontSize: "18px", fontWeight: 800, background: `linear-gradient(90deg, ${magenta}, ${cyan})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>CONNECTED//MATE</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#666" }}>
          {["Districts", "Network", "Upload", "Jack In"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ padding: "120px 48px 80px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: cyan, marginBottom: "24px", fontFamily: "monospace" }}>// SECTOR 7 — CONNECTED DISTRICT</div>
        <h1 style={{ fontSize: "clamp(56px, 9vw, 130px)", fontWeight: 900, lineHeight: 0.9, margin: 0, textTransform: "uppercase" }}>
          <span style={{ color: magenta }}>NEON</span>
          <br />
          DREAMS
        </h1>
        <p style={{ fontSize: "15px", color: "#555", maxWidth: "480px", marginTop: "32px", lineHeight: 1.8, fontFamily: "monospace" }}>
          Dans les ruelles digitales de la métropole, nous codons le futur. Chaque connexion est un signal lumineux dans la nuit.
        </p>
        <div style={{ marginTop: "40px", display: "flex", gap: "12px" }}>
          <button style={{ padding: "14px 36px", background: `linear-gradient(135deg, ${magenta}, ${cyan})`, color: "#000", border: "none", fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>JACK IN</button>
          <button style={{ padding: "14px 36px", background: "transparent", color: cyan, border: `1px solid ${cyan}44`, fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", fontFamily: "monospace" }}>&gt; SCAN</button>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", margin: "0 48px" }}>
        {[{ v: "7.2M", l: "CONNECTIONS", c: magenta }, { v: "∞", l: "BANDWIDTH", c: cyan }, { v: "0ms", l: "LATENCY", c: magenta }].map((s) => (
          <div key={s.l} style={{ background: `${s.c}08`, border: `1px solid ${s.c}22`, padding: "36px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 900, color: s.c, fontFamily: "monospace" }}>{s.v}</div>
            <div style={{ fontSize: "10px", color: "#555", letterSpacing: "0.2em", marginTop: "8px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <footer style={{ padding: "32px 48px", textAlign: "center", fontSize: "11px", color: "#333", fontFamily: "monospace", marginTop: "60px" }}>
        <span>© 2077 Connected Mate — The future is now</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 60 — Newspaper Edition (Editorial/Classic)
   ============================================================ */
const NewspaperEdition: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", background: "#FAF8F3", color: "#1A1A1A", fontFamily: "'Georgia', 'Times New Roman', serif", margin: 0 }}>
      <header style={{ textAlign: "center", padding: "32px 24px 16px", borderBottom: "2px solid #000" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", fontFamily: "sans-serif", marginBottom: "12px" }}>Mercredi 11 Mars 2026 — Édition spéciale</div>
        <h1 style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400, margin: "0 0 8px", letterSpacing: "0.02em", fontStyle: "italic" }}>The Connected Mate</h1>
        <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", fontFamily: "sans-serif" }}>Connecter les idées, inspirer le futur — Fondé en 2024</div>
      </header>

      <nav style={{ display: "flex", justifyContent: "center", gap: "32px", padding: "12px 24px", borderBottom: "1px solid #ddd", fontSize: "12px", fontFamily: "sans-serif", color: "#666" }}>
        {["À la Une", "Keynotes", "Podcasts", "Applications", "Opinion"].map((t) => (
          <span key={t} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ borderBottom: "1px solid #ddd", paddingBottom: "32px", marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", fontFamily: "sans-serif", color: "#C0392B", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>BREAKING</div>
          <h2 style={{ fontSize: "36px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 16px" }}>
            Connected Mate lance une nouvelle ère de conférences interactives
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#666" }}>
            Après le succès retentissant de ses 50 premiers keynotes, la plateforme annonce une série d&apos;innovations qui promettent de transformer la façon dont nous partageons les idées.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {[
            { t: "Les podcasts qui changent tout", d: "Plus de 100 épisodes et une communauté grandissante." },
            { t: "5 applications, 5 révolutions", d: "Chaque app repousse les frontières du possible." },
          ].map((a) => (
            <div key={a.t} style={{ borderTop: "1px solid #ddd", paddingTop: "16px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, lineHeight: 1.3, margin: "0 0 8px" }}>{a.t}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#888" }}>{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px", borderTop: "2px solid #000", textAlign: "center", fontSize: "11px", color: "#999", fontFamily: "sans-serif" }}>
        <span>© 2024 The Connected Mate — Tous droits réservés</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 51, name: "Neon Arcade", category: "Gaming", description: "Arcade gaming with neon green/pink, glowing text, player stats, featured games grid", component: NeonArcade },
  { id: 52, name: "Botanical Garden", category: "Nature", description: "Serene garden with sage green, cream background, seasonal collections, poetic quote", component: BotanicalGarden },
  { id: 53, name: "Space Mission", category: "Sci-Fi", description: "Space exploration with deep blue gradient, mission countdown, launch stats", component: SpaceMission },
  { id: 54, name: "Art Deco Luxe", category: "Luxury", description: "Art deco elegance with gold accents, centered nav, symmetrical grid layout", component: ArtDecoLuxe },
  { id: 55, name: "Retro Terminal", category: "Developer", description: "Hacker terminal with green-on-black, ASCII art, file listing, command prompts", component: RetroTerminal },
  { id: 56, name: "Watercolor Dream", category: "Artistic", description: "Dreamy watercolors with lavender/peach gradient, rounded cards, poetic feel", component: WatercolorDream },
  { id: 57, name: "Brutalist Manifesto", category: "Brutalist", description: "Raw brutalism with heavy borders, massive type, no-nonsense black & white", component: BrutalistManifesto },
  { id: 58, name: "Zen Meditation", category: "Wellness", description: "Minimal zen with stone colors, vertical lines, centered layout, calm typography", component: ZenMeditation },
  { id: 59, name: "Cyber Punk City", category: "Futuristic", description: "Cyberpunk neons with magenta/cyan gradients, monospace type, dark atmosphere", component: CyberPunkCity },
  { id: 60, name: "Newspaper Edition", category: "Editorial", description: "Classic newspaper with serif masthead, breaking news, two-column articles", component: NewspaperEdition },
];
