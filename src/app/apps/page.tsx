"use client";

import { useState } from "react";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { AppModal } from "@/components/AppModal";

interface AppData { id: string; title: string; description: string; fullDescription: string; size: "1x1" | "2x1" | "1x2" | "2x2"; gradient: string; status: string; platforms: string; appUrl: string; legal: { privacy: string; terms: string; dataProcessing: string; }; }

const apps: AppData[] = [
  { id: "connected-hub", title: "Connected Hub", description: "Plateforme centrale de collaboration : projets, communication, objectifs.", fullDescription: "Connected Hub centralise la gestion de projets, la communication d’équipe, le suivi des OKR et la gestion documentaire. Intégrations natives vers Slack, Notion, Google Workspace et 50+ outils.", size: "2x2", gradient: "bg-gradient-to-br from-orange-500 to-amber-600", status: "Disponible", platforms: "Web, iOS, Android", appUrl: "https://hub.connectedmate.com", legal: { privacy: "Données hébergées en Europe (AWS eu-west-3). Conformité RGPD. Droits d’accès, rectification et suppression à tout moment.", terms: "Abonnement mensuel ou annuel, résiliable à tout moment. SLA de 99.9% garanti pour les plans Business et Enterprise.", dataProcessing: "Chiffrement TLS 1.3 et AES-256. Sauvegardes quotidiennes. Certifié SOC 2 Type II et ISO 27001." } },
  { id: "mate-analytics", title: "Mate Analytics", description: "Tableau de bord intelligent pour visualiser vos données.", fullDescription: "Transformez vos données brutes en insights actionnables. Dashboards personnalisés, alertes intelligentes, prédictions automatisées.", size: "2x1", gradient: "bg-gradient-to-br from-amber-500 to-yellow-500", status: "Disponible", platforms: "Web", appUrl: "https://analytics.connectedmate.com", legal: { privacy: "Aucune donnée utilisée à des fins publicitaires. Conformité RGPD et CCPA.", terms: "SaaS avec facturation à l’usage. Essai gratuit 14 jours.", dataProcessing: "Données hébergées en Europe. Chiffrement AES-256." } },
  { id: "quicksync", title: "QuickSync", description: "Synchronisez vos fichiers entre tous vos appareils.", fullDescription: "Synchronisation delta ultra-rapide. Versioning automatique, partage sécurisé, collaboration temps réel.", size: "1x1", gradient: "bg-gradient-to-br from-red-400 to-orange-500", status: "Bêta", platforms: "Toutes plateformes", appUrl: "https://sync.connectedmate.com", legal: { privacy: "Chiffrement de bout en bout. Zero-knowledge encryption.", terms: "Programme bêta gratuit. 50 Go inclus.", dataProcessing: "E2EE. Stockage multi-régions. Conformité RGPD." } },
  { id: "eventflow", title: "EventFlow", description: "Organisez vos événements de A à Z.", fullDescription: "Inscriptions, billets, paiements, programme, networking, feedbacks. Intégration streaming pour les événements hybrides.", size: "1x1", gradient: "bg-gradient-to-br from-orange-400 to-amber-500", status: "Disponible", platforms: "Web, iOS", appUrl: "https://events.connectedmate.com", legal: { privacy: "Données supprimées 90 jours après l’événement.", terms: "Commission de 2% sur billets payants. Gratuit pour événements gratuits.", dataProcessing: "Paiements via Stripe. Conformité PCI DSS." } },
  { id: "ai-assistant", title: "AI Assistant", description: "Automatisez vos tâches répétitives avec l’IA.", fullDescription: "Rédaction d’emails, résumés de réunions, analyse de documents. Personnalisable selon votre contexte.", size: "2x1", gradient: "bg-gradient-to-br from-orange-600 to-red-600", status: "Bientôt", platforms: "Web", appUrl: "#", legal: { privacy: "Données jamais stockées ni utilisées pour l’entraînement. Conformité AI Act.", terms: "Programme early-access sur inscription.", dataProcessing: "Traitement en Europe exclusivement. Aucune rétention." } },
];

const sizeClasses: Record<string, string> = { "1x1": "col-span-1 row-span-1", "2x1": "col-span-2 row-span-1", "2x2": "col-span-2 row-span-2" };

export default function AppsPage() {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  return (
    <div className="animate-fade-in">
      <PageHeader title="Nos Applications" subtitle="Des outils pour transformer votre façon de travailler" />
      <BentoGrid>
        {apps.map((app) => (
          <button key={app.id} onClick={() => setSelectedApp(app)} className={`group relative cursor-pointer overflow-hidden rounded-[var(--radius)] bg-[var(--color-card)] p-4 text-left shadow-[0_2px_8px_-2px_rgba(45,27,6,0.08)] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_12px_24px_-8px_rgba(45,27,6,0.12)] sm:p-5 ${sizeClasses[app.size]}`}>
            <div className={`absolute inset-0 opacity-[0.04] ${app.gradient}`} />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-[Space_Grotesk] text-[15px] font-semibold text-[var(--color-text)] sm:text-base">{app.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-muted)] sm:text-sm">{app.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium sm:text-xs ${app.status === "Disponible" ? "bg-amber-100 text-amber-700" : app.status === "Bêta" ? "bg-orange-100 text-orange-700" : "bg-red-50 text-red-600"}`}>{app.status}</span>
                <span className="inline-block rounded-full bg-[var(--color-accent)]/5 px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-text-muted)] sm:text-xs">{app.platforms}</span>
              </div>
            </div>
          </button>
        ))}
      </BentoGrid>
      {selectedApp && <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />}
    </div>
  );
}
