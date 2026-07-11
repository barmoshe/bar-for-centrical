import { ImageResponse } from "next/og";

export const alt =
  "Bar Moshe for Centrical: you wired your platform into Claude. I build there every day.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Shareable link-preview card (WhatsApp / Slack / email). Centrical indigo. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(55% 75% at 85% 10%, #4a2a9a 0%, transparent 60%), radial-gradient(45% 60% at 8% 92%, #6d1b6e 0%, transparent 55%), linear-gradient(150deg, #2a1a63 0%, #211551 50%, #140b39 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 30,
            fontWeight: 700,
            color: "#f7f5ff",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span
              style={{
                display: "flex",
                width: 20,
                height: 20,
                borderRadius: 10,
                border: "5px solid #C6D92D",
              }}
            />
            bar for centrical
          </span>
          <span style={{ opacity: 0.65 }}>AI Focused Full Stack Developer</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.08,
            color: "#ffffff",
            maxWidth: 1020,
          }}
        >
          You wired your platform into Claude. I build there every day.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
            color: "#e9d9ff",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "#E11C8E",
            }}
          />
          Bar Moshe · MCP servers, LLM apps, and full-stack TypeScript, shipped.
        </div>
      </div>
    ),
    { ...size },
  );
}
