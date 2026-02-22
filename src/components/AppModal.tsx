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
  { key: "privacy" as const, label: "Confidentialit\u00e9", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { key: "terms" as const, label: "Conditions", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { key: "dataProcessing" as const, label: "Donn\u00e9es", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
];

export function AppModal({ app, onClose }: AppModalProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[var(--color-text)]/30 backdrop-blur-sm" />

      <div
        className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-3xl bg-[var(--color-card)] shadow-2xl sm:max-w-lg sm:rounded-[var(--radius)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-[var(--color-accent)]/20" />
        </div>

        {/* Header */}
        <div className="relative overflow-hidden px-5 pb-4 pt-4 sm:px-8 sm:pb-6 sm:pt-8">
          <div className={`absolute inset-0 opacity-[0.06] ${app.gradient}`} />
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <h2 className="font-[Space_Grotesk] text-lg font-bold text-[var(--color-text)] sm:text-2xl">{app.title}</h2>
                  <span
                    className={`inline-block shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium sm:text-xs ${
                      app.status === "Disponible"
                        ? "bg-amber-100 text-amber-700"
                        : app.status === "B\u00eata"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
                <p className="text-[13px] text-[var(--color-text-muted)] sm:text-sm">
                  {app.platforms}
                </p>
              </div>
              <button
                onClick={onClose}
                className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/20"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 pb-6 pt-2 sm:px-8 sm:pb-8 sm:pt-4">
          <div className="mb-4 sm:mb-6">
            <h3 className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)] sm:mb-2 sm:text-xs">
              Description
            </h3>
            <p className="text-[13px] leading-relaxed text-[var(--color-text)] sm:text-sm">
              {app.fullDescription}
            </p>
          </div>

          {app.appUrl !== "#" && (
            <a
              href={app.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center gap-3 rounded-2xl bg-[var(--color-accent)]/5 px-3.5 py-2.5 transition-all hover:bg-[var(--color-accent)]/10 sm:mb-6 sm:px-4 sm:py-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 text-[var(--color-accent)] sm:h-10 sm:w-10">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-medium text-[var(--color-text)] sm:text-sm">Ouvrir {app.title}</div>
                <div className="truncate text-[11px] text-[var(--color-text-muted)] sm:text-xs">{app.appUrl}</div>
              </div>
              <svg className="h-4 w-4 shrink-0 text-[var(--color-accent)] sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}

          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="mb-2 text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)] sm:mb-3 sm:text-xs">
              Informations l\u00e9gales
            </h3>
            {legalSections.map((section) => (
              <div
                key={section.key}
                className="overflow-hidden rounded-xl bg-[var(--color-accent)]/5 sm:rounded-2xl"
              >
                <button
                  onClick={() => toggleSection(section.key)}
                  className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left transition-colors hover:bg-[var(--color-accent)]/10 sm:gap-3 sm:px-4 sm:py-3"
                >
                  <svg className="h-4 w-4 shrink-0 text-[var(--color-accent)] sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                  <span className="flex-1 text-[13px] font-medium text-[var(--color-text)] sm:text-sm">{section.label}</span>
                  <svg
                    className={`h-3.5 w-3.5 shrink-0 text-[var(--color-accent)] transition-transform duration-200 sm:h-4 sm:w-4 ${
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
                  <div className="border-t border-[var(--color-accent)]/10 px-3.5 py-2.5 sm:px-4 sm:py-3">
                    <p className="text-[13px] leading-relaxed text-[var(--color-text-muted)] sm:text-sm">
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
