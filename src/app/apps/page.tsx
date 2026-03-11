"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { AppModal } from "@/components/AppModal";

interface AppData { id: string; title: string; description: string; fullDescription: string; gradient: string; status: string; platforms: string; appUrl: string; legal: { privacy: string; terms: string; dataProcessing: string; }; }

const apps: AppData[] = [
  { id: "notetaker-ai", title: "NoteTaker AI", description: "Enregistre, transcrit, analyse. Votre mémoire augmentée par l'IA.", fullDescription: "NoteTaker AI transforme chaque conversation en notes intelligentes. Enregistrez vos appels (via Apple Watch), réunions, entretiens ou idées vocales. L'app transcrit automatiquement l'audio puis analyse le contenu grâce à l'intelligence artificielle embarquée — le tout 100% sur votre appareil, sans serveur externe.\n\nFonctionnalités principales :\n• Enregistrement en un tap depuis iPhone ou Apple Watch\n• Dynamic Island & Live Activity avec forme d'onde animée\n• Transcription automatique multilingue (Apple Speech, 100% hors ligne)\n• Analyse IA : résumé, sujets clés, prochaines étapes\n• Chat IA : posez des questions sur vos enregistrements\n• Export des actions vers Rappels Apple\n• Sécurité Face ID + code à 4 chiffres\n• Aucune donnée envoyée à un serveur", gradient: "linear-gradient(135deg, #E8600A, #F5A623)", status: "Disponible", platforms: "iOS, Apple Watch", appUrl: "https://apps.apple.com/app/notetaker-ai/id__APP_ID__", legal: { privacy: "Aucune donnée collectée. Tout le traitement (transcription, analyse IA) est effectué sur l'appareil via Apple Speech et Apple Intelligence. Les enregistrements sont stockés localement. Aucun tracking, aucune analytique tierce, aucun serveur externe. Conformité totale RGPD — catégorie App Store : « Data Not Collected ».", terms: "Application gratuite (Freemium). Disponible dans tous les pays. Classification d'âge : 4+. Catégorie : Productivité / Utilitaires. Compatible iPhone (iOS 26+) et Apple Watch (watchOS 26+). Nécessite Apple Intelligence activé sur l'appareil.", dataProcessing: "Zéro donnée transmise. Transcription via le moteur Apple Speech (sur l'appareil). Analyse IA via Apple Foundation Models (Apple Intelligence, sur l'appareil). Chiffrement local, verrouillage Face ID. Aucune rétention serveur — vos conversations restent les vôtres." } },
  { id: "connected-hub", title: "Connected Hub", description: "Plateforme centrale de collaboration : projets, communication, objectifs.", fullDescription: "Connected Hub centralise la gestion de projets, la communication d'équipe, le suivi des OKR et la gestion documentaire. Intégrations natives vers Slack, Notion, Google Workspace et 50+ outils.", gradient: "linear-gradient(135deg, #E8600A, #F5A623)", status: "Disponible", platforms: "Web, iOS, Android", appUrl: "https://hub.connectedmate.com", legal: { privacy: "Données hébergées en Europe (AWS eu-west-3). Conformité RGPD. Droits d'accès, rectification et suppression à tout moment.", terms: "Abonnement mensuel ou annuel, résiliable à tout moment. SLA de 99.9% garanti pour les plans Business et Enterprise.", dataProcessing: "Chiffrement TLS 1.3 et AES-256. Sauvegardes quotidiennes. Certifié SOC 2 Type II et ISO 27001." } },
  { id: "mate-analytics", title: "Mate Analytics", description: "Tableau de bord intelligent pour visualiser vos données.", fullDescription: "Transformez vos données brutes en insights actionnables. Dashboards personnalisés, alertes intelligentes, prédictions automatisées.", gradient: "linear-gradient(135deg, #F5A623, #E8600A)", status: "Disponible", platforms: "Web", appUrl: "https://analytics.connectedmate.com", legal: { privacy: "Aucune donnée utilisée à des fins publicitaires. Conformité RGPD et CCPA.", terms: "SaaS avec facturation à l'usage. Essai gratuit 14 jours.", dataProcessing: "Données hébergées en Europe. Chiffrement AES-256." } },
  { id: "quicksync", title: "QuickSync", description: "Synchronisez vos fichiers entre tous vos appareils.", fullDescription: "Synchronisation delta ultra-rapide. Versioning automatique, partage sécurisé, collaboration temps réel.", gradient: "linear-gradient(135deg, #d4550a, #E8600A)", status: "Bêta", platforms: "Toutes plateformes", appUrl: "https://sync.connectedmate.com", legal: { privacy: "Chiffrement de bout en bout. Zero-knowledge encryption.", terms: "Programme bêta gratuit. 50 Go inclus.", dataProcessing: "E2EE. Stockage multi-régions. Conformité RGPD." } },
  { id: "eventflow", title: "EventFlow", description: "Organisez vos événements de A à Z.", fullDescription: "Inscriptions, billets, paiements, programme, networking, feedbacks. Intégration streaming pour les événements hybrides.", gradient: "linear-gradient(135deg, #F5A623, #d4a000)", status: "Disponible", platforms: "Web, iOS", appUrl: "https://events.connectedmate.com", legal: { privacy: "Données supprimées 90 jours après l'événement.", terms: "Commission de 2% sur billets payants. Gratuit pour événements gratuits.", dataProcessing: "Paiements via Stripe. Conformité PCI DSS." } },
  { id: "ai-assistant", title: "AI Assistant", description: "Automatisez vos tâches répétitives avec l'IA.", fullDescription: "Rédaction d'emails, résumés de réunions, analyse de documents. Personnalisable selon votre contexte.", gradient: "linear-gradient(135deg, #c43e00, #E8600A)", status: "Bientôt", platforms: "Web", appUrl: "#", legal: { privacy: "Données jamais stockées ni utilisées pour l'entraînement. Conformité AI Act.", terms: "Programme early-access sur inscription.", dataProcessing: "Traitement en Europe exclusivement. Aucune rétention." } },
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
