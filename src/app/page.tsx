import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { Referrals } from "@/sections/Referrals";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Referrals />

      <ProjectsSection />
      <TapeSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      {/* <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <Referrals />
      <AboutSection />
      <ContactSection />
      <Footer /> */}
    </div>
  );
}
