import { Reveal } from "@/components/reveal";
import { advocacy } from "@/lib/event";

export function Advocacy() {
  return (
    <section
      id="purpose"
      className="scroll-mt-20 bg-ivory px-6 py-24 text-deep-wine sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-rose-gold">{advocacy.eyebrow}</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            {advocacy.title}
          </h2>
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-deep-wine/75 sm:text-2xl">
            {advocacy.intro}
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 md:grid-cols-2">
          {advocacy.pillars.map((pillar, i) => (
            <Reveal
              as="li"
              key={pillar.label}
              delay={i * 90}
              className="bg-blush p-8 transition-colors duration-500 hover:bg-ivory sm:p-10"
            >
              <p className="eyebrow text-rose-gold">{pillar.label}</p>
              <p className="mt-5 font-serif text-xl leading-relaxed font-light text-deep-wine/75">
                {pillar.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
