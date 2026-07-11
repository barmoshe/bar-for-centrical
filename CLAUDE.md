# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A private, single-page pitch site: a creative job application from Bar Moshe for Centrical's AI Focused Full Stack Developer role, rebuilt in Centrical's own visual language (centrical.com): deep indigo `#211551` / `#140B39`, magenta `#E11C8E` and lime `#C6D92D` pill CTAs, violet `#5B3FD6` accents, lavender `#EEECFA` bands, dotted grid textures, 1000px-radius pills, DM Sans (Circular stand-in) + Inter (Silka stand-in). The page is intentionally `robots: { index: false, follow: false }` — a shareable link, not a public launch. Keep it that way. Not affiliated with Centrical.

## Commands

```bash
npm install
npm run dev      # dev server (Turbopack)
npm run build    # production build — must pass
npm run lint     # eslint (next/core-web-vitals + typescript, incl. jsx-a11y)
```

There is no test suite. `npm run build` + `npm run lint` are the gate before any push; Vercel deploys the result.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript, Turbopack (`turbopack.root` is pinned in `next.config.ts` — don't remove it)
- Hand-written CSS design system in `app/globals.css` — **no Tailwind, no CSS modules, no GSAP** (motion is CSS + one IntersectionObserver)
- Pure inline-SVG graphics; no Centrical assets are used anywhere
- Path alias `@/*` maps to the repo root

## Architecture

The entire page is one client-component tree: `app/page.tsx` renders `components/CentricalApp.tsx`, which owns all sections and state (announcement banner, scrolled nav, the 5-step accordion, the fit tabs, the scroll-reveal observer).

**Copy and content live in `lib/`, not in components:**

- `lib/projects.ts` — the work grid, ordered for Centrical's MCP/agents + full-stack audience
- `lib/contact.ts` — email/WhatsApp/CV links. `cvHref` / the CV string here is what cv-forge rewires.

Components:

- `CentricalApp.tsx` — the page: announcement bar, nav (transparent-over-hero -> white on scroll, lime pill surfaces on scroll), hero with floating pills, the MCP hook band (giant stat + pull quote), the 5-step "How I Ship an AI Feature" accordion, fit tabs, work grid, experience cards, close band, footer
- `CentricalLogo.tsx` — original ring-figure mark (three brand arcs + violet dot) + "bar for centrical" wordmark; echoes Centrical's motif without copying their logo
- `ScrollRestorer.tsx` — shared boilerplate across bar-for siblings

## Conventions

- **CSS**: everything in `app/globals.css`, prefixed `ce-`, tokens as custom properties at the top. New styles follow the section-banner comment structure.
- **Reduced motion is non-negotiable**: the reveal observer short-circuits under `prefers-reduced-motion` (everything visible immediately) and CSS animations are killed by media queries. Any new animation must die cleanly under both.
- **No hydration mismatch**: floating hero pills use fixed positions, never `Math.random()` at render.
- **Accessibility**: decorative elements `aria-hidden`; accordion uses real buttons with `aria-expanded`; tabs use the roving-tabindex tab pattern; the jsx-a11y lint gate must stay clean.
- **Copy voice**: first-person, plain, factual, no em dashes, no years-of-experience numbers, no seniority claims. Fit is framed honestly (the site names the Angular/.NET gap on purpose). Facts about Centrical (MCP servers, Series D) must stay verifiable against their public announcements.
