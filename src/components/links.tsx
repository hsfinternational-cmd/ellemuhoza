import { Reveal } from "@/components/reveal";
import { organizationLinks, socialLinks } from "@/lib/event";

export function Links() {
  return (
    <section
      id="links"
      className="scroll-mt-20 bg-ivory px-6 py-24 text-deep-wine sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-rose-gold">Connect</p>
          <h2 className="mt-6 font-display text-3xl leading-tight text-balance sm:text-5xl">
            Follow Elle and the organizations behind the work.
          </h2>
          <p className="mt-8 font-serif text-xl leading-relaxed font-light text-deep-wine/75">
            Official social links, partner platforms, and public-facing
            organization pages connected to Elle&apos;s work.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden border border-deep-wine/10 bg-deep-wine/10 md:grid-cols-2">
          <LinkGroup title="Elle" links={socialLinks} delayOffset={0} />
          <LinkGroup
            title="Organizations"
            links={organizationLinks}
            delayOffset={180}
          />
        </div>
      </div>
    </section>
  );
}

type LinkItem = {
  label: string;
  meta: string;
  href: string;
};

function LinkGroup({
  title,
  links,
  delayOffset,
}: {
  title: string;
  links: readonly LinkItem[];
  delayOffset: number;
}) {
  return (
    <Reveal className="bg-blush p-8 sm:p-10" delay={delayOffset}>
      <p className="eyebrow text-rose-gold">{title}</p>
      <ul className="mt-8 space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="block border-b border-deep-wine/10 pb-4 transition-colors hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none"
            >
              <span className="block font-display text-2xl">{link.label}</span>
              <span className="mt-1 block font-sans text-sm text-deep-wine/55">
                {link.meta}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
