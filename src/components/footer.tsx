import { event } from "@/lib/event";

export function Footer() {
  return (
    <footer className="bg-deep-wine px-6 py-20 text-center text-ivory">
      {event.sealLogo && (
        // eslint-disable-next-line @next/next/no-img-element -- fixed small decorative crest, no responsive/optimization needs
        <img
          src={event.sealLogo}
          alt=""
          className="mx-auto h-10 w-auto opacity-90"
        />
      )}

      <p className="script mt-8 text-4xl text-rose-gold sm:text-5xl">
        {event.tagline}
      </p>

      <span className="mx-auto mt-12 block h-px w-24 bg-rose-gold/40" />

      <p className="eyebrow mt-12 text-blush/60">{event.host}</p>
      <p className="mt-4 font-serif text-lg font-light text-ivory/50">
        {event.honouree} · {event.crown}
      </p>
      <p className="mt-1 font-serif text-lg font-light text-ivory/50">
        Kampala, Uganda
      </p>

      <p className="eyebrow mt-12 text-[0.6rem] text-ivory/30">
        Safety · Healing · Financial freedom
      </p>
    </footer>
  );
}
