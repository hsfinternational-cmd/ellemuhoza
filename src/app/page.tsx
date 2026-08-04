import { BookLaunch } from "@/components/book-launch";
import { Countdown } from "@/components/countdown";
import { Details } from "@/components/details";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Invitation } from "@/components/invitation";
import { Rsvp } from "@/components/rsvp";

export default function Page() {
  return (
    <main className="flex-1">
      <Hero />
      <Invitation />
      <Details />
      <BookLaunch />
      <Countdown />
      <Rsvp />
      <Footer />
    </main>
  );
}
