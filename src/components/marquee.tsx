import { event } from "@/lib/event";

const REPEAT = 10;

/**
 * Continuous ticker band. Rendered twice back to back and shifted by exactly
 * one copy's width (-50%, via the `animate-marquee` keyframe) so the loop
 * has no visible seam — pausing on hover so the text can be read on demand.
 */
export function Marquee() {
  return (
    <div
      aria-hidden
      className="marquee overflow-hidden border-y border-rose-gold/20 bg-burgundy py-4"
    >
      <div className="animate-marquee flex w-max">
        <Track />
        <Track />
      </div>
    </div>
  );
}

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {Array.from({ length: REPEAT }, (_, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="font-sans text-sm font-medium tracking-[0.32em] text-ivory uppercase sm:text-base">
            {event.competitionEdition}
          </span>
          <span className="mx-6 text-rose-gold sm:mx-8">✦</span>
        </span>
      ))}
    </div>
  );
}
