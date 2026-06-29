# 🚀 Release Notes: Personal Portfolio Website

## [v1.2.1] — 2026-04-27

### 📄 Updated Resume and Featured Projects

A minor functional enhancement of the Resume and Featured Project typos

#### 🌟 What's New?

* **Section Updates:** Published the updated Resume and Updated the project sections.

---

## [v1.2.0] — 2026-06-10

### 🔄 Major UI/UX Overhaul & Theme Engine Integration

This release marks a complete structural and design refactor, transitioning the codebase from an unstructured single-file script to a highly maintainable, component-driven, responsive architecture.

#### 🌟 What's New?

* **Dynamic Theme Engine:** Integrated a fully functional Dark/Light mode toggle utilizing CSS Custom Properties (`:root` variables) with persistent user preference storage via browser `localStorage`.
* **Progressive Project Disclosure (Modals):** Implemented native HTML5 `<dialog>` elements for project deep-dives ("Know More" buttons), optimizing card layouts and preserving readability.
* **Interactive Media Links:** Added structured SVG icon configurations mapping custom deployment targets (Web, Android, iOS, and GitHub Repositories) directly within individual project assets.
* **Verified Credentials:** Converted certification listings into verified external hyperlinks, targeting official validation portals on issuer sites (Udemy, Simplilearn, QSpiders).

#### 🛠️ Code Quality & Architectural Refactors (QA & Performance Focus)

* **Separation of Concerns:** Exterminated all inline JavaScript blocks from `index.html` and fully isolated modular interface actions cleanly inside `script.js`.
* **Layout Optimization:** Eliminated legacy layout hacks (e.g., repeating `<br>` spacing nodes) and configured strict vertical grids and structural flexboxes driven entirely by CSS rules.
* **Performance & Semantic HTML:** Upgraded document structure using strict semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`) to maximize search engine discoverability (SEO) and Screen Reader parsing compatibility.
* **Symmetrical Grid Layouts:** Standardized card alignments to centralize content paths, using dynamic grid rows (`0fr` to `1fr`) to fix animation latency on collapsible skill panels.

---

## [v1.1.0] — 2026-04-27

### 📄 Added Resume Integration

A minor functional enhancement allowing recruiters to instantly access official validation metrics offline.

#### 🌟 What's New?

* **Document Target Integration:** Positioned a clean, actionable "View My Resume" target link in the contact matrix, pointing securely to an externally verified cloud instance.

---

## [v1.0.0] — 2025-10-21

### 🌐 Initial Launch

The official baseline deployment of the personal brand profile tracking portfolio records, active professional experience, and technical skill categorizations.

#### 🌟 Core Capabilities

* Single-page responsive template detailing professional experience tracks.
* Multi-tier accordion listing manual, automation, and database testing capabilities.
* Direct contact portal integrating primary communication hooks (Gmail, LinkedIn, GitHub, Medium).