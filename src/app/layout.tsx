import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Bento Connected Mate",
  description: "Connected Mate - Conferences, Podcasts, Apps & more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">
        <Navigation />
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
          {children}
        </main>
      </body>
    </html>
  );
}
