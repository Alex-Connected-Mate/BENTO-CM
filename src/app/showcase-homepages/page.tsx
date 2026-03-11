"use client";
import React, { useState, useMemo } from "react";
import { designs as designs1 } from "./designs-1";
import { designs as designs2 } from "./designs-2";
import { designs as designs3 } from "./designs-3";
import { designs as designs4 } from "./designs-4";
import { designs as designs5 } from "./designs-5";
import { designs as designs6 } from "./designs-6";
import { designs as designs7 } from "./designs-7";
import { designs as designs8 } from "./designs-8";
import { designs as designs9 } from "./designs-9";
import { designs as designs10 } from "./designs-10";
import type { HomepageDesign } from "./designs-1";

const allDesigns: HomepageDesign[] = [
  ...designs1,
  ...designs2,
  ...designs3,
  ...designs4,
  ...designs5,
  ...designs6,
  ...designs7,
  ...designs8,
  ...designs9,
  ...designs10,
];

const categories = Array.from(new Set(allDesigns.map((d) => d.category)));

export default function ShowcaseHomepages() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"gallery" | "blueprint">("gallery");

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
          <span style={{ fontSize: 18 }}>&larr;</span> Retour aux designs
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
            {selected.id} / {allDesigns.length}
          </span>
          <button
            onClick={() => setSelectedId(Math.min(allDesigns.length, selected.id + 1))}
            disabled={selected.id === allDesigns.length}
            style={{
              background: selected.id === allDesigns.length ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              cursor: selected.id === allDesigns.length ? "default" : "pointer",
              opacity: selected.id === allDesigns.length ? 0.4 : 1,
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
          {allDesigns.length} Directions{" "}
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

      {/* View mode toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          padding: "0 24px 32px",
        }}
      >
        <button
          onClick={() => setViewMode("gallery")}
          style={{
            padding: "8px 20px",
            borderRadius: "10px 0 0 10px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: viewMode === "gallery" ? "rgba(255,255,255,0.1)" : "transparent",
            color: viewMode === "gallery" ? "#fff" : "rgba(255,255,255,0.4)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Galerie
        </button>
        <button
          onClick={() => setViewMode("blueprint")}
          style={{
            padding: "8px 20px",
            borderRadius: "0 10px 10px 0",
            border: "1px solid rgba(255,255,255,0.15)",
            background: viewMode === "blueprint" ? "#1A3A6A" : "transparent",
            color: viewMode === "blueprint" ? "#8CB4E0" : "rgba(255,255,255,0.4)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Blueprint
        </button>
      </div>

      {/* BLUEPRINT VIEW */}
      {viewMode === "blueprint" ? (
        <div
          style={{
            padding: "0 24px 80px",
            maxWidth: 1400,
            margin: "0 auto",
            background: "linear-gradient(180deg, #0a0a0a, #0D1B33)",
            backgroundImage: "linear-gradient(rgba(100,160,220,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,220,0.04) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            borderRadius: 16,
            border: "1px solid rgba(100,160,220,0.1)",
          }}
        >
          <div
            style={{
              padding: "24px 32px",
              borderBottom: "1px solid rgba(100,160,220,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "'Courier New', monospace",
              fontSize: 12,
              color: "rgba(100,160,220,0.5)",
            }}
          >
            <span>CONNECTED MATE — DESIGN BLUEPRINT — REV. 2026.03</span>
            <span>{filtered.length} DESIGNS — SCALE 1:1</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20, padding: "24px 32px" }}>
            {filtered.map((design) => (
              <div
                key={design.id}
                onClick={() => setSelectedId(design.id)}
                style={{
                  border: "1px solid rgba(100,160,220,0.15)",
                  borderRadius: 4,
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  background: "rgba(100,160,220,0.02)",
                  fontFamily: "'Courier New', monospace",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100,160,220,0.4)";
                  e.currentTarget.style.background = "rgba(100,160,220,0.06)";
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(100,160,220,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(100,160,220,0.15)";
                  e.currentTarget.style.background = "rgba(100,160,220,0.02)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Blueprint wireframe representation */}
                <div
                  style={{
                    height: 140,
                    border: "1px dashed rgba(100,160,220,0.2)",
                    borderRadius: 2,
                    marginBottom: 16,
                    padding: 12,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Wireframe nav */}
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <div style={{ width: 40, height: 4, background: "rgba(100,160,220,0.2)", borderRadius: 1 }} />
                    <div style={{ display: "flex", gap: 6 }}>
                      {[20, 20, 20, 20].map((w, i) => <div key={i} style={{ width: w, height: 3, background: "rgba(100,160,220,0.12)", borderRadius: 1 }} />)}
                    </div>
                  </div>
                  {/* Wireframe hero */}
                  <div style={{ marginTop: 12 }}>
                    <div style={{ width: "70%", height: 6, background: "rgba(100,160,220,0.18)", borderRadius: 1, marginBottom: 6 }} />
                    <div style={{ width: "50%", height: 6, background: "rgba(100,160,220,0.18)", borderRadius: 1, marginBottom: 10 }} />
                    <div style={{ width: "85%", height: 3, background: "rgba(100,160,220,0.08)", borderRadius: 1, marginBottom: 3 }} />
                    <div style={{ width: "60%", height: 3, background: "rgba(100,160,220,0.08)", borderRadius: 1, marginBottom: 10 }} />
                    <div style={{ display: "flex", gap: 6 }}>
                      <div style={{ width: 36, height: 10, background: "rgba(100,160,220,0.15)", borderRadius: 2 }} />
                      <div style={{ width: 36, height: 10, border: "1px solid rgba(100,160,220,0.12)", borderRadius: 2 }} />
                    </div>
                  </div>
                  {/* Wireframe cards */}
                  <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                    {[1, 2, 3].map((c) => (
                      <div key={c} style={{ flex: 1, height: 20, border: "1px dashed rgba(100,160,220,0.12)", borderRadius: 2 }} />
                    ))}
                  </div>
                  {/* Blueprint ref number */}
                  <div style={{ position: "absolute", bottom: 4, right: 8, fontSize: 9, color: "rgba(100,160,220,0.3)" }}>
                    REF. CM-{String(design.id).padStart(3, "0")}
                  </div>
                </div>
                {/* Info */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: "rgba(100,160,220,0.4)" }}>
                    #{String(design.id).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 10, padding: "2px 8px", border: "1px solid rgba(100,160,220,0.15)", borderRadius: 2, color: "rgba(100,160,220,0.5)" }}>
                    {design.category}
                  </span>
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#8CB4E0", fontFamily: "'Inter', sans-serif", marginBottom: 4 }}>
                  {design.name}
                </div>
                <div style={{ fontSize: 11, color: "rgba(100,160,220,0.4)", lineHeight: 1.5, fontFamily: "'Inter', sans-serif" }}>
                  {design.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* GALLERY VIEW */
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
      )}
    </div>
  );
}
