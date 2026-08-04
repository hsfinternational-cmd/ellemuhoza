"use client";

import { useState, type FormEvent } from "react";
import { event } from "@/lib/event";

type Status = "idle" | "sending" | "sent" | "error";

export function Rsvp() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMessage(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setMessage("We couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="rsvp"
      className="scroll-mt-20 bg-ivory px-6 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="eyebrow text-rose-gold">Kindly respond</p>
          <h2 className="mt-6 font-display text-3xl text-balance text-deep-wine sm:text-5xl">
            Reserve your seat
          </h2>
          <p className="mt-6 font-serif text-xl font-light text-deep-wine/70">
            {event.dateLabel} · {event.venueLabel}, {event.venueCity}
          </p>
        </div>

        {status === "sent" ? (
          <div className="mt-14 border border-rose-gold/40 bg-blush p-12 text-center">
            <p className="script text-5xl text-rose-gold">Thank you</p>
            <p className="mt-6 font-serif text-xl font-light text-deep-wine/75">
              Your response has been received. We look forward to celebrating
              this milestone with you.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="eyebrow mt-8 text-deep-wine/50 underline underline-offset-8 transition-colors hover:text-rose-gold"
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-14 grid gap-8">
            <Field name="name" label="Full name" required autoComplete="name" />
            <Field
              name="email"
              label="Email"
              type="email"
              required
              autoComplete="email"
            />
            <Field name="phone" label="Phone" type="tel" autoComplete="tel" />
            <Field
              name="organisation"
              label="Organisation (optional)"
              autoComplete="organization"
            />

            <label className="grid gap-3">
              <span className="eyebrow text-deep-wine/50">Number attending</span>
              <select
                name="guests"
                defaultValue="1"
                className="appearance-none border-b border-deep-wine/20 bg-transparent pt-1 pb-3 font-serif text-xl text-deep-wine transition-colors focus:border-rose-gold focus:outline-none"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-3">
              <span className="eyebrow text-deep-wine/50">
                A message for Elle (optional)
              </span>
              <textarea
                name="message"
                rows={3}
                className="resize-none border-b border-deep-wine/20 bg-transparent pt-1 pb-3 font-serif text-xl text-deep-wine transition-colors focus:border-rose-gold focus:outline-none"
              />
            </label>

            {status === "error" && (
              <p role="alert" className="font-serif text-lg text-red-800">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="eyebrow mt-2 justify-self-start rounded-full bg-deep-wine px-12 py-4 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Confirm attendance"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="grid gap-3">
      <span className="eyebrow text-deep-wine/50">
        {label}
        {required && <span className="text-rose-gold"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="border-b border-deep-wine/20 bg-transparent pt-1 pb-3 font-serif text-xl text-deep-wine transition-colors focus:border-rose-gold focus:outline-none"
      />
    </label>
  );
}
