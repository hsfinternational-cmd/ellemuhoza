import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Manrope,
  Playfair_Display,
} from "next/font/google";
import { event } from "@/lib/event";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
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
  themeColor: "#0c1c15",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${manrope.variable} ${greatVibes.variable} scroll-smooth antialiased`}
    >
      <head>
        {/* Scroll-reveal parks content at opacity 0 until JS releases it.
            With scripting off that would hide the invitation outright, so
            un-hide it unconditionally in that case. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[data-reveal]{opacity:1 !important;transform:none !important}</style>`,
          }}
        />
      </head>
      <body className="flex min-h-svh flex-col">
        {children}
      </body>
    </html>
  );
}
