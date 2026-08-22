import { Reveal } from "@/components/reveal";
import { press } from "@/lib/event";

export function Press() {
  return (
    <section
      id="press"
      className="scroll-mt-20 bg-ivory px-6 py-24 text-deep-wine sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-rose-gold">Press & Articles</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            Public coverage of Elle&apos;s crown, book, and advocacy.
          </h2>
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-deep-wine/75 sm:text-2xl">
            A curated set of external articles and profiles so visitors can
            verify the story beyond this website.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 md:grid-cols-2">
          {press.map((article, i) => (
            <Reveal
              as="li"
              key={article.href}
              delay={i * 70}
              className="bg-blush p-8 transition-colors duration-500 hover:bg-ivory sm:p-10"
            >
              <p className="eyebrow text-rose-gold">{article.source}</p>
              <h3 className="mt-5 font-display text-2xl leading-tight text-deep-wine sm:text-3xl">
                {article.title}
              </h3>
              <p className="mt-5 font-serif text-lg leading-relaxed font-light text-deep-wine/70">
                {article.meta}
              </p>
              <a
                href={article.href}
                target="_blank"
                rel="noreferrer noopener"
                className="eyebrow mt-8 inline-flex rounded-full border border-deep-wine/25 px-7 py-3 text-deep-wine transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-gold hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-blush focus-visible:outline-none"
              >
                Read article
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
