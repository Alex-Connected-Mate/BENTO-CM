"use client";
import React, { useState, useMemo } from "react";
import { designs as designs1 } from "./designs-1";
import { designs as designs2 } from "./designs-2";
import { designs as designs3 } from "./designs-3";
import { designs as designs4 } from "./designs-4";
import { designs as designs5 } from "./designs-5";
import type { HomepageDesign } from "./designs-1";

const allDesigns: HomepageDesign[] = [
  ...designs1,
  ...designs2,
  ...designs3,
  ...designs4,
  ...designs5,
];

const categories = Array.from(new Set(allDesigns.map((d) => d.category)));

export default function ShowcaseHomepages() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filtered = useMemo(
    () =>
      filterCategory === "all"
        ? allDesigns
        : allDesigns.filter((d) => d.category === filterCategory),
    [filterCategory]
  );

  const selected = allDesigns.find((d) => d.id === selectedId);

  // Full-screen preview mode
  if (selected) {
    const Component = selected.component;
    return (
      <div style={{ position: "relative" }}>
        {/* Floating back button */}
        <button
          onClick={() => setSelectedId(null)}
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 99999,
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            border: "none",
            borderRadius: 12,
            padding: "12px 24px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ fontSize: 18 }}>&larr;</span> Retour aux 50 designs
        </button>
        {/* Design number badge */}
        <div
          style={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 99999,
            background: "rgba(0,0,0,0.85)",
            color: "#fff",
            borderRadius: 12,
            padding: "12px 20px",
            fontSize: 13,
            fontWeight: 600,
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          #{String(selected.id).padStart(2, "0")} — {selected.name}
          <span
            style={{
              display: "inline-block",
              marginLeft: 10,
              background: "rgba(255,255,255,0.15)",
              borderRadius: 6,
              padding: "2px 8px",
              fontSize: 11,
            }}
          >
            {selected.category}
          </span>
        </div>
        {/* Navigation arrows */}
        <div
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 99999,
            display: "flex",
            gap: 8,
            background: "rgba(0,0,0,0.85)",
            borderRadius: 12,
            padding: "8px 12px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={() => setSelectedId(Math.max(1, selected.id - 1))}
            disabled={selected.id === 1}
            style={{
              background: selected.id === 1 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: selected.id === 1 ? "default" : "pointer",
              opacity: selected.id === 1 ? 0.4 : 1,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            &larr; Précédent
          </button>
          <span
            style={{
              color: "#fff",
              padding: "8px 16px",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {selected.id} / 50
          </span>
          <button
            onClick={() => setSelectedId(Math.min(50, selected.id + 1))}
            disabled={selected.id === 50}
            style={{
              background: selected.id === 50 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: selected.id === 50 ? "default" : "pointer",
              opacity: selected.id === 50 ? 0.4 : 1,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Suivant &rarr;
          </button>
        </div>
        {/* Render the full homepage */}
        <Component />
      </div>
    );
  }

  // Grid gallery mode
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "'Inter', 'Space Grotesk', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "80px 24px 40px",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          50 Directions{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #E8600A, #F5A623)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Artistiques
          </span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginTop: 16,
            lineHeight: 1.6,
          }}
        >
          Cliquez sur un design pour le voir en plein écran comme une vraie homepage.
          <br />
          Naviguez entre les designs avec les flèches.
        </p>
      </div>

      {/* Category filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 8,
          padding: "0 24px 48px",
          maxWidth: 1000,
          margin: "0 auto",
        }}
      >
        <button
          onClick={() => setFilterCategory("all")}
          style={{
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.15)",
            background: filterCategory === "all" ? "#E8600A" : "transparent",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Tous ({allDesigns.length})
        </button>
        {categories.map((cat) => {
          const count = allDesigns.filter((d) => d.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.15)",
                background: filterCategory === cat ? "#E8600A" : "transparent",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Grid of design cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 24,
          padding: "0 24px 80px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {filtered.map((design) => (
          <div
            key={design.id}
            onClick={() => setSelectedId(design.id)}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              overflow: "hidden",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(232,96,10,0.2)";
              e.currentTarget.style.borderColor = "rgba(232,96,10,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            {/* Mini preview */}
            <div
              style={{
                height: 200,
                overflow: "hidden",
                position: "relative",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  transform: "scale(0.25)",
                  transformOrigin: "top left",
                  width: "400%",
                  height: "400%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <design.component />
              </div>
            </div>
            {/* Info */}
            <div style={{ padding: "16px 20px 20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.3)",
                    fontFamily: "monospace",
                  }}
                >
                  #{String(design.id).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    background: "rgba(232,96,10,0.15)",
                    color: "#F5A623",
                    padding: "3px 10px",
                    borderRadius: 999,
                  }}
                >
                  {design.category}
                </span>
              </div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {design.name}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.45)",
                  marginTop: 6,
                  lineHeight: 1.5,
                }}
              >
                {design.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
