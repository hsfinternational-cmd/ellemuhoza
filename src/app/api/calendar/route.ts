import { event } from "@/lib/event";

export const dynamic = "force-static";

/** ICS wants basic-format UTC timestamps: 20260806T130000Z */
function toIcsUtc(date: Date) {
  return `${date.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;
}

/** RFC 5545 escapes commas, semicolons, backslashes and newlines in text. */
function escape(text: string) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function fold(line: string) {
  const bytes = Buffer.from(line, "utf8");
  if (bytes.length <= 75) return line;

  const chunks: string[] = [];
  let start = 0;
  let limit = 75;

  while (start < bytes.length) {
    let end = Math.min(start + limit, bytes.length);
    while (end > start && end < bytes.length && (bytes[end] & 0xc0) === 0x80) {
      end--;
    }
    chunks.push(bytes.subarray(start, end).toString("utf8"));
    start = end;
    limit = 74;
  }

  return chunks.join("\r\n ");
}

export function GET() {
  const description = `${event.intro}\n\n${event.book}\n\n${event.tagline}`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Fairfield Charity Foundation//Elle World//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:elle-trivia-muhoza-flagging-off-2026@fairfieldcharityfoundation.org",
    `DTSTAMP:${toIcsUtc(new Date("2026-08-04T00:00:00Z"))}`,
    `DTSTART:${toIcsUtc(event.startsAt)}`,
    `DTEND:${toIcsUtc(event.endsAt)}`,
    `SUMMARY:${escape(`${event.honouree} — ${event.crown}`)}`,
    `DESCRIPTION:${escape(description)}`,
    `LOCATION:${escape(`${event.venueLabel}, ${event.venueCity}`)}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .map(fold)
    .join("\r\n");

  return new Response(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="elle-calendar.ics"',
    },
  });
}
