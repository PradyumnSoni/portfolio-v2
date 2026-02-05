import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { TalksSection } from "@/components/sections/TalksSection";
import { WorkshopSection } from "@/components/sections/WorkshopSection";
import { PanelSection } from "@/components/sections/PanelSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageClient } from "./PageClient";

export default function Home() {
  return (
    <PageClient>
      <SkipLink />
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <FeaturedWorkSection />
        <TalksSection />
        <WorkshopSection />
        <PanelSection />
        <ContactSection />
      </main>
      <Footer />
    </PageClient>
  );
}
