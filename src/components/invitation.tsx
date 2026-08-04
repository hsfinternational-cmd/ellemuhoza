import { Reveal } from "@/components/reveal";
import { event } from "@/lib/event";

export function Invitation() {
  return (
    <section
      id="invitation"
      className="relative scroll-mt-20 overflow-hidden bg-cream px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="eyebrow text-gold">The Invitation</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance text-ink sm:text-5xl">
            An evening for purpose, service, and national pride.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <span className="mx-auto mt-10 block h-px w-24 bg-gold/50" />
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-10 font-serif text-xl leading-relaxed font-light text-ink/80 sm:text-2xl">
            {event.intro}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-ink/80 sm:text-2xl">
            {event.book}
          </p>
        </Reveal>

        <Reveal delay={340}>
          <p className="mt-14 font-script text-4xl text-gold sm:text-5xl">
            One Story. One Nation. One Purpose.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
