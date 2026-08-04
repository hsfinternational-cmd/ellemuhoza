"use client";

import { useEffect, useState } from "react";
import { Reveal } from "@/components/reveal";
import { galleryImages } from "@/lib/gallery";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow =
      openIndex === null ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) =>
          i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length,
        );
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <section className="bg-ivory px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="eyebrow text-rose-gold">The Journey</p>
          <h2 className="mt-6 font-display text-3xl text-deep-wine sm:text-4xl">
            Captured along the way
          </h2>
        </Reveal>

        <ul className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <Reveal as="li" key={image.src} delay={(i % 8) * 60}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group block aspect-[4/5] w-full overflow-hidden border border-rose-gold/20 bg-blush transition-shadow duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- gallery source photos, full set supplied directly to /public */}
                <img
                  src={encodeURI(image.src)}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {openIndex !== null && (
        <Lightbox
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}

function Lightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const image = galleryImages[index];
  const total = galleryImages.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-deep-wine/95 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="eyebrow absolute top-6 right-6 text-ivory/70 transition-colors hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none"
      >
        Close ✕
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + total) % total);
        }}
        aria-label="Previous photo"
        className="absolute left-2 font-display text-4xl text-ivory/60 transition-colors hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none sm:left-6"
      >
        ‹
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element -- full-size view of a gallery source photo */}
      <img
        src={encodeURI(image.src)}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] object-contain"
      />

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % total);
        }}
        aria-label="Next photo"
        className="absolute right-2 font-display text-4xl text-ivory/60 transition-colors hover:text-rose-gold focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:outline-none sm:right-6"
      >
        ›
      </button>

      <p className="eyebrow absolute bottom-6 text-ivory/50">
        {index + 1} / {total}
      </p>
    </div>
  );
}
