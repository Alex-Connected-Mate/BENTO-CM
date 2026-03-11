"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { AppModal } from "@/components/AppModal";

interface AppData { id: string; title: string; description: string; fullDescription: string; gradient: string; status: string; platforms: string; appUrl: string; legal: { privacy: string; terms: string; dataProcessing: string; }; }

const apps: AppData[] = [
  { id: "notetaker-ai", title: "NoteTaker AI", description: "Enregistre, transcrit, analyse. Votre mémoire augmentée par l'IA.", fullDescription: "NoteTaker AI transforme chaque conversation en notes intelligentes. Enregistrez vos appels (via Apple Watch), réunions, entretiens ou idées vocales. L'app transcrit automatiquement l'audio puis analyse le contenu grâce à l'intelligence artificielle embarquée — le tout 100% sur votre appareil, sans serveur externe.\n\nFonctionnalités principales :\n• Enregistrement en un tap depuis iPhone ou Apple Watch\n• Dynamic Island & Live Activity avec forme d'onde animée\n• Transcription automatique multilingue (Apple Speech, 100% hors ligne)\n• Analyse IA : résumé, sujets clés, prochaines étapes\n• Chat IA : posez des questions sur vos enregistrements\n• Export des actions vers Rappels Apple\n• Sécurité Face ID + code à 4 chiffres\n• Aucune donnée envoyée à un serveur", gradient: "linear-gradient(135deg, #E8600A, #F5A623)", status: "Disponible", platforms: "iOS, Apple Watch", appUrl: "https://apps.apple.com/app/notetaker-ai/id6760299554", legal: { privacy: "Aucune donnée collectée. Tout le traitement (transcription, analyse IA) est effectué sur l'appareil via Apple Speech et Apple Intelligence. Les enregistrements sont stockés localement. Aucun tracking, aucune analytique tierce, aucun serveur externe. Conformité totale RGPD — catégorie App Store : « Data Not Collected ».", terms: "Application gratuite (Freemium). Disponible dans tous les pays. Classification d'âge : 4+. Catégorie : Productivité / Utilitaires. Compatible iPhone (iOS 26+) et Apple Watch (watchOS 26+). Nécessite Apple Intelligence activé sur l'appareil.", dataProcessing: "Zéro donnée transmise. Transcription via le moteur Apple Speech (sur l'appareil). Analyse IA via Apple Foundation Models (Apple Intelligence, sur l'appareil). Chiffrement local, verrouillage Face ID. Aucune rétention serveur — vos conversations restent les vôtres." } },
  { id: "better-dictate", title: "Better Dictate", description: "Dictée vocale 100% hors ligne pour Mac, propulsée par Whisper AI.", fullDescription: "Better Dictate est une application de dictée vocale pour Mac qui fonctionne 100% hors ligne. Tu parles, le texte s'écrit. Propulsée par Whisper (OpenAI) tournant localement sur Apple Silicon.\n\n3 modes de dictée :\n• Push-to-Talk — maintiens la touche, parle, relâche. Le texte s'écrit instantanément là où est ton curseur.\n• Dictate to Clipboard — mains libres, parle librement, le texte est copié dans le presse-papiers.\n• Switch Language — traduction à la volée : parle en français, le texte sort en anglais (et toutes combinaisons).\n\nFonctionnalités :\n• App barre de menu, toujours prête, lancée par raccourci clavier\n• Modèles Whisper : Tiny, Small, Medium, Large\n• 16+ langues : français, anglais, espagnol, allemand, italien, chinois, japonais, coréen, arabe…\n• Dictionnaire personnalisé avec corrections, suppression de mots, filtre de vulgarité\n• Technologie d'assistance (handicap moteur, troubles de la parole, difficultés cognitives)\n• macOS 13+ / Apple Silicon (M1–M4)", gradient: "linear-gradient(135deg, #d4550a, #F5A623)", status: "Disponible", platforms: "macOS", appUrl: "https://apps.apple.com/app/better-dictate/id6759451794", legal: { privacy: "100% hors ligne — tout le traitement se fait sur ton Mac. Zéro collecte de données : aucun compte, aucun cloud, aucun tracking, aucun analytics. Ta voix n'est jamais enregistrée — l'audio est traité en mémoire et supprimé immédiatement après transcription. Aucun SDK tiers, aucun cookie, aucune télémétrie. Conforme RGPD et CCPA par design. L'unique connexion internet : télécharger le modèle Whisper au premier lancement.", terms: "Application disponible sur le Mac App Store. Nécessite un Mac avec Apple Silicon (M1, M2, M3, M4) et macOS 13.0 (Ventura) minimum. 1 à 3 Go d'espace disque selon le modèle Whisper choisi. Permissions requises : Micro (captation vocale) et Accessibilité (insertion du texte au curseur).", dataProcessing: "Zéro donnée transmise. Transcription locale via Whisper.cpp optimisé C++ avec accélération Metal (GPU Apple). Audio traité en mémoire RAM uniquement, jamais stocké sur disque. Modèle Whisper téléchargé une seule fois et stocké localement. Aucune rétention, aucun serveur." } },
];

export default function AppsPage() {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  const statusColor = (status: string) => {
    if (status === "Disponible") return "#16a34a";
    if (status === "Bêta") return "#d97706";
    return "#dc2626";
  };

  return (
    <div style={{ maxWidth: 1200, marginLeft: "auto", marginRight: "auto", paddingBottom: 80 }}>
      <PageHeader title="Nos Applications" subtitle="Des outils pour transformer votre façon de travailler" />

      <div style={{ padding: "0 24px" }}>
        <div className="grid-cards" style={{ display: "grid", gap: 24 }}>
          {apps.map((app, i) => (
            <button
              key={app.id}
              onClick={() => setSelectedApp(app)}
              className={`card animate-fade-up animate-fade-up-d${Math.min(i + 1, 6)}`}
              style={{ textAlign: "left", cursor: "pointer", border: "1px solid var(--color-border)" }}
            >
              <div className="icon-box icon-box--default" style={{ marginBottom: 16 }}>
                <svg style={{ width: 24, height: 24 }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: "var(--color-text)" }}>{app.title}</h3>
              <p style={{ fontSize: 14, color: "var(--color-text-muted)", marginTop: 8, lineHeight: 1.6 }}>{app.description}</p>
              <div style={{ marginTop: "auto", paddingTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: 9999, fontSize: 12, fontWeight: 600, backgroundColor: `${statusColor(app.status)}15`, color: statusColor(app.status) }}>
                  {app.status}
                </span>
                <span className="badge badge--accent">{app.platforms}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedApp && <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />}
    </div>
  );
}
