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
  { key: "privacy" as const, label: "Confidentialité", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
  { key: "terms" as const, label: "Conditions", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { key: "dataProcessing" as const, label: "Données", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
];

export function AppModal({ app, onClose }: AppModalProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (key: string) => {
    setOpenSection(openSection === key ? null : key);
  };

  const statusBadge = (status: string) => {
    if (status === "Disponible") return "badge badge--amber";
    if (status === "Bêta") return "badge badge--orange";
    return "badge badge--red";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center sm:justify-center"
      onClick={onClose}
    >
      <div className="modal-backdrop" />

      <div
        className="modal-content relative w-full sm:max-w-lg"
        style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div style={{ height: 4, width: 40, borderRadius: 9999, backgroundColor: "rgba(232, 96, 10, 0.20)" }} />
        </div>

        {/* Header */}
        <div className="relative overflow-hidden px-5 pb-4 pt-4 sm:px-8 sm:pb-6 sm:pt-8">
          <div className={`absolute inset-0 opacity-[0.06] ${app.gradient}`} />
          <div className="relative z-10">
            <div className="flex items-start justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-bold sm:text-2xl" style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", color: "var(--color-text)" }}>{app.title}</h2>
                  <span className={`shrink-0 ${statusBadge(app.status)}`}>{app.status}</span>
                </div>
                <p className="text-[13px] sm:text-sm" style={{ color: "var(--color-text-muted)" }}>
                  {app.platforms}
                </p>
              </div>
              <button
                onClick={onClose}
                className="icon-box icon-box--default ml-3 shrink-0"
                style={{ width: 32, height: 32 }}
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
            <h3 className="mb-1.5 text-[11px] font-medium uppercase tracking-wider sm:mb-2 sm:text-xs" style={{ color: "var(--color-text-muted)" }}>
              Description
            </h3>
            <p className="text-[13px] leading-relaxed sm:text-sm" style={{ color: "var(--color-text)" }}>
              {app.fullDescription}
            </p>
          </div>

          {app.appUrl !== "#" && (
            <a
              href={app.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 flex items-center gap-3 sm:mb-6"
              style={{
                borderRadius: 16,
                backgroundColor: "rgba(232, 96, 10, 0.05)",
                padding: "10px 14px",
                transition: "background-color 0.15s",
              }}
            >
              <div className="icon-box icon-box--default shrink-0">
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[13px] font-medium sm:text-sm" style={{ color: "var(--color-text)" }}>Ouvrir {app.title}</div>
                <div className="truncate text-[11px] sm:text-xs" style={{ color: "var(--color-text-muted)" }}>{app.appUrl}</div>
              </div>
              <svg className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}

          <div className="space-y-1.5 sm:space-y-2">
            <h3 className="mb-2 text-[11px] font-medium uppercase tracking-wider sm:mb-3 sm:text-xs" style={{ color: "var(--color-text-muted)" }}>
              Informations légales
            </h3>
            {legalSections.map((section) => (
              <div
                key={section.key}
                className="overflow-hidden"
                style={{
                  borderRadius: 12,
                  backgroundColor: "rgba(232, 96, 10, 0.05)",
                }}
              >
                <button
                  onClick={() => toggleSection(section.key)}
                  className="flex w-full items-center gap-2.5 text-left sm:gap-3"
                  style={{ padding: "10px 14px", transition: "background-color 0.15s" }}
                >
                  <svg className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" style={{ color: "var(--color-accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                  <span className="flex-1 text-[13px] font-medium sm:text-sm" style={{ color: "var(--color-text)" }}>{section.label}</span>
                  <svg
                    className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 sm:h-4 sm:w-4 ${
                      openSection === section.key ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--color-accent)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openSection === section.key && (
                  <div style={{ borderTop: "1px solid rgba(232, 96, 10, 0.10)", padding: "10px 14px" }}>
                    <p className="text-[13px] leading-relaxed sm:text-sm" style={{ color: "var(--color-text-muted)" }}>
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
