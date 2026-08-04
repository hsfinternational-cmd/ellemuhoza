export type GalleryImage = {
  src: string;
  alt: string;
};

/**
 * Photos live in /public exactly as supplied — filenames with spaces are
 * fine, callers just need `encodeURI(src)` when rendering. The five that
 * were large PNG screenshots/renders (up to 5.8MB) have `-web.jpg`
 * derivatives — resized and re-encoded, originals untouched — so this page
 * doesn't ship megabytes of images to a phone on the day of the event.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: "/Screenshot 2026-02-12 at 17.34.56-web.jpg",
    alt: "Bridal-style portrait of Elle Muhoza in a beaded headpiece",
  },
  {
    src: "/Gemini_Generated_Image_qelwe2qelwe2qelw-web.jpg",
    alt: "Elle Muhoza crowned Miss Uganda, holding a bouquet of flowers",
  },
  {
    src: "/WhatsApp Image 2026-06-03 at 10.00.56 PM (2).jpg",
    alt: "Official Miss World 2026 candidate graphic for Uganda, featuring Elle Muhoza",
  },
  {
    src: "/IMG_6232.jpg",
    alt: "Studio portrait of Elle Muhoza in a traditional beaded gown",
  },
  {
    src: "/IMG_6233.jpg",
    alt: "Elle Muhoza in a traditional beaded gown, arms outstretched",
  },
  {
    src: "/IMG_6234.jpg",
    alt: "Elle Muhoza smiling in a traditional beaded gown",
  },
  {
    src: "/IMG_6236.jpg",
    alt: "Elle Muhoza in a traditional beaded gown, hands at her collarbone",
  },
  {
    src: "/IMG_6237.jpg",
    alt: "Studio portrait of Elle Muhoza in a traditional beaded gown",
  },
  {
    src: "/IMG_6238.jpg",
    alt: "Full-length portrait of Elle Muhoza in a traditional beaded gown",
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
    src: "/Screenshot 2026-02-17 at 09.57.25-web.jpg",
    alt: "Miss World 2026 'First Hotpicks' graphic featuring Elle Muhoza representing Uganda",
  },
];
