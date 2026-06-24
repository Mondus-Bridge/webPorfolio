
# Web Portfolio PRD (Product Requirement Document)

## Overview

Create a high-performance, minimalist, single-page scrollable web portfolio that showcases technical projects, professional experience, and skills. The application architecture leverages a single-column-to-grid flow to establish a highly professional, readable personal platform.

## Target Audience

- **Technical Recruiters & Hiring Managers:** Looking for an instant 5-second technical validation of architecture, layout precision, and capability.
- **Engineering Peers:** Assessing clean implementation, low CSS specificity, and state tracking.

## Primary Goal (Single Job of the Page)

Present the developer’s identity, engineering projects, and contact avenues on a **single scrollable page view** that strictly implements responsive reading limits (mitigating line-length horizontal strain on wide screens while remaining edge-safe on mobile screens).

---

## Technical Stack & Environmental Boundaries

- **Core Framework:** React 19 (Functional components only; no legacy class layouts).
- **Build & Asset Tooling:** Vite v8.
- **Styling Architecture:** Tailwind CSS v4 (configured cleanly inside `src/index.css` via custom theme configuration layers, eliminating legacy `.cjs` or `.js` config files).
- **Quality Guardrails:** ESLint v9 + Prettier v3.

---

## Core Features & Blueprint

| Feature                            | Technical Intent & Implementation                                                                                                     | State / Hook Strategy                                                               |
| :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------- |
| **Hero Section**             | Large impactful headline, short role value proposition, and a subtle animated entry background.                                       | Native mounting state transitions.                                                  |
| **Project Showcase**         | Clean 2-column card grid displaying title, image placeholders, project scopes, tech tags, and structural demo anchors.                | Static local JSON array mapped natively via TypeScript interfaces.                  |
| **About & Skills**           | Brief bio and tech metadata stacks structured cleanly as responsive chip components.                                                  | Native component mapping.                                                           |
| **Signature Scroll Element** | A custom**hand-drawn SVG underline** that animates or strokes into view matching the scroll visibility of major section titles. | Browser native `IntersectionObserver` API wrapped in an inline custom React hook. |
| **Theme System (Optional)**  | Seamless light/dark mode switching mapping custom variables across Tailwind v4 custom theme layers.                                   | Native React state synced cleanly to browser `localStorage`.                      |

---

## Design & Typography Implementation Standards

### 📐 Structural Layout & Responsive Constraints (The 65-Character Rule)

- **Desktop Viewports:** To protect the eye from severe tracking strain, all main content paragraphs must be bounded to a safe horizontal column width limit (`max-w-3xl mx-auto`), keeping text lines between 45 and 75 characters.
- **Mobile Viewports:** Fluid 100% widths (`w-full`) bound by margin padding guards (`px-4 sm:px-6`) to prevent readable copy from touching physical device glass boundaries.
- **Header Execution:** The main header remains fully pinned (`sticky top-0 z-50 bg-white/90 backdrop-blur`) with consistent text sizing transitions (`text-base sm:text-lg`).

### 🎨 Brand Design Tokens

- **Primary Deep Navy:** `#1a1f36`
- **Accent Warm Amber:** `#ffb400`
- **Secondary Soft Teal:** `#38b2ac`
- **Muted Neutral Gray:** `#f4f6f9`

### 🔤 Typography Settings

- **Display Headings:** *Playfair Display* (Bold, distinct tracking-tight configuration).
- **System Body Text:** *Inter* or *Roboto* (Regular weight, bound to a comfortable relative line height via `leading-relaxed`).
- **Utility Indicators:** *JetBrains Mono* (monospaced styling for syntax or parameters).

---

## Acceptance & Quality Criteria

- **Dependency Guardrail:** zero redundant third-party package dependencies for state or observer tracking. All scroll triggers and theme toggles are written cleanly as native React abstractions to prevent build breaks on React 19.
- **Accessibility & Performance Rules:** Google Lighthouse speed matrix scoring $\ge 95$ across Performance, Accessibility, and General Coding Best Practices.
- **Motion Accessibility:** Layout transitions and SVG path stroke animations must gracefully disable if the browser profile detects a `prefers-reduced-motion: reduce` preference active.
