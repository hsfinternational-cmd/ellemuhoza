import { Reveal } from "@/components/reveal";
import { application } from "@/lib/event";

export function TheApplication() {
  return (
    <section
      id="application"
      className="scroll-mt-20 bg-deep-wine px-6 py-24 text-ivory sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-rose-gold">{application.eyebrow}</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            {application.title}
          </h2>
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-blush/80 sm:text-2xl">
            {application.intro}
          </p>

          {application.href ? (
            <a
              href={application.href}
              className="eyebrow mt-10 inline-flex rounded-full bg-rose-gold px-8 py-4 text-deep-wine transition-all duration-300 hover:-translate-y-0.5 hover:bg-soft-rose focus-visible:ring-2 focus-visible:ring-ivory focus-visible:ring-offset-2 focus-visible:ring-offset-deep-wine focus-visible:outline-none"
            >
              Open app
            </a>
          ) : (
            <p className="eyebrow mt-10 inline-flex rounded-full border border-ivory/20 px-8 py-4 text-ivory/55">
              {application.linkLabel}
            </p>
          )}
        </Reveal>

        <ul className="grid gap-px overflow-hidden border border-ivory/10 bg-ivory/10 md:grid-cols-2">
          {application.features.map((feature, i) => (
            <Reveal
              as="li"
              key={feature.label}
              delay={i * 90}
              className="bg-deep-wine p-8 transition-colors duration-500 hover:bg-burgundy sm:p-10"
            >
              <p className="eyebrow text-rose-gold">{feature.label}</p>
              <p className="mt-5 font-serif text-xl leading-relaxed font-light text-blush/80">
                {feature.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
