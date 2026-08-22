import { Reveal } from "@/components/reveal";
import { bookLaunchPhotos, bookRelease } from "@/lib/event";

export function BookLaunch() {
  return (
    <section
      id="book-launch"
      className="scroll-mt-20 bg-deep-wine px-6 py-24 text-ivory sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow text-rose-gold">{bookRelease.eyebrow}</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-balance sm:text-6xl">
              {bookRelease.title}
            </h2>
            <span className="mt-8 block h-px w-24 bg-rose-gold/60" />
            <p className="mt-8 font-serif text-xl leading-relaxed font-light text-blush/80 sm:text-2xl">
              {bookRelease.intro}
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed font-light text-blush/70">
              {bookRelease.note}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={bookRelease.order.href}
                target="_blank"
                rel="noreferrer noopener"
                className="eyebrow inline-flex w-fit rounded-full bg-rose-gold px-8 py-4 text-deep-wine transition-all duration-300 hover:-translate-y-0.5 hover:bg-soft-rose focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-deep-wine focus-visible:outline-none"
              >
                {bookRelease.order.label}
              </a>
              <p className="font-sans text-sm text-blush/60">
                {bookRelease.order.contactName} ·{" "}
                {bookRelease.order.phoneDisplay}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-rose-gold/25 bg-ivory p-3 shadow-2xl shadow-black/25">
              {/* eslint-disable-next-line @next/next/no-img-element -- rendered from the supplied cover PDF */}
              <img
                src={bookRelease.cover}
                alt="Cover of Spoiler Alert: You Survived by Elle Trivia Muhoza"
                loading="lazy"
                className="aspect-[1.415/1] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-18">
          <div className="flex items-end justify-between gap-6 border-t border-ivory/10 pt-8">
            <div>
              <p className="eyebrow text-rose-gold">Launch Moments</p>
              <p className="mt-4 max-w-2xl font-serif text-xl leading-relaxed font-light text-blush/75">
                A look through the room as Elle introduced the book to readers,
                friends, partners, and supporters.
              </p>
            </div>
            <p className="hidden font-sans text-sm text-blush/45 sm:block">
              Scroll sideways
            </p>
          </div>
        </Reveal>

        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {bookLaunchPhotos.map((photo, i) => (
            <Reveal
              as="div"
              key={photo.src}
              delay={(i % 5) * 60}
              className="group h-[22rem] w-[17rem] shrink-0 snap-start overflow-hidden border border-ivory/10 bg-burgundy sm:h-[26rem] sm:w-[20rem]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- launch photos are local event assets */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading={i < 3 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
