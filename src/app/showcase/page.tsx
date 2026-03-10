"use client";

import React, { useState, useEffect } from "react";

interface StyleProposal {
  id: number;
  name: string;
  category: string;
  description: string;
  preview: React.CSSProperties;
  innerPreview: React.CSSProperties;
  titleStyle: React.CSSProperties;
  accentColor: string;
  textColor: string;
  decorElements?: React.ReactNode;
}

const proposals: StyleProposal[] = [
  // ── MINIMALIST / SWISS / CLEAN (01-08) ──
  {
    id: 1, name: "Swiss Grid", category: "Minimalist",
    description: "Helvetica-inspired precision. Strict grid, red accents, mathematical spacing.",
    preview: { background: "#FAFAFA", borderLeft: "4px solid #E8600A" },
    innerPreview: { display: "flex", flexDirection: "column", gap: "6px" },
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase" as const },
    accentColor: "#E8600A", textColor: "#111",
  },
  {
    id: 2, name: "Mono Space", category: "Minimalist",
    description: "Single typeface. Monospaced grid. Developer aesthetic meets editorial calm.",
    preview: { background: "#fff", border: "1px solid #e0e0e0" },
    innerPreview: { fontFamily: "monospace", fontSize: "9px", lineHeight: 1.8, color: "#666" },
    titleStyle: { fontFamily: "monospace", fontWeight: 400, fontSize: "12px", letterSpacing: "0.05em" },
    accentColor: "#333", textColor: "#333",
  },
  {
    id: 3, name: "White Breath", category: "Minimalist",
    description: "Extreme whitespace. Whisper-thin type. Content floats in silence.",
    preview: { background: "#fff" },
    innerPreview: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" },
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "14px", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "#bbb" },
    accentColor: "#ddd", textColor: "#999",
  },
  {
    id: 4, name: "Ink & Paper", category: "Minimalist",
    description: "Newsprint warmth. Cream backgrounds, sharp serif headlines, subtle rules.",
    preview: { background: "#FAF8F5", borderBottom: "2px solid #222" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "14px", color: "#222" },
    accentColor: "#222", textColor: "#444",
  },
  {
    id: 5, name: "Japanese Minimal", category: "Minimalist",
    description: "Wabi-sabi inspired. Asymmetric balance, muted earth tones, contemplative pace.",
    preview: { background: "#F5F0EB", borderRight: "1px solid #C4B5A4" },
    innerPreview: { display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" },
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "11px", letterSpacing: "0.2em", color: "#8B7D6B" },
    accentColor: "#8B7D6B", textColor: "#5C5043",
  },
  {
    id: 6, name: "Scandinavian Clean", category: "Minimalist",
    description: "Warm grays, generous padding, rounded corners. Cozy functional beauty.",
    preview: { background: "#F7F6F3", borderRadius: "16px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#555" },
    accentColor: "#E8600A", textColor: "#444",
  },
  {
    id: 7, name: "Bauhaus Rational", category: "Minimalist",
    description: "Primary shapes, primary colors. Geometric purity, functional art.",
    preview: { background: "#FFFDF5", position: "relative" as const, overflow: "hidden" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "12px", textTransform: "uppercase" as const, letterSpacing: "0.1em" },
    accentColor: "#E8600A", textColor: "#111",
    decorElements: (
      <>
        <div style={{ position: "absolute", top: 0, right: 0, width: 30, height: 30, background: "#E8600A", borderRadius: "0 0 0 30px" }} />
        <div style={{ position: "absolute", bottom: 8, left: 8, width: 16, height: 16, border: "2px solid #222", borderRadius: "50%" }} />
      </>
    ),
  },

  // ── EDITORIAL / MAGAZINE / TYPOGRAPHY (08-15) ──
  {
    id: 8, name: "Vogue Editorial", category: "Editorial",
    description: "High-fashion serif. Dramatic scale contrast, luxe photography frames.",
    preview: { background: "#111", color: "#fff" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "18px", fontStyle: "italic", color: "#fff", lineHeight: 1 },
    accentColor: "#F5A623", textColor: "#ccc",
  },
  {
    id: 9, name: "Type Specimen", category: "Editorial",
    description: "Typography IS the design. Oversized letters, tight leading, raw beauty.",
    preview: { background: "#fff", borderTop: "6px solid #E8600A" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "28px", lineHeight: 0.85, letterSpacing: "-0.04em", color: "#111" },
    accentColor: "#E8600A", textColor: "#555",
  },
  {
    id: 10, name: "Newspaper Stack", category: "Editorial",
    description: "Multi-column layout, drop caps, dateline headers. Old-world authority.",
    preview: { background: "#FBF9F4", columnCount: 2, columnGap: "8px", columnRule: "1px solid #ddd" as any },
    innerPreview: { fontSize: "7px", lineHeight: 1.4, color: "#666" },
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "13px", color: "#222", columnSpan: "all" as any },
    accentColor: "#222", textColor: "#666",
  },
  {
    id: 11, name: "Kinetic Type", category: "Editorial",
    description: "Letters in motion. Staggered baselines, rotated words, dynamic rhythm.",
    preview: { background: "#FFFDE8", position: "relative" as const, overflow: "hidden" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", transform: "rotate(-3deg)", color: "#E8600A" },
    accentColor: "#E8600A", textColor: "#333",
  },
  {
    id: 12, name: "Zine Culture", category: "Editorial",
    description: "Cut-and-paste energy. Mixed fonts, raw edges, punk-meets-digital.",
    preview: { background: "#FFE8D6", position: "relative" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "15px", color: "#111", textDecoration: "underline", textDecorationColor: "#E8600A", textUnderlineOffset: "3px" },
    accentColor: "#E8600A", textColor: "#333",
  },
  {
    id: 13, name: "Literary Journal", category: "Editorial",
    description: "Quiet elegance. Small caps, wide margins, intellectual restraint.",
    preview: { background: "#FDFCF8", padding: "20px 24px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "#666" },
    accentColor: "#999", textColor: "#777",
  },
  {
    id: 14, name: "Poster Headline", category: "Editorial",
    description: "One word fills the screen. Impact, scale, nothing else matters.",
    preview: { background: "#111", display: "flex", alignItems: "center", justifyContent: "center" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "32px", color: "#fff", letterSpacing: "-0.05em", lineHeight: 0.9 },
    accentColor: "#F5A623", textColor: "#888",
  },

  // ── GRADIENT / COLORFUL / VIBRANT (15-22) ──
  {
    id: 15, name: "Sunset Gradient", category: "Gradient",
    description: "Warm orange-to-gold flows. Soft light, optimistic energy, California vibes.",
    preview: { background: "linear-gradient(135deg, #E8600A, #F5A623, #FCD34D)", color: "#fff" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#fff", textShadow: "0 1px 8px rgba(0,0,0,0.2)" },
    accentColor: "#fff", textColor: "rgba(255,255,255,0.85)",
  },
  {
    id: 16, name: "Aurora Borealis", category: "Gradient",
    description: "Cool-to-warm spectrum. Ethereal color shifts, dreamy atmospheric depth.",
    preview: { background: "linear-gradient(160deg, #0F172A, #1E3A5F, #E8600A, #F5A623)", color: "#fff" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff", letterSpacing: "0.05em" },
    accentColor: "#F5A623", textColor: "rgba(255,255,255,0.8)",
  },
  {
    id: 17, name: "Candy Pop", category: "Gradient",
    description: "Playful pastels, rounded shapes, bouncy typography. Pure joy.",
    preview: { background: "linear-gradient(135deg, #FECDD3, #FDE68A, #D8F3DC)", borderRadius: "20px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#E8600A" },
    accentColor: "#E8600A", textColor: "#9A3412",
  },
  {
    id: 18, name: "Mesh Gradient", category: "Gradient",
    description: "Organic color blobs, soft focus backgrounds, liquid blending.",
    preview: { background: "radial-gradient(ellipse at 20% 50%, rgba(232,96,10,0.4) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(245,166,35,0.3) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(251,191,36,0.3) 0%, transparent 50%), #FFF7ED" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "#92400E" },
    accentColor: "#E8600A", textColor: "#B45309",
  },
  {
    id: 19, name: "Neon Glow", category: "Gradient",
    description: "Dark base, electric highlights. Glowing edges, cyberpunk warmth.",
    preview: { background: "#0A0A0A", boxShadow: "inset 0 0 60px rgba(232,96,10,0.15)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#F5A623", textShadow: "0 0 20px rgba(245,166,35,0.6)" },
    accentColor: "#F5A623", textColor: "#E8600A",
  },
  {
    id: 20, name: "Duotone", category: "Gradient",
    description: "Two-color system. Deep orange + navy. Bold contrasts, Spotify energy.",
    preview: { background: "linear-gradient(180deg, #1E293B 50%, #E8600A 50%)" },
    innerPreview: { display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" },
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff" },
    accentColor: "#F5A623", textColor: "#fff",
  },
  {
    id: 21, name: "Iridescent Glass", category: "Gradient",
    description: "Holographic shimmer, translucent layers, prismatic color shifts.",
    preview: { background: "linear-gradient(135deg, #E8D5F5, #F5E6D0, #D5EEF5, #F5D5E8)", backdropFilter: "blur(10px)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#555", letterSpacing: "0.08em" },
    accentColor: "#E8600A", textColor: "#666",
  },
  {
    id: 22, name: "Warm Monochrome", category: "Gradient",
    description: "Single hue depth. Orange in 12 shades. Layered, cohesive, confident.",
    preview: { background: "linear-gradient(180deg, #FFF7ED, #FFEDD5, #FED7AA, #FDBA74)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#9A3412" },
    accentColor: "#E8600A", textColor: "#B45309",
  },

  // ── DARK MODE / LUXURY / PREMIUM (23-30) ──
  {
    id: 23, name: "Dark Luxury", category: "Dark/Luxury",
    description: "Jet black, gold accents. Rolex-level restraint, whisper of opulence.",
    preview: { background: "#0A0A0A", borderBottom: "1px solid rgba(245,166,35,0.3)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "14px", color: "#F5A623" },
    accentColor: "#F5A623", textColor: "#777",
  },
  {
    id: 24, name: "Carbon Fiber", category: "Dark/Luxury",
    description: "Textured dark. Industrial precision, metallic highlights, engineered feel.",
    preview: { background: "repeating-linear-gradient(45deg, #1A1A1A, #1A1A1A 2px, #222 2px, #222 4px)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "12px", color: "#ccc", letterSpacing: "0.15em", textTransform: "uppercase" as const },
    accentColor: "#E8600A", textColor: "#888",
  },
  {
    id: 25, name: "Midnight Editorial", category: "Dark/Luxury",
    description: "Dark navy + warm serif. Late-night reading mode, intimate atmosphere.",
    preview: { background: "#0F172A" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "14px", color: "#E2E8F0", fontStyle: "italic" },
    accentColor: "#F5A623", textColor: "#94A3B8",
  },
  {
    id: 26, name: "Obsidian Glass", category: "Dark/Luxury",
    description: "Glassmorphism on black. Frosted panels, depth layers, premium UI.",
    preview: { background: "linear-gradient(135deg, #111 0%, #1A1A2E 100%)", position: "relative" as const, overflow: "hidden" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "rgba(255,255,255,0.9)", letterSpacing: "0.05em" },
    accentColor: "#F5A623", textColor: "rgba(255,255,255,0.5)",
    decorElements: (
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 60, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }} />
    ),
  },
  {
    id: 27, name: "Noir Film", category: "Dark/Luxury",
    description: "High contrast B&W. Dramatic shadows, cinematic crop, smoky elegance.",
    preview: { background: "#111", borderLeft: "3px solid #fff" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "16px", color: "#fff", fontStyle: "italic" },
    accentColor: "#fff", textColor: "#666",
  },
  {
    id: 28, name: "Space Dark", category: "Dark/Luxury",
    description: "Deep cosmos. Star-field subtlety, floating elements, infinite depth.",
    preview: { background: "radial-gradient(ellipse at 50% 0%, #1A1033 0%, #0A0A0A 70%)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "12px", color: "#C4B5FD", letterSpacing: "0.1em" },
    accentColor: "#F5A623", textColor: "#7C7C9C",
  },
  {
    id: 29, name: "Ember Glow", category: "Dark/Luxury",
    description: "Charcoal base, ember-orange accents. Campfire warmth in digital form.",
    preview: { background: "#1C1210", boxShadow: "inset 0 -40px 60px -20px rgba(232,96,10,0.1)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "13px", color: "#E8600A" },
    accentColor: "#E8600A", textColor: "#8B6E5A",
  },
  {
    id: 30, name: "Titanium", category: "Dark/Luxury",
    description: "Cool gray metals. Brushed steel feel, precise engineering, Apple Pro vibes.",
    preview: { background: "linear-gradient(180deg, #2D2D2D, #1A1A1A)", border: "1px solid #3A3A3A" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", color: "#BCBCBC", letterSpacing: "0.08em" },
    accentColor: "#E8600A", textColor: "#888",
  },

  // ── BRUTALIST / BOLD / EXPERIMENTAL (31-37) ──
  {
    id: 31, name: "Raw Brutalist", category: "Brutalist",
    description: "No decoration. System fonts, visible grid, honest structure.",
    preview: { background: "#fff", border: "3px solid #000", borderRadius: 0 },
    innerPreview: {},
    titleStyle: { fontFamily: "monospace", fontWeight: 700, fontSize: "14px", color: "#000", textTransform: "uppercase" as const },
    accentColor: "#E8600A", textColor: "#000",
  },
  {
    id: 32, name: "Glitch Punk", category: "Brutalist",
    description: "Broken grid, offset layers, color channel split. Digital rebellion.",
    preview: { background: "#000", position: "relative" as const, overflow: "hidden" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", color: "#fff", textShadow: "2px 0 #E8600A, -2px 0 #00D4FF" },
    accentColor: "#E8600A", textColor: "#0FF",
  },
  {
    id: 33, name: "Construction Zone", category: "Brutalist",
    description: "Yellow-black stripes, stencil type, industrial warning system aesthetic.",
    preview: { background: "repeating-linear-gradient(45deg, #F5A623, #F5A623 10px, #111 10px, #111 20px)", position: "relative" as const },
    innerPreview: { background: "#111", padding: "8px", margin: "4px" },
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "11px", color: "#F5A623", textTransform: "uppercase" as const, letterSpacing: "0.2em" },
    accentColor: "#F5A623", textColor: "#F5A623",
  },
  {
    id: 34, name: "Anti-Design", category: "Brutalist",
    description: "Intentionally ugly. Comic Sans energy, clashing colors, pure chaos.",
    preview: { background: "#BEFF00", border: "4px dashed #E8600A", borderRadius: 0 },
    innerPreview: {},
    titleStyle: { fontFamily: "cursive", fontWeight: 700, fontSize: "15px", color: "#E8600A", transform: "rotate(2deg)" },
    accentColor: "#E8600A", textColor: "#111",
  },
  {
    id: 35, name: "Concrete Block", category: "Brutalist",
    description: "Heavy weight, stacked blocks, exposed structure. Architecture in pixels.",
    preview: { background: "#D4D0C8", borderRadius: 0, boxShadow: "4px 4px 0 #999" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", color: "#333", textTransform: "uppercase" as const },
    accentColor: "#E8600A", textColor: "#666",
  },
  {
    id: 36, name: "Data Overflow", category: "Brutalist",
    description: "Information overload. Dense text, scrolling tickers, terminal output.",
    preview: { background: "#0D1117", fontFamily: "monospace", overflow: "hidden" as const },
    innerPreview: { fontSize: "7px", lineHeight: 1.3, color: "#3FB950", opacity: 0.7, overflow: "hidden" as const },
    titleStyle: { fontFamily: "monospace", fontWeight: 400, fontSize: "11px", color: "#3FB950" },
    accentColor: "#3FB950", textColor: "#3FB950",
  },
  {
    id: 37, name: "Deconstructed Grid", category: "Brutalist",
    description: "Overlapping elements, broken alignment, z-index chaos, controlled mayhem.",
    preview: { background: "#fff", position: "relative" as const, overflow: "hidden" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", color: "#E8600A", transform: "translateX(-4px)" },
    accentColor: "#E8600A", textColor: "#333",
    decorElements: (
      <>
        <div style={{ position: "absolute", top: -5, right: -5, width: 40, height: 40, border: "2px solid #E8600A", transform: "rotate(15deg)" }} />
        <div style={{ position: "absolute", bottom: 5, left: 10, width: 20, height: 20, background: "#111" }} />
      </>
    ),
  },

  // ── ORGANIC / SOFT / ROUNDED (38-44) ──
  {
    id: 38, name: "Soft Cloud", category: "Organic",
    description: "Pillowy shapes, cotton-white, gentle shadows. Floating comfort.",
    preview: { background: "#fff", borderRadius: "24px", boxShadow: "0 8px 32px rgba(0,0,0,0.06)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13px", color: "#555" },
    accentColor: "#E8600A", textColor: "#888",
  },
  {
    id: 39, name: "Botanical", category: "Organic",
    description: "Earth greens, leaf textures, natural paper feel. Growth metaphor.",
    preview: { background: "linear-gradient(180deg, #F0FDF4, #ECFCCB)" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "13px", color: "#166534" },
    accentColor: "#166534", textColor: "#4D7C0F",
  },
  {
    id: 40, name: "Terracotta", category: "Organic",
    description: "Clay warm. Desert tones, handcraft feel, artisan warmth.",
    preview: { background: "#F5EDE3", borderRadius: "20px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "14px", color: "#92400E" },
    accentColor: "#C2410C", textColor: "#A16207",
  },
  {
    id: 41, name: "Bubble UI", category: "Organic",
    description: "Everything is a pill. Rounded corners maxed out, playful interactions.",
    preview: { background: "#FFF7ED", borderRadius: "28px", border: "2px solid #FDBA74" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#EA580C" },
    accentColor: "#E8600A", textColor: "#B45309",
  },
  {
    id: 42, name: "Watercolor Wash", category: "Organic",
    description: "Blurred edges, paint-bleeding borders, artistic imprecision.",
    preview: { background: "radial-gradient(ellipse at 30% 30%, rgba(232,96,10,0.15), transparent 70%), radial-gradient(ellipse at 70% 70%, rgba(245,166,35,0.1), transparent 60%), #FFFBF5" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "13px", color: "#92400E", fontStyle: "italic" },
    accentColor: "#E8600A", textColor: "#A16207",
  },
  {
    id: 43, name: "Paper Craft", category: "Organic",
    description: "Layered paper effect, subtle shadows, handmade texture. Tactile warmth.",
    preview: { background: "#FAF5EF", boxShadow: "2px 2px 0 #EDE5DA, 4px 4px 0 #E2D9CE", borderRadius: "8px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#78716C" },
    accentColor: "#E8600A", textColor: "#A8A29E",
  },
  {
    id: 44, name: "Cream Dream", category: "Organic",
    description: "Warm cream palette, soft gradients, rounded type. Sunday morning feeling.",
    preview: { background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", borderRadius: "20px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "14px", color: "#92400E" },
    accentColor: "#D97706", textColor: "#B45309",
  },

  // ── TECH / FUTURISTIC / 3D-FEEL (45-50) ──
  {
    id: 45, name: "HUD Interface", category: "Tech",
    description: "Heads-up display. Thin lines, data readouts, targeting reticles.",
    preview: { background: "#0A0F1A", border: "1px solid rgba(232,96,10,0.3)", borderRadius: "4px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "11px", color: "#E8600A", letterSpacing: "0.15em", textTransform: "uppercase" as const },
    accentColor: "#E8600A", textColor: "rgba(232,96,10,0.5)",
    decorElements: (
      <>
        <div style={{ position: "absolute", top: 4, left: 4, width: 8, height: 8, borderTop: "1px solid #E8600A", borderLeft: "1px solid #E8600A" }} />
        <div style={{ position: "absolute", bottom: 4, right: 4, width: 8, height: 8, borderBottom: "1px solid #E8600A", borderRight: "1px solid #E8600A" }} />
      </>
    ),
  },
  {
    id: 46, name: "Wireframe 3D", category: "Tech",
    description: "Floating wireframe objects, perspective grids, blueprint aesthetic.",
    preview: { background: "#0A0A2E", backgroundImage: "linear-gradient(rgba(232,96,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,96,10,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#818CF8" },
    accentColor: "#818CF8", textColor: "#6366F1",
  },
  {
    id: 47, name: "Glassmorphism", category: "Tech",
    description: "Frosted glass panels, background blur, floating transparent layers.",
    preview: { background: "linear-gradient(135deg, #667EEA, #764BA2)", position: "relative" as const, overflow: "hidden" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#fff" },
    accentColor: "#fff", textColor: "rgba(255,255,255,0.7)",
    decorElements: (
      <div style={{ position: "absolute", top: "30%", left: "20%", width: "60%", height: "40%", borderRadius: 12, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }} />
    ),
  },
  {
    id: 48, name: "Matrix Rain", category: "Tech",
    description: "Falling code aesthetic, green-on-black, hacker culture nostalgia.",
    preview: { background: "#000", overflow: "hidden" as const },
    innerPreview: { fontFamily: "monospace", fontSize: "7px", lineHeight: 1.1, color: "#00FF41", opacity: 0.6, letterSpacing: "2px" },
    titleStyle: { fontFamily: "monospace", fontWeight: 700, fontSize: "12px", color: "#00FF41", textShadow: "0 0 10px rgba(0,255,65,0.5)" },
    accentColor: "#00FF41", textColor: "#00FF41",
  },
  {
    id: 49, name: "Neomorphism", category: "Tech",
    description: "Soft extrusion, inner shadows, tactile depth. Pressed-in-clay UI.",
    preview: { background: "#E4E0D9", borderRadius: "20px", boxShadow: "8px 8px 16px #C8C4BE, -8px -8px 16px #FFFCF4", border: "none" },
    innerPreview: {},
    titleStyle: { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "12px", color: "#78716C" },
    accentColor: "#E8600A", textColor: "#A8A29E",
  },
  {
    id: 50, name: "AI Dashboard", category: "Tech",
    description: "Neural network nodes, data viz, gradient orbs. Intelligence visualized.",
    preview: { background: "linear-gradient(135deg, #0F172A, #1E1B4B)", position: "relative" as const, overflow: "hidden" as const },
    innerPreview: {},
    titleStyle: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", color: "#A78BFA" },
    accentColor: "#A78BFA", textColor: "#7C3AED",
    decorElements: (
      <>
        <div style={{ position: "absolute", top: "20%", left: "60%", width: 6, height: 6, borderRadius: "50%", background: "#A78BFA", boxShadow: "0 0 12px #A78BFA" }} />
        <div style={{ position: "absolute", top: "60%", left: "30%", width: 4, height: 4, borderRadius: "50%", background: "#F5A623", boxShadow: "0 0 8px #F5A623" }} />
        <div style={{ position: "absolute", top: "40%", left: "75%", width: 3, height: 3, borderRadius: "50%", background: "#818CF8", boxShadow: "0 0 6px #818CF8" }} />
      </>
    ),
  },
];

const categoryColors: Record<string, string> = {
  "Minimalist": "#78716C",
  "Editorial": "#9A3412",
  "Gradient": "#E8600A",
  "Dark/Luxury": "#F5A623",
  "Brutalist": "#DC2626",
  "Organic": "#4D7C0F",
  "Tech": "#7C3AED",
};

export default function ShowcasePage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const categories = ["All", "Minimalist", "Editorial", "Gradient", "Dark/Luxury", "Brutalist", "Organic", "Tech"];
  const filtered = filter === "All" ? proposals : proposals.filter(p => p.category === filter);
  const selected = proposals.find(p => p.id === selectedId) || null;

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      {/* HERO HEADER */}
      <section style={{
        padding: "60px 24px 40px",
        maxWidth: 1280,
        margin: "0 auto",
        textAlign: "center" as const,
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div style={{
          display: "inline-block",
          padding: "6px 16px",
          borderRadius: 9999,
          background: "linear-gradient(135deg, rgba(232,96,10,0.08), rgba(245,166,35,0.08))",
          color: "#E8600A",
          fontSize: 12,
          fontWeight: 600,
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.05em",
          marginBottom: 20,
        }}>
          50 DESIGN DIRECTIONS
        </div>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "#111",
          marginBottom: 16,
        }}>
          Style <span style={{
            background: "linear-gradient(135deg, #E8600A, #F5A623)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Exploration</span>
        </h1>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 17,
          lineHeight: 1.6,
          color: "#666",
          maxWidth: 560,
          margin: "0 auto",
        }}>
          Each card is a distinct visual universe for Connected Mate.
          Hover to feel, click to expand. Find the direction that resonates.
        </p>
      </section>

      {/* FILTER BAR */}
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px 32px",
        display: "flex",
        flexWrap: "wrap" as const,
        gap: 8,
        justifyContent: "center",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(10px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
      }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "8px 18px",
              borderRadius: 9999,
              border: "1px solid",
              borderColor: filter === cat ? "#E8600A" : "rgba(0,0,0,0.08)",
              background: filter === cat ? "linear-gradient(135deg, #E8600A, #F5A623)" : "#fff",
              color: filter === cat ? "#fff" : "#666",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "'Inter', sans-serif",
              cursor: "pointer",
              transition: "all 0.25s ease",
              outline: "none",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "0 24px 80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 20,
      }}>
        {filtered.map((style, index) => {
          const isHovered = hoveredId === style.id;
          return (
            <div
              key={style.id}
              onMouseEnter={() => setHoveredId(style.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedId(style.id)}
              style={{
                cursor: "pointer",
                borderRadius: 16,
                overflow: "hidden",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: isHovered
                  ? `0 24px 48px -12px rgba(0,0,0,0.15), 0 0 0 1px ${style.accentColor}22`
                  : "0 2px 8px rgba(0,0,0,0.04)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                opacity: mounted ? 1 : 0,
                animationDelay: `${Math.min(index * 40, 800)}ms`,
              }}
            >
              {/* Mini Preview Area */}
              <div style={{
                position: "relative",
                height: 160,
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                ...style.preview,
                borderRadius: 0,
                transition: "all 0.4s ease",
              }}>
                {style.decorElements}
                <div style={style.innerPreview}>
                  {style.id === 10 && (
                    <span style={{ fontSize: 7, lineHeight: 1.4, color: "#666" }}>
                      Connected Mate brings together the best minds in tech and innovation through exclusive conferences and podcasts that bridge ideas and people.
                    </span>
                  )}
                  {style.id === 36 && (
                    <span>01001100 01001111 01000001 01000100 CONNECTED::MATE v3.2.1 keynote_stream.init() podcast.buffer=READY app.deploy=TRUE render.complete...</span>
                  )}
                  {style.id === 48 && (
                    <span>ﾊﾐﾋﾎ ﾊﾐﾋ ﾊﾐﾋﾎ CM::INIT ﾊﾐﾋ 01 ﾊﾐﾋﾎ CONNECTED ﾊﾐﾋ MATE ﾊﾐﾋﾎ ﾊﾐﾋ</span>
                  )}
                </div>
                <span style={{
                  ...style.titleStyle,
                  position: style.id === 10 || style.id === 36 || style.id === 48 ? "relative" as const : "relative" as const,
                  zIndex: 2,
                  display: "block",
                  marginTop: style.id === 10 || style.id === 36 || style.id === 48 ? 4 : 0,
                }}>
                  {style.id === 9 ? "CM" : style.id === 14 ? "CM." : "Connected Mate"}
                </span>
              </div>

              {/* Info Area */}
              <div style={{ padding: "16px 16px 20px" }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#bbb",
                    letterSpacing: "0.05em",
                  }}>
                    {String(style.id).padStart(2, "0")}
                  </span>
                  <span style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: 9999,
                    fontSize: 10,
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    color: categoryColors[style.category] || "#666",
                    background: `${categoryColors[style.category] || "#666"}14`,
                    letterSpacing: "0.02em",
                  }}>
                    {style.category}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#111",
                  marginBottom: 4,
                  letterSpacing: "-0.01em",
                }}>
                  {style.name}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: "#888",
                }}>
                  {style.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          onClick={() => setSelectedId(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 720,
              borderRadius: 24,
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.3)",
              animation: "scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Expanded Preview */}
            <div style={{
              position: "relative",
              height: 320,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              ...selected.preview,
              borderRadius: 0,
            }}>
              {selected.decorElements}
              <div style={{ position: "relative", zIndex: 2 }}>
                <span style={{
                  ...selected.titleStyle,
                  fontSize: typeof selected.titleStyle.fontSize === "number"
                    ? selected.titleStyle.fontSize * 2.5
                    : `calc(${selected.titleStyle.fontSize} * 2.5)`,
                  display: "block",
                }}>
                  Connected Mate
                </span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: selected.textColor,
                  display: "block",
                  marginTop: 8,
                  opacity: 0.8,
                }}>
                  Conferences &middot; Podcasts &middot; Apps
                </span>
              </div>
            </div>

            {/* Modal Info */}
            <div style={{ padding: "32px 40px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#bbb",
                }}>
                  {String(selected.id).padStart(2, "0")}
                </span>
                <span style={{
                  padding: "4px 12px",
                  borderRadius: 9999,
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  color: categoryColors[selected.category] || "#666",
                  background: `${categoryColors[selected.category] || "#666"}14`,
                }}>
                  {selected.category}
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#111",
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}>
                {selected.name}
              </h2>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                lineHeight: 1.7,
                color: "#666",
                marginBottom: 24,
              }}>
                {selected.description}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                <span style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontFamily: "monospace",
                  background: "#F5F5F5",
                  color: "#666",
                }}>
                  accent: {selected.accentColor}
                </span>
                <span style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontFamily: "monospace",
                  background: "#F5F5F5",
                  color: "#666",
                }}>
                  text: {selected.textColor}
                </span>
                <span style={{
                  padding: "6px 14px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontFamily: "monospace",
                  background: "#F5F5F5",
                  color: "#666",
                }}>
                  font: {(selected.titleStyle.fontFamily || "").toString().split(",")[0].replace(/'/g, "")}
                </span>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                style={{
                  marginTop: 24,
                  padding: "12px 28px",
                  borderRadius: 9999,
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "#fff",
                  color: "#666",
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "'Inter', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <div style={{
        textAlign: "center" as const,
        padding: "40px 24px 60px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: "#bbb",
        }}>
          Connected Mate — Design Direction Showcase — 50 Proposals
        </p>
      </div>
    </div>
  );
}
