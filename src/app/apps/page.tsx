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
      "Notre plateforme centrale de collaboration. G\u00e9rez vos projets, communiquez avec votre \u00e9quipe et suivez vos objectifs en temps r\u00e9el.",
    fullDescription:
      "Connected Hub est la plateforme phare de Connected Mate. Elle centralise la gestion de projets, la communication d\u2019\u00e9quipe, le suivi des OKR et la gestion documentaire. Avec des int\u00e9grations natives vers Slack, Notion, Google Workspace et plus de 50 autres outils, Connected Hub s\u2019int\u00e8gre parfaitement dans votre \u00e9cosyst\u00e8me existant. Fonctionnalit\u00e9s cl\u00e9s : tableaux Kanban, chat temps r\u00e9el, visioconf\u00e9rence int\u00e9gr\u00e9e, reporting automatis\u00e9.",
    size: "2x2",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    status: "Disponible",
    platforms: "Web, iOS, Android",
    appUrl: "https://hub.connectedmate.com",
    legal: {
      privacy:
        "Connected Hub collecte et traite vos donn\u00e9es conform\u00e9ment au RGPD. Les donn\u00e9es sont h\u00e9berg\u00e9es en Europe (AWS eu-west-3). Nous ne partageons jamais vos donn\u00e9es avec des tiers sans votre consentement explicite. Vous pouvez exercer vos droits d\u2019acc\u00e8s, de rectification et de suppression \u00e0 tout moment.",
      terms:
        "L\u2019utilisation de Connected Hub est soumise \u00e0 nos conditions g\u00e9n\u00e9rales d\u2019utilisation. L\u2019abonnement est mensuel ou annuel, r\u00e9siliable \u00e0 tout moment. Support technique inclus dans tous les plans. SLA de 99.9% garanti pour les plans Business et Enterprise.",
      dataProcessing:
        "Les donn\u00e9es sont chiffr\u00e9es en transit (TLS 1.3) et au repos (AES-256). Sauvegardes quotidiennes avec r\u00e9tention de 30 jours. Audit de s\u00e9curit\u00e9 annuel par un tiers ind\u00e9pendant. Certifi\u00e9 SOC 2 Type II et ISO 27001.",
    },
  },
  {
    id: "mate-analytics",
    title: "Mate Analytics",
    description:
      "Tableau de bord intelligent pour visualiser vos donn\u00e9es et prendre des d\u00e9cisions \u00e9clair\u00e9es.",
    fullDescription:
      "Mate Analytics transforme vos donn\u00e9es brutes en insights actionnables gr\u00e2ce \u00e0 des visualisations interactives et des algorithmes de machine learning. Connectez vos sources de donn\u00e9es en quelques clics, cr\u00e9ez des dashboards personnalis\u00e9s et partagez-les avec votre \u00e9quipe. Alertes intelligentes, pr\u00e9dictions et recommandations automatis\u00e9es.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    status: "Disponible",
    platforms: "Web",
    appUrl: "https://analytics.connectedmate.com",
    legal: {
      privacy: "Mate Analytics traite vos donn\u00e9es analytiques de mani\u00e8re confidentielle. Aucune donn\u00e9e n\u2019est utilis\u00e9e \u00e0 des fins publicitaires. Conformit\u00e9 RGPD et CCPA.",
      terms: "Service disponible en SaaS avec facturation \u00e0 l\u2019usage. Essai gratuit de 14 jours. Annulation possible \u00e0 tout moment sans frais.",
      dataProcessing: "Donn\u00e9es h\u00e9berg\u00e9es en Europe. Chiffrement AES-256. Anonymisation possible des donn\u00e9es sensibles. Export complet disponible sur demande.",
    },
  },
  {
    id: "quicksync",
    title: "QuickSync",
    description:
      "Synchronisez vos fichiers et documents entre tous vos appareils en un instant.",
    fullDescription:
      "QuickSync offre une synchronisation ultra-rapide de vos fichiers entre tous vos appareils. Gr\u00e2ce \u00e0 notre technologie de synchronisation delta, seules les modifications sont transf\u00e9r\u00e9es, garantissant des transferts instantan\u00e9s m\u00eame pour les fichiers volumineux. Versioning automatique, partage s\u00e9curis\u00e9 et collaboration en temps r\u00e9el.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
    status: "B\u00eata",
    platforms: "Toutes plateformes",
    appUrl: "https://sync.connectedmate.com",
    legal: {
      privacy: "QuickSync chiffre vos fichiers de bout en bout. Nous n\u2019avons jamais acc\u00e8s au contenu de vos fichiers. Zero-knowledge encryption.",
      terms: "Programme b\u00eata gratuit. Les conditions d\u00e9finitives seront communiqu\u00e9es au lancement officiel. Stockage limit\u00e9 \u00e0 50 Go pendant la b\u00eata.",
      dataProcessing: "Chiffrement de bout en bout (E2EE). Stockage distribu\u00e9 multi-r\u00e9gions. Conformit\u00e9 RGPD native.",
    },
  },
  {
    id: "eventflow",
    title: "EventFlow",
    description:
      "Organisez et g\u00e9rez vos \u00e9v\u00e9nements de A \u00e0 Z : inscriptions, planning, networking.",
    fullDescription:
      "EventFlow est votre solution compl\u00e8te pour l\u2019organisation d\u2019\u00e9v\u00e9nements. Cr\u00e9ez des pages d\u2019inscription personnalis\u00e9es, g\u00e9rez les billets et les paiements, planifiez le programme, facilitez le networking entre participants et collectez les feedbacks post-\u00e9v\u00e9nement. Int\u00e9gration native avec les outils de streaming pour les \u00e9v\u00e9nements hybrides.",
    size: "1x1",
    gradient: "bg-gradient-to-br from-orange-500 to-amber-600",
    status: "Disponible",
    platforms: "Web, iOS",
    appUrl: "https://events.connectedmate.com",
    legal: {
      privacy: "Les donn\u00e9es des participants sont trait\u00e9es uniquement pour l\u2019organisation de l\u2019\u00e9v\u00e9nement. Suppression automatique 90 jours apr\u00e8s l\u2019\u00e9v\u00e9nement sauf demande contraire.",
      terms: "Commission de 2% sur les billets payants. Gratuit pour les \u00e9v\u00e9nements gratuits. Support prioritaire pour les \u00e9v\u00e9nements de plus de 500 participants.",
      dataProcessing: "Paiements s\u00e9curis\u00e9s via Stripe. Donn\u00e9es h\u00e9berg\u00e9es en Europe. Conformit\u00e9 PCI DSS pour les transactions.",
    },
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    description:
      "Un assistant IA int\u00e9gr\u00e9 \u00e0 votre workflow pour automatiser les t\u00e2ches r\u00e9p\u00e9titives et booster votre productivit\u00e9.",
    fullDescription:
      "AI Assistant est notre prochain produit phare. Aliment\u00e9 par les derniers mod\u00e8les de langage, il s\u2019int\u00e8gre directement dans vos outils quotidiens pour automatiser les t\u00e2ches r\u00e9p\u00e9titives : r\u00e9daction d\u2019emails, r\u00e9sum\u00e9s de r\u00e9unions, analyse de documents, g\u00e9n\u00e9ration de rapports. Personnalisable selon votre contexte d\u2019entreprise.",
    size: "2x1",
    gradient: "bg-gradient-to-br from-rose-500 to-pink-600",
    status: "Bient\u00f4t",
    platforms: "Web",
    appUrl: "#",
    legal: {
      privacy: "Les donn\u00e9es envoy\u00e9es \u00e0 l\u2019IA sont trait\u00e9es en temps r\u00e9el et ne sont jamais stock\u00e9es ni utilis\u00e9es pour l\u2019entra\u00eenement. Conformit\u00e9 totale avec le AI Act europ\u00e9en.",
      terms: "Conditions et tarifs seront communiqu\u00e9s au lancement. Programme early-access disponible sur inscription.",
      dataProcessing: "Traitement des donn\u00e9es en Europe exclusivement. Aucune r\u00e9tention des prompts ou des r\u00e9ponses. Mod\u00e8les h\u00e9berg\u00e9s on-premise disponibles pour les entreprises.",
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
        subtitle="Des outils con\u00e7us pour transformer votre fa\u00e7on de travailler"
      />

      <BentoGrid>
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedApp(app)}
            className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-white p-6 text-left shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${sizeClasses[app.size]}`}
          >
            <div
              className={`absolute inset-0 opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.1] ${app.gradient}`}
            />

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gray-100 text-[var(--color-accent)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text)]">{app.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {app.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    app.status === "Disponible"
                      ? "bg-green-100 text-green-700"
                      : app.status === "B\u00eata"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {app.status}
                </span>
                <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {app.platforms}
                </span>
              </div>

              <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100">
                Voir les d\u00e9tails
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </BentoGrid>

      {selectedApp && (
        <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />
      )}
    </div>
  );
}
