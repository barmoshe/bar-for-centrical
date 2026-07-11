# bar for centrical

A private, hand-built pitch page for **Centrical** (centrical.com): a creative job
application that positions **Bar Moshe** for Centrical's **AI Focused Full Stack
Developer** role. The page is the proof: rebuilt from scratch in Centrical's own
visual language, read live off their homepage (deep indigo `#211551`, magenta
`#E11C8E` + lime `#C6D92D` pill CTAs, violet `#5B3FD6`, lavender `#EEECFA` bands,
dotted grid textures, 1000px pills, DM Sans + Inter standing in for Circular + Silka).

The centerpiece reframes Centrical's "How Performance Intelligence Works" horizontal
accordion as **How I Ship an AI Feature**: five expanding steps (scope, orchestrate,
build, evaluate, ship and learn) with their vertical-label collapsed cards and
dotted-texture open state. The hook band mirrors their giant-stat section with
**MCP** as the number, because Centrical just wired its platform into Claude and
ChatGPT over MCP, and shipping MCP servers is the daily work behind this page.
Everything is hand-coded CSS/SVG; no Centrical assets are used.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- DM Sans + Inter, self-hosted via `@fontsource` (offline-safe)
- Motion: CSS transitions + one IntersectionObserver reveal (no GSAP), reduced-motion safe
- Self-contained CSS design system scoped with the `ce-` prefix, no Tailwind
- `robots: noindex` — a shareable link, not a public launch

## Run

```bash
npm install
npm run dev
```

Not affiliated with Centrical. Personal application artifact by Bar Moshe.
