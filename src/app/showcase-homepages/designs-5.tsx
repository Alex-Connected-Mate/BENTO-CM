"use client";
import Link from "next/link";
import React from "react";

import type { HomepageDesign } from "./designs-1";

/* ============================================================
   DESIGN 41 — Creative Director (Portfolio/Branding)
   ============================================================ */
const CreativeDirector: React.FC = () => {
  const sienna = "#C2491D";
  return (
    <div style={{ minHeight: "100vh", background: "#F8F8F6", color: "#1A1A1A", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "flex-end", padding: "32px 60px", gap: "32px", fontSize: "13px", color: "#888", fontFamily: "sans-serif" }}>
        {["Keynotes", "Podcasts", "Apps", "Blog", "Contact"].map((t) => (
          <span key={t} style={{ cursor: "pointer" }}>{t}</span>
        ))}
      </nav>

      <section style={{ padding: "60px 60px 80px" }}>
        <h1 style={{ fontSize: "clamp(64px, 8vw, 120px)", fontWeight: 400, lineHeight: 1.0, margin: "0 0 32px", fontStyle: "italic" }}>
          Connected
          <br />
          <span style={{ color: sienna }}>Mate</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.9, color: "#888", maxWidth: "480px", margin: "0 0 40px", fontFamily: "sans-serif", fontWeight: 300 }}>
          Connecter les idées, inspirer le futur. Direction créative, innovation, vision.
        </p>
        <div style={{ display: "inline-block", padding: "14px 40px", border: `1px solid ${sienna}`, color: sienna, fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "sans-serif", cursor: "pointer" }}>
          Voir les projets
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: "80px 60px", borderTop: "1px solid #ddd", maxWidth: "700px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif", marginBottom: "24px" }}>Philosophie</div>
        <p style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", lineHeight: 1.5, color: sienna }}>
          &ldquo;Le design n&apos;est pas ce que vous voyez, c&apos;est ce que vous ressentez. Chaque projet est une émotion traduite en pixels.&rdquo;
        </p>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#ddd" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: "#F8F8F6", padding: "48px", textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 300, fontStyle: "italic", color: sienna }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#999", marginTop: "8px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* SELECTED WORK */}
      <section style={{ padding: "80px 60px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", fontFamily: "sans-serif", marginBottom: "40px" }}>Travaux sélectionnés</div>
        {[
          { title: "Keynotes", desc: "Des performances scéniques qui transcendent la conférence traditionnelle." },
          { title: "Podcasts", desc: "Conversations dirigées avec la précision d&apos;un monteur de film." },
          { title: "Apps", desc: "Chaque interface est composée comme un cadre photographique." },
          { title: "Blog", desc: "Écriture éditoriale où chaque mot est une décision de design." },
        ].map((f, i) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", padding: "32px 0", borderBottom: "1px solid #eee", alignItems: "baseline" }}>
            <div style={{ display: "flex", gap: "24px", alignItems: "baseline" }}>
              <span style={{ fontSize: "12px", color: sienna, fontFamily: "sans-serif" }}>0{i + 1}</span>
              <h3 style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", margin: 0 }}>{f.title}</h3>
            </div>
            <p style={{ fontSize: "14px", color: "#888", maxWidth: "300px", margin: 0, textAlign: "right", fontFamily: "sans-serif", fontWeight: 300 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: "1px solid #ddd", fontSize: "12px", fontFamily: "sans-serif", color: "#888", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 60px", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span>Direction créative</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 42 — Digital Wallet (Fintech)
   ============================================================ */
const DigitalWallet: React.FC = () => {
  const blue = "#3B82F6";
  const mint = "#34D399";
  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #F7F8FC 0%, #fff 100%)", color: "#1B1B1F", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px" }}>
        <span style={{ fontSize: "17px", fontWeight: 700 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", alignItems: "center", fontSize: "14px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "8px 20px", background: blue, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Télécharger</button>
        </div>
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", padding: "60px 48px", maxWidth: "1100px", margin: "0 auto", alignItems: "center" }}>
        <div>
          <h1 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.1, margin: "0 0 16px", letterSpacing: "-0.03em" }}>
            Votre portefeuille{" "}
            <span style={{ color: blue }}>digital</span>
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#888", margin: "0 0 28px" }}>
            Connecter les idées et inspirer le futur de la finance personnelle. Simple, sécurisé, intelligent.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={{ padding: "12px 28px", background: blue, color: "#fff", border: "none", borderRadius: "10px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>Commencer</button>
            <button style={{ padding: "12px 28px", background: "transparent", border: "1px solid #E5E7EB", borderRadius: "10px", fontSize: "15px", color: "#888", cursor: "pointer" }}>Démo</button>
          </div>
        </div>
        {/* Phone mockup */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "240px", background: "#fff", borderRadius: "24px", border: "1px solid #E5E7EB", padding: "20px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <div style={{ fontSize: "12px", color: "#888" }}>Solde total</div>
              <div style={{ fontSize: "28px", fontWeight: 800 }}>€12,450</div>
              <div style={{ fontSize: "13px", color: mint, fontWeight: 600 }}>+€340 aujourd&apos;hui</div>
            </div>
            <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
              <div style={{ flex: 1, padding: "8px", background: `${blue}11`, borderRadius: "8px", textAlign: "center", fontSize: "11px" }}>
                <div style={{ color: blue, fontWeight: 600 }}>Envoyer</div>
              </div>
              <div style={{ flex: 1, padding: "8px", background: `${mint}11`, borderRadius: "8px", textAlign: "center", fontSize: "11px" }}>
                <div style={{ color: mint, fontWeight: 600 }}>Recevoir</div>
              </div>
            </div>
            {["Keynote Pass — -€49", "Podcast Pro — -€9.99", "App Premium — -€4.99"].map((tx) => (
              <div key={tx} style={{ padding: "8px 0", borderBottom: "1px solid #f0f0f0", fontSize: "12px", color: "#666" }}>{tx}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "40px 48px 60px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "12px", padding: "24px", textAlign: "center", border: "1px solid #E5E7EB" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: blue }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#888" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", padding: "0 48px 60px", maxWidth: "900px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Gérez vos pass conférences dans le portefeuille." },
          { title: "Podcasts", desc: "Abonnements premium intégrés directement." },
          { title: "Apps", desc: "Achats in-app sécurisés et instantanés." },
          { title: "Blog", desc: "Contenus exclusifs pour les membres premium." },
        ].map((f) => (
          <div key={f.title} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: "1px solid #E5E7EB" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 8px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#888", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: blue, color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb" }}>
        <span>© 2024 Connected Mate</span>
        <span>Simple · Sécurisé · Smart</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 43 — Abstract Art (Artistic)
   ============================================================ */
const AbstractArt: React.FC = () => {
  const klein = "#002FA7";
  const red = "#E63946";
  const yellow = "#FFD60A";
  return (
    <div style={{ minHeight: "100vh", background: "#FFFEF9", color: "#1A1A1A", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0, position: "relative", overflow: "hidden" }}>
      {/* Abstract shapes */}
      <div style={{ position: "absolute", top: "-50px", right: "-30px", width: "200px", height: "200px", background: `${klein}15`, transform: "rotate(15deg)" }} />
      <div style={{ position: "absolute", bottom: "200px", left: "-40px", width: "150px", height: "150px", background: `${red}12`, borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "50%", right: "10%", width: "100px", height: "100px", background: `${yellow}22` }} />

      <nav style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 48px" }}>
        <span style={{ fontSize: "13px", letterSpacing: "0.3em", textTransform: "uppercase" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "12px", letterSpacing: "0.1em", color: "#888" }}>
          {["Expositions", "Podcasts", "Apps", "Journal"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ position: "relative", zIndex: 1, padding: "100px 48px 80px" }}>
        <h1 style={{ fontSize: "clamp(56px, 7vw, 90px)", fontWeight: 900, lineHeight: 1.0, margin: "0 0 24px", letterSpacing: "-0.03em" }}>
          <span style={{ color: klein }}>Connecter</span>
          <br />
          les idées
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#888", maxWidth: "420px", margin: "0 0 36px" }}>
          Inspirer le futur à travers l&apos;art, la couleur et la forme.
        </p>
        <button style={{ padding: "14px 40px", background: klein, color: "#fff", border: "none", fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
          Explorer
        </button>
      </section>

      {/* COLOR BLOCK STATS */}
      <section style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {[{ v: "50+", l: "Conférences", c: klein }, { v: "100+", l: "Épisodes", c: red }, { v: "5", l: "Applications", c: yellow }].map((s) => (
          <div key={s.l} style={{ background: s.c, padding: "48px", textAlign: "center", color: s.c === yellow ? "#000" : "#fff" }}>
            <div style={{ fontSize: "42px", fontWeight: 900 }}>{s.v}</div>
            <div style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px", opacity: 0.7 }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* EXHIBITION */}
      <section style={{ position: "relative", zIndex: 1, padding: "80px 48px" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#bbb", marginBottom: "40px" }}>Exposition en cours</div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px", marginBottom: "24px" }}>
          <div style={{ background: `${klein}08`, padding: "48px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 12px" }}>Keynotes</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", margin: 0 }}>Des conférences comme des performances artistiques. Chaque mot est un coup de pinceau.</p>
          </div>
          <div style={{ background: `${red}08`, padding: "48px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 12px" }}>Podcasts</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", margin: 0 }}>100+ compositions sonores.</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px" }}>
          <div style={{ background: `${yellow}15`, padding: "48px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 12px" }}>Apps</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", margin: 0 }}>Interfaces-œuvres.</p>
          </div>
          <div style={{ background: `${klein}08`, padding: "48px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 12px" }}>Blog</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888", margin: 0 }}>Critiques, essais et manifestes sur l&apos;art numérique.</p>
          </div>
        </div>
      </section>

      <section style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 24px", border: `2px solid ${klein}`, fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ position: "relative", zIndex: 1, padding: "24px 48px", borderTop: "2px solid #1A1A1A", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb" }}>
        <span>© 2024 Connected Mate</span>
        <span>Art × Tech</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 44 — Penpal (Human/Communication)
   ============================================================ */
const Penpal: React.FC = () => {
  const ink = "#1B2A4A";
  const seal = "#B91C1C";
  return (
    <div style={{ minHeight: "100vh", background: "#FDF6EC", color: ink, fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", fontStyle: "italic", color: ink }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#8B8070" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* LETTER HEADER */}
      <section style={{ maxWidth: "650px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "right", fontSize: "14px", color: "#8B8070", marginBottom: "40px" }}>Paris, le 11 mars 2024</div>
        <div style={{ fontSize: "18px", fontStyle: "italic", color: "#8B8070", marginBottom: "24px" }}>Cher ami,</div>
        <h1 style={{ fontSize: "40px", fontWeight: 400, lineHeight: 1.35, margin: "0 0 24px", fontStyle: "italic" }}>
          Nous voulions vous parler de notre rêve :{" "}
          <span style={{ color: seal }}>connecter les idées, inspirer le futur</span>.
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 2.0, color: "#666", margin: "0 0 32px" }}>
          Si vous lisez ces lignes, c&apos;est que vous aussi, vous croyez au pouvoir des connexions humaines. À la beauté d&apos;une idée partagée. À la magie d&apos;une conversation qui change tout.
        </p>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: seal, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", color: "#FDF6EC", fontSize: "14px", fontWeight: 700 }}>CM</div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 400, fontStyle: "italic", color: ink }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B8070" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* POSTCARD FEATURES */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", padding: "60px 48px", maxWidth: "800px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Des lettres vivantes, racontées sur scène avec le cœur." },
          { title: "Podcasts", desc: "Conversations intimes, comme celles qu&apos;on a au coin du feu." },
          { title: "Apps", desc: "Des applications écrites avec la délicatesse d&apos;une belle plume." },
          { title: "Blog", desc: "Des mots posés sur papier numérique, avec soin et intention." },
        ].map((f) => (
          <div key={f.title} style={{ background: "#fff", border: "1px solid #ddd", padding: "32px", position: "relative" }}>
            {/* Corner fold */}
            <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderLeft: "20px solid transparent", borderTop: `20px solid #FDF6EC` }} />
            <h3 style={{ fontSize: "20px", fontWeight: 400, margin: "0 0 12px", fontStyle: "italic" }}>{f.title}</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#8B8070", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* STAMP */}
      <section style={{ textAlign: "center", padding: "40px 48px" }}>
        <div style={{ display: "inline-block", border: `2px dashed ${seal}44`, padding: "20px 32px", transform: "rotate(-3deg)" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: seal, fontFamily: "sans-serif" }}>Posté avec amour</div>
          <div style={{ fontSize: "14px", color: "#8B8070", marginTop: "4px" }}>depuis Paris, France</div>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", border: "1px solid #ddd", fontSize: "13px", color: "#8B8070", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #ddd", textAlign: "center", fontSize: "13px", color: "#bbb" }}>
        © 2024 Connected Mate · Avec toute notre amitié
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 45 — Drag & Drop Builder (SaaS/Showcase)
   ============================================================ */
const DragDropBuilder: React.FC = () => {
  const violet = "#7C3AED";
  const softBlue = "#60A5FA";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#09090B", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 40px", borderBottom: "1px solid #E4E4E7" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: `linear-gradient(135deg, ${violet}, ${softBlue})` }} />
          <span style={{ fontSize: "15px", fontWeight: 700 }}>Connected Mate Builder</span>
        </div>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", fontSize: "13px", color: "#71717A" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "8px 20px", background: violet, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>Start Building</button>
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "80px 40px 40px" }}>
        <span style={{ fontSize: "12px", color: violet, fontWeight: 600, background: `${violet}11`, padding: "4px 12px", borderRadius: "100px" }}>Nouveau : Templates 2024</span>
        <h1 style={{ fontSize: "48px", fontWeight: 800, lineHeight: 1.1, margin: "20px 0 16px", letterSpacing: "-0.03em" }}>
          Construisez le{" "}
          <span style={{ color: violet }}>futur</span>
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#71717A", maxWidth: "460px", margin: "0 auto 32px" }}>
          Connecter les idées et inspirer le futur. Glissez, déposez, publiez.
        </p>
      </section>

      {/* BUILDER CANVAS MOCKUP */}
      <section style={{ padding: "0 40px 60px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ border: "1px solid #E4E4E7", borderRadius: "12px", overflow: "hidden" }}>
          <div style={{ background: "#FAFAFA", padding: "8px 16px", borderBottom: "1px solid #E4E4E7", display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FF5F57" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FEBC2E" }} />
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#28C840" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", minHeight: "200px" }}>
            {/* Sidebar */}
            <div style={{ background: "#FAFAFA", borderRight: "1px solid #E4E4E7", padding: "12px 8px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {["□", "▣", "◯", "△"].map((s) => (
                <div key={s} style={{ width: "40px", height: "32px", background: "#fff", border: "1px solid #E4E4E7", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", color: "#999" }}>{s}</div>
              ))}
            </div>
            {/* Canvas */}
            <div style={{ padding: "16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
              <div style={{ background: `${violet}08`, border: `1px dashed ${violet}33`, borderRadius: "8px", padding: "16px", gridColumn: "span 2", textAlign: "center", fontSize: "12px", color: violet }}>Hero Section</div>
              <div style={{ background: `${softBlue}08`, border: `1px dashed ${softBlue}33`, borderRadius: "8px", padding: "12px", textAlign: "center", fontSize: "11px", color: softBlue }}>Card</div>
              <div style={{ background: `${softBlue}08`, border: `1px dashed ${softBlue}33`, borderRadius: "8px", padding: "12px", textAlign: "center", fontSize: "11px", color: softBlue }}>Card</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px" }}>
        {[{ v: "50+", l: "Templates" }, { v: "100+", l: "Composants" }, { v: "5", l: "Intégrations" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", fontWeight: 800, color: violet }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#A1A1AA" }}>{s.l}</div>
          </div>
        ))}
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", padding: "0 40px 60px", maxWidth: "800px", margin: "0 auto" }}>
        {[
          { title: "Keynotes", desc: "Templates de présentation drag & drop." },
          { title: "Podcasts", desc: "Lecteur audio personnalisable en un clic." },
          { title: "Apps", desc: "Composants d&apos;interface prêts à l&apos;emploi." },
          { title: "Blog", desc: "Éditeur de contenu visuel intuitif." },
        ].map((f) => (
          <div key={f.title} style={{ border: "1px solid #E4E4E7", borderRadius: "12px", padding: "24px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 8px" }}>{f.title}</h3>
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#71717A", margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", border: "1px solid #E4E4E7", borderRadius: "8px", fontSize: "13px", color: "#71717A", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 40px", borderTop: "1px solid #E4E4E7", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#A1A1AA" }}>
        <span>© 2024 Connected Mate</span>
        <span>Ship faster ⚡</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 46 — Vinyl Café (Playful/Retro)
   ============================================================ */
const VinylCafe: React.FC = () => {
  const mustard = "#D4A030";
  const red = "#C0392B";
  return (
    <div style={{ minHeight: "100vh", background: "#FFF5E6", color: "#2C1810", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700, color: red }}>Connected Mate Vinyl</span>
        <div style={{ display: "flex", gap: "24px", fontSize: "14px", color: "#8B6B50" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", padding: "60px 48px", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "14px", color: mustard, marginBottom: "12px" }}>♫ Now Spinning</div>
          <h1 style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 20px" }}>
            Connecter les idées,
            <br />
            <span style={{ color: red }}>inspirer le futur</span>
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#8B6B50", margin: "0 0 28px" }}>
            Un café où les bonnes idées tournent en boucle, comme vos vinyles préférés.
          </p>
          <button style={{ padding: "14px 36px", background: red, color: "#fff", border: "none", borderRadius: "100px", fontSize: "15px", cursor: "pointer" }}>
            Écouter
          </button>
        </div>
        {/* Vinyl art */}
        <div style={{ position: "relative", width: "250px", height: "250px", margin: "0 auto" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#2C1810" }} />
          <div style={{ position: "absolute", inset: "30px", borderRadius: "50%", border: `1px solid ${mustard}33` }} />
          <div style={{ position: "absolute", inset: "60px", borderRadius: "50%", border: `1px solid ${mustard}22` }} />
          <div style={{ position: "absolute", inset: "90px", borderRadius: "50%", background: mustard, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#2C1810", textTransform: "uppercase" }}>CM</span>
          </div>
        </div>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "48px", padding: "40px 48px", borderTop: "1px solid #ddd", borderBottom: "1px solid #ddd" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Apps" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: red }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#8B6B50" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* MENU */}
      <section style={{ padding: "60px 48px", maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", fontSize: "14px", color: mustard, letterSpacing: "0.15em", marginBottom: "32px" }}>— MENU —</div>
        {[
          { title: "Keynotes", desc: "Conférences fraîchement servies", price: "♫" },
          { title: "Podcasts", desc: "Conversations torréfiées avec soin", price: "♫♫" },
          { title: "Apps", desc: "Applications maison, recettes secrètes", price: "♫♫♫" },
          { title: "Blog", desc: "Articles écrits à la main", price: "♫" },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", padding: "16px 0", borderBottom: "1px dashed #ccc" }}>
            <div>
              <span style={{ fontWeight: 700 }}>{f.title}</span>
              <span style={{ fontSize: "14px", color: "#8B6B50", marginLeft: "8px" }}>— {f.desc}</span>
            </div>
            <span style={{ color: mustard }}>{f.price}</span>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "10px 20px", background: red, color: "#fff", borderRadius: "100px", fontSize: "13px", cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #ddd", textAlign: "center", fontSize: "13px", color: "#8B6B50" }}>
        © 2024 Connected Mate · ♫ Keep spinning
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 47 — Climate Dashboard (Showcase/Impact)
   ============================================================ */
const ClimateDashboard: React.FC = () => {
  const green = "#059669";
  const ocean = "#0284C7";
  return (
    <div style={{ minHeight: "100vh", background: "#F0FFF4", color: "#1A202C", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700, color: green }}>Connected Mate Climate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "14px", color: "#6B7280" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      <section style={{ textAlign: "center", padding: "60px 48px" }}>
        <div style={{ fontSize: "48px", fontWeight: 900, color: green, marginBottom: "8px" }}>-42%</div>
        <div style={{ fontSize: "14px", color: "#6B7280", marginBottom: "32px" }}>de réduction carbone depuis 2020</div>
        <h1 style={{ fontSize: "44px", fontWeight: 800, lineHeight: 1.15, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
          Connecter les idées pour un{" "}
          <span style={{ color: green }}>futur durable</span>
        </h1>
        <p style={{ fontSize: "16px", lineHeight: 1.7, color: "#6B7280", maxWidth: "480px", margin: "0 auto 32px" }}>
          La technologie au service de la planète. Chaque action compte.
        </p>
        <button style={{ padding: "12px 32px", background: green, color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", fontWeight: 600, cursor: "pointer" }}>
          Agir maintenant
        </button>
      </section>

      {/* METRICS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", padding: "0 48px 60px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ v: "50+", l: "Conférences", d: "▼ Empreinte" }, { v: "100+", l: "Épisodes", d: "▲ Impact" }, { v: "5", l: "Applications", d: "● Neutres" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "12px", padding: "24px", border: `1px solid ${green}22` }}>
            <div style={{ fontSize: "28px", fontWeight: 800, color: green }}>{s.v}</div>
            <div style={{ fontSize: "13px", color: "#6B7280" }}>{s.l}</div>
            <div style={{ marginTop: "12px", height: "6px", background: `${green}15`, borderRadius: "3px", overflow: "hidden" }}>
              <div style={{ height: "100%", width: "70%", background: green, borderRadius: "3px" }} />
            </div>
            <div style={{ fontSize: "11px", color: green, marginTop: "4px", fontWeight: 600 }}>{s.d}</div>
          </div>
        ))}
      </section>

      {/* MILESTONES */}
      <section style={{ padding: "0 48px 60px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", color: green, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>Jalons</div>
        {[
          { title: "Keynotes", desc: "50+ conférences sur le climat et la tech verte.", year: "2024" },
          { title: "Podcasts", desc: "100+ épisodes dédiés à l&apos;innovation durable.", year: "2023" },
          { title: "Apps", desc: "5 apps pour mesurer et réduire votre empreinte.", year: "2022" },
          { title: "Blog", desc: "500+ articles sur les solutions climatiques.", year: "2021" },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", gap: "20px", padding: "16px 0", borderBottom: `1px solid ${green}15`, alignItems: "baseline" }}>
            <span style={{ fontSize: "12px", color: ocean, fontWeight: 600, width: "48px" }}>{f.year}</span>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 4px" }}>{f.title}</h3>
              <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: green, color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: `1px solid ${green}22`, display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6B7280" }}>
        <span>© 2024 Connected Mate</span>
        <span>🌍 Pour la planète</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 48 — Midnight Jazz (Dark/Artistic)
   ============================================================ */
const MidnightJazz: React.FC = () => {
  const gold = "#C9A227";
  const smoky = "#3A506B";
  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0D", color: "#F5F0E8", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 48px" }}>
        <span style={{ fontSize: "18px", color: gold, fontStyle: "italic" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#666" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* SPOTLIGHT HERO */}
      <section style={{ textAlign: "center", padding: "100px 48px 80px", background: `radial-gradient(ellipse at center, ${gold}08 0%, transparent 60%)` }}>
        <div style={{ fontSize: "14px", color: gold, letterSpacing: "0.2em", marginBottom: "24px" }}>♫ CE SOIR AU CLUB ♫</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 68px)", fontWeight: 400, lineHeight: 1.2, margin: "0 0 24px", fontStyle: "italic" }}>
          Connecter les idées,
          <br />
          <span style={{ color: gold }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "17px", lineHeight: 1.9, color: "#888", maxWidth: "480px", margin: "0 auto 36px" }}>
          Quand les lumières baissent et que la musique monte, les meilleures idées prennent vie.
        </p>
        <button style={{ padding: "14px 40px", background: "transparent", border: `1px solid ${gold}`, color: gold, fontSize: "13px", letterSpacing: "0.15em", cursor: "pointer" }}>
          Entrer au club
        </button>
      </section>

      <section style={{ display: "flex", justifyContent: "center", gap: "60px", padding: "40px 48px", borderTop: `1px solid ${gold}15`, borderBottom: `1px solid ${gold}15` }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 300, fontStyle: "italic", color: gold }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* SET LIST */}
      <section style={{ padding: "60px 48px" }}>
        <div style={{ fontSize: "12px", color: gold, letterSpacing: "0.2em", marginBottom: "24px" }}>SET LIST</div>
        {[
          { title: "Keynotes", desc: "Premier set — Les plus grandes voix de l&apos;innovation.", time: "20h" },
          { title: "Podcasts", desc: "Deuxième set — Conversations intimes et improvisées.", time: "22h" },
          { title: "Apps", desc: "Jam session — Créations spontanées et collaboratives.", time: "00h" },
          { title: "Blog", desc: "After hours — Réflexions nocturnes sur le futur.", time: "02h" },
        ].map((f) => (
          <div key={f.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", borderBottom: `1px solid ${gold}15` }}>
            <div style={{ display: "flex", gap: "20px", alignItems: "baseline" }}>
              <span style={{ fontSize: "13px", color: gold, fontFamily: "sans-serif" }}>{f.time}</span>
              <h3 style={{ fontSize: "22px", fontWeight: 400, fontStyle: "italic", margin: 0 }}>{f.title}</h3>
            </div>
            <p style={{ fontSize: "14px", color: "#666", margin: 0, maxWidth: "300px", textAlign: "right" }}>{f.desc}</p>
          </div>
        ))}
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", border: `1px solid ${gold}33`, fontSize: "12px", color: gold, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: `1px solid ${gold}15`, display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#444" }}>
        <span>© 2024 Connected Mate</span>
        <span>♪ ♫ All that jazz</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 49 — Nature Documentary (Editorial)
   ============================================================ */
const NatureDocumentary: React.FC = () => {
  const green = "#16A34A";
  const brown = "#92400E";
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#1A1A1A", fontFamily: "'Georgia', serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px", fontFamily: "sans-serif" }}>
        <span style={{ fontSize: "15px", fontWeight: 600 }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", fontSize: "13px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
        </div>
      </nav>

      {/* DOCUMENTARY TITLE CARD */}
      <section style={{ padding: "80px 48px", background: `linear-gradient(180deg, #1a3a1a 0%, #2d5a2d 40%, ${green}33 100%)`, color: "#fff", textAlign: "center" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", opacity: 0.6, marginBottom: "24px", fontFamily: "sans-serif" }}>Connected Mate présente</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 80px)", fontWeight: 400, lineHeight: 1.1, margin: "0 0 20px", fontStyle: "italic" }}>
          Connecter les idées,
          <br />
          inspirer le futur
        </h1>
        <div style={{ fontSize: "14px", opacity: 0.6, fontFamily: "sans-serif" }}>Un documentaire sur l&apos;innovation et la nature</div>
      </section>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "#eee" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: "36px", fontWeight: 700, color: green }}>{s.v}</div>
            <div style={{ fontSize: "12px", color: "#999", marginTop: "4px", fontFamily: "sans-serif" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* EPISODE CARDS */}
      <section style={{ padding: "60px 48px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: brown, marginBottom: "24px", fontFamily: "sans-serif" }}>Épisodes</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {[
            { ep: "Ep. 1", title: "Keynotes", desc: "L&apos;écosystème des conférences tech, filmé comme on filme la savane.", dur: "45 min" },
            { ep: "Ep. 2", title: "Podcasts", desc: "Migrations sonores : comment les podcasts colonisent nos oreilles.", dur: "38 min" },
            { ep: "Ep. 3", title: "Apps", desc: "L&apos;évolution des applications : de la cellule au système complexe.", dur: "42 min" },
            { ep: "Ep. 4", title: "Blog", desc: "Les forêts de mots : l&apos;écosystème du contenu numérique.", dur: "36 min" },
          ].map((f) => (
            <div key={f.ep} style={{ border: "1px solid #eee", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ height: "80px", background: `linear-gradient(135deg, ${green}22, ${brown}11)`, display: "flex", alignItems: "flex-end", padding: "12px" }}>
                <span style={{ fontSize: "12px", color: green, fontFamily: "sans-serif", fontWeight: 600 }}>{f.ep}</span>
              </div>
              <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, margin: 0 }}>{f.title}</h3>
                  <span style={{ fontSize: "12px", color: "#999", fontFamily: "sans-serif" }}>{f.dur}</span>
                </div>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#888", margin: 0 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HABITATS */}
      <section style={{ padding: "0 48px 60px" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#bbb", marginBottom: "16px", fontFamily: "sans-serif" }}>Explorer les habitats</div>
        <div style={{ display: "flex", gap: "12px" }}>
          {["Innovation", "IA", "Design", "Culture", "Futur"].map((h) => (
            <span key={h} style={{ padding: "8px 16px", background: `${green}11`, borderRadius: "100px", fontSize: "13px", color: green, fontFamily: "sans-serif" }}>{h}</span>
          ))}
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "40px 48px 60px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", fontFamily: "sans-serif" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "8px 20px", background: green, color: "#fff", borderRadius: "8px", fontSize: "13px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "20px 48px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#bbb", fontFamily: "sans-serif" }}>
        <span>© 2024 Connected Mate</span>
        <span>🌿 Notre planète, nos idées</span>
      </footer>
    </div>
  );
};

/* ============================================================
   DESIGN 50 — Grand Finale Showcase (Premium)
   ============================================================ */
const GrandFinale: React.FC = () => {
  const gradientCSS = "linear-gradient(135deg, #1E40AF, #6D28D9, #DB2777)";
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", color: "#111", fontFamily: "'Inter', -apple-system, sans-serif", margin: 0 }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 48px" }}>
        <span style={{ fontSize: "18px", fontWeight: 800, background: gradientCSS, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connected Mate</span>
        <div style={{ display: "flex", gap: "28px", alignItems: "center", fontSize: "14px", color: "#888" }}>
          {["Keynotes", "Podcasts", "Apps", "Blog"].map((t) => (
            <span key={t} style={{ cursor: "pointer" }}>{t}</span>
          ))}
          <button style={{ padding: "10px 24px", background: gradientCSS, color: "#fff", border: "none", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>Rejoindre</button>
        </div>
      </nav>

      {/* HERO — the grand finale */}
      <section style={{ textAlign: "center", padding: "100px 48px 60px" }}>
        <h1 style={{ fontSize: "clamp(52px, 7vw, 84px)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 24px", letterSpacing: "-0.04em" }}>
          Connecter les idées,
          <br />
          <span style={{ background: gradientCSS, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>inspirer le futur</span>
        </h1>
        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#888", maxWidth: "520px", margin: "0 auto 36px" }}>
          Le meilleur de la technologie, du design et de l&apos;humanité. Réunis en un seul endroit. Pour vous.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <button style={{ padding: "16px 40px", background: gradientCSS, color: "#fff", border: "none", borderRadius: "100px", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
            Découvrir →
          </button>
          <button style={{ padding: "16px 40px", background: "transparent", color: "#111", border: "1px solid #ddd", borderRadius: "100px", fontSize: "16px", cursor: "pointer" }}>
            En savoir plus
          </button>
        </div>
      </section>

      {/* STATS */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "40px 48px 60px", maxWidth: "900px", margin: "0 auto" }}>
        {[{ v: "50+", l: "Conférences" }, { v: "100+", l: "Épisodes podcast" }, { v: "5", l: "Applications" }].map((s) => (
          <div key={s.l} style={{ background: "#fff", borderRadius: "16px", padding: "32px", textAlign: "center", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize: "40px", fontWeight: 900, background: gradientCSS, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.v}</div>
            <div style={{ fontSize: "14px", color: "#999", marginTop: "4px" }}>{s.l}</div>
          </div>
        ))}
      </section>

      {/* MANIFESTO */}
      <section style={{ textAlign: "center", padding: "60px 48px", maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: "20px" }}>Notre manifeste</div>
        <p style={{ fontSize: "24px", fontWeight: 400, fontStyle: "italic", lineHeight: 1.6, color: "#555", fontFamily: "'Georgia', serif" }}>
          &ldquo;Nous croyons que le futur appartient à ceux qui osent connecter les idées. Pas seulement les bonnes — toutes les idées. Car c&apos;est dans l&apos;inattendu que naît l&apos;innovation.&rdquo;
        </p>
      </section>

      {/* ASYMMETRIC FEATURES */}
      <section style={{ padding: "0 48px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px", marginBottom: "16px" }}>
          <div style={{ background: "#111", color: "#fff", borderRadius: "20px", padding: "40px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 12px" }}>Keynotes</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#999", margin: 0 }}>Des conférences qui combinent vision artistique, profondeur intellectuelle et énergie contagieuse.</p>
          </div>
          <div style={{ background: gradientCSS, borderRadius: "20px", padding: "40px", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 800, margin: 0 }}>Podcasts</h3>
            <p style={{ fontSize: "13px", marginTop: "8px", opacity: 0.8 }}>100+ épisodes</p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "16px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", border: "1px solid #eee" }}>
            <h3 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 8px" }}>Apps</h3>
            <p style={{ fontSize: "13px", color: "#888" }}>5 applications innovantes</p>
          </div>
          <div style={{ background: "#111", color: "#fff", borderRadius: "20px", padding: "40px" }}>
            <h3 style={{ fontSize: "28px", fontWeight: 800, margin: "0 0 12px" }}>Blog</h3>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#999", margin: 0 }}>Articles qui combinent le meilleur du journalisme, du design et de la pensée critique.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 48px", background: "#fff", borderRadius: "24px", margin: "0 48px 60px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: "24px" }}>Rejoignez le mouvement</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          {["Twitter", "LinkedIn", "YouTube", "GitHub"].map((s) => (
            <span key={s} style={{ padding: "12px 24px", background: gradientCSS, color: "#fff", borderRadius: "100px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>{s}</span>
          ))}
        </div>
      </section>

      <footer style={{ padding: "24px 48px", borderTop: "1px solid #eee", display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#bbb" }}>
        <span>© 2024 Connected Mate</span>
        <span>Le grand finale ✦</span>
      </footer>
    </div>
  );
};

/* ============================================================
   EXPORTS
   ============================================================ */
export const designs: HomepageDesign[] = [
  { id: 41, name: "Creative Director", category: "Branding", description: "Portfolio with oversized serif, burnt sienna accent, selected work, philosophy section", component: CreativeDirector },
  { id: 42, name: "Digital Wallet", category: "Fintech", description: "Modern wallet with phone mockup, transaction list, blue/mint accents", component: DigitalWallet },
  { id: 43, name: "Abstract Art", category: "Artistic", description: "Expressionism with Klein blue, red, yellow color blocks, geometric shapes", component: AbstractArt },
  { id: 44, name: "Penpal", category: "Human", description: "Letter-writing feel with aged paper, ink blue, wax seal, folded corners", component: Penpal },
  { id: 45, name: "Drag & Drop Builder", category: "Showcase", description: "SaaS builder with canvas mockup, violet accent, template gallery", component: DragDropBuilder },
  { id: 46, name: "Vinyl Café", category: "Playful", description: "Retro music café with vinyl record art, mustard/red, menu-style features", component: VinylCafe },
  { id: 47, name: "Climate Dashboard", category: "Showcase", description: "Climate tech with earth green, carbon counter, progress bars, milestones", component: ClimateDashboard },
  { id: 48, name: "Midnight Jazz", category: "Dark", description: "Jazz club with spotlight effect, saxophone gold, set list, smoky atmosphere", component: MidnightJazz },
  { id: 49, name: "Nature Documentary", category: "Editorial", description: "BBC Earth style with documentary title card, episode cards, nature green", component: NatureDocumentary },
  { id: 50, name: "Grand Finale Showcase", category: "Showcase", description: "The best of everything: gradient branding, manifesto, asymmetric grid, premium feel", component: GrandFinale },
];
