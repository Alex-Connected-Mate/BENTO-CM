"use client";

import { useState } from "react";

interface LegalSection {
  privacy: string;
  terms: string;
  dataProcessing: string;
}

interface AppInfo {
  id: string;
  title: string;
  fullDescription: string;
  gradient: string;
  status: string;
  platforms: string;
  appUrl: string;
  legal: LegalSection;
}

interface AppModalProps {
  app: AppInfo;
  onClose: () => void;
}

const legalSections = [
  { key: "privacy" as const, label: "Politique de confidentialité", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { key: "terms" as const, label: "Conditions d'utilisation", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { key: "dataProcessing" as const, label: "Traitement des données", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
];

export function AppModal({ app, onClose }: AppModalProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className={`relative overflow-hidden px-8 pb-6 pt-8 ${app.gradient} bg-opacity-20`}>
          <div className={`absolute inset-0 opacity-15 ${app.gradient}`} />
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <h2 className="text-2xl font-bold">{app.title}</h2>
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
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {app.platforms}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[var(--color-text-muted)] transition-colors hover:bg-white/20 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {/* Description */}
          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              Description
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-text)]">
              {app.fullDescription}
            </p>
          </div>

          {/* Link to app */}
          {app.appUrl !== "#" && (
            <a
              href={app.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-3 transition-all hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-card-hover)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent-light)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-medium">Ouvrir {app.title}</div>
                <div className="text-xs text-[var(--color-text-muted)]">{app.appUrl}</div>
              </div>
              <svg className="ml-auto h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}

          {/* Legal Dropdowns */}
          <div className="space-y-2">
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
              Informations légales
            </h3>
            {legalSections.map((section) => (
              <div
                key={section.key}
                className="overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]"
              >
                <button
                  onClick={() => toggleSection(section.key)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--color-card-hover)]"
                >
                  <svg className="h-5 w-5 text-[var(--color-text-muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                  <span className="flex-1 text-sm font-medium">{section.label}</span>
                  <svg
                    className={`h-4 w-4 text-[var(--color-text-muted)] transition-transform duration-200 ${
                      openSection === section.key ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSection === section.key && (
                  <div className="border-t border-[var(--color-border)] px-4 py-3">
                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                      {app.legal[section.key]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
