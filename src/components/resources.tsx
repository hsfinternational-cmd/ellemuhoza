import { Reveal } from "@/components/reveal";
import { resources } from "@/lib/event";

export function Resources() {
  return (
    <section
      id="resources"
      className="scroll-mt-20 bg-blush px-6 py-24 text-deep-wine sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-rose-gold">Downloads</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            Elle&apos;s Kindness Club and official profile.
          </h2>
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-deep-wine/75 sm:text-2xl">
            Elle&apos;s Kindness Club is the only book soft copy currently
            available on this site.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 md:grid-cols-2">
          {resources.map((resource, i) => (
            <Reveal
              as="li"
              key={resource.href}
              delay={i * 90}
              className="bg-ivory p-8 transition-colors duration-500 hover:bg-blush sm:p-10"
            >
              <p className="eyebrow text-rose-gold">{resource.label}</p>
              <p className="mt-5 min-h-14 font-serif text-xl leading-relaxed font-light text-deep-wine/75">
                {resource.meta}
              </p>
              <a
                href={resource.href}
                target="_blank"
                rel="noreferrer noopener"
                className="eyebrow mt-8 inline-flex rounded-full bg-deep-wine px-7 py-3 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none"
              >
                Open PDF
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
