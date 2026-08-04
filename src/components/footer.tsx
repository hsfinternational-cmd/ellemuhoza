import { event } from "@/lib/event";

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-20 text-center text-cream">
      <p className="font-script text-4xl text-gold sm:text-5xl">
        {event.tagline}
      </p>

      <span className="mx-auto mt-12 block h-px w-24 bg-gold/40" />

      <p className="eyebrow mt-12 text-cream/60">{event.host}</p>
      <p className="mt-4 font-serif text-lg font-light text-cream/50">
        {event.title} · {event.dateShort}
      </p>
      <p className="mt-1 font-serif text-lg font-light text-cream/50">
        {event.venueLabel}, {event.venueCity}
      </p>

      <p className="eyebrow mt-12 text-[0.6rem] text-cream/30">
        By invitation · Kindly RSVP
      </p>
    </footer>
  );
}
