"use client";

import { useEffect, useState } from "react";
import { event } from "@/lib/event";

const TARGET = event.startsAt.getTime();
const END = event.endsAt.getTime();

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type Phase = "before" | "during" | "after";

type Tick = { time: Remaining | null; phase: Phase };

function read(now: number): Tick {
  const diff = TARGET - now;

  if (diff <= 0) {
    return { time: null, phase: now > END ? "after" : "during" };
  }

  return {
    phase: "before",
    time: {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor(diff / 3_600_000) % 24,
      minutes: Math.floor(diff / 60_000) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    },
  };
}

export function Countdown() {
  // Server and client clocks differ, so hold off until mounted rather than
  // shipping a timestamp that hydration would immediately contradict.
  const [tick, setTick] = useState<Tick | null>(null);

  useEffect(() => {
    const update = () => setTick(read(Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const counting = tick?.phase === "before";

  return (
    <section className="bg-forest px-6 py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="eyebrow text-gold-light">
          {tick && !counting ? "The celebration" : "The send-off begins in"}
        </p>

        <div
          aria-hidden={!counting}
          className="mt-12 grid grid-cols-4 gap-2 transition-opacity duration-700 sm:gap-6"
          style={{ opacity: counting ? 1 : 0 }}
        >
          <Unit value={tick?.time?.days} label="Days" />
          <Unit value={tick?.time?.hours} label="Hours" />
          <Unit value={tick?.time?.minutes} label="Minutes" />
          <Unit value={tick?.time?.seconds} label="Seconds" />
        </div>

        {tick && !counting && (
          <p className="mt-12 font-display text-2xl text-balance text-champagne sm:text-4xl">
            {tick.phase === "after"
              ? "Thank you for celebrating with us."
              : "Today is the day. We look forward to welcoming you."}
          </p>
        )}

        <p className="mt-14 font-serif text-lg font-light text-cream/60">
          {event.dateLabel} · {event.timeLabel} · {event.timezone}
        </p>
      </div>
    </section>
  );
}

function Unit({ value, label }: { value?: number; label: string }) {
  return (
    <div className="border border-cream/12 px-2 py-6 sm:px-4 sm:py-8">
      <p className="font-display text-4xl tabular-nums sm:text-6xl">
        {String(value ?? 0).padStart(2, "0")}
      </p>
      <p className="eyebrow mt-3 text-[0.6rem] text-gold-light sm:text-[0.65rem]">
        {label}
      </p>
    </div>
  );
}
