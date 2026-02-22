import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen">
        <Navigation />
        <main className="mx-auto max-w-3xl px-4 pb-24 pt-4 sm:pt-8">
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
