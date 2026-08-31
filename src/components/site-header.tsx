"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { application, event, siteNav } from "@/lib/event";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const goToSection = (
    href: string,
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    if (!href.startsWith("#")) {
      setOpen(false);
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      setOpen(false);
      return;
    }

    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", href);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center gap-3 rounded-full border border-ivory/35 bg-ivory/78 px-3 py-3 text-deep-wine shadow-[0_18px_70px_rgba(86,16,32,0.16)] backdrop-blur-2xl backdrop-saturate-150">
        <a
          href="#top"
          onClick={(event) => goToSection("#top", event)}
          className="group flex min-w-0 items-center gap-3 rounded-full pr-2 focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none"
          aria-label="Elle Trivia Muhoza home"
        >
          {event.sealLogo ? (
            // eslint-disable-next-line @next/next/no-img-element -- tiny brand crest, already optimized enough for chrome.
            <img
              src={event.sealLogo}
              alt=""
              className="h-9 w-9 shrink-0 rounded-full bg-deep-wine/90 p-1.5 transition-transform duration-200 group-active:scale-[0.97]"
            />
          ) : (
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-deep-wine font-sans text-xs font-semibold text-ivory">
              {event.monogram}
            </span>
          )}
          <span className="hidden min-w-0 flex-col leading-none sm:flex">
            <span className="font-display text-xl">{event.honouree}</span>
            <span className="mt-1 font-sans text-[0.65rem] font-semibold tracking-[0.22em] text-burgundy/65 uppercase">
              {event.crown}
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden flex-1 gap-1 overflow-x-auto rounded-full bg-deep-wine/5 p-1 [scrollbar-width:none] md:flex [&::-webkit-scrollbar]:hidden"
        >
          {siteNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => goToSection(item.href, event)}
              className="rounded-full px-3 py-2 font-sans text-xs font-semibold whitespace-nowrap text-deep-wine/68 transition-[background-color,color,transform] duration-200 hover:bg-ivory hover:text-deep-wine focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none active:scale-[0.97] sm:px-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
          className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-deep-wine px-4 py-3 font-sans text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-[background-color,transform] duration-200 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none active:scale-[0.97] md:hidden"
        >
          Menu
          <span className="relative h-3.5 w-3.5" aria-hidden>
            <span
              className={`absolute left-0 top-1 block h-px w-3.5 bg-current transition-transform duration-200 ${
                open ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 block h-px w-3.5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <a
          href={application.href}
          className="hidden shrink-0 rounded-full bg-deep-wine px-5 py-3 font-sans text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-[background-color,transform] duration-200 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none active:scale-[0.97] md:inline-flex"
        >
          Open GAL
        </a>
      </div>

      <div
        id="mobile-nav"
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-[1.5rem] border border-ivory/45 bg-ivory/92 text-deep-wine shadow-[0_24px_90px_rgba(86,16,32,0.2)] backdrop-blur-2xl transition-[opacity,transform,visibility] duration-200 md:hidden ${
          open
            ? "visible translate-y-0 opacity-100 pointer-events-auto"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav aria-label="Mobile primary" className="grid p-2">
          {siteNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => goToSection(item.href, event)}
              className="flex items-center justify-between rounded-2xl px-4 py-3 font-sans text-sm font-semibold text-deep-wine/78 transition-[background-color,color,transform] duration-200 hover:bg-blush/70 hover:text-deep-wine focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none active:scale-[0.99]"
            >
              {item.label}
              <span aria-hidden className="text-rose-gold">
                /
              </span>
            </a>
          ))}
          <a
            href={application.href}
            className="mt-2 rounded-2xl bg-deep-wine px-4 py-4 text-center font-sans text-xs font-semibold tracking-[0.18em] text-ivory uppercase transition-[background-color,transform] duration-200 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none active:scale-[0.99]"
          >
            Open GAL App
          </a>
        </nav>
      </div>
    </header>
  );
}
