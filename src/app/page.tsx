import { Advocacy } from "@/components/advocacy";
import { BookLaunch } from "@/components/book-launch";
import { Countdown } from "@/components/countdown";
import { Details } from "@/components/details";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Invitation } from "@/components/invitation";
import { Marquee } from "@/components/marquee";
import { Rsvp } from "@/components/rsvp";

export default function Page() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Invitation />
      <Advocacy />
      <Details />
      <Gallery />
      <BookLaunch />
      <Countdown />
      <Rsvp />
      <Footer />
    </main>
  );
}
