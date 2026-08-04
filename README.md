# Elle World

Digital invitation for the **Official Send-Off & Book Launch** of Elle Trivia
Muhoza, Miss World Uganda — hosted by the Fairfield Charity Foundation.

Thursday, 6th August 2026 · 4:00 PM – 7:00 PM · Mestil Hotel & Residences, Kampala.

## Running it

```bash
npm run dev
```

Then open http://localhost:3000 (the workspace preview config uses port 3210).

```bash
npm run build && npm start
```

## Editing the invitation

Everything the guest reads — names, dates, venue, copy, dress code — lives in
one file: [`src/lib/event.ts`](src/lib/event.ts). Change it there and every
section, the page metadata, and the calendar file update together. Nothing else
needs touching for a change of time or venue.

## Adding Elle's photograph

Drop the image into `public/` and point `heroImage` at it in
`src/lib/event.ts`:

```ts
heroImage: "/elle-hero.jpg",
```

It renders behind the existing vignette and gold frame, so the headline stays
readable. Leave it empty and the hero uses the gradient stage alone. A wide crop
around 2000px works best.

## Collecting RSVPs

The form posts to `/api/rsvp`. With no configuration the server validates the
submission and logs it to the console — fine for a first look, but responses are
not stored anywhere.

To actually collect them, set `RSVP_WEBHOOK_URL` to any endpoint that accepts a
JSON `POST` (Google Apps Script bound to a Sheet, Zapier, Formspree, a Slack
incoming webhook):

```bash
cp .env.example .env.local
```

Each RSVP is forwarded as:

```json
{
  "name": "…",
  "email": "…",
  "phone": "…",
  "organisation": "…",
  "guests": 2,
  "message": "…",
  "submittedAt": "2026-08-04T09:12:00.000Z"
}
```

If the webhook is unreachable the guest sees an error and can retry, so a
misconfigured URL fails loudly rather than silently dropping responses.

## Add to calendar

`/api/calendar` generates an RFC 5545 `.ics` file from the same event data,
with times in UTC (16:00 EAT is emitted as `130000Z`) and content lines folded
at 75 octets so strict clients like Outlook accept it.

## Notes

- Scroll reveals are driven by `IntersectionObserver`, skipped entirely under
  `prefers-reduced-motion`, and overridden by a `<noscript>` style — the
  invitation is never hidden behind JavaScript that failed to run.
- Fonts (Playfair Display, Cormorant Garamond, Manrope, Great Vibes) are
  self-hosted through `next/font`, so no requests go to Google at runtime.
