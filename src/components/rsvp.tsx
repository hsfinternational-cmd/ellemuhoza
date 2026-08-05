import { event } from "@/lib/event";

const prefill = `Hi Tracy! I'd like to RSVP for ${event.honouree}'s ${event.title} on ${event.dateLabel} at ${event.venueLabel}.

Name:
Number attending:`;

const whatsappHref = `https://wa.me/${event.rsvp.whatsappNumber}?text=${encodeURIComponent(prefill)}`;

export function Rsvp() {
  return (
    <section id="rsvp" className="scroll-mt-20 bg-ivory px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow text-rose-gold">Kindly respond</p>
        <h2 className="mt-6 font-display text-3xl text-balance text-deep-wine sm:text-5xl">
          RSVP on WhatsApp
        </h2>
        <p className="mt-6 font-serif text-xl font-light text-deep-wine/70">
          {event.dateLabel} · {event.venueLabel}, {event.venueCity}
        </p>

        <p className="mx-auto mt-10 max-w-md font-serif text-lg font-light text-deep-wine/75">
          Confirm your attendance directly with {event.rsvp.contactName}, who
          is coordinating the guest list — tap below to open WhatsApp with a
          message ready to send.
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          className="eyebrow mt-10 inline-flex items-center gap-3 rounded-full bg-deep-wine px-12 py-4 text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-burgundy focus-visible:ring-2 focus-visible:ring-rose-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory focus-visible:outline-none"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Message Tracy
        </a>

        <p className="mt-8 font-serif text-base font-light text-deep-wine/50">
          Prefer to call or text? {event.rsvp.contactName} ·{" "}
          <a
            href={`tel:${event.rsvp.phoneDisplay.replace(/\s/g, "")}`}
            className="underline decoration-rose-gold/50 underline-offset-4 transition-colors hover:text-rose-gold"
          >
            {event.rsvp.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.42a9.87 9.87 0 0 0 4.62 1.18h.004c5.46 0 9.91-4.45 9.91-9.91C21.95 6.39 17.5 2 12.04 2Zm0 18.14h-.003a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.22-8.24 8.22Z" />
    </svg>
  );
}
