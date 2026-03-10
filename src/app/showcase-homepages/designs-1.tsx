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

/* ============================================================
   DESIGN 1 — Swiss Minimal
   ============================================================ */
const SwissMinimal: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#111", background: "#fff", minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 60px", borderBottom: "1px solid #eee" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <Link href="#" style={{ color: "#111", textDecoration: "none" }}>Keynotes</Link>
          <Link href="#" style={{ color: "#111", textDecoration: "none" }}>Podcasts</Link>
          <Link href="#" style={{ color: "#111", textDecoration: "none" }}>Apps</Link>
          <Link href="#" style={{ color: "#111", textDecoration: "none" }}>Blog</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "140px 60px 100px", maxWidth: "900px" }}>
        <h1 style={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.1, margin: 0, letterSpacing: "-0.02em" }}>
          Connecter les idées,{" "}
          <span style={{ color: "#E30613" }}>inspirer</span> le futur
        </h1>
        <p style={{ fontSize: "20px", lineHeight: 1.7, color: "#666", marginTop: "32px", maxWidth: "600px" }}>
          Nous connectons les esprits visionnaires et la technologie pour façonner le monde de demain. Conférences, podcasts et applications au service de l&apos;innovation.
        </p>
        <div style={{ marginTop: "48px", display: "flex", gap: "16px" }}>
          <button style={{ padding: "14px 36px", background: "#111", color: "#fff", border: "none", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
            Découvrir
          </button>
          <button style={{ padding: "14px 36px", background: "transparent", color: "#111", border: "1px solid #111", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
            En savoir plus
          </button>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
        {[
          { value: "50+", label: "Conférences" },
          { value: "100+", label: "Épisodes podcast" },
          { value: "5", label: "Applications" },
        ].map((stat, i) => (
          <div key={i} style={{ flex: 1, padding: "60px", borderRight: i < 2 ? "1px solid #eee" : "none", textAlign: "center" }}>
            <div style={{ fontSize: "48px", fontWeight: 700 }}>{stat.value}</div>
            <div style={{ fontSize: "13px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginTop: "8px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "100px 60px" }}>
        <h2 style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "48px" }}>Ce que nous faisons</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#eee" }}>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes sur l'IA, la tech et l'innovation avec les meilleurs experts mondiaux." },
            { title: "Podcasts", desc: "Plus de 100 épisodes explorant les tendances technologiques et les histoires de ceux qui façonnent le futur." },
            { title: "Apps", desc: "Des applications innovantes qui transforment la façon dont nous interagissons avec la technologie au quotidien." },
            { title: "Blog", desc: "Articles approfondis, analyses et réflexions sur l'écosystème tech et ses évolutions." },
          ].map((f, i) => (
            <div key={i} style={{ background: "#fff", padding: "48px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 700, margin: "0 0 16px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#666", margin: 0 }}>{f.desc}</p>
              <span style={{ display: "inline-block", marginTop: "24px", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E30613", cursor: "pointer" }}>Explorer →</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 60px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "36px", fontWeight: 700, margin: 0 }}>Restons connectés</h2>
          <p style={{ color: "#666", marginTop: "8px", fontSize: "15px" }}>Suivez-nous sur les réseaux sociaux</p>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: "#111", textDecoration: "none", fontSize: "13px", letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 20px", border: "1px solid #ddd" }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 60px", borderTop: "1px solid #eee", fontSize: "12px", color: "#999", letterSpacing: "0.1em" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 2 — Dark Luxe
   ============================================================ */
const DarkLuxe: React.FC = () => {
  const gold = "#C5A55A";
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#E8E0D0", background: "#0A0A0A", minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "36px 60px", borderBottom: `1px solid ${gold}22` }}>
        <span style={{ fontSize: "20px", fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", color: gold }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "36px", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: "#999", textDecoration: "none" }}>{item}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "160px 60px 120px", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ width: "60px", height: "1px", background: gold, margin: "0 auto 40px" }} />
        <h1 style={{ fontSize: "56px", fontWeight: 400, lineHeight: 1.3, margin: 0, fontStyle: "italic" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.9, color: "#888", marginTop: "32px", maxWidth: "550px", margin: "32px auto 0" }}>
          Là où la vision rencontre la technologie. Nous créons des ponts entre les innovateurs et les idées qui transforment notre monde.
        </p>
        <button style={{ marginTop: "48px", padding: "16px 48px", background: "transparent", color: gold, border: `1px solid ${gold}`, fontSize: "12px", letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>
          Découvrir notre univers
        </button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "80px", padding: "80px 60px", borderTop: `1px solid ${gold}22`, borderBottom: `1px solid ${gold}22` }}>
        {[
          { value: "50+", label: "Conférences" },
          { value: "100+", label: "Épisodes podcast" },
          { value: "5", label: "Applications" },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "52px", fontWeight: 300, color: gold, fontStyle: "italic" }}>{stat.value}</div>
            <div style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#666", marginTop: "12px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "100px 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
          {[
            { title: "Keynotes", desc: "Conférences exclusives avec les leaders de l'innovation et de la technologie mondiale." },
            { title: "Podcasts", desc: "Conversations profondes sur l'avenir de la tech, de l'IA et de notre société." },
            { title: "Apps", desc: "Applications élégantes conçues pour transformer votre interaction avec la technologie." },
            { title: "Blog", desc: "Réflexions et analyses sur les tendances qui définissent notre futur numérique." },
          ].map((f, i) => (
            <div key={i} style={{ padding: "40px 24px", border: `1px solid ${gold}22`, textAlign: "center" }}>
              <div style={{ width: "40px", height: "1px", background: gold, margin: "0 auto 24px" }} />
              <h3 style={{ fontSize: "18px", fontWeight: 400, fontStyle: "italic", color: gold, margin: "0 0 16px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#777", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px 60px", borderTop: `1px solid ${gold}22` }}>
        <h2 style={{ fontSize: "32px", fontWeight: 400, fontStyle: "italic", margin: 0 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "32px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: "#888", textDecoration: "none", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", borderBottom: `1px solid ${gold}44`, paddingBottom: "4px" }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "40px 60px", borderTop: `1px solid ${gold}22`, textAlign: "center", fontSize: "11px", color: "#555", letterSpacing: "0.2em" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 3 — Neon Cyber
   ============================================================ */
const NeonCyber: React.FC = () => {
  const neonGreen = "#00FF88";
  const cyan = "#00DDFF";
  return (
    <div style={{ fontFamily: "'Courier New', 'Lucida Console', monospace", color: "#E0E0E0", background: "#0D0B1A", minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `1px solid ${neonGreen}33` }}>
        <span style={{ fontSize: "16px", fontWeight: 700, color: neonGreen, textShadow: `0 0 10px ${neonGreen}66` }}>
          {`> CONNECTED_MATE`}
        </span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", textTransform: "uppercase" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: cyan, textDecoration: "none", textShadow: `0 0 8px ${cyan}44` }}>[{item}]</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "120px 48px 80px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 30% 50%, ${neonGreen}08 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, ${cyan}08 0%, transparent 60%)`, pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div style={{ fontSize: "11px", color: neonGreen, marginBottom: "20px", opacity: 0.6 }}>// SYSTEM.INIT — MISSION_STATEMENT</div>
          <h1 style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1.2, margin: 0, color: "#fff", textShadow: `0 0 40px ${neonGreen}22` }}>
            Connecter les idées,
            <br />
            <span style={{ color: neonGreen, textShadow: `0 0 20px ${neonGreen}66` }}>inspirer le futur</span>
          </h1>
          <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#8888AA", marginTop: "24px", maxWidth: "550px" }}>
            Interface humain-technologie de nouvelle génération. Nous connectons les esprits les plus brillants aux innovations qui redéfinissent le possible.
          </p>
          <button style={{ marginTop: "40px", padding: "14px 36px", background: `${neonGreen}11`, color: neonGreen, border: `1px solid ${neonGreen}`, fontSize: "12px", fontFamily: "inherit", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", textShadow: `0 0 8px ${neonGreen}66`, boxShadow: `0 0 20px ${neonGreen}22, inset 0 0 20px ${neonGreen}11` }}>
            {`> ENTRER DANS LA MATRICE`}
          </button>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", gap: "0", padding: "0 48px", marginBottom: "80px" }}>
        {[
          { value: "50+", label: "Conférences", color: neonGreen },
          { value: "100+", label: "Épisodes podcast", color: cyan },
          { value: "5", label: "Applications", color: neonGreen },
        ].map((stat, i) => (
          <div key={i} style={{ flex: 1, padding: "40px 32px", border: `1px solid ${stat.color}22`, background: `${stat.color}05`, marginRight: i < 2 ? "-1px" : 0 }}>
            <div style={{ fontSize: "40px", fontWeight: 700, color: stat.color, textShadow: `0 0 15px ${stat.color}44` }}>{stat.value}</div>
            <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6666AA", marginTop: "8px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "0 48px 100px" }}>
        <div style={{ fontSize: "11px", color: cyan, marginBottom: "32px", opacity: 0.6 }}>// MODULES.LOADED</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {[
            { title: "KEYNOTES", desc: "Conférences immersives à la pointe de l'IA et de l'innovation technologique.", color: neonGreen },
            { title: "PODCASTS", desc: "Flux audio haute fréquence : 100+ épisodes sur le futur de la tech.", color: cyan },
            { title: "APPS", desc: "Applications next-gen qui repoussent les limites de l'interaction numérique.", color: neonGreen },
            { title: "BLOG", desc: "Transmissions textuelles : analyses, tendances et visions du futur.", color: cyan },
          ].map((f, i) => (
            <div key={i} style={{ padding: "32px", border: `1px solid ${f.color}22`, background: `${f.color}05`, position: "relative" }}>
              <div style={{ position: "absolute", top: "12px", right: "16px", fontSize: "10px", color: f.color, opacity: 0.4 }}>{`[0${i + 1}]`}</div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: f.color, margin: "0 0 12px", textShadow: `0 0 10px ${f.color}33` }}>{f.title}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#7777AA", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 48px", borderTop: `1px solid ${neonGreen}22`, textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: 700, color: cyan, margin: 0, textShadow: `0 0 15px ${cyan}44` }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "28px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: neonGreen, textDecoration: "none", fontSize: "11px", letterSpacing: "0.1em", padding: "8px 16px", border: `1px solid ${neonGreen}33`, background: `${neonGreen}08` }}>[{s}]</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", borderTop: `1px solid ${neonGreen}22`, fontSize: "11px", color: "#555577", textAlign: "center" }}>
        © 2026 Connected Mate — ALL SYSTEMS OPERATIONAL
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 4 — Pastel Garden
   ============================================================ */
const PastelGarden: React.FC = () => {
  const pink = "#FFE4E1";
  const mint = "#E0F5E9";
  const lavender = "#E8E0F0";
  const darkText = "#4A3F5C";
  const accent = "#C47D8E";
  return (
    <div style={{ fontFamily: "'Segoe UI', 'Trebuchet MS', sans-serif", color: darkText, background: "#FFF9F8", minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px", background: "#fff" }}>
        <span style={{ fontSize: "22px", fontWeight: 700, color: accent }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: darkText, textDecoration: "none", padding: "8px 16px", borderRadius: "20px", background: pink }}>{item}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "100px 48px 80px", textAlign: "center", background: `linear-gradient(180deg, ${pink}88 0%, #FFF9F8 100%)` }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", borderRadius: "20px", background: mint, fontSize: "13px", marginBottom: "24px", color: "#4A7A5C" }}>Bienvenue chez nous</div>
          <h1 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.3, margin: 0, color: darkText }}>
            Connecter les idées,
            <br />
            <span style={{ color: accent }}>inspirer le futur</span>
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#7A6F8A", marginTop: "24px" }}>
            Nous tissons des liens entre les personnes et la technologie, créant un écosystème où chaque idée peut fleurir et grandir.
          </p>
          <div style={{ marginTop: "36px", display: "flex", gap: "12px", justifyContent: "center" }}>
            <button style={{ padding: "14px 32px", background: accent, color: "#fff", border: "none", borderRadius: "28px", fontSize: "15px", cursor: "pointer", fontWeight: 600 }}>
              Commencer l&apos;aventure
            </button>
            <button style={{ padding: "14px 32px", background: "#fff", color: accent, border: `2px solid ${accent}`, borderRadius: "28px", fontSize: "15px", cursor: "pointer", fontWeight: 600 }}>
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "32px", padding: "60px 48px" }}>
        {[
          { value: "50+", label: "Conférences", bg: pink },
          { value: "100+", label: "Épisodes podcast", bg: mint },
          { value: "5", label: "Applications", bg: lavender },
        ].map((stat, i) => (
          <div key={i} style={{ padding: "32px 48px", borderRadius: "24px", background: stat.bg, textAlign: "center", minWidth: "180px" }}>
            <div style={{ fontSize: "40px", fontWeight: 700, color: darkText }}>{stat.value}</div>
            <div style={{ fontSize: "14px", color: "#7A6F8A", marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "40px 48px 80px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, marginBottom: "48px" }}>Nos univers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des conférences inspirantes qui plantent les graines de l'innovation.", bg: pink, icon: "K" },
            { title: "Podcasts", desc: "Des conversations chaleureuses sur la tech et ses merveilles.", bg: mint, icon: "P" },
            { title: "Apps", desc: "Des applications pensées avec soin pour simplifier votre quotidien.", bg: lavender, icon: "A" },
            { title: "Blog", desc: "Des articles cultivés avec passion sur les tendances et idées nouvelles.", bg: "#FFF5E6", icon: "B" },
          ].map((f, i) => (
            <div key={i} style={{ padding: "36px 28px", borderRadius: "24px", background: f.bg, textAlign: "center" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "20px", fontWeight: 700 }}>{f.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px", color: darkText }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#7A6F8A", margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 48px", background: mint, borderRadius: "40px 40px 0 0" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, margin: 0, color: darkText }}>Restons connectés</h2>
        <p style={{ color: "#7A6F8A", marginTop: "8px" }}>Rejoignez notre communauté bienveillante</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "28px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: darkText, textDecoration: "none", fontSize: "14px", padding: "10px 20px", borderRadius: "20px", background: "#fff", fontWeight: 600 }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 48px", background: mint, textAlign: "center", fontSize: "13px", color: "#7A6F8A" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 5 — Brutalist Raw
   ============================================================ */
const BrutalistRaw: React.FC = () => {
  const yellow = "#FFE500";
  return (
    <div style={{ fontFamily: "'Courier New', 'Lucida Console', monospace", color: "#000", background: "#F5F5F0", minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 32px", borderBottom: "4px solid #000" }}>
        <span style={{ fontSize: "20px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>CONNECTED MATE</span>
        <div style={{ display: "flex", gap: "0" }}>
          {["KEYNOTES", "PODCASTS", "APPS", "BLOG"].map((item) => (
            <Link key={item} href="#" style={{ color: "#000", textDecoration: "none", fontSize: "12px", fontWeight: 700, padding: "10px 16px", border: "2px solid #000", marginLeft: "-2px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "60px 32px", borderBottom: "4px solid #000" }}>
        <div style={{ background: yellow, display: "inline-block", padding: "4px 12px", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", marginBottom: "24px", border: "2px solid #000" }}>
          MANIFESTO
        </div>
        <h1 style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1.0, margin: 0, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          CONNECTER
          <br />
          LES IDÉES,
          <br />
          <span style={{ background: yellow, display: "inline", padding: "0 8px" }}>INSPIRER</span>
          <br />
          LE FUTUR
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.6, marginTop: "24px", maxWidth: "500px", borderLeft: "4px solid #000", paddingLeft: "16px" }}>
          PAS DE COMPROMIS. NOUS CONNECTONS LES GENS ET LA TECHNOLOGIE. POINT FINAL.
        </p>
        <button style={{ marginTop: "32px", padding: "16px 40px", background: "#000", color: yellow, border: "none", fontSize: "14px", fontWeight: 700, fontFamily: "inherit", textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>
          ENTRER →
        </button>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", borderBottom: "4px solid #000" }}>
        {[
          { value: "50+", label: "CONFÉRENCES" },
          { value: "100+", label: "ÉPISODES" },
          { value: "5", label: "APPS" },
        ].map((stat, i) => (
          <div key={i} style={{ flex: 1, padding: "40px 32px", borderRight: i < 2 ? "4px solid #000" : "none" }}>
            <div style={{ fontSize: "60px", fontWeight: 900, lineHeight: 1 }}>{stat.value}</div>
            <div style={{ fontSize: "12px", fontWeight: 700, marginTop: "8px", letterSpacing: "0.1em" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "0" }}>
        {[
          { title: "KEYNOTES", desc: "CONFÉRENCES BRUTES ET SANS FILTRE SUR LA TECH, L'IA ET L'INNOVATION." },
          { title: "PODCASTS", desc: "100+ ÉPISODES. PAS DE COMPROMIS. JUSTE LA VÉRITÉ SUR LA TECHNOLOGIE." },
          { title: "APPS", desc: "DES APPLICATIONS QUI FONCTIONNENT. SIMPLEMENT. EFFICACEMENT." },
          { title: "BLOG", desc: "DES TEXTES DIRECTS ET PERCUTANTS SUR L'ÉTAT DE LA TECH." },
        ].map((f, i) => (
          <div key={i} style={{ padding: "32px", borderBottom: "4px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h3 style={{ fontSize: "28px", fontWeight: 900, margin: 0, textTransform: "uppercase" }}>
                <span style={{ background: i % 2 === 0 ? yellow : "transparent", padding: "0 4px" }}>{f.title}</span>
              </h3>
              <p style={{ fontSize: "13px", lineHeight: 1.6, margin: "8px 0 0", maxWidth: "500px", textTransform: "uppercase" }}>{f.desc}</p>
            </div>
            <span style={{ fontSize: "40px", fontWeight: 900 }}>→</span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ padding: "48px 32px", background: "#000", color: "#fff" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 900, margin: 0, textTransform: "uppercase" }}>RESTONS CONNECTÉS</h2>
        <div style={{ display: "flex", gap: "0", marginTop: "24px" }}>
          {["TWITTER", "LINKEDIN", "YOUTUBE", "INSTAGRAM"].map((s) => (
            <Link key={s} href="#" style={{ color: "#000", textDecoration: "none", fontSize: "12px", fontWeight: 700, padding: "12px 20px", background: yellow, border: "2px solid #000", marginRight: "-2px" }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px 32px", borderTop: "4px solid #000", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
        © 2026 CONNECTED MATE — ALL RIGHTS RESERVED
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 6 — Editorial Magazine
   ============================================================ */
const EditorialMagazine: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#1a1a1a", background: "#FAFAF7", minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "14px", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.3em", textTransform: "uppercase" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.1em" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: "#1a1a1a", textDecoration: "none" }}>{item}</Link>
          ))}
        </div>
      </nav>

      <div style={{ height: "1px", background: "#1a1a1a", margin: "0 48px" }} />

      {/* HERO — Editorial masthead */}
      <section style={{ padding: "60px 48px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "11px", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Édition Mars 2026 — Numéro spécial innovation</div>
        <h1 style={{ fontSize: "80px", fontWeight: 400, lineHeight: 1.05, margin: 0, fontStyle: "italic", maxWidth: "800px", display: "inline-block" }}>
          Connecter les idées, inspirer le futur
        </h1>
        <div style={{ height: "1px", background: "#ccc", margin: "40px auto", maxWidth: "100px" }} />
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#666", maxWidth: "550px", margin: "0 auto", fontStyle: "italic" }}>
          Un voyage au cœur de l&apos;innovation, là où les personnes et la technologie convergent pour inventer demain
        </p>
      </section>

      <div style={{ height: "1px", background: "#ddd", margin: "0 48px" }} />

      {/* STATS — newspaper style inline */}
      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "32px 48px" }}>
        {[
          { value: "50+", label: "Conférences" },
          { value: "100+", label: "Épisodes" },
          { value: "5", label: "Applications" },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: 400, fontStyle: "italic" }}>{stat.value}</span>
            <span style={{ fontSize: "12px", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", color: "#999", marginLeft: "8px" }}>{stat.label}</span>
          </div>
        ))}
      </section>

      <div style={{ height: "1px", background: "#ddd", margin: "0 48px" }} />

      {/* FEATURES — multi-column editorial */}
      <section style={{ padding: "48px", display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 48px" }}>
        <div>
          {[
            { title: "Keynotes", desc: "Nos conférences rassemblent les penseurs les plus audacieux de notre époque. Plus de cinquante événements où l'intelligence artificielle, l'innovation et la vision du futur se rencontrent dans un dialogue stimulant et transformateur." },
            { title: "Podcasts", desc: "Cent épisodes de conversations profondes, intimes et révélatrices avec les architectes du monde numérique. Chaque épisode est une fenêtre ouverte sur les idées qui façonneront notre avenir collectif." },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: i === 0 ? "40px" : 0 }}>
              <h3 style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", margin: "0 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#555", margin: 0, textAlign: "justify" }}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ background: "#ddd" }} />
        <div>
          {[
            { title: "Apps", desc: "Cinq applications conçues avec l'exigence d'un artisan et la vision d'un futuriste. Chacune repense fondamentalement la manière dont nous interagissons avec le numérique, privilégiant l'élégance et la simplicité." },
            { title: "Blog", desc: "Un espace éditorial où la réflexion prend le temps de mûrir. Articles de fond, analyses critiques et perspectives nouvelles sur un monde technologique en perpétuelle métamorphose." },
          ].map((f, i) => (
            <div key={i} style={{ marginBottom: i === 0 ? "40px" : 0 }}>
              <h3 style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", margin: "0 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.9, color: "#555", margin: 0, textAlign: "justify" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: "1px", background: "#ddd", margin: "0 48px" }} />

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "48px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 400, fontStyle: "italic", margin: 0 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "24px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: "#1a1a1a", textDecoration: "none", fontSize: "12px", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.15em", textTransform: "uppercase", borderBottom: "1px solid #1a1a1a", paddingBottom: "2px" }}>{s}</Link>
          ))}
        </div>
      </section>

      <div style={{ height: "1px", background: "#1a1a1a", margin: "0 48px" }} />

      {/* FOOTER */}
      <footer style={{ padding: "24px 48px", textAlign: "center", fontSize: "11px", fontFamily: "'Helvetica Neue', sans-serif", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 7 — Gradient Wave
   ============================================================ */
const GradientWave: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: "#fff", minHeight: "100vh", margin: 0, background: "linear-gradient(135deg, #6B2FA0 0%, #3B5CC6 30%, #1A8A9E 60%, #0D9B7A 100%)" }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>{item}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "120px 48px 60px", textAlign: "center", position: "relative" }}>
        <h1 style={{ fontSize: "56px", fontWeight: 800, lineHeight: 1.2, margin: 0, textShadow: "0 2px 40px rgba(0,0,0,0.15)" }}>
          Connecter les idées,
          <br />
          inspirer le futur
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.7, opacity: 0.85, marginTop: "24px", maxWidth: "550px", margin: "24px auto 0" }}>
          Nous bâtissons des ponts entre l&apos;humain et la technologie, pour un futur plus connecté, plus innovant, plus inspirant.
        </p>
        <button style={{ marginTop: "40px", padding: "16px 40px", background: "rgba(255,255,255,0.2)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "40px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
          Découvrir
        </button>
      </section>

      {/* WAVE SVG */}
      <div>
        <svg viewBox="0 0 1440 120" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,50 1440,60 L1440,120 L0,120 Z" fill="rgba(255,255,255,0.08)" />
        </svg>
      </div>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px 60px" }}>
        {[
          { value: "50+", label: "Conférences" },
          { value: "100+", label: "Épisodes podcast" },
          { value: "5", label: "Applications" },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: "center", background: "rgba(255,255,255,0.1)", borderRadius: "20px", padding: "32px 40px" }}>
            <div style={{ fontSize: "44px", fontWeight: 800 }}>{stat.value}</div>
            <div style={{ fontSize: "14px", opacity: 0.7, marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* WAVE SVG 2 */}
      <div>
        <svg viewBox="0 0 1440 80" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" fill="rgba(0,0,0,0.08)" />
        </svg>
      </div>

      {/* FEATURES */}
      <section style={{ padding: "40px 48px 80px" }}>
        <h2 style={{ textAlign: "center", fontSize: "32px", fontWeight: 700, marginBottom: "48px" }}>Nos piliers</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { title: "Keynotes", desc: "Des conférences qui éclairent et inspirent les leaders de demain." },
            { title: "Podcasts", desc: "Des conversations passionnantes sur l'innovation et l'IA." },
            { title: "Apps", desc: "Des outils numériques qui simplifient et enrichissent le quotidien." },
            { title: "Blog", desc: "Des analyses et perspectives sur les tendances technologiques." },
          ].map((f, i) => (
            <div key={i} style={{ padding: "36px 28px", borderRadius: "20px", background: "rgba(255,255,255,0.12)", textAlign: "center" }}>
              <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 12px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, opacity: 0.8, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 48px", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 700, margin: 0 }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "14px", padding: "10px 22px", borderRadius: "24px", background: "rgba(255,255,255,0.15)", fontWeight: 600 }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 48px", borderTop: "1px solid rgba(255,255,255,0.1)", textAlign: "center", fontSize: "13px", opacity: 0.6 }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 8 — Retro 80s
   ============================================================ */
const Retro80s: React.FC = () => {
  const hotPink = "#FF1493";
  const electricBlue = "#00BFFF";
  return (
    <div style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", color: "#fff", background: "#1A0A2E", minHeight: "100vh", margin: 0, position: "relative", overflow: "hidden" }}>
      {/* Background grid lines */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(255,20,147,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,20,147,0.06) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* NAV */}
      <nav style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", borderBottom: `2px solid ${hotPink}44` }}>
        <span style={{ fontSize: "28px", fontWeight: 900, color: hotPink, textShadow: `0 0 20px ${hotPink}88, 0 0 40px ${hotPink}44`, letterSpacing: "0.05em" }}>
          CONNECTED MATE
        </span>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px", fontFamily: "'Arial', sans-serif", fontWeight: 700, textTransform: "uppercase" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: electricBlue, textDecoration: "none", textShadow: `0 0 10px ${electricBlue}66` }}>{item}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", padding: "100px 48px 80px", textAlign: "center" }}>
        {/* Decorative geometric shapes */}
        <div style={{ position: "absolute", top: "40px", left: "10%", width: "80px", height: "80px", border: `3px solid ${electricBlue}44`, transform: "rotate(45deg)" }} />
        <div style={{ position: "absolute", top: "120px", right: "12%", width: "120px", height: "120px", borderRadius: "50%", border: `3px solid ${hotPink}33` }} />
        <div style={{ position: "absolute", bottom: "40px", left: "20%", width: "0", height: "0", borderLeft: "40px solid transparent", borderRight: "40px solid transparent", borderBottom: `70px solid ${hotPink}15` }} />

        <h1 style={{ fontSize: "72px", fontWeight: 900, lineHeight: 1.05, margin: 0, textTransform: "uppercase", letterSpacing: "0.02em" }}>
          <span style={{ color: hotPink, textShadow: `0 0 30px ${hotPink}88, 0 0 60px ${hotPink}44` }}>Connecter</span>{" "}
          les idées,
          <br />
          <span style={{ color: electricBlue, textShadow: `0 0 30px ${electricBlue}88, 0 0 60px ${electricBlue}44` }}>Inspirer</span>{" "}
          le futur
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#B8A9D4", marginTop: "28px", fontFamily: "'Arial', sans-serif", fontWeight: 400, maxWidth: "500px", margin: "28px auto 0" }}>
          Bienvenue dans le futur. Là où les gens et la technologie fusionnent pour créer quelque chose d&apos;extraordinaire.
        </p>
        <button style={{
          marginTop: "40px", padding: "16px 48px",
          background: `linear-gradient(135deg, ${hotPink}, ${electricBlue})`,
          color: "#fff", border: "none", fontSize: "16px", fontWeight: 900, fontFamily: "inherit",
          textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer",
          boxShadow: `0 0 30px ${hotPink}44, 0 0 60px ${electricBlue}22`,
        }}>
          {"Let's Go →"}
        </button>
      </section>

      {/* STATS */}
      <section style={{ position: "relative", display: "flex", justifyContent: "center", gap: "40px", padding: "60px 48px" }}>
        {[
          { value: "50+", label: "Conférences", color: hotPink },
          { value: "100+", label: "Épisodes", color: electricBlue },
          { value: "5", label: "Apps", color: hotPink },
        ].map((stat, i) => (
          <div key={i} style={{
            textAlign: "center", padding: "36px 48px", border: `2px solid ${stat.color}66`,
            background: `${stat.color}11`, boxShadow: `0 0 20px ${stat.color}22`,
          }}>
            <div style={{ fontSize: "52px", fontWeight: 900, color: stat.color, textShadow: `0 0 20px ${stat.color}66` }}>{stat.value}</div>
            <div style={{ fontSize: "12px", fontFamily: "'Arial', sans-serif", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#B8A9D4", marginTop: "8px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ position: "relative", padding: "40px 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { title: "KEYNOTES", desc: "Conférences explosives sur le futur de la tech.", color: hotPink },
            { title: "PODCASTS", desc: "100+ épisodes de conversations électrisantes.", color: electricBlue },
            { title: "APPS", desc: "Applications qui repoussent les limites du possible.", color: hotPink },
            { title: "BLOG", desc: "Articles vibrants sur l'innovation et l'IA.", color: electricBlue },
          ].map((f, i) => (
            <div key={i} style={{
              padding: "36px 24px", border: `2px solid ${f.color}44`,
              background: `linear-gradient(180deg, ${f.color}11 0%, transparent 100%)`,
              textAlign: "center",
            }}>
              <h3 style={{ fontSize: "22px", fontWeight: 900, color: f.color, margin: "0 0 12px", textShadow: `0 0 15px ${f.color}44` }}>{f.title}</h3>
              <p style={{ fontSize: "13px", lineHeight: 1.7, color: "#B8A9D4", margin: 0, fontFamily: "'Arial', sans-serif", fontWeight: 400 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", textAlign: "center", padding: "60px 48px", borderTop: `2px solid ${hotPink}33` }}>
        <h2 style={{ fontSize: "40px", fontWeight: 900, margin: 0, textTransform: "uppercase", color: electricBlue, textShadow: `0 0 20px ${electricBlue}66` }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s, i) => (
            <Link key={s} href="#" style={{
              color: "#fff", textDecoration: "none", fontSize: "13px", fontFamily: "'Arial', sans-serif", fontWeight: 700,
              padding: "10px 22px", textTransform: "uppercase", letterSpacing: "0.05em",
              background: i % 2 === 0 ? hotPink : electricBlue,
              boxShadow: `0 0 15px ${i % 2 === 0 ? hotPink : electricBlue}44`,
            }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ position: "relative", padding: "28px 48px", borderTop: `1px solid ${hotPink}22`, textAlign: "center", fontSize: "12px", fontFamily: "'Arial', sans-serif", color: "#6B5B8A" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 9 — Japanese Zen
   ============================================================ */
const JapaneseZen: React.FC = () => {
  const earth = "#8B7355";
  const lightBg = "#FAF8F5";
  const subtle = "#C4B5A0";
  return (
    <div style={{ fontFamily: "'Optima', 'Palatino Linotype', 'Book Antiqua', serif", color: "#4A3F35", background: lightBg, minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "40px 80px" }}>
        <span style={{ fontSize: "14px", letterSpacing: "0.4em", textTransform: "uppercase", color: earth }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "40px", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: subtle }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: subtle, textDecoration: "none" }}>{item}</Link>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "160px 80px 120px", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: "1px", height: "60px", background: subtle, margin: "0 auto 48px" }} />
        <h1 style={{ fontSize: "40px", fontWeight: 300, lineHeight: 1.6, margin: 0, letterSpacing: "0.05em", color: "#3A3028" }}>
          Connecter les idées,
          <br />
          inspirer le futur
        </h1>
        <p style={{ fontSize: "15px", lineHeight: 2, color: subtle, marginTop: "40px", letterSpacing: "0.02em" }}>
          Dans le silence entre les mots se trouve l&apos;espace de la création. Nous connectons les esprits et la technologie avec intention et harmonie.
        </p>
        <div style={{ width: "1px", height: "40px", background: subtle, margin: "48px auto 0" }} />
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "80px", padding: "60px 80px" }}>
        {[
          { value: "50+", label: "Conférences" },
          { value: "100+", label: "Épisodes" },
          { value: "5", label: "Applications" },
        ].map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 300, color: earth, letterSpacing: "0.05em" }}>{stat.value}</div>
            <div style={{ width: "20px", height: "1px", background: subtle, margin: "12px auto" }} />
            <div style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: subtle }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px", maxWidth: "900px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des paroles qui résonnent. Nos conférences sont des espaces de contemplation et d'inspiration, où chaque idée trouve sa place." },
          { title: "Podcasts", desc: "L'art de la conversation. Plus de cent épisodes de dialogue authentique sur la technologie et son rôle dans nos vies." },
          { title: "Apps", desc: "La simplicité est la sophistication suprême. Nos applications incarnent cette philosophie dans chaque interaction." },
          { title: "Blog", desc: "Des mots pesés avec soin. Nos articles explorent les courants profonds de l'innovation technologique." },
        ].map((f, i) => (
          <div key={i} style={{ padding: "40px 0", borderTop: i === 0 ? `1px solid ${subtle}44` : "none", borderBottom: `1px solid ${subtle}44` }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "60px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 400, letterSpacing: "0.25em", textTransform: "uppercase", color: earth, minWidth: "120px", marginTop: "4px" }}>{f.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 2, color: "#7A6F63", margin: 0, letterSpacing: "0.01em" }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "80px" }}>
        <div style={{ width: "1px", height: "40px", background: subtle, margin: "0 auto 32px" }} />
        <h2 style={{ fontSize: "24px", fontWeight: 300, margin: 0, letterSpacing: "0.1em", color: earth }}>Restons connectés</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginTop: "28px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: subtle, textDecoration: "none", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px 80px", textAlign: "center", fontSize: "11px", color: subtle, letterSpacing: "0.2em" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 10 — Corporate Blue
   ============================================================ */
const CorporateBlue: React.FC = () => {
  const navy = "#1B365D";
  const lightBlue = "#E8EEF6";
  const accentBlue = "#2D6CCB";
  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: "#333", background: "#fff", minHeight: "100vh", margin: 0 }}>
      {/* NAV */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 48px", background: navy, height: "64px" }}>
        <span style={{ fontSize: "18px", fontWeight: 700, color: "#fff" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "14px", alignItems: "center" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((item) => (
            <Link key={item} href="#" style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>{item}</Link>
          ))}
          <button style={{ padding: "8px 20px", background: accentBlue, color: "#fff", border: "none", borderRadius: "4px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Contact</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "80px 48px 60px", background: `linear-gradient(180deg, ${lightBlue} 0%, #fff 100%)` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "60px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "13px", fontWeight: 600, color: accentBlue, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Innovation &bull; Technologie &bull; Connexion</div>
            <h1 style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1.25, margin: 0, color: navy }}>
              Connecter les idées, inspirer le futur
            </h1>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#5A6577", marginTop: "20px" }}>
              Connected Mate réunit les personnes et la technologie pour bâtir un avenir plus innovant. Conférences, podcasts et solutions numériques au service de la transformation.
            </p>
            <div style={{ marginTop: "32px", display: "flex", gap: "12px" }}>
              <button style={{ padding: "14px 32px", background: accentBlue, color: "#fff", border: "none", borderRadius: "6px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
                Nos services
              </button>
              <button style={{ padding: "14px 32px", background: "transparent", color: navy, border: `1px solid ${navy}`, borderRadius: "6px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
                En savoir plus
              </button>
            </div>
          </div>
          <div style={{ flex: "0 0 400px", height: "300px", background: `linear-gradient(135deg, ${navy} 0%, ${accentBlue} 100%)`, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center", color: "#fff" }}>
              <div style={{ fontSize: "48px", fontWeight: 700 }}>CM</div>
              <div style={{ fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "8px", opacity: 0.7 }}>Since 2020</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "flex", justifyContent: "center", gap: "0", padding: "0 48px", margin: "-20px auto 0", maxWidth: "900px", position: "relative", zIndex: 1 }}>
        {[
          { value: "50+", label: "Conférences" },
          { value: "100+", label: "Épisodes podcast" },
          { value: "5", label: "Applications" },
        ].map((stat, i) => (
          <div key={i} style={{
            flex: 1, padding: "32px 24px", background: "#fff", textAlign: "center",
            borderRadius: i === 0 ? "8px 0 0 8px" : i === 2 ? "0 8px 8px 0" : "0",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            borderRight: i < 2 ? "1px solid #eee" : "none",
          }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: navy }}>{stat.value}</div>
            <div style={{ fontSize: "13px", color: "#8899AA", marginTop: "4px" }}>{stat.label}</div>
          </div>
        ))}
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 48px", maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: navy, margin: 0 }}>Nos domaines d&apos;expertise</h2>
          <p style={{ color: "#8899AA", marginTop: "8px", fontSize: "16px" }}>Des solutions complètes pour l&apos;innovation technologique</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { title: "Keynotes", desc: "Conférences de haut niveau avec des experts mondiaux de la tech et de l'IA.", color: "#3B82F6" },
            { title: "Podcasts", desc: "Plus de 100 épisodes de contenu premium sur l'innovation technologique.", color: "#8B5CF6" },
            { title: "Apps", desc: "Applications professionnelles conçues pour maximiser la productivité.", color: "#10B981" },
            { title: "Blog", desc: "Veille technologique et analyses approfondies pour décideurs.", color: "#F59E0B" },
          ].map((f, i) => (
            <div key={i} style={{ padding: "32px 24px", borderRadius: "8px", border: "1px solid #E8EEF6", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: `${f.color}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "4px", background: f.color }} />
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 10px", color: navy }}>{f.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6B7A8D", margin: 0 }}>{f.desc}</p>
              <div style={{ marginTop: "16px" }}>
                <span style={{ fontSize: "14px", color: accentBlue, fontWeight: 600, cursor: "pointer" }}>En savoir plus →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 48px", background: navy, textAlign: "center" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700, color: "#fff", margin: 0 }}>Restons connectés</h2>
        <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "8px", fontSize: "15px" }}>Suivez notre actualité et rejoignez notre communauté</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "28px" }}>
          {["Twitter", "LinkedIn", "YouTube", "Instagram"].map((s) => (
            <Link key={s} href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "13px", padding: "10px 22px", borderRadius: "6px", background: "rgba(255,255,255,0.15)", fontWeight: 600 }}>{s}</Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "24px 48px", background: "#0F2240", textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
        © 2026 Connected Mate
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  {
    id: 1,
    name: "Swiss Minimal",
    category: "Minimalist",
    description: "Ultra clean, lots of whitespace, Helvetica-style typography, black and white with one red accent color",
    component: SwissMinimal,
  },
  {
    id: 2,
    name: "Dark Luxe",
    category: "Dark",
    description: "Pure black background, gold accents, thin serif fonts, luxurious and elegant feel",
    component: DarkLuxe,
  },
  {
    id: 3,
    name: "Neon Cyber",
    category: "Tech",
    description: "Dark purple/black background, neon green and cyan glows, monospace font, cyberpunk aesthetic",
    component: NeonCyber,
  },
  {
    id: 4,
    name: "Pastel Garden",
    category: "Organic",
    description: "Soft pink, mint, and lavender backgrounds, rounded shapes, playful and organic feel",
    component: PastelGarden,
  },
  {
    id: 5,
    name: "Brutalist Raw",
    category: "Brutalist",
    description: "Harsh black borders, monospace uppercase text, yellow accents, no rounded corners, raw aesthetic",
    component: BrutalistRaw,
  },
  {
    id: 6,
    name: "Editorial Magazine",
    category: "Editorial",
    description: "Large serif headlines, multi-column layout, thin lines, black and white newspaper feel",
    component: EditorialMagazine,
  },
  {
    id: 7,
    name: "Gradient Wave",
    category: "Gradient",
    description: "Full background gradient purple to blue to teal, white text, wavy SVG separators",
    component: GradientWave,
  },
  {
    id: 8,
    name: "Retro 80s",
    category: "Retro",
    description: "Hot pink and electric blue, Miami Vice vibes, bold geometric shapes, neon glows",
    component: Retro80s,
  },
  {
    id: 9,
    name: "Japanese Zen",
    category: "Minimalist",
    description: "Very minimal, muted earth tones, lots of space, thin vertical lines, zen aesthetic",
    component: JapaneseZen,
  },
  {
    id: 10,
    name: "Corporate Blue",
    category: "Corporate",
    description: "Professional navy blue, clean grid, subtle gradients, trustworthy business feel",
    component: CorporateBlue,
  },
];
