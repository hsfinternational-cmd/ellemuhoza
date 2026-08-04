import { Reveal } from "@/components/reveal";
import { details, event } from "@/lib/event";

export function Details() {
  return (
    <section
      id="details"
      className="scroll-mt-20 bg-parchment px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="eyebrow text-gold">Every detail you need</p>
          <h2 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
            The Particulars
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
          {details.map((detail, i) => (
            <Reveal
              as="li"
              key={detail.label}
              delay={i * 90}
              className="group bg-parchment p-8 transition-colors duration-500 hover:bg-cream sm:p-12"
            >
              <p className="eyebrow text-gold">{detail.label}</p>
              <p className="mt-5 font-display text-2xl leading-snug text-ink sm:text-3xl">
                {detail.value}
              </p>
              <p className="mt-3 font-serif text-lg font-light text-ink/55">
                {detail.meta}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/api/calendar"
            className="eyebrow rounded-full bg-ink px-8 py-4 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parchment focus-visible:outline-none"
          >
            Add to calendar
          </a>
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="eyebrow rounded-full border border-ink/25 px-8 py-4 text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parchment focus-visible:outline-none"
          >
            View the venue
          </a>
        </Reveal>
      </div>
    </section>
  );
}
