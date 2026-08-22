import { Reveal } from "@/components/reveal";
import { event } from "@/lib/event";

export function BookLaunch() {
  return (
    <section id="book" className="scroll-mt-20 bg-deep-wine px-6 py-24 text-ivory sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow text-rose-gold">The Book</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            Spoiler Alert: You Survived
          </h2>
          <span className="mt-8 block h-px w-24 bg-rose-gold/60" />
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-blush/80">
            {event.book}
          </p>
          <p className="mt-6 font-serif text-xl leading-relaxed font-light text-blush/80">
            The book sits alongside Elle&apos;s advocacy work: a practical reminder
            that healing takes time, confidence can be rebuilt, and no woman has
            to walk the journey alone.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/docs/spoiler-alert-you-survived.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="eyebrow rounded-full bg-rose-gold px-8 py-4 text-deep-wine transition-all duration-300 hover:-translate-y-0.5 hover:bg-soft-rose focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-deep-wine focus-visible:outline-none"
            >
              Open PDF
            </a>
            <a
              href="#resources"
              className="eyebrow rounded-full border border-ivory/25 px-8 py-4 text-ivory/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-gold hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-deep-wine focus-visible:outline-none"
            >
              View resources
            </a>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed feature photo for this card */}
            <img
              src={encodeURI("/Elle pic1.jpeg")}
              alt="Elle Muhoza in a bridal-style gown"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-wine via-deep-wine/15 to-transparent" />
            <div className="absolute inset-4 border border-rose-gold/25" />
            <div className="absolute inset-x-0 bottom-0 px-8 pb-8 text-center">
              <p className="eyebrow text-rose-gold">{event.crown}</p>
              <p className="script mt-4 text-4xl text-blush sm:text-5xl">
                {event.honouree}
              </p>
              <span className="mx-auto mt-6 block h-px w-16 bg-rose-gold/60" />
              <p className="mt-6 font-serif text-lg font-light tracking-wide text-ivory/70">
                Spoiler Alert: You Survived
              </p>
              <p className="mt-1 font-serif text-lg font-light tracking-wide text-ivory/70">
                Healing. Growth. Confidence.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
