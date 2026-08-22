import { Advocacy } from "@/components/advocacy";
import { BookLaunch } from "@/components/book-launch";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Links } from "@/components/links";
import { Marquee } from "@/components/marquee";
import { Resources } from "@/components/resources";

export default function Page() {
  return (
    <main className="flex-1">
      <Hero />
      <Marquee />
      <Advocacy />
      <BookLaunch />
      <Resources />
      <Gallery />
      <Links />
      <Footer />
    </main>
  );
}
