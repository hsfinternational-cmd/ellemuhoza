import { Reveal } from "@/components/reveal";
import { bookLaunchPhotos, event } from "@/lib/event";

export function BookLaunch() {
  return (
    <section
      id="book-launch"
      className="scroll-mt-20 bg-deep-wine px-6 py-24 text-ivory sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-rose-gold">Book Launch</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            Spoiler Alert: You Survived
          </h2>
          <span className="mt-8 block h-px w-24 bg-rose-gold/60" />
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-blush/80">
            Spoiler Alert: You Survived is Elle&apos;s separate healing memoir.
            We do not have the soft copy on this site, but the launch remains an
            important moment in her public story.
          </p>
          <p className="mt-6 font-serif text-xl leading-relaxed font-light text-blush/80">
            The downloadable children&apos;s book available here is{" "}
            <a
              href="/docs/elles-kindness-club.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-rose-gold underline-offset-4 transition-colors hover:text-rose-gold"
            >
              {event.bookTitle}
            </a>
            .
          </p>
        </Reveal>

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {bookLaunchPhotos.map((photo, i) => (
            <Reveal
              as="div"
              key={photo.src}
              delay={(i % 8) * 60}
              className={`group overflow-hidden border border-ivory/10 bg-burgundy ${
                i === 0 || i === 7 || i === 11
                  ? "sm:col-span-2 lg:col-span-2"
                  : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- launch photos are local event assets */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i < 4 ? "eager" : "lazy"}
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-16">
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- fixed feature photo for this card */}
            <img
              src="/book-launch/book-launch-08.jpeg"
              alt="Elle signing books at the launch"
              className="max-h-[520px] w-full object-cover"
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
