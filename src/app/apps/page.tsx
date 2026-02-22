"use client";

import { useState } from "react";
import { BentoGrid } from "@/components/BentoGrid";
import { PageHeader } from "@/components/PageHeader";
import { AppModal } from "@/components/AppModal";

interface AppData { id: string; title: string; description: string; fullDescription: string; size: "1x1" | "2x1" | "1x2" | "2x2"; gradient: string; status: string; platforms: string; appUrl: string; legal: { privacy: string; terms: string; dataProcessing: string; }; }

const apps: AppData[] = [
  { id: "connected-hub", title: "Connected Hub", description: "Plateforme centrale de collaboration : projets, communication, objectifs.", fullDescription: "Connected Hub centralise la gestion de projets, la communication d\u2019\u00e9quipe, le suivi des OKR et la gestion documentaire. Int\u00e9grations natives vers Slack, Notion, Google Workspace et 50+ outils.", size: "2x2", gradient: "bg-gradient-to-br from-indigo-400 to-purple-500", status: "Disponible", platforms: "Web, iOS, Android", appUrl: "https://hub.connectedmate.com", legal: { privacy: "Donn\u00e9es h\u00e9berg\u00e9es en Europe (AWS eu-west-3). Conformit\u00e9 RGPD. Droits d\u2019acc\u00e8s, rectification et suppression \u00e0 tout moment.", terms: "Abonnement mensuel ou annuel, r\u00e9siliable \u00e0 tout moment. SLA de 99.9% garanti pour les plans Business et Enterprise.", dataProcessing: "Chiffrement TLS 1.3 et AES-256. Sauvegardes quotidiennes. Certifi\u00e9 SOC 2 Type II et ISO 27001." } },
  { id: "mate-analytics", title: "Mate Analytics", description: "Tableau de bord intelligent pour visualiser vos donn\u00e9es.", fullDescription: "Transformez vos donn\u00e9es brutes en insights actionnables. Dashboards personnalis\u00e9s, alertes intelligentes, pr\u00e9dictions automatis\u00e9es.", size: "2x1", gradient: "bg-gradient-to-br from-cyan-400 to-blue-500", status: "Disponible", platforms: "Web", appUrl: "https://analytics.connectedmate.com", legal: { privacy: "Aucune donn\u00e9e utilis\u00e9e \u00e0 des fins publicitaires. Conformit\u00e9 RGPD et CCPA.", terms: "SaaS avec facturation \u00e0 l\u2019usage. Essai gratuit 14 jours.", dataProcessing: "Donn\u00e9es h\u00e9berg\u00e9es en Europe. Chiffrement AES-256." } },
  { id: "quicksync", title: "QuickSync", description: "Synchronisez vos fichiers entre tous vos appareils.", fullDescription: "Synchronisation delta ultra-rapide. Versioning automatique, partage s\u00e9curis\u00e9, collaboration temps r\u00e9el.", size: "1x1", gradient: "bg-gradient-to-br from-emerald-400 to-green-500", status: "B\u00eata", platforms: "Toutes plateformes", appUrl: "https://sync.connectedmate.com", legal: { privacy: "Chiffrement de bout en bout. Zero-knowledge encryption.", terms: "Programme b\u00eata gratuit. 50 Go inclus.", dataProcessing: "E2EE. Stockage multi-r\u00e9gions. Conformit\u00e9 RGPD." } },
  { id: "eventflow", title: "EventFlow", description: "Organisez vos \u00e9v\u00e9nements de A \u00e0 Z.", fullDescription: "Inscriptions, billets, paiements, programme, networking, feedbacks. Int\u00e9gration streaming pour les \u00e9v\u00e9nements hybrides.", size: "1x1", gradient: "bg-gradient-to-br from-orange-400 to-amber-500", status: "Disponible", platforms: "Web, iOS", appUrl: "https://events.connectedmate.com", legal: { privacy: "Donn\u00e9es supprim\u00e9es 90 jours apr\u00e8s l\u2019\u00e9v\u00e9nement.", terms: "Commission de 2% sur billets payants. Gratuit pour \u00e9v\u00e9nements gratuits.", dataProcessing: "Paiements via Stripe. Conformit\u00e9 PCI DSS." } },
  { id: "ai-assistant", title: "AI Assistant", description: "Automatisez vos t\u00e2ches r\u00e9p\u00e9titives avec l\u2019IA.", fullDescription: "R\u00e9daction d\u2019emails, r\u00e9sum\u00e9s de r\u00e9unions, analyse de documents. Personnalisable selon votre contexte.", size: "2x1", gradient: "bg-gradient-to-br from-rose-400 to-pink-500", status: "Bient\u00f4t", platforms: "Web", appUrl: "#", legal: { privacy: "Donn\u00e9es jamais stock\u00e9es ni utilis\u00e9es pour l\u2019entra\u00eenement. Conformit\u00e9 AI Act.", terms: "Programme early-access sur inscription.", dataProcessing: "Traitement en Europe exclusivement. Aucune r\u00e9tention." } },
];

const sizeClasses: Record<string, string> = { "1x1": "col-span-1 row-span-1", "2x1": "col-span-2 row-span-1", "2x2": "col-span-2 row-span-2" };

export default function AppsPage() {
  const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

  return (
    <div className="animate-fade-in">
      <PageHeader title="Nos Applications" subtitle="Des outils pour transformer votre fa\u00e7on de travailler" />
      <BentoGrid>
        {apps.map((app) => (
          <button key={app.id} onClick={() => setSelectedApp(app)} className={`group relative cursor-pointer overflow-hidden rounded-[var(--radius)] bg-white p-4 text-left transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg sm:p-5 ${sizeClasses[app.size]}`}>
            <div className={`absolute inset-0 opacity-[0.05] ${app.gradient}`} />
            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gray-100 text-[var(--color-accent)] sm:mb-3 sm:h-10 sm:w-10 sm:rounded-2xl">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-[15px] font-semibold text-[var(--color-text)] sm:text-base">{app.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-text-muted)] sm:text-sm">{app.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium sm:text-xs ${app.status === "Disponible" ? "bg-green-100 text-green-700" : app.status === "B\u00eata" ? "bg-yellow-100 text-yellow-700" : "bg-blue-100 text-blue-700"}`}>{app.status}</span>
                <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-500 sm:text-xs">{app.platforms}</span>
              </div>
            </div>
          </button>
        ))}
      </BentoGrid>
      {selectedApp && <AppModal app={selectedApp} onClose={() => setSelectedApp(null)} />}
    </div>
  );
}
