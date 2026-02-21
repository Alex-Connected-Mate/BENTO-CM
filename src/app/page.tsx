import { BentoCard } from "@/components/BentoCard";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Connected Mate"
        subtitle="Explorez notre univers : conférences, podcasts et applications"
      />

      <BentoGrid>
        {/* Hero card */}
        <BentoCard
          title="Bienvenue chez Connected Mate"
          description="Nous connectons les idées, les personnes et les technologies pour créer des expériences uniques. Découvrez nos conférences, podcasts et applications."
          size="2x2"
          gradient="bg-gradient-to-br from-indigo-500 to-purple-600"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
        />

        {/* Keynote card */}
        <BentoCard
          title="Keynotes"
          description="Nos conférences inspirantes sur l'innovation, la tech et le futur du travail."
          size="2x1"
          href="/keynote"
          gradient="bg-gradient-to-br from-orange-500 to-red-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-2 4h.01M12 14l-3-3m0 0l3-3m-3 3h12.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        {/* Podcasts card */}
        <BentoCard
          title="Podcasts"
          description="Écoutez nos épisodes et plongez dans des conversations passionnantes."
          size="1x1"
          href="/podcasts"
          gradient="bg-gradient-to-br from-green-500 to-emerald-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          }
        />

        {/* Apps card */}
        <BentoCard
          title="Nos Apps"
          description="Découvrez les applications que nous développons pour transformer votre quotidien."
          size="1x1"
          href="/apps"
          gradient="bg-gradient-to-br from-cyan-500 to-blue-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          }
        />

        {/* Blog card */}
        <BentoCard
          title="Blog"
          description="Articles, analyses et retours d'expérience sur la tech, l'IA et l'innovation."
          size="1x1"
          href="/blog"
          gradient="bg-gradient-to-br from-fuchsia-500 to-pink-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          }
        />

        {/* Stats card */}
        <BentoCard
          title="En chiffres"
          size="2x1"
          gradient="bg-gradient-to-br from-violet-500 to-pink-500"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[var(--color-accent-light)]">50+</div>
              <div className="text-xs text-[var(--color-text-muted)]">Conférences</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-accent-light)]">100+</div>
              <div className="text-xs text-[var(--color-text-muted)]">Épisodes</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--color-accent-light)]">5</div>
              <div className="text-xs text-[var(--color-text-muted)]">Applications</div>
            </div>
          </div>
        </BentoCard>

        {/* Social / Contact card */}
        <BentoCard
          title="Restons connectés"
          description="Suivez-nous sur les réseaux sociaux et ne manquez rien de notre actualité."
          size="2x1"
          gradient="bg-gradient-to-br from-amber-500 to-yellow-500"
          icon={
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          }
        >
          <div className="flex gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm transition-colors hover:bg-white/20">𝕏</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm transition-colors hover:bg-white/20">in</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm transition-colors hover:bg-white/20">YT</span>
          </div>
        </BentoCard>
      </BentoGrid>
    </div>
  );
}
