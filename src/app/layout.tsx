import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Connected Mate - Vintage Tech",
  description: "Connected Mate - Conférences, Podcasts, Apps & more",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ minHeight: "100vh" }}>
        <Navigation />
        <main
          style={{
            width: "100%",
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 32,
            paddingBottom: 100,
          }}
        >
          {children}
        </main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
