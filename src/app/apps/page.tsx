"use client";

import { useState } from "react";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { AppModal } from "@/components/AppModal";

interface AppData {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  size: "1x1" | "2x1" | "1x2" | "2x2";
  gradient: string;
  status: string;
  platforms: string;
  appUrl: string;
  legal: {
    privacy: string;
    terms: string;
    dataProcessing: string;
  };
}

const apps: AppData[] = [
  {
    id: "connected-hub",
    title: "Connected Hub",
    description:
      "Notre plateforme centrale de collaboration. Gérez vos projets, communiquez avec votre équipe et suivez vos objectifs en temps réel.",
    fullDescription:
      "Connected Hub est la plateforme phare de Connected Mate. Elle centralise la gestion de projets, la communication d'équipe, le suivi des OKR et la gestion documentaire. Avec des intégrations natives vers Slack, Notion, Google Workspace et plus de 50 autres outils, Connected Hub s'intègre parfaitement dans votre écosystème existant. Fonctionnalités clés : tableaux Kanban, chat temps réel, visioconférence intégrée, reporting automatisé.",
    size: "2x2",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    status: "Disponible",
    platforms: "Web, iOS, Android",
    appUrl: "https://hub.connectedmate.com",
    legal: {
      privacy:
        "Connected Hub collecte et traite vos données conformément au RGPD. Les données sont hébergées en Europe (AWS eu-west-3). Nous ne partageons jamais vos données avec des tiers sans votre consentement explicite. Vous pouvez exercer vos droits d'accès, de rectification et de suppression à tout moment.",
      terms:
        "L'utilisation de Connected Hub est soumise à nos conditions générales d'utilisation. L'abonnement est mensuel ou annuel, résiliable à tout moment. Support technique inclus dans tous les plans. SLA de 99.9% garanti pour les plans Business et Enterprise.",
      dataProcessing:
        "Les données sont chiffrées en transit (TLS 1.3) et au repos (AES-256). Sauvegardes quotidiennes avec rétention de 30 jours. Audit de sécurité annuel par un tiers indépendant. Certifié SOC 2 Type II et ISO 27001.",
    },
  },
  {
    id: "mate-analytics",
    title: "Mate Analytics",
    description:
      "Tableau de bord intelligent pour visualiser vos données et prendre des décisions éclairées.",
    fullDescription:
      "Mate Analytics transforme vos données brutes en insights actionnables grâce à des visualisations interactives et des algorithmes de machine learning. Connectez vos sources de données en quelques clics, créez des dashboards personnalisés et partagez-les avec votre équipe. Alertes intelligentes, prédictions et recommandations automatisées.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    status: "Disponible",
    platforms: "Web",
    appUrl: "https://analytics.connectedmate.com",
    legal: {
      privacy:
        "Mate Analytics traite vos données analytiques de manière confidentielle. Aucune donnée n'est utilisée à des fins publicitaires. Conformité RGPD et CCPA.",
      terms:
        "Service disponible en SaaS avec facturation à l'usage. Essai gratuit de 14 jours. Annulation possible à tout moment sans frais.",
      dataProcessing:
        "Données hébergées en Europe. Chiffrement AES-256. Anonymisation possible des données sensibles. Export complet disponible sur demande.",
    },
  },
  {
    id: "quicksync",
    title: "QuickSync",
    description:
      "Synchronisez vos fichiers et documents entre tous vos appareils en un instant.",
    fullDescription:
      "QuickSync offre une synchronisation ultra-rapide de vos fichiers entre tous vos appareils. Grâce à notre technologie de synchronisation delta, seules les modifications sont transférées, garantissant des transferts instantanés même pour les fichiers volumineux. Versioning automatique, partage sécurisé et collaboration en temps réel.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
    status: "Bêta",
    platforms: "Toutes plateformes",
    appUrl: "https://sync.connectedmate.com",
    legal: {
      privacy:
        "QuickSync chiffre vos fichiers de bout en bout. Nous n'avons jamais accès au contenu de vos fichiers. Zero-knowledge encryption.",
      terms:
        "Programme bêta gratuit. Les conditions définitives seront communiquées au lancement officiel. Stockage limité à 50 Go pendant la bêta.",
      dataProcessing:
        "Chiffrement de bout en bout (E2EE). Stockage distribué multi-régions. Conformité RGPD native.",
    },
  },
  {
    id: "eventflow",
    title: "EventFlow",
    description:
      "Organisez et gérez vos événements de A à Z : inscriptions, planning, networking.",
    fullDescription:
      "EventFlow est votre solution complète pour l'organisation d'événements. Créez des pages d'inscription personnalisées, gérez les billets et les paiements, planifiez le programme, facilitez le networking entre participants et collectez les feedbacks post-événement. Intégration native avec les outils de streaming pour les événements hybrides.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
    status: "Disponible",
    platforms: "Web, iOS",
    appUrl: "https://events.connectedmate.com",
    legal: {
      privacy:
        "Les données des participants sont traitées uniquement pour l'organisation de l'événement. Suppression automatique 90 jours après l'événement sauf demande contraire.",
      terms:
        "Commission de 2% sur les billets payants. Gratuit pour les événements gratuits. Support prioritaire pour les événements de plus de 500 participants.",
      dataProcessing:
        "Paiements sécurisés via Stripe. Données hébergées en Europe. Conformité PCI DSS pour les transactions.",
    },
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    description:
      "Un assistant IA intégré à votre workflow pour automatiser les tâches répétitives et booster votre productivité.",
    fullDescription:
      "AI Assistant est notre prochain produit phare. Alimenté par les derniers modèles de langage, il s'intègre directement dans vos outils quotidiens pour automatiser les tâches répétitives : rédaction d'emails, résumés de réunions, analyse de documents, génération de rapports. Personnalisable selon votre contexte d'entreprise.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-rose-500 to-pink-600",
    status: "Bientôt",
    platforms: "Web",
    appUrl: "#",
    legal: {
      privacy:
        "Les données envoyées à l'IA sont traitées en temps réel et ne sont jamais stockées ni utilisées pour l'entraînement. Conformité totale avec le AI Act européen.",
      terms:
        "Conditions et tarifs seront communiqués au lancement. Programme early-access disponible sur inscription.",
      dataProcessing:
        "Traitement des données en Europe exclusivement. Aucune rétention des prompts ou des réponses. Modèles hébergés on-premise disponibles pour les entreprises.",
    },
  },
];

const sizeClasses: Record<string, string> = {
  "1x1": "col-span-1 row-span-1",
  "2x1": "col-span-2 row-span-1",
  "1x2": "col-span-1 row-span-2",
  "2x2": "col-span-2 row-span-2",
};

export default function AppsPage() {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Nos Applications"
        subtitle="Des outils conçus pour transformer votre façon de travailler"
      />

      <BentoGrid>
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedApp(app)}
            className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 text-left transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/5 ${sizeClasses[app.size]}`}
          >
            {/* Background gradient */}
            <div
              className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 ${app.gradient}`}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold">{app.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {app.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    app.status === "Disponible"
                      ? "bg-green-500/20 text-green-400"
                      : app.status === "Bêta"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {app.status}
                </span>
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                  {app.platforms}
                </span>
              </div>

              {/* Click hint */}
              <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent-light)] opacity-0 transition-opacity group-hover:opacity-100">
                Voir les détails
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </BentoGrid>

      {/* App Detail Modal */}
      {selectedApp && (
        <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
}
