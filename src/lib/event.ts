/**
 * Single source of truth for the invitation. Every section reads from here,
 * so a change of venue or time only ever needs one edit.
 */

export const event = {
  host: "Fairfield Charity Foundation",
  title: "Official Send-Off & Book Launch",
  honouree: "Elle Trivia Muhoza",
  crown: "Miss World Uganda",
  competition: "Miss World",
  tagline: "One Story. One Nation. One Purpose.",

  dateLabel: "Thursday, 6th August 2026",
  dayLabel: "Thursday",
  dateShort: "6 August 2026",
  timeLabel: "4:00 PM – 7:00 PM",
  venueLabel: "Mestil Hotel & Residences",
  venueCity: "Kampala, Uganda",
  dressCode: "Cocktail / Business",

  /** East Africa Time is UTC+3 and observes no daylight saving. */
  startsAt: new Date("2026-08-06T16:00:00+03:00"),
  endsAt: new Date("2026-08-06T19:00:00+03:00"),
  timezone: "EAT (UTC+3)",

  /**
   * Optional hero portrait. Put the file in /public and set the path here
   * (e.g. "/elle-hero.jpg"); leave empty to use the gradient stage alone.
   * Landscape or square crops around 2000px wide work best.
   */
  heroImage: "" as string,

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mestil+Hotel+%26+Residences+Kampala",

  intro:
    "As Elle embarks on her journey to represent Uganda at the Miss World competition, we invite you to join us for an inspiring evening celebrating purpose, service, and national pride.",
  book: "The event will also mark the official launch of her book, sharing the story, vision, and advocacy that have shaped her journey as Miss World Uganda.",
  guests:
    "Join government leaders, partners, sponsors, media, former queens, friends, and supporters as we officially send Elle off to represent Uganda on the world stage and celebrate the launch of her inspiring publication.",
} as const;

export const details = [
  { label: "Date", value: event.dateLabel, meta: "Mark your calendar" },
  { label: "Time", value: event.timeLabel, meta: event.timezone },
  { label: "Venue", value: event.venueLabel, meta: event.venueCity },
  { label: "Dress Code", value: event.dressCode, meta: "Elegant, understated" },
] as const;

export const guestList = [
  "Government leaders",
  "Partners & sponsors",
  "Media",
  "Former queens",
  "Friends & supporters",
] as const;
