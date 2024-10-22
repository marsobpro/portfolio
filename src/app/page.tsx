import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
// import { TapeSection } from "@/sections/Tape";
import { Referrals } from "@/sections/Referrals";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Referrals />
      {/* <TapeSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
