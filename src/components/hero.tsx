import { event } from "@/lib/event";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] items-center justify-center overflow-hidden bg-deep-wine px-6 py-24 text-ivory"
    >
      <Backdrop />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <p className="eyebrow text-rose-gold">{event.crown}</p>

        <div className="mt-7 flex w-full max-w-xs items-center gap-4 sm:max-w-sm">
          <span className="rule-gold flex-1" />
          <span className="font-serif text-sm tracking-[0.2em] text-blush/80 uppercase">
            Road to the 73rd Miss World
          </span>
          <span className="rule-gold flex-1" />
        </div>

        <h1 className="animate-shimmer mt-8 bg-[linear-gradient(100deg,var(--color-rose-gold)_0%,var(--color-soft-rose)_20%,#fff5f2_35%,var(--color-soft-rose)_50%,var(--color-rose-gold)_70%)] bg-clip-text script text-6xl leading-[1.12] text-transparent sm:text-7xl lg:text-8xl">
          {event.honouree}
        </h1>

        <p className="mt-8 max-w-3xl font-display text-3xl leading-tight text-balance text-ivory sm:text-5xl">
          {event.title}
        </p>

        <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed font-light text-blush/85 sm:text-2xl">
          {event.intro}
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#purpose"
            className="eyebrow rounded-full bg-rose-gold px-10 py-4 text-deep-wine transition-all duration-300 hover:-translate-y-0.5 hover:bg-soft-rose focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-deep-wine focus-visible:outline-none"
          >
            Explore the work
          </a>
          <a
            href="https://gal-app-theta.vercel.app/room"
            className="eyebrow rounded-full border border-ivory/30 px-10 py-4 text-ivory/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-gold hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-deep-wine focus-visible:outline-none"
          >
            Open GAL app
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="eyebrow text-[0.6rem] text-ivory/45">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-ivory/15">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-rose-gold" />
        </span>
      </div>
    </section>
  );
}

const GRADIENT_STAGE =
  "radial-gradient(120% 80% at 50% 0%, #6b1830 0%, transparent 60%), radial-gradient(90% 60% at 15% 100%, #7a2440 0%, transparent 55%), radial-gradient(70% 50% at 85% 85%, #3d0f1e 0%, transparent 60%)";

function Backdrop() {
  const portrait = event.heroImage;

  return (
    <div aria-hidden className="absolute inset-0">
      <div
        className={`animate-drift absolute inset-0 bg-cover ${
          portrait ? "bg-[center_20%] opacity-60" : "bg-center opacity-70"
        }`}
        style={{
          backgroundImage: portrait
            ? `url(${portrait}), ${GRADIENT_STAGE}`
            : GRADIENT_STAGE,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(86,16,32,0.55)_55%,var(--color-deep-wine)_100%)]" />
      {/* Fine rose-gold hairline frame, inset from the edges like an engraved card. */}
      <div className="absolute inset-4 border border-rose-gold/15 sm:inset-8" />
    </div>
  );
}
