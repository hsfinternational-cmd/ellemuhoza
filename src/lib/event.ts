/**
 * Single source of truth for Elle's public site. Every section reads from
 * here, so core copy, links, and downloads stay easy to update.
 */

export const event = {
  host: "Fairfield Charity Foundation",
  title: "Aviator. Entrepreneur. Advocate.",
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

  /** Legacy event contact, retained for printable invite files if needed. */
  rsvp: {
    contactName: "Tracy Mutoni",
    /** Shown to guests as a readable fallback number. */
    phoneDisplay: "+256 761 584386",
    /** wa.me format: digits only, country code first, no leading "+". */
    whatsappNumber: "256761584386",
  },

  intro:
    "Elle carries Uganda on the world stage with a mission shaped by courage: protecting women and girls, building financial independence, and turning survival into purpose.",
  book: "Spoiler Alert: You Survived is Elle's book on healing, growth, confidence, and the long, courageous work of remembering your value.",
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

export const resources = [
  {
    label: "Spoiler Alert: You Survived",
    meta: "Elle's book on healing, confidence, and survival",
    href: "/docs/spoiler-alert-you-survived.pdf",
  },
  {
    label: "Elle Muhoza Profile 2026",
    meta: "Full profile, platform, achievements, and partnerships",
    href: "/docs/elle-muhoza-profile-2026.pdf",
  },
  {
    label: "Impact Profile 2026",
    meta: "Advocacy background and community impact work",
    href: "/docs/elle-muhoza-impact-profile-2026.pdf",
  },
  {
    label: "Send-Off Booklet",
    meta: "Programme booklet and event-facing profile",
    href: "/docs/elle-sendoff-booklet.pdf",
  },
] as const;

export const socialLinks = [
  {
    label: "Instagram",
    meta: "@muhozatriviaelle",
    href: "https://instagram.com/muhozatriviaelle",
  },
  {
    label: "TikTok",
    meta: "@muhozatriviaelle",
    href: "https://tiktok.com/@muhozatriviaelle",
  },
  {
    label: "X",
    meta: "@muhozatriviaelle",
    href: "https://x.com/muhozatriviaelle",
  },
  {
    label: "Threads",
    meta: "@muhozatriviaelle",
    href: "https://threads.net/@muhozatriviaelle",
  },
] as const;

export const organizationLinks = [
  {
    label: "Fairfield Charity Foundation",
    meta: "School fees, health, and community welfare",
    href: "https://fairfieldcharityfoundation.online",
  },
  {
    label: "Elle Cares Initiative",
    meta: "@ellecares1",
    href: "https://instagram.com/ellecares1",
  },
  {
    label: "Fairfield on Instagram",
    meta: "@fairfield.charity_foundation",
    href: "https://instagram.com/fairfield.charity_foundation",
  },
  {
    label: "Elle Lip Care",
    meta: "@ellelipcare",
    href: "https://instagram.com/ellelipcare",
  },
] as const;
