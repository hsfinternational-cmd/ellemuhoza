# Elle World

Digital invitation for the **Official Flagging Off & Book Launch** of Elle
Trivia Muhoza, Miss World Uganda — hosted by the Fairfield Charity Foundation.

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

## Elle's photograph

The hero backdrop is `public/heroelle.jpg`, set via `heroImage` in
`src/lib/event.ts`:

```ts
heroImage: "/heroelle.jpg",
```

It renders behind the existing vignette and rose-gold frame, so the headline
stays readable. Clearing the value falls back to the gradient stage alone. To
swap the photo, drop a new file in `public/` and point `heroImage` at it — a
wide crop around 2000px works best.

## The opening seal

First visit in a browser session shows a full-screen "wax seal" gate that
breathes gently while it waits — tap it and it dips like a pressed button,
then blooms outward and dissolves into the invitation underneath. It only
shows once per session (tracked in `sessionStorage`): a refresh mid-visit
won't replay it, a new tab will.

The seal is stamped with Elle's real master monogram, pulled from her brand
guide. To swap the crest for a different file, drop it in `public/` and
point `sealLogo` at it in `src/lib/event.ts`:

```ts
sealLogo: "/elle-crest.png",
```

If `sealLogo` is ever cleared, the seal falls back to a typeset monogram
automatically — no other changes needed.

## Brand identity

Colors, typography and the logo follow *Elle Muhoza — Brand Identity Guide
(Master Reference Edition)*:

- **Colors** — ivory and blush are backgrounds ("breathing space"); burgundy
  and deep wine carry text, headings and buttons ("authority"); rose gold is
  reserved for the logo and fine accents (eyebrow labels, hairline rules, the
  seal). All six live as tokens at the top of
  [`src/app/globals.css`](src/app/globals.css) (`--color-ivory`,
  `--color-deep-wine`, `--color-rose-gold`, etc.) — change the hex there and
  the whole site follows.
- **Typography** — Cormorant Garamond for headings and titles, Manrope for
  body copy and labels, exactly as the guide specifies. There's no separate
  script typeface; the italic style of Cormorant Garamond (loaded via the
  `script` utility class) stands in for it.
- **Logo** — `public/elle-crest.png` (monogram alone) and
  `public/elle-wordmark.png` (monogram + "Elle Cares" wordmark) were
  extracted from the brand guide's master files, which were rendered on a
  solid black canvas. Both were re-keyed to true transparency by hand (there's
  no ImageMagick or Python/PIL on this machine) — if a cleaner source export
  ever becomes available, replace these two files directly and every
  reference to them keeps working.

## RSVPs

RSVPs go straight to WhatsApp rather than a form — the button in
[`Rsvp`](src/components/rsvp.tsx) opens a `wa.me` chat with a pre-filled
message, addressed to whoever is set in `src/lib/event.ts`:

```ts
rsvp: {
  contactName: "Tracy Mutoni",
  phoneDisplay: "+256 761 584386",
  whatsappNumber: "256761584386", // digits only, country code first
},
```

Change the coordinator here and both the button and the phone-call fallback
link update together.

## Printable invitation (PDF)

[`print/invite.html`](print/invite.html) is a standalone 3-page print layout
— cover, particulars, RSVP — built from the same brand system as the site,
for guests who need a printable invite rather than a link. It's a plain HTML
file, not part of the Next.js app, so it renders correctly even without a dev
server running.

For dignitaries invited in person, copy it to `print/invite-<name>.html` and:
- Add a personalized salutation block on the cover (see
  [`invite-hon-diana-nankunda-mutasingwa.html`](print/invite-hon-diana-nankunda-mutasingwa.html)
  for the pattern — "Requests the Honour of the Presence of" / honorific /
  name / title)
- Delete the RSVP section on page 3 if the invite is being hand-delivered
  rather than requiring a response (that file's closing page — "We Look
  Forward to Welcoming You" — is a ready-made replacement)

Regenerate the PDF after editing (there's no ImageMagick/wkhtmltopdf here, so
this uses whatever Chrome is installed):

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="print/elle-invite.pdf" --virtual-time-budget=10000 --user-data-dir="%TEMP%\chrome-print-profile" "file:///D:/Workspace/02-Projects/elle-world/print/invite.html"
```

(swap the last two paths for whichever HTML file and output name you want).
The `--user-data-dir` pointing at a scratch folder matters — without it,
Chrome silently hands the command to any already-running Chrome window
instead of actually rendering the PDF. Generated PDFs aren't committed
(it's a build artifact of the HTML); regenerate it whenever the wording
changes.

## Add to calendar

`/api/calendar` generates an RFC 5545 `.ics` file from the same event data,
with times in UTC (16:00 EAT is emitted as `130000Z`) and content lines folded
at 75 octets so strict clients like Outlook accept it.

## Notes

- Scroll reveals and the opening seal are both skipped under
  `prefers-reduced-motion` (the seal still requires a tap, just with a plain
  crossfade instead of the crack-and-split), and both are overridden by a
  `<noscript>` style — the invitation is never left hidden behind JavaScript
  that failed to run.
- Fonts (Cormorant Garamond — normal and italic — and Manrope) are
  self-hosted through `next/font`, so no requests go to Google at runtime.
