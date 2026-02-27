import { PageHeader } from "@/components/PageHeader";

const platforms = [
  { name: "Apple Podcasts", url: "https://podcasts.apple.com/fr/podcast/connected-mate/id1439013021", gradient: "linear-gradient(135deg, #a855f7, #ec4899)" },
  { name: "Spotify", url: "https://open.spotify.com/show/0HE6b6ZfN3zeU4QikK7XFd", gradient: "linear-gradient(135deg, #22c55e, #16a34a)" },
  { name: "Deezer", url: "https://www.deezer.com/show/377322", gradient: "linear-gradient(135deg, #7c3aed, #4f46e5)" },
  { name: "Tous les épisodes", url: "https://smartlink.ausha.co/connectedmate", gradient: "linear-gradient(135deg, #E8600A, #F5A623)" },
];

export default function PodcastsPage() {
  return (
    <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", paddingBottom: 80 }}>
      <PageHeader title="Podcasts" subtitle="Écoutez nos émissions et plongez dans des conversations inspirantes" />

      <div style={{ padding: "0 24px" }}>
        {/* Hero podcast card */}
        <div
          className="card card--gradient animate-fade-up"
          style={{
            background: "linear-gradient(135deg, #E8600A, #F5A623)",
            minHeight: 260,
            marginBottom: 32,
          }}
        >
          <div className="icon-box icon-box--white" style={{ marginBottom: 20 }}>
            <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700 }}>Connected Mate</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.80)", marginTop: 12, lineHeight: 1.6, maxWidth: 600 }}>
            Le podcast qui connecte les idées, les personnes et les technologies. Retrouvez nos conversations avec des leaders de la tech, des entrepreneurs et des penseurs qui façonnent le monde de demain.
          </p>
          <div style={{ marginTop: 20 }}>
            <span className="badge badge--white">250+ abonnés</span>
          </div>
        </div>

        {/* Platform cards */}
        <h3
          className="animate-fade-up animate-fade-up-d1"
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "var(--color-text)", marginBottom: 20 }}
        >
          Écouter sur
        </h3>

        <div className="grid-cards--2col animate-fade-up animate-fade-up-d2" style={{ display: "grid", gap: 16 }}>
          {platforms.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card card--gradient"
              style={{ background: p.gradient, textDecoration: "none", minHeight: 120, justifyContent: "center" }}
            >
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700 }}>{p.name}</h3>
              <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "rgba(255,255,255,0.80)" }}>
                Écouter
                <svg style={{ width: 14, height: 14 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </div>
            </a>
          ))}
        </div>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@ConnectedMate"
          target="_blank"
          rel="noopener noreferrer"
          className="card card--gradient animate-fade-up animate-fade-up-d3"
          style={{ background: "linear-gradient(135deg, #ef4444, #dc2626)", textDecoration: "none", marginTop: 24, display: "block" }}
        >
          <div className="icon-box icon-box--white" style={{ marginBottom: 16 }}>
            <svg style={{ width: 24, height: 24 }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700 }}>YouTube</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.80)", marginTop: 6 }}>Retrouvez nos épisodes en vidéo sur notre chaîne YouTube.</p>
        </a>
      </div>
    </div>
  );
}
