import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { IntroGate } from "@/components/intro-gate";
import { event } from "@/lib/event";
import "./globals.css";

// The brand guide's typography system is exactly these two families —
// Cormorant Garamond for headings/titles/pull-quotes, Manrope for body copy
// and captions. Italic is loaded explicitly so the "script" utility renders
// a real italic face rather than a synthetic browser oblique.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const description = `${event.host} cordially invites you to the ${event.title} of ${event.honouree}, ${event.crown} — ${event.dateLabel}, ${event.timeLabel}, ${event.venueLabel}, ${event.venueCity}.`;

export const metadata: Metadata = {
  title: `${event.honouree} — ${event.title} | ${event.crown}`,
  description,
  openGraph: {
    title: `${event.title} · ${event.honouree}`,
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#561020",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* Scroll-reveal and the unseal gate both park content at opacity 0
            until JS releases it. With scripting off neither ever will, so
            un-hide everything and drop the (now non-functional) gate button
            unconditionally in that case. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[data-reveal]{opacity:1 !important;transform:none !important}.intro-gate{display:none !important}.intro-content{opacity:1 !important;transform:none !important}</style>`,
          }}
        />
      </head>
      <body className="flex min-h-svh flex-col">
        <IntroGate>{children}</IntroGate>
      </body>
    </html>
  );
}
