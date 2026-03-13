"use client";

import { useEffect, useState, useCallback } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

const KONAMI_MESSAGES = [
  "🚀 Mode startup activé ! Vous avez débloqué… rien. Mais c'est cool quand même.",
  "🎮 Cheat code accepté ! +999 motivation, -999 sommeil.",
  "🦄 Bravo ! Vous avez trouvé la licorne cachée de Connected Mate.",
  "☕ Achievement unlocked: « A trouvé le Konami Code au lieu de travailler »",
  "🧑‍💻 sudo make me a startup… Permission denied. Essayez encore.",
];

export function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [showMessage, setShowMessage] = useState<string | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1;
        if (next === KONAMI.length) {
          const msg = KONAMI_MESSAGES[Math.floor(Math.random() * KONAMI_MESSAGES.length)];
          setShowMessage(msg);
          setKonamiIndex(0);
          setTimeout(() => setShowMessage(null), 4000);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(e.key === KONAMI[0] ? 1 : 0);
      }
    },
    [konamiIndex],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Console Easter egg — runs once
  useEffect(() => {
    console.log(
      "%c🧡 Connected Mate",
      "font-size:20px;font-weight:bold;color:#E8600A;",
    );
    console.log(
      "%cTu fouilles dans la console ? On aime ta curiosité. 🕵️\nEnvoie-nous un mail à alex.connectedmate@gmail.com avec le mot de passe « ctrl+z » pour un sticker gratuit !",
      "font-size:13px;color:#666;",
    );
  }, []);

  if (!showMessage) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.85)",
          color: "#fff",
          padding: "24px 36px",
          borderRadius: 16,
          fontSize: 18,
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          maxWidth: 500,
          textAlign: "center",
          animation: "fadeInUp 0.4s ease-out",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        }}
      >
        {showMessage}
      </div>
    </div>
  );
}
