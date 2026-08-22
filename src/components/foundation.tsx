import { Reveal } from "@/components/reveal";
import { foundation } from "@/lib/event";

export function Foundation() {
  return (
    <section className="bg-blush px-6 py-24 text-deep-wine sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-rose-gold">{foundation.eyebrow}</p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
              {foundation.title}
            </h2>
            <p className="mt-8 font-serif text-xl leading-relaxed font-light text-deep-wine/75 sm:text-2xl">
              {foundation.intro}
            </p>
            <a
              href="https://fairfield-foundation-website.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="eyebrow mt-10 inline-flex rounded-full bg-deep-wine px-8 py-4 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-blush focus-visible:outline-none"
            >
              Visit Fairfield
            </a>
          </Reveal>

          <div className="grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 sm:grid-cols-3">
            {foundation.stats.map((stat, i) => (
              <Reveal
                as="div"
                key={stat.label}
                delay={i * 80}
                className="bg-ivory p-8 sm:p-10"
              >
                <p className="font-display text-5xl text-deep-wine">
                  {stat.value}
                </p>
                <p className="eyebrow mt-5 text-rose-gold">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-rose-gold">How Fairfield Works</p>
            <ul className="mt-8 space-y-6">
              {foundation.method.map((item, i) => (
                <li
                  key={item.label}
                  className="border-t border-deep-wine/10 pt-6"
                >
                  <p className="font-display text-2xl text-deep-wine">
                    {String(i + 1).padStart(2, "0")} · {item.label}
                  </p>
                  <p className="mt-3 font-serif text-lg leading-relaxed font-light text-deep-wine/70">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <p className="eyebrow text-rose-gold">Initiatives In Focus</p>
            <ul className="mt-8 grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10">
              {foundation.initiatives.map((item) => (
                <li key={item.label} className="bg-ivory p-8">
                  <p className="font-display text-2xl text-deep-wine">
                    {item.label}
                  </p>
                  <p className="mt-3 font-serif text-lg leading-relaxed font-light text-deep-wine/70">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
