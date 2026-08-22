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
    "Elle's platform connects her lived story with Fairfield Charity Foundation's community-rooted work: practical care, trusted partnerships, and long-term opportunity for children, women, and families.",
  pillars: [
    {
      label: "Elle Cares Initiative",
      text: "School clubs and grassroots conversations that teach respect, love, equality, and early awareness around safer relationships.",
    },
    {
      label: "Women’s Dignity & Opportunity",
      text: "Dignity-centred support, menstrual-health outreach, practical opportunity, skills, and stronger pathways toward economic participation.",
    },
    {
      label: "Families & Wellbeing",
      text: "Community conversations around emotional wellbeing, safer homes, respectful relationships, and family stability.",
    },
    {
      label: "Spoiler Alert: You Survived",
      text: "A book about healing over time, reclaiming confidence, and reminding women that they are not walking alone.",
    },
  ],
} as const;

export const foundation = {
  eyebrow: "Fairfield Connection",
  title: "Where Elle's platform meets community-rooted action.",
  intro:
    "Fairfield Charity Foundation was founded in 2019 to strengthen the emotional, physical, educational, nutritional, and economic foundations that help families and communities thrive.",
  stats: [
    { value: "2019", label: "Year Fairfield was founded" },
    { value: "6", label: "Connected programme areas" },
    { value: "1", label: "Locally rooted mission" },
  ],
  method: [
    {
      label: "Listen locally",
      text: "Begin with people, lived experience, and the conditions shaping a community.",
    },
    {
      label: "Connect the causes",
      text: "Treat education, health, dignity, opportunity, and family stability as connected foundations.",
    },
    {
      label: "Act with partners",
      text: "Bring together local leadership, volunteers, organisations, and practical resources.",
    },
    {
      label: "Build toward ownership",
      text: "Support confidence, capability, and long-term community participation.",
    },
  ],
  initiatives: [
    {
      label: "Back to School Drive",
      text: "Education-focused outreach, practical giving, learning support, and partnerships shaped by local needs.",
    },
    {
      label: "Cleanette Uganda",
      text: "A dignity initiative improving access to menstrual-health products for schools, shelters, and public spaces.",
    },
    {
      label: "Umoja Women’s Run",
      text: "A public-mobilisation initiative for awareness, community participation, and locally supported safety nets for women affected by gender-based violence.",
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
