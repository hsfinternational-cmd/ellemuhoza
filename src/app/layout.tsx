import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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

const description =
  "Official platform for Elle Trivia Muhoza, Miss World Uganda, sharing her advocacy for safety, healing, dignity, and financial freedom for women and girls.";

export const metadata: Metadata = {
  title: `${event.honouree} — ${event.crown}`,
  description,
  openGraph: {
    title: `${event.honouree} · ${event.crown}`,
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
        {/* Scroll-reveal parks content at opacity 0 until JS releases it. With
            scripting off, un-hide everything so the public page stays readable. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[data-reveal]{opacity:1 !important;transform:none !important}</style>`,
          }}
        />
      </head>
      <body className="flex min-h-svh flex-col">{children}</body>
    </html>
  );
}
