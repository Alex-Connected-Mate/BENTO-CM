import { BentoCard } from "@/components/BentoCard";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";

const podcast = {
  title: "Connected Mate",
  description:
    "Le podcast qui connecte les idées, les personnes et les technologies. Retrouvez nos conversations avec des leaders de la tech, des entrepreneurs et des penseurs qui façonnent le monde de demain.",
  gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
  episodes: "250+ abonnés",
};

const platforms = [
  {
    name: "Apple Podcasts",
    url: "https://podcasts.apple.com/fr/podcast/connected-mate/id1439013021",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
    icon: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/show/0HE6b6ZfN3zeU4QikK7XFd",
    gradient: "bg-gradient-to-br from-green-500 to-green-600",
    icon: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.622.622 0 01.207.857zm1.224-2.719a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.452-1.493c3.632-1.102 8.147-.568 11.232 1.33a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 11-.543-1.79c3.533-1.072 9.405-.865 13.115 1.338a.935.935 0 01-1.954 1.612z",
  },
  {
    name: "Deezer",
    url: "https://www.deezer.com/show/377322",
    gradient: "bg-gradient-to-br from-purple-600 to-indigo-600",
    icon: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H8v-2h3v2zm0-3H8v-2h3v2zm0-3H8V8h3v2zm5 6h-3v-2h3v2zm0-3h-3v-2h3v2zm0-3h-3V8h3v2z",
  },
  {
    name: "Tous les épisodes",
    url: "https://smartlink.ausha.co/connectedmate",
    gradient: "bg-gradient-to-br from-amber-500 to-orange-600",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
];

export default function PodcastsPage() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Podcasts"
        subtitle="Écoutez nos émissions et plongez dans des conversations inspirantes"
      />

      <BentoGrid>
        {/* Main podcast card */}
        <BentoCard
          title={podcast.title}
          description={podcast.description}
          size="2x2"
          colored
          gradient={podcast.gradient}
          icon={
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          }
        >
          <div className="flex items-center gap-2">
            <span className="badge badge--white">
              {podcast.episodes}
            </span>
          </div>
        </BentoCard>

        {/* Platform cards */}
        {platforms.map((platform) => (
          <BentoCard
            key={platform.name}
            title={platform.name}
            size="1x1"
            href={platform.url}
            colored
            gradient={platform.gradient}
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={platform.icon} />
              </svg>
            }
          />
        ))}

        {/* YouTube card */}
        <BentoCard
          title="YouTube"
          description="Retrouvez nos épisodes en vidéo sur notre chaîne YouTube."
          size="2x1"
          href="https://www.youtube.com/@ConnectedMate"
          colored
          gradient="bg-gradient-to-br from-red-500 to-red-600"
          icon={
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          }
        />
      </BentoGrid>
    </div>
  );
}
