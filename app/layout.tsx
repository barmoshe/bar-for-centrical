import type { Metadata } from "next";
import ScrollRestorer from "@/components/ScrollRestorer";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bar-for-centrical.vercel.app"),
  title: "Bar Moshe · for Centrical",
  description:
    "Bar Moshe, an AI builder and full-stack engineer applying for Centrical's AI Focused Full Stack Developer role. Centrical wired its platform into Claude and ChatGPT over MCP; shipping MCP servers and LLM apps is the work on this page.",
  // Private, shareable link. Keep it out of search indexes.
  robots: { index: false, follow: false },
  openGraph: {
    title: "You wired your platform into Claude. I build there every day.",
    description:
      "Bar Moshe, applying for Centrical's AI Focused Full Stack Developer role with shipped MCP servers, LLM apps, and full-stack TypeScript as the proof.",
    type: "website",
    siteName: "Bar Moshe × Centrical",
  },
  twitter: {
    card: "summary_large_image",
    title: "You wired your platform into Claude. I build there every day.",
    description:
      "Bar Moshe, applying for Centrical's AI Focused Full Stack Developer role with shipped MCP servers, LLM apps, and full-stack TypeScript as the proof.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <ScrollRestorer />
        {children}
      </body>
    </html>
  );
}
