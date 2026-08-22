/**
 * Single source of truth for the invitation. Every section reads from here,
 * so a change of venue or time only ever needs one edit.
 */

export const event = {
  host: "Fairfield Charity Foundation",
  title: "Official Flagging Off & Book Launch",
  honouree: "Elle Trivia Muhoza",
  crown: "Miss World Uganda",
  competition: "Miss World",
  /** Displayed in the scrolling ticker band beneath the hero. */
  competitionEdition: "Miss World 2026",
  tagline: "Healing. Safety. Financial Freedom.",

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
  heroImage: "/heroelle.jpg" as string,

  /**
   * Crest for the opening seal — the rose-gold master monogram from Elle's
   * brand identity guide (Elle Cares Initiative), extracted to a transparent
   * PNG. Leave empty to fall back to a typeset monogram instead.
   */
  sealLogo: "/elle-crest.png" as string,
  /** Full lockup (monogram + wordmark), used small in the footer. */
  wordmark: "/elle-wordmark.png" as string,
  monogram: "EM",

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mestil+Hotel+%26+Residences+Kampala",

  /** RSVPs are handled by Tracy directly over WhatsApp rather than a form. */
  rsvp: {
    contactName: "Tracy Mutoni",
    /** Shown to guests as a readable fallback number. */
    phoneDisplay: "+256 761 584386",
    /** wa.me format: digits only, country code first, no leading "+". */
    whatsappNumber: "256761584386",
  },

  intro:
    "As Elle embarks on her journey to represent Uganda at the Miss World competition, we invite you to join us for an inspiring evening celebrating the advocacy behind the crown: safety, dignity, healing, and economic freedom for women and girls.",
  book: "The event will also mark the official launch of Spoiler Alert: You Survived, her book on healing, growth, confidence, and the long, courageous work of remembering your value.",
  guests:
    "Join government leaders, partners, sponsors, media, former queens, friends, and supporters as we officially flag Elle off to represent Uganda on the world stage and stand with the purpose she carries.",
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

export const advocacy = {
  eyebrow: "The Purpose",
  title: "A global stage for women and girls to be safe, seen, and free.",
  intro:
    "In her presentation, Elle speaks as an aviator, entrepreneur, author, and advocate shaped by witnessing violence at home and choosing to turn that pain into protection for others.",
  pillars: [
    {
      label: "Elle Cares Initiative",
      text: "School clubs and grassroots conversations that teach respect, love, equality, and early awareness around gender-based violence.",
    },
    {
      label: "Women’s Skilling",
      text: "Practical skills training and mental-health awareness for women rebuilding hope, income, and independence for their families.",
    },
    {
      label: "Girl Up App",
      text: "A safety and empowerment tool with SOS support, financial literacy, community conversation, and a savings feature.",
    },
    {
      label: "Spoiler Alert: You Survived",
      text: "A book about healing over time, reclaiming confidence, and reminding women that they are not walking alone.",
    },
  ],
} as const;
