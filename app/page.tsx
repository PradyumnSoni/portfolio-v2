import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { CommunityEducationSection } from "@/components/sections/CommunityEducationSection";
import { PageClient } from "./PageClient";

export default function Home() {
  return (
    <PageClient>
      <SkipLink />
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <FeaturedWorkSection />
        <CommunityEducationSection />
      </main>
      <Footer />
    </PageClient>
  );
}
