"use client";

import {
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { event } from "@/lib/event";

type Stage = "locked" | "opening" | "open";

const STORAGE_KEY = "elle-invite-unsealed";

// Kept in sync with the CSS transition durations below so the site content
// starts its fade-in right on cue, just as the seal finishes blooming open.
const CONTENT_DELAY_MS = 350;
const FULL_DURATION_MS = 1300;
const REDUCED_DURATION_MS = 350;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function SealFace({ logo, monogram }: { logo: string; monogram: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-full">
      {/* A real wax seal is pressed burgundy/deep-wine — the brand guide's
          own "authority" colors — with the rose-gold crest stamped into it. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 32% 26%, #8f2c48 0%, #7a1f3d 40%, #611527 72%, #3a0a16 100%)",
        }}
      />
      <div className="absolute inset-[3px] rounded-full border border-rose-gold/35" />
      <div className="absolute inset-[9px] rounded-full border border-dotted border-rose-gold/35" />
      <div className="absolute inset-0 flex items-center justify-center">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element -- fixed small decorative crest, no responsive/optimization needs
          <img
            src={logo}
            alt=""
            className="h-[56%] w-[56%] object-contain"
            style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.45))" }}
          />
        ) : (
          <span
            className="script text-4xl text-rose-gold sm:text-5xl"
            style={{
              textShadow:
                "0 1px 1px rgba(0,0,0,0.45), 0 -1px 0 rgba(232,179,183,0.3)",
            }}
          >
            {monogram}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * The seal itself: breathes gently while waiting for a tap (via the glow
 * behind it — the seal's own surface stays still so pressing it gives crisp,
 * unobstructed feedback), dips slightly on press like a real button, then
 * blooms outward and dissolves to reveal the invitation underneath.
 */
function Seal({ stage }: { stage: Stage }) {
  const opening = stage === "opening";

  return (
    <div className="relative h-36 w-36 sm:h-48 sm:w-48">
      <div
        aria-hidden
        className={`absolute -inset-6 rounded-full bg-rose-gold/25 blur-2xl ${
          stage === "locked" ? "animate-glow-breathe" : ""
        }`}
      />
      {stage === "locked" && (
        <div
          aria-hidden
          className="animate-ring-pulse absolute -inset-3 rounded-full border border-rose-gold/40"
        />
      )}
      {opening && (
        <div
          aria-hidden
          className="animate-seal-glow absolute inset-0 rounded-full"
        />
      )}

      <div
        className="absolute inset-0 rounded-full transition-[transform,opacity] duration-150 ease-out active:scale-[0.94]"
        style={
          opening
            ? {
                transitionDelay: "100ms",
                transitionDuration: "850ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transform: "scale(18)",
                opacity: 0,
              }
            : undefined
        }
      >
        <SealFace logo={event.sealLogo} monogram={event.monogram} />
      </div>
    </div>
  );
}

/**
 * Full-screen "wax seal" gate shown once per browser session (tracked in
 * sessionStorage — a refresh mid-visit won't replay it, a new tab will).
 * The invitation underneath is always fully present in the markup; this
 * component only ever layers a transient opacity/inert state on top of it,
 * so nothing is gated behind a client-only mount the way a redirect would be.
 */
export function IntroGate({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<Stage>("locked");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useIsomorphicLayoutEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY)) {
      setStage("open");
    }

    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const locked = stage !== "open";
    document.documentElement.style.overflow = locked ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [stage]);

  function unseal() {
    if (stage !== "locked") return;
    sessionStorage.setItem(STORAGE_KEY, "1");
    setStage("opening");
    window.setTimeout(
      () => setStage("open"),
      reducedMotion ? REDUCED_DURATION_MS : FULL_DURATION_MS,
    );
  }

  // Before the mount effect runs, treat the gate as locked but keep the
  // interactive bits inert — this is what a crawler or a browser with
  // JavaScript disabled will permanently see, so the <noscript> override in
  // the root layout forces the content wrapper visible and hides this button
  // entirely in that case.
  const locked = !mounted || stage === "locked";
  const opening = mounted && stage === "opening";
  const open = mounted && stage === "open";

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={unseal}
          aria-label="Tap to unseal your invitation"
          className="intro-gate fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-deep-wine px-6 text-center transition-opacity ease-out"
          style={{
            opacity: locked || opening ? 1 : 0,
            transitionDelay: opening ? "250ms" : "0ms",
            transitionDuration: reducedMotion ? "200ms" : "650ms",
            pointerEvents: locked ? "auto" : "none",
          }}
        >
          <div
            aria-hidden
            className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 40%, #6b1830 0%, transparent 65%), radial-gradient(90% 60% at 50% 100%, #7a2440 0%, transparent 60%)",
            }}
          />

          <p className="eyebrow relative text-rose-gold">{event.host}</p>

          <Seal stage={mounted ? stage : "locked"} />

          <div className="relative flex flex-col items-center gap-3">
            <p
              className={`script text-4xl text-blush sm:text-5xl ${
                locked ? "animate-breathe" : ""
              }`}
            >
              Tap to Unseal
            </p>
            <p className="eyebrow text-ivory/50">Your Invitation Awaits</p>
          </div>
        </button>
      )}

      <div
        className="intro-content flex min-h-svh flex-col transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: locked ? 0 : 1,
          transform: locked ? "scale(0.97)" : "scale(1)",
          transitionDelay: opening
            ? `${reducedMotion ? 0 : CONTENT_DELAY_MS}ms`
            : "0ms",
          transitionDuration: reducedMotion ? "250ms" : "900ms",
        }}
        inert={locked ? true : undefined}
      >
        {children}
      </div>
    </>
  );
}
