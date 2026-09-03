import { Reveal } from "@/components/reveal";
import { digitalEcosystem } from "@/lib/event";

export function DigitalEcosystem() {
  return (
    <section
      id="ecosystem"
      className="scroll-mt-24 bg-ivory px-6 py-24 text-deep-wine sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-rose-gold">{digitalEcosystem.eyebrow}</p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
              {digitalEcosystem.title}
            </h2>
            <p className="mt-8 font-serif text-xl leading-relaxed font-light text-deep-wine/75 sm:text-2xl">
              {digitalEcosystem.intro}
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-deep-wine/10 bg-deep-wine/10 shadow-[0_24px_90px_rgba(86,16,32,0.08)] sm:grid-cols-2">
            {digitalEcosystem.items.map((item, i) => (
              <Reveal
                as="article"
                key={item.href}
                delay={i * 70}
                className="bg-blush/78 transition-colors duration-300 hover:bg-ivory sm:p-0"
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("https://") ? "_blank" : undefined}
                  rel={item.href.startsWith("https://") ? "noreferrer" : undefined}
                  className="group block h-full p-7 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none active:scale-[0.99] sm:p-8"
                >
                  <div className="flex items-start justify-between gap-6">
                    <p className="eyebrow text-rose-gold">{item.status}</p>
                    <span
                      aria-hidden
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-deep-wine/15 font-sans text-lg text-deep-wine/55 transition-[background-color,color,transform] duration-200 group-hover:bg-deep-wine group-hover:text-ivory group-active:scale-[0.97]"
                    >
                      ↗
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-2xl leading-tight text-deep-wine">
                    {item.label}
                  </h3>
                  <p className="mt-4 min-h-20 font-serif text-lg leading-relaxed font-light text-deep-wine/72">
                    {item.text}
                  </p>
                  <span className="mt-7 inline-flex font-sans text-sm font-semibold text-burgundy underline decoration-rose-gold/50 underline-offset-4 transition-colors group-hover:text-rose-gold">
                    Open
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
