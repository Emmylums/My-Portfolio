# Emmanuel Lumati — Portfolio

Personal portfolio for **Emmanuel Lumati**, a fullstack developer building for web and mobile.

- **Live:** [https://emmanuellumati.com](https://emmylums.netlify.app) ← replace with your real URL
- **Contact:** [emmanuellumati22@gmail.com](mailto:emmanuellumati22@gmail.com)

A single-page site built with React, TypeScript, Tailwind CSS v4, and Framer Motion. Dark/light theme with persistence, custom smooth-scroll navigation, and content that lives in one file so it's trivial to update.

---

## Features

- **Dark / light theme** — class-based, respects system preference on first visit, persists in `localStorage`, no flash on load
- **Custom smooth scroll** — 650ms ease-out animation with cancel-on-manual-scroll, works on every in-page anchor
- **Framer Motion** — staggered hero entrance, scroll-reveal sections, card hover lifts, animated FAQ accordion
- **Design token system** — oklch colors, semantic names (`canvas`, `ink`, `gold`), so changing the palette is a two-line edit
- **Fully responsive** — mobile-first, image-first hero on phones, text-first on desktop
- **Projects with status** — `live`, `wip`, `archived`, `private` states with badges and per-project placeholders
- **Resume download** in the navbar, hero, about, and CTA sections
- **Accessible** — reduced-motion respected, real buttons, `aria-label`s on icon links, keyboard-navigable

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Fonts | Fraunces (display) + Inter (body) via Google Fonts |

No UI library, no component framework, no runtime CSS-in-JS. Everything is Tailwind utilities + a handful of custom tokens.

---

## Getting Started

**Requirements:** Node 18+ and npm (or pnpm / yarn).

```bash
# 1. Clone
git clone https://github.com/Emmylums/portfolio.git
cd portfolio

# 2. Install
npm install

# 3. Run dev server
npm run dev