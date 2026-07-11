export type Project = {
  name: string;
  blurb: string;
  tag: string;
  href: string;
  /** which accent token tints the card */
  accent: "magenta" | "violet" | "lime" | "ghost";
  /** grid emphasis: feature cards span two columns on desktop */
  span?: 2;
};

/**
 * Shipped proofs, ordered for Centrical's AI-focused full-stack seat: the
 * MCP / agent-tooling work first (it maps straight to their MCP servers +
 * CLI roadmap), then LLM orchestration and full-stack product craft.
 */
export const PROJECTS: Project[] = [
  // Row 1 — the headline: MCP + AI tooling
  {
    name: "MDP",
    blurb:
      "A compiler that turns one Markdown source into design-locked decks, pages, and docs, built for AI agents to write into. Ships with an MCP server, so Claude and any MCP-aware client drive it directly. Zero-dependency Node engine, on npm.",
    tag: "MCP server · AI tooling",
    href: "https://barmoshe.github.io/mdp/",
    accent: "magenta",
    span: 2,
  },
  {
    name: "Creative Harness",
    blurb:
      "An agent harness for Claude Code: skills, hooks, and MCP tooling that let one builder ship like a small team. The scaffolding around an agent is where the real work of making one reliable lives.",
    tag: "AI agents · Claude Code",
    href: "https://github.com/barmoshe/claude-creative-stack",
    accent: "violet",
  },
  // Row 2 — orchestration + evaluation
  {
    name: "Catalogue Orchestrator",
    blurb:
      "A local-first AI video orchestrator: it indexes a catalogue of clips, retrieves the right moments with RAG, and plans an edit that a deterministic ffmpeg compiler renders. The LLM only emits a validated edit list, so output stays reproducible.",
    tag: "LLM orchestration · RAG",
    href: "https://barmoshe.github.io/catalogue-orchestrator/",
    accent: "violet",
  },
  {
    name: "Entailer",
    blurb:
      "A logician's-pass linter for prose and specs: an LLM-in-the-loop translator formalizes the load-bearing claims, a deterministic core checks whether arguments actually follow. Built to eliminate false positives. Six packages on npm.",
    tag: "AI + formal logic · Evals",
    href: "https://barmoshe.github.io/entailer/",
    accent: "magenta",
  },
  {
    name: "Temporal Data Service",
    blurb:
      "A cross-language data-processing service built on Temporal for durable, fault-tolerant workflows. Featured on Temporal's official Code Exchange. Go, Python, and TypeScript workers under one orchestration.",
    tag: "Backend · Durable workflows",
    href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal",
    accent: "lime",
  },
  {
    name: "bar for companies",
    blurb:
      "A live gallery of every bespoke pitch page shipped this way: dozens of sites, each rebuilt in a different company's own brand, from type and color to motion. One data-driven Next.js app with automated logo fetching and screenshot capture. This page is one of them.",
    tag: "Brand systems · Automation",
    href: "https://bar-for-companies.vercel.app",
    accent: "ghost",
    span: 2,
  },
  // Row 3 — product + craft
  {
    name: "Apartment Hunter",
    blurb:
      "A real-estate decision tool: side-by-side comparison, Israeli purchase-tax brackets, a full mortgage calculator. Product-grade UI, shipped solo.",
    tag: "Product · Web app",
    href: "https://apartment-hunter-one.vercel.app",
    accent: "lime",
  },
  {
    name: "Bloom Garden",
    blurb:
      "A webcam hand-gesture game: pinch to pluck flowers, on-device MediaPipe, no video ever leaves the browser.",
    tag: "Computer vision · Game",
    href: "https://bloom-garden-five.vercel.app",
    accent: "magenta",
  },
  {
    name: "Aurora",
    blurb:
      "A hand-written WebGL silk field. Craft on the metal, no library between the shader and the screen.",
    tag: "WebGL · Graphics",
    href: "https://aurora-eight-iota.vercel.app",
    accent: "violet",
    span: 2,
  },
];
