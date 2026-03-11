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

  const statusColor = (status: string) => {
    if (status === "Disponible") return "#16a34a";
    if (status === "Bêta") return "#d97706";
    return "#dc2626";
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: 520,
          maxHeight: "85vh",
          overflowY: "auto",
          backgroundColor: "var(--color-surface, #ffffff)",
          borderRadius: 20,
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid var(--color-border, rgba(0,0,0,0.1))",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient bar */}
        <div
          style={{
            padding: "24px 24px 16px",
            borderBottom: "1px solid var(--color-border, rgba(0,0,0,0.08))",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                {/* App icon circle */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: app.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg style={{ width: 20, height: 20, color: "#fff" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 style={{
                    fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "var(--color-text)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    {app.title}
                  </h2>
                  <p style={{ fontSize: 13, color: "var(--color-text-muted)", margin: "2px 0 0" }}>
                    {app.platforms}
                  </p>
                </div>
              </div>
              <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                <span style={{
                  display: "inline-block",
                  padding: "3px 10px",
                  borderRadius: 9999,
                  fontSize: 12,
                  fontWeight: 600,
                  backgroundColor: `${statusColor(app.status)}18`,
                  color: statusColor(app.status),
                }}>
                  {app.status}
                </span>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                width: 32,
                height: 32,
                borderRadius: 9999,
                border: "1px solid var(--color-border, rgba(0,0,0,0.1))",
                backgroundColor: "var(--color-surface, #fff)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                color: "var(--color-text-muted)",
              }}
            >
              <svg style={{ width: 16, height: 16 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "20px 24px 24px" }}>
          {/* Description */}
          <div style={{ marginBottom: 20 }}>
            <h3 style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--color-text-muted)",
              marginBottom: 8,
            }}>
              Description
            </h3>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--color-text)", whiteSpace: "pre-line" }}>
              {app.fullDescription}
            </div>
          </div>

          {/* App link */}
          {app.appUrl !== "#" && (
            <a
              href={app.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "12px 16px",
                borderRadius: 14,
                backgroundColor: "var(--color-accent, #E8600A)",
                color: "#fff",
                textDecoration: "none",
                marginBottom: 20,
                transition: "opacity 0.15s",
              }}
            >
              <svg style={{ width: 20, height: 20, flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Ouvrir {app.title}</div>
                <div style={{ fontSize: 11, opacity: 0.8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{app.appUrl}</div>
              </div>
              <svg style={{ width: 18, height: 18, flexShrink: 0, opacity: 0.7 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}

          {/* Legal sections */}
          <div>
            <h3 style={{
              fontSize: 11,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "var(--color-text-muted)",
              marginBottom: 10,
            }}>
              Informations légales
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {legalSections.map((section) => (
                <div
                  key={section.key}
                  style={{
                    borderRadius: 12,
                    border: "1px solid var(--color-border, rgba(0,0,0,0.08))",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() => toggleSection(section.key)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "12px 14px",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "var(--color-text)",
                    }}
                  >
                    <svg style={{ width: 18, height: 18, flexShrink: 0, color: "var(--color-accent, #E8600A)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                    </svg>
                    <span style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{section.label}</span>
                    <svg
                      style={{
                        width: 16,
                        height: 16,
                        flexShrink: 0,
                        color: "var(--color-accent, #E8600A)",
                        transition: "transform 0.2s",
                        transform: openSection === section.key ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openSection === section.key && (
                    <div style={{
                      padding: "0 14px 14px",
                      borderTop: "1px solid var(--color-border, rgba(0,0,0,0.06))",
                      paddingTop: 12,
                    }}>
                      <p style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "var(--color-text-muted)",
                        margin: 0,
                        whiteSpace: "pre-line",
                      }}>
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
    </div>
  );
}
