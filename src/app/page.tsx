import { Advocacy } from "@/components/advocacy";
import { BookLaunch } from "@/components/book-launch";
import { DigitalEcosystem } from "@/components/digital-ecosystem";
import { Footer } from "@/components/footer";
import { Foundation } from "@/components/foundation";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Links } from "@/components/links";
import { Marquee } from "@/components/marquee";
import { Press } from "@/components/press";
import { ProjectPortfolio } from "@/components/project-portfolio";
import { Resources } from "@/components/resources";
import { SiteHeader } from "@/components/site-header";
import { TheApplication } from "@/components/the-application";

export default function Page() {
  return (
    <main className="flex-1">
      <SiteHeader />
      <Hero />
      <Marquee />
      <DigitalEcosystem />
      <Advocacy />
      <Foundation />
      <ProjectPortfolio />
      <Press />
      <TheApplication />
      <BookLaunch />
      <Resources />
      <Gallery />
      <Links />
      <Footer />
    </main>
  );
}
