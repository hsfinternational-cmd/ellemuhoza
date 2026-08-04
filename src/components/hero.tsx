import { event } from "@/lib/event";

/**
 * Full-bleed opening. The backdrop is a layered gradient stage by default;
 * setting `heroImage` in lib/event.ts swaps a photograph in behind the same
 * vignette and gold frame.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden bg-ink px-6 py-24 text-cream">
      <Backdrop />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <p className="eyebrow text-gold-light">{event.host}</p>

        <div className="mt-7 flex w-full max-w-xs items-center gap-4 sm:max-w-sm">
          <span className="rule-gold flex-1" />
          <span className="font-serif text-sm tracking-[0.2em] text-champagne/80 uppercase">
            Cordially invites you
          </span>
          <span className="rule-gold flex-1" />
        </div>

        <p className="mt-8 font-serif text-lg font-light tracking-[0.12em] text-champagne/90 uppercase">
          to the
        </p>

        <h1 className="mt-3 font-display text-4xl leading-[1.08] font-normal text-balance sm:text-6xl lg:text-7xl">
          {event.title}
        </h1>

        <p className="mt-10 font-serif text-base tracking-[0.28em] text-champagne/70 uppercase">
          of
        </p>

        <p className="animate-shimmer mt-2 bg-[linear-gradient(100deg,var(--color-gold)_0%,var(--color-champagne)_20%,#fff8e6_35%,var(--color-champagne)_50%,var(--color-gold)_70%)] bg-clip-text font-script text-6xl leading-[1.25] text-transparent sm:text-7xl lg:text-8xl">
          {event.honouree}
        </p>

        <p className="eyebrow mt-6 text-cream/80">The {event.crown}</p>

        <div className="mt-12 flex flex-col items-center gap-3 font-serif text-lg text-champagne/90 sm:flex-row sm:gap-5 sm:text-xl">
          <span>{event.dateLabel}</span>
          <span aria-hidden className="hidden text-gold sm:inline">
            ·
          </span>
          <span>{event.timeLabel}</span>
          <span aria-hidden className="hidden text-gold sm:inline">
            ·
          </span>
          <span>{event.venueLabel}</span>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#rsvp"
            className="eyebrow rounded-full bg-gold px-10 py-4 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:outline-none"
          >
            RSVP
          </a>
          <a
            href="#invitation"
            className="eyebrow rounded-full border border-cream/30 px-10 py-4 text-cream/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold-light focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:outline-none"
          >
            The Invitation
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="eyebrow text-[0.6rem] text-cream/45">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-cream/15">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-gold" />
        </span>
      </div>
    </section>
  );
}

const GRADIENT_STAGE =
  "radial-gradient(120% 80% at 50% 0%, #1e4231 0%, transparent 60%), radial-gradient(90% 60% at 15% 100%, #24503a 0%, transparent 55%), radial-gradient(70% 50% at 85% 85%, #3b3320 0%, transparent 60%)";

function Backdrop() {
  const portrait = event.heroImage;

  return (
    <div aria-hidden className="absolute inset-0">
      <div
        className={`animate-drift absolute inset-0 bg-cover bg-center ${
          portrait ? "opacity-45" : "opacity-70"
        }`}
        style={{
          backgroundImage: portrait
            ? `url(${portrait}), ${GRADIENT_STAGE}`
            : GRADIENT_STAGE,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(12,28,21,0.55)_55%,var(--color-ink)_100%)]" />
      {/* Fine gold hairline frame, inset from the edges like an engraved card. */}
      <div className="absolute inset-4 border border-gold/15 sm:inset-8" />
    </div>
  );
}
