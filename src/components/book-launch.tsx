import { Reveal } from "@/components/reveal";
import { event, guestList } from "@/lib/event";

export function BookLaunch() {
  return (
    <section className="bg-deep-wine px-6 py-24 text-ivory sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <p className="eyebrow text-rose-gold">The Book Launch</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            The story behind the crown, in her own words.
          </h2>
          <span className="mt-8 block h-px w-24 bg-rose-gold/60" />
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-blush/80">
            {event.book}
          </p>
          <p className="mt-6 font-serif text-xl leading-relaxed font-light text-blush/80">
            {event.guests}
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="relative mx-auto flex aspect-[3/4] w-full max-w-sm items-center justify-center overflow-hidden bg-[linear-gradient(150deg,#7a1f3d_0%,#561020_55%,#3a0a16_100%)]">
            <div className="absolute inset-4 border border-rose-gold/25" />
            <div className="relative px-10 text-center">
              <p className="eyebrow text-rose-gold">{event.crown}</p>
              <p className="script mt-8 text-5xl text-blush">
                {event.honouree}
              </p>
              <span className="mx-auto mt-8 block h-px w-16 bg-rose-gold/60" />
              <p className="mt-8 font-serif text-lg font-light tracking-wide text-ivory/60">
                Official book launch
              </p>
              <p className="mt-1 font-serif text-lg font-light tracking-wide text-ivory/60">
                {event.dateShort}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow text-rose-gold">In attendance</p>
        </Reveal>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {guestList.map((guest, i) => (
            <Reveal
              as="li"
              key={guest}
              delay={i * 70}
              className="eyebrow rounded-full border border-ivory/15 px-6 py-3 text-ivory/70"
            >
              {guest}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
