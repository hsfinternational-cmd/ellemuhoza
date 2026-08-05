export type GalleryImage = {
  src: string;
  alt: string;
};

/**
 * Photos live in /public exactly as supplied — filenames with spaces are
 * fine, callers just need `encodeURI(src)` when rendering. The three that
 * were large PNG screenshots have `-web.jpg` derivatives — resized and
 * re-encoded, originals untouched — so this page doesn't ship megabytes of
 * images to a phone on the day of the event.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/Screenshot 2026-02-12 at 17.34.56-web.jpg",
    alt: "Bridal-style portrait of Elle Muhoza in a beaded headpiece",
  },
  {
    src: "/WhatsApp Image 2026-06-03 at 10.00.56 PM (2).jpg",
    alt: "Official Miss World 2026 candidate graphic for Uganda, featuring Elle Muhoza",
  },
  {
    src: "/2026-05-26 12.51.12.jpg",
    alt: "Elle Muhoza reviewing notes at her desk, wearing her Miss Uganda crown",
  },
  {
    src: "/Screenshot 2026-02-12 at 17.28.58-web.jpg",
    alt: "Elle Muhoza wearing her crown and a blazer at an ActionAid event",
  },
  {
    src: "/Screenshot 2026-02-12 at 17.25.04-web.jpg",
    alt: "Elle Muhoza waving from a car sunroof during a community parade",
  },
  {
    src: "/Elle pic1.jpeg",
    alt: "Elle Muhoza in a bridal-style gown",
  },
  {
    src: "/Elle pic2.jpeg",
    alt: "Outdoor portrait of Elle Muhoza wearing her crown, with greenery in the background",
  },
  {
    src: "/elle pic 3.jpeg",
    alt: "Full-length portrait of Elle Muhoza in a white gown",
  },
];
