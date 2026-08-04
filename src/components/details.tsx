import { Reveal } from "@/components/reveal";
import { details, event } from "@/lib/event";

export function Details() {
  return (
    <section
      id="details"
      className="scroll-mt-20 bg-blush px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="eyebrow text-rose-gold">Every detail you need</p>
          <h2 className="mt-6 font-display text-3xl text-deep-wine sm:text-4xl">
            The Particulars
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 sm:grid-cols-2">
          {details.map((detail, i) => (
            <Reveal
              as="li"
              key={detail.label}
              delay={i * 90}
              className="group bg-blush p-8 transition-colors duration-500 hover:bg-ivory sm:p-12"
            >
              <p className="eyebrow text-rose-gold">{detail.label}</p>
              <p className="mt-5 font-display text-2xl leading-snug text-deep-wine sm:text-3xl">
                {detail.value}
              </p>
              <p className="mt-3 font-serif text-lg font-light text-deep-wine/55">
                {detail.meta}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="/api/calendar"
            className="eyebrow rounded-full bg-deep-wine px-8 py-4 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-blush focus-visible:outline-none"
          >
            Add to calendar
          </a>
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="eyebrow rounded-full border border-deep-wine/25 px-8 py-4 text-deep-wine transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-gold hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-blush focus-visible:outline-none"
          >
            View the venue
          </a>
        </Reveal>
      </div>
    </section>
  );
}
