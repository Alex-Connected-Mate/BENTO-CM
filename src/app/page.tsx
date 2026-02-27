import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "80px 24px",
        }}
      >
        {/* Animated gradient blobs */}
        <div className="gradient-blob--hero" style={{ position: "absolute", top: "-20%", right: "-10%", }} />
        <div className="gradient-blob--small" style={{ position: "absolute", bottom: "5%", left: "-5%", }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
          <div className="animate-fade-up" style={{ marginBottom: 24 }}>
            <span className="badge badge--accent" style={{ fontSize: 13, padding: "6px 18px" }}>
              Conférences · Podcasts · Apps
            </span>
          </div>

          <h1
            className="animate-fade-up animate-fade-up-d1"
            style={{
              fontFamily: "'Playfair Display', 'Space Grotesk', serif",
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              color: "var(--color-text)",
            }}
          >
            Connecter les{" "}
            <span className="gradient-text" style={{ fontStyle: "italic" }}>
              idées
            </span>
            ,<br />
            inspirer le{" "}
            <span className="gradient-text" style={{ fontStyle: "italic" }}>
              futur
            </span>
          </h1>

          <p
            className="animate-fade-up animate-fade-up-d2"
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--color-text-muted)",
              marginTop: 24,
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Connected Mate connecte les personnes et les technologies pour créer
            des expériences uniques à travers des conférences, podcasts et applications.
          </p>

          <div
            className="animate-fade-up animate-fade-up-d3"
            style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/keynote" className="btn-gradient">
              Découvrir nos keynotes
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/podcasts" className="btn-outline">
              Écouter les podcasts
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0 24px",
        }}
      >
        <div
          className="animate-fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            textAlign: "center",
            padding: "64px 0",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          <div>
            <div className="stat-number gradient-text">50+</div>
            <div className="stat-label">Conférences données</div>
          </div>
          <div>
            <div className="stat-number gradient-text">100+</div>
            <div className="stat-label">Épisodes de podcast</div>
          </div>
          <div>
            <div className="stat-number gradient-text">5</div>
            <div className="stat-label">Applications</div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section
        className="section"
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "100px 24px",
          position: "relative",
        }}
      >
        <div className="gradient-blob" style={{ position: "absolute", top: "10%", left: "-15%", opacity: 0.6 }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="animate-fade-up" style={{ textAlign: "center", marginBottom: 64 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 44,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--color-text)",
              }}
            >
              Tout notre{" "}
              <span className="gradient-text" style={{ fontStyle: "italic" }}>
                univers
              </span>
            </h2>
            <p style={{ fontSize: 17, color: "var(--color-text-muted)", marginTop: 16, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              Explorez nos conférences, podcasts, applications et articles.
            </p>
          </div>

          <div className="grid-cards--2col" style={{ display: "grid", gap: 24 }}>
            {/* Keynotes */}
            <Link href="/keynote" className="card card--gradient animate-fade-up animate-fade-up-d1" style={{ background: "linear-gradient(135deg, #E8600A, #d4550a)", textDecoration: "none", minHeight: 240 }}>
              <div style={{ marginBottom: 16 }}>
                <div className="icon-box icon-box--white" style={{ marginBottom: 20 }}>
                  <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700 }}>Keynotes</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.6 }}>
                  Nos conférences inspirantes sur l&apos;innovation, l&apos;IA et la transformation digitale.
                </p>
              </div>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                Voir les keynotes
                <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* Podcasts */}
            <Link href="/podcasts" className="card card--gradient animate-fade-up animate-fade-up-d2" style={{ background: "linear-gradient(135deg, #F5A623, #E8600A)", textDecoration: "none", minHeight: 240 }}>
              <div style={{ marginBottom: 16 }}>
                <div className="icon-box icon-box--white" style={{ marginBottom: 20 }}>
                  <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700 }}>Podcasts</h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", marginTop: 8, lineHeight: 1.6 }}>
                  Écoutez nos épisodes passionnants avec des leaders de la tech et des entrepreneurs.
                </p>
              </div>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>
                Écouter maintenant
                <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* Apps */}
            <Link href="/apps" className="card animate-fade-up animate-fade-up-d3" style={{ textDecoration: "none", color: "var(--color-text)", minHeight: 240 }}>
              <div style={{ marginBottom: 16 }}>
                <div className="icon-box icon-box--default" style={{ marginBottom: 20 }}>
                  <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700 }}>Nos Apps</h3>
                <p style={{ fontSize: 15, color: "var(--color-text-muted)", marginTop: 8, lineHeight: 1.6 }}>
                  Des outils pour transformer votre quotidien professionnel et booster la productivité.
                </p>
              </div>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--color-accent)" }}>
                Découvrir
                <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>

            {/* Blog */}
            <Link href="/blog" className="card animate-fade-up animate-fade-up-d4" style={{ textDecoration: "none", color: "var(--color-text)", minHeight: 240 }}>
              <div style={{ marginBottom: 16 }}>
                <div className="icon-box icon-box--default" style={{ marginBottom: 20 }}>
                  <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700 }}>Blog</h3>
                <p style={{ fontSize: 15, color: "var(--color-text-muted)", marginTop: 8, lineHeight: 1.6 }}>
                  Articles, retours d&apos;expérience et analyses sur la tech et l&apos;innovation.
                </p>
              </div>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 600, color: "var(--color-accent)" }}>
                Lire les articles
                <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CONNECT ============ */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div className="gradient-blob--small" style={{ position: "absolute", top: "20%", right: "-10%", opacity: 0.5 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
          <h2
            className="animate-fade-up"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 44,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-text)",
            }}
          >
            Restons{" "}
            <span className="gradient-text" style={{ fontStyle: "italic" }}>
              connectés
            </span>
          </h2>
          <p
            className="animate-fade-up animate-fade-up-d1"
            style={{ fontSize: 17, color: "var(--color-text-muted)", marginTop: 16, lineHeight: 1.6 }}
          >
            Suivez-nous sur les réseaux pour ne rien manquer.
          </p>

          <div
            className="animate-fade-up animate-fade-up-d2"
            style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center" }}
          >
            <a href="https://www.youtube.com/@ConnectedMate" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="YouTube">YT</a>
            <a href="https://smartlink.ausha.co/connectedmate" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Podcast">🎙</a>
            <a href="https://open.spotify.com/show/0HE6b6ZfN3zeU4QikK7XFd" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Spotify">♪</a>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px 24px",
          borderTop: "1px solid var(--color-border)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 13, color: "var(--color-text-light)" }}>
          © 2026 Connected Mate SAS · Tous droits réservés ·{" "}
          <Link href="/legal" style={{ color: "var(--color-text-muted)", textDecoration: "none" }}>
            Mentions légales
          </Link>
        </p>
      </footer>
    </>
  );
}
