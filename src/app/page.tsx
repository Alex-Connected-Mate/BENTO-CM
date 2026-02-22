import { BentoCard } from "@/components/BentoCard";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Connected Mate"
        subtitle="Conférences, podcasts et applications"
      />

      <BentoGrid>
        <BentoCard
          title="Bienvenue chez Connected Mate"
          description="Nous connectons les idées, les personnes et les technologies pour créer des expériences uniques."
          size="2x2"
          colored
          gradient="bg-gradient-to-br from-orange-500 to-amber-600"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        >
          <div className="vintage-circle absolute -bottom-8 -right-8 h-32 w-32 sm:-bottom-10 sm:-right-10 sm:h-44 sm:w-44" />
        </BentoCard>

        <BentoCard
          title="Keynotes"
          description="Nos conférences inspirantes sur l’innovation et la tech."
          size="2x1"
          href="/keynote"
          colored
          gradient="bg-gradient-to-br from-red-500 to-orange-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          }
        />

        <BentoCard
          title="Podcasts"
          description="Écoutez nos épisodes passionnants."
          size="1x1"
          href="/podcasts"
          colored
          gradient="bg-gradient-to-br from-amber-500 to-yellow-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          }
        />

        <BentoCard
          title="Nos Apps"
          description="Des outils pour transformer votre quotidien."
          size="1x1"
          href="/apps"
          colored
          gradient="bg-gradient-to-br from-orange-400 to-red-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          }
        />

        <BentoCard
          title="Blog"
          description="Articles et retours d’expérience."
          size="1x1"
          href="/blog"
          gradient="bg-gradient-to-br from-amber-400 to-orange-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          }
        />

        <BentoCard
          title="En chiffres"
          size="1x1"
          gradient="bg-gradient-to-br from-orange-500 to-amber-500"
        >
          <div className="grid grid-cols-3 gap-1.5 text-center sm:gap-2">
            <div>
              <div className="text-lg font-bold sm:text-2xl" style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-accent)" }}>50+</div>
              <div className="text-[10px] sm:text-[11px]" style={{ color: "var(--color-text-muted)" }}>Conférences</div>
            </div>
            <div>
              <div className="text-lg font-bold sm:text-2xl" style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-accent)" }}>100+</div>
              <div className="text-[10px] sm:text-[11px]" style={{ color: "var(--color-text-muted)" }}>Épisodes</div>
            </div>
            <div>
              <div className="text-lg font-bold sm:text-2xl" style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-accent)" }}>5</div>
              <div className="text-[10px] sm:text-[11px]" style={{ color: "var(--color-text-muted)" }}>Apps</div>
            </div>
          </div>
        </BentoCard>

        <BentoCard
          title="Restons connectés"
          description="Suivez-nous sur les réseaux."
          size="2x1"
          gradient="bg-gradient-to-br from-amber-600 to-orange-600"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          }
        >
          <div className="flex gap-2">
            <a href="https://www.youtube.com/@ConnectedMate" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="YouTube">YT</a>
            <a href="https://smartlink.ausha.co/connectedmate" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Podcast">🎙</a>
            <a href="https://open.spotify.com/show/0HE6b6ZfN3zeU4QikK7XFd" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Spotify">♪</a>
          </div>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
