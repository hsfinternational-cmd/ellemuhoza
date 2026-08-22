import { Reveal } from "@/components/reveal";
import { projectPortfolio } from "@/lib/event";

export function ProjectPortfolio() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-ivory px-6 py-24 text-deep-wine sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-rose-gold">
              {projectPortfolio.eyebrow}
            </p>
            <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
              {projectPortfolio.title}
            </h2>
            <p className="mt-8 font-serif text-xl leading-relaxed font-light text-deep-wine/75 sm:text-2xl">
              {projectPortfolio.intro}
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 sm:grid-cols-2">
            {projectPortfolio.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 70}
                className="bg-blush p-7 sm:p-8"
              >
                <p className="font-display text-4xl text-deep-wine sm:text-5xl">
                  {stat.value}
                </p>
                <p className="eyebrow mt-4 text-rose-gold">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 md:grid-cols-2 xl:grid-cols-4">
          {projectPortfolio.projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.label}
              delay={(i % 4) * 70}
              className="flex min-h-[27rem] flex-col bg-blush p-7 transition-colors duration-500 hover:bg-ivory sm:p-8"
            >
              <p className="eyebrow text-rose-gold">{project.channel}</p>
              <h3 className="mt-5 font-display text-2xl leading-tight text-deep-wine">
                {project.label}
              </h3>
              <p className="mt-4 font-sans text-sm leading-relaxed text-deep-wine/55">
                {project.when} · {project.where}
              </p>
              <p className="mt-5 flex-1 font-serif text-lg leading-relaxed font-light text-deep-wine/72">
                {project.text}
              </p>
              <a
                href={project.href}
                target={project.href.startsWith("/") ? undefined : "_blank"}
                rel={
                  project.href.startsWith("/")
                    ? undefined
                    : "noreferrer noopener"
                }
                className="eyebrow mt-8 inline-flex w-fit rounded-full border border-deep-wine/25 px-6 py-3 text-deep-wine transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-gold hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-blush focus-visible:outline-none"
              >
                {project.evidenceLabel}
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-16 border-t border-deep-wine/10 pt-8">
          <p className="eyebrow text-rose-gold">Evidence Links</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {projectPortfolio.references.map((reference) => (
              <a
                key={reference.href}
                href={reference.href}
                target={reference.href.startsWith("/") ? undefined : "_blank"}
                rel={
                  reference.href.startsWith("/")
                    ? undefined
                    : "noreferrer noopener"
                }
                className="font-sans text-sm text-deep-wine/65 underline decoration-deep-wine/25 underline-offset-4 transition-colors hover:text-rose-gold hover:decoration-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none"
              >
                {reference.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
