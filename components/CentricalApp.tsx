"use client";

import { useEffect, useRef, useState } from "react";
import CentricalLogo from "./CentricalLogo";
import { PROJECTS } from "@/lib/projects";
import { whatsappHref, mailtoHref, cvHref } from "@/lib/contact";

/* ------------------------------------------------------------------ data */

const HERO_CHIPS = [
  "MCP servers on npm",
  "LLM apps shipped end to end",
  "TypeScript across the stack",
];

const HERO_STACK = ["Claude", "OpenAI", "AWS", "TypeScript", "React", "Node.js"];

/* Floating pills, the motif from Centrical's homepage video. Fixed positions
   (no randomness) so server and client render the same markup. */
const FLOAT_PILLS = [
  { text: "MCP", x: 8, y: 22, delay: 0, tone: "violet" },
  { text: "agents", x: 84, y: 18, delay: 1.2, tone: "violet" },
  { text: "prompt engineering", x: 12, y: 62, delay: 2.1, tone: "magenta" },
  { text: "evals", x: 88, y: 58, delay: 0.7, tone: "magenta" },
  { text: "REST APIs", x: 6, y: 42, delay: 1.6, tone: "violet" },
  { text: "CI/CD", x: 90, y: 38, delay: 2.6, tone: "violet" },
] as const;

const LOOP_STEPS = [
  {
    n: "01",
    label: "Scope",
    title: "Sense the real problem",
    tag: "SENSE",
    body: "Read what's actually being asked before writing code. For this application: your posting, your product, your June MCP launch, and your design language, all studied before the first commit.",
  },
  {
    n: "02",
    label: "Orchestration",
    title: "Wire the AI surface",
    tag: "AGENTS & MCP",
    body: "MCP servers, agent tools, prompt design. The part of your roadmap that says MCP servers and a CLI is the part I already ship as open source, on npm, driven from Claude.",
  },
  {
    n: "03",
    label: "Full stack",
    title: "Build the product around it",
    tag: "TYPESCRIPT",
    body: "TypeScript end to end: React frontends, Node services, REST APIs, the data behind them. Your posting names React and Node.js as the accepted path, and that's my daily stack.",
  },
  {
    n: "04",
    label: "Evaluation",
    title: "Score it before shipping it",
    tag: "EVALS",
    body: "An AI feature without an eval is a demo. I build the harness that measures outputs, kills false positives, and proves a change actually made the model's work better.",
  },
  {
    n: "05",
    label: "Outcomes",
    title: "Ship, watch, feed back",
    tag: "LEARN",
    body: "Deploy, watch real usage, fold what breaks back into scope. This page went from your posting to a live site in one working session; you are reading the loop in action.",
  },
];

const FIT_TABS = [
  {
    key: "ai",
    label: "AI & LLM apps",
    title: "Hands-on LLM work, not keyword AI",
    body: "Your posting filters for genuine interest in AI with real LLM experience. That's the daily work: LLM apps with prompt design and orchestration built in, on Anthropic and OpenAI models, the exact stack your posting names.",
    receipts: [
      { text: "MDP: a Markdown compiler built for AI agents to write into", href: "https://barmoshe.github.io/mdp/" },
      { text: "Catalogue Orchestrator: RAG retrieval planning a deterministic render", href: "https://barmoshe.github.io/catalogue-orchestrator/" },
      { text: "Entailer: LLM-in-the-loop formalization with a deterministic core", href: "https://barmoshe.github.io/entailer/" },
    ],
  },
  {
    key: "mcp",
    label: "MCP & agents",
    title: "The surface you just launched is my home turf",
    body: "Centrical now connects to Claude and ChatGPT through three MCP servers, with a CLI on the roadmap. I publish MCP servers on npm and build agent harnesses and Claude Code plugins; multi-agent setups like your role-play personas are the orchestration shape I work in.",
    receipts: [
      { text: "MDP ships with its own MCP server, on npm", href: "https://barmoshe.github.io/mdp/" },
      { text: "Creative Harness: skills, hooks, and MCP tooling around one agent", href: "https://github.com/barmoshe/claude-creative-stack" },
      { text: "This page: brief to live site through an agent-driven workflow", href: "#work" },
    ],
  },
  {
    key: "fullstack",
    label: "Full stack TypeScript",
    title: "React + Node, the path your posting names",
    body: "Angular and .NET are your home stack; your posting explicitly accepts React and Node.js in TypeScript, and that is where I build every day: REST APIs, SQL, product-grade UI. C# I met in my degree, and frameworks are the learnable part; the product instinct is the transferable one.",
    receipts: [
      { text: "Apartment Hunter: product-grade tool, shipped solo", href: "https://apartment-hunter-one.vercel.app" },
      { text: "Temporal Data Service: Go, Python, and TS workers, featured by Temporal", href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal" },
      { text: "This site: Next.js + React + TypeScript, built from scratch", href: "#work" },
    ],
  },
  {
    key: "devops",
    label: "Cloud & DevOps",
    title: "Shipping is part of building",
    body: "AWS, Docker, Kubernetes, and Terraform from a hands-on Wix DevOps workshop, plus GitHub Actions CI/CD as routine practice. Every project on this page deploys through an automated pipeline, screenshots and all.",
    receipts: [
      { text: "bar for companies: a data-driven gallery with automated capture pipelines", href: "https://bar-for-companies.vercel.app" },
      { text: "Production video-rendering pipeline shipped for a client", href: "https://bar-for-companies.vercel.app" },
    ],
  },
];

const EXPERIENCE = [
  {
    org: "Joomsy",
    role: "Software developer",
    period: "2025 - present",
    body: "Early-stage startup, team of five. Primary developer with full-stack and DevOps ownership; significant responsibility across engineering and product.",
  },
  {
    org: "Independent",
    role: "AI builder",
    period: "2026 - present",
    body: "Independent practice shipping MVPs from brief to deploy in hours-to-days: web apps, landing pages, and a production video-rendering pipeline.",
  },
  {
    org: "Wochit",
    role: "Customer support engineer",
    period: "2021 - present",
    body: "Technical support at scale for a cloud video editor: troubleshooting real users, feeding what breaks back into the product with the dev teams.",
  },
];

const EDUCATION = [
  {
    org: "Afeka College of Engineering",
    role: "B.Sc. Computer Science",
    period: "2020 - 2023",
    body: "Breadth from low-level assembly up to .NET, with operating systems, data structures, and algorithms in between.",
  },
  {
    org: "Wix, Tel Aviv",
    role: "DevOps workshop",
    period: "Hands-on",
    body: "Amazon EKS, Kubernetes, Terraform, and microservices: cloud infrastructure and scalable deploys, practiced not just read about.",
  },
  {
    org: "Coding Academy",
    role: "Full-stack bootcamp",
    period: "Intensive",
    body: "Node.js, React, and MongoDB in a fast 16-session format for developers with prior coding experience.",
  },
];

/* ------------------------------------------------------------- component */

export default function CentricalApp() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [step, setStep] = useState(0);
  const [tab, setTab] = useState(0);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal, Centrical-style contentReveal: fade + rise once per element.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.querySelectorAll(".ce-reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    root.querySelectorAll(".ce-reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const activeTab = FIT_TABS[tab];

  return (
    <div className="ce-root" ref={rootRef}>
      {/* ---------------------------------------------------- announcement */}
      {bannerOpen && (
        <div className="ce-banner">
          <p>
            Applying to Centrical: AI Focused Full Stack Developer{" "}
            <a href="#hook">Read the fit &#8594;</a>
          </p>
          <button
            type="button"
            className="ce-banner-x"
            aria-label="Dismiss announcement"
            onClick={() => setBannerOpen(false)}
          >
            &#10005;
          </button>
        </div>
      )}

      {/* ------------------------------------------------------------ nav */}
      <header
        className={`ce-nav${scrolled ? " is-scrolled" : ""}${bannerOpen ? "" : " no-banner"}`}
      >
        <a className="ce-nav-brand" href="#top" aria-label="bar for centrical, back to top">
          <CentricalLogo inverted={!scrolled} />
        </a>
        <nav className="ce-nav-links" aria-label="Sections">
          <a href="#hook">The hook</a>
          <span className="ce-nav-dot" aria-hidden="true" />
          <a href="#loop">The loop</a>
          <span className="ce-nav-dot" aria-hidden="true" />
          <a href="#fit">Where I fit</a>
          <span className="ce-nav-dot" aria-hidden="true" />
          <a href="#work">The work</a>
          <span className="ce-nav-dot" aria-hidden="true" />
          <a href="#experience">Experience</a>
        </nav>
        <div className="ce-nav-ctas">
          <a className="ce-pill ce-pill--magenta" href={mailtoHref}>
            Email Bar
          </a>
          <a className="ce-pill ce-pill--lime" href={cvHref} download>
            Download CV
          </a>
        </div>
      </header>

      <main id="top">
        {/* ----------------------------------------------------------- hero */}
        <section className="ce-hero" aria-labelledby="hero-title">
          <div className="ce-hero-glow ce-hero-glow--a" aria-hidden="true" />
          <div className="ce-hero-glow ce-hero-glow--b" aria-hidden="true" />
          <div className="ce-hero-pills" aria-hidden="true">
            {FLOAT_PILLS.map((p) => (
              <span
                key={p.text}
                className={`ce-float ce-float--${p.tone}`}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  animationDelay: `${p.delay}s`,
                }}
              >
                {p.text}
              </span>
            ))}
          </div>

          <div className="ce-hero-inner">
            <p className="ce-kicker ce-kicker--light">The application &#183; R&amp;D</p>
            <h1 id="hero-title" className="ce-hero-title">
              Turn AI Hype
              <br />
              into Shipped Product
            </h1>
            <p className="ce-hero-sub">
              I&apos;m Bar Moshe, a full-stack engineer who ships LLM apps, MCP servers,
              and the TypeScript systems around them. This page is my application for
              your AI Focused Full Stack Developer role, built from scratch in your
              design language.
            </p>
            <ul className="ce-chips" aria-label="Proof points">
              {HERO_CHIPS.map((c) => (
                <li key={c} className="ce-chip">
                  <span className="ce-chip-dot" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="ce-hero-ctas">
              <a className="ce-pill ce-pill--magenta ce-pill--lg" href="#work">
                See the work
              </a>
              <a className="ce-pill ce-pill--ghost ce-pill--lg" href={cvHref} download>
                Download CV
              </a>
            </div>
            <div className="ce-hero-stack ce-reveal">
              <span className="ce-hero-stack-label">Built with</span>
              <ul aria-label="Daily stack">
                {HERO_STACK.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- hook */}
        <section className="ce-hook" id="hook" aria-labelledby="hook-title">
          <div className="ce-hook-grid">
            <div className="ce-hook-stat ce-reveal">
              <p className="ce-hook-big" aria-hidden="true">
                MCP
              </p>
              <h2 id="hook-title" className="ce-hook-statline">
                servers are how Centrical now meets Claude and ChatGPT, and shipping
                them is what I do.
              </h2>
              <p className="ce-hook-cite">
                Centrical announced three MCP servers and AI Role-Play Simulations,
                with a CLI on the roadmap. June 2026.
              </p>
            </div>
            <div className="ce-hook-copy ce-reveal">
              <p>
                Your posting asks for genuine interest in AI, with hands-on LLM work.
                That&apos;s a fair filter; keyword resumes are everywhere. So instead of
                claiming, this page shows: a working artifact in your design system,
                linking to shipped AI work you can open and run.
              </p>
              <blockquote className="ce-quote">
                You wired your platform into Claude and ChatGPT. That is the exact
                surface I build on every day.
              </blockquote>
              <p>
                AI Role-Play Simulations with customer, evaluator, and coach personas.
                Agent-to-agent communication. A CLI on the roadmap. Your June
                announcements read like my project list: MCP servers, agent harnesses,
                LLM orchestration with evals around it, and the full-stack TypeScript
                that puts it in front of users.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------- loop */}
        <section className="ce-loop" id="loop" aria-labelledby="loop-title">
          <div className="ce-loop-head ce-reveal">
            <div>
              <p className="ce-kicker ce-kicker--light">The working loop</p>
              <h2 id="loop-title" className="ce-h2 ce-h2--light">
                How I Ship an AI Feature
              </h2>
            </div>
            <div className="ce-loop-head-side">
              <p>From posting to product in five steps</p>
              <a className="ce-pill ce-pill--magenta" href="#work">
                See the proof &#8594;
              </a>
            </div>
          </div>

          <div className="ce-acc ce-reveal" role="list">
            {LOOP_STEPS.map((s, i) => {
              const isOpen = i === step;
              return (
                <div
                  key={s.n}
                  role="listitem"
                  className={`ce-acc-card${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="ce-acc-btn"
                    aria-expanded={isOpen}
                    onClick={() => setStep(i)}
                  >
                    <span className="ce-acc-n">{s.n}</span>
                    <span className="ce-acc-label">{s.label}</span>
                    <span className="ce-acc-body-wrap" aria-hidden={!isOpen}>
                      <span className="ce-acc-tag">{s.tag}</span>
                      <span className="ce-acc-title">{s.title}</span>
                      <span className="ce-acc-body">{s.body}</span>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
          <p className="ce-loop-note ce-reveal">
            <span className="ce-loop-note-icon" aria-hidden="true">
              &#8617;
            </span>
            Continuous loop: outcomes feed back into scope.
          </p>
        </section>

        {/* ------------------------------------------------------------ fit */}
        <section className="ce-fit" id="fit" aria-labelledby="fit-title">
          <p className="ce-kicker ce-reveal">Where I fit</p>
          <h2 id="fit-title" className="ce-h2 ce-reveal">
            What Your Posting Asks For, in Evidence
          </h2>

          <div className="ce-tabs ce-reveal" role="tablist" aria-label="Fit areas">
            {FIT_TABS.map((t, i) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                id={`tab-${t.key}`}
                aria-selected={i === tab}
                aria-controls={`panel-${t.key}`}
                tabIndex={i === tab ? 0 : -1}
                className={`ce-tab${i === tab ? " is-active" : ""}`}
                onClick={() => setTab(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") setTab((tab + 1) % FIT_TABS.length);
                  if (e.key === "ArrowLeft")
                    setTab((tab - 1 + FIT_TABS.length) % FIT_TABS.length);
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            className="ce-fit-panel ce-reveal"
            role="tabpanel"
            id={`panel-${activeTab.key}`}
            aria-labelledby={`tab-${activeTab.key}`}
          >
            <div className="ce-fit-copy">
              <h3>{activeTab.title}</h3>
              <p>{activeTab.body}</p>
            </div>
            <ul className="ce-fit-receipts">
              {activeTab.receipts.map((r) => (
                <li key={r.text}>
                  <a href={r.href} target={r.href.startsWith("#") ? undefined : "_blank"} rel="noreferrer">
                    <span className="ce-chip-dot" aria-hidden="true" />
                    {r.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ----------------------------------------------------------- work */}
        <section className="ce-work" id="work" aria-labelledby="work-title">
          <p className="ce-kicker ce-reveal">Selected work</p>
          <h2 id="work-title" className="ce-h2 ce-reveal">
            Shipped, Public, Openable
          </h2>
          <div className="ce-work-grid">
            {PROJECTS.map((p) => (
              <a
                key={p.name}
                className={`ce-card ce-card--${p.accent} ce-reveal${p.span === 2 ? " ce-card--wide" : ""}`}
                href={p.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="ce-card-tag">{p.tag}</span>
                <span className="ce-card-name">{p.name}</span>
                <span className="ce-card-blurb">{p.blurb}</span>
                <span className="ce-card-cta" aria-hidden="true">
                  Visit &#8594;
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------- experience */}
        <section className="ce-exp" id="experience" aria-labelledby="exp-title">
          <p className="ce-kicker ce-reveal">Experience &amp; education</p>
          <h2 id="exp-title" className="ce-h2 ce-reveal">
            Where I&apos;ve Been Building
          </h2>
          <div className="ce-exp-grid">
            {EXPERIENCE.map((e) => (
              <article key={e.org} className="ce-exp-card ce-reveal">
                <header>
                  <h3>{e.org}</h3>
                  <p className="ce-exp-role">
                    {e.role} &#183; {e.period}
                  </p>
                </header>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
          <div className="ce-exp-grid ce-exp-grid--edu">
            {EDUCATION.map((e) => (
              <article key={e.org} className="ce-exp-card ce-exp-card--edu ce-reveal">
                <header>
                  <h3>{e.org}</h3>
                  <p className="ce-exp-role">
                    {e.role} &#183; {e.period}
                  </p>
                </header>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------- close */}
        <section className="ce-close" id="contact" aria-labelledby="close-title">
          <div className="ce-close-band ce-reveal">
            <div className="ce-close-glow" aria-hidden="true" />
            <h2 id="close-title" className="ce-h2 ce-h2--light">
              Let&apos;s Build the AI Layer
            </h2>
            <p>
              The Series D is aimed at AI, the MCP surface is live, and the CLI is on
              the roadmap. I&apos;d love to build that with you, from Tel Aviv.
            </p>
            <div className="ce-close-ctas">
              <a className="ce-pill ce-pill--magenta ce-pill--lg" href={mailtoHref}>
                Email Bar
              </a>
              <a
                className="ce-pill ce-pill--lime ce-pill--lg"
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="ce-pill ce-pill--ghost ce-pill--lg" href={cvHref} download>
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ---------------------------------------------------------- footer */}
      <footer className="ce-footer">
        <div className="ce-footer-glow" aria-hidden="true" />
        <div className="ce-footer-inner">
          <CentricalLogo inverted />
          <p className="ce-footer-tag">
            Turn frontline AI ambition into shipped product.
          </p>
          <ul className="ce-footer-links">
            <li>
              <a href={mailtoHref}>Email</a>
            </li>
            <li>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://github.com/barmoshe" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={cvHref} download>
                CV
              </a>
            </li>
          </ul>
          <p className="ce-footer-note">
            A personal application site by Bar Moshe, built from scratch in
            Centrical&apos;s design language. Not affiliated with Centrical.
          </p>
          <p className="ce-footer-copy">&#169; 2026 Bar Moshe</p>
        </div>
      </footer>
    </div>
  );
}
