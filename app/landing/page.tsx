import AboutTrustSection from "../../components/landing/AboutTrustSection";
import Navbar from "../../components/landing/Navbar";
import TestimonialsSection from "../../components/landing/TestimonialsSection";
import TeamSection from "../../components/landing/TeamSection";
import CTASection from "../../components/landing/CTASection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import FooterSection from "../../components/landing/FooterSection";
import HeroSection from "../../components/landing/HeroSection";
import ServicesSection from "../../components/landing/ServicesSection";
import TaxStructureSection from "../../components/landing/TaxStructureSection";

export default function LandingPage() {
  return (
    <main className="landing-shell relative font-poppins pt-[92px] md:pt-[108px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[160px] overflow-hidden md:h-[180px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/Rectangle 2 (1).png")' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,24,0.88)_0%,rgba(2,6,24,0.52)_48%,rgba(20,14,10,0.34)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,24,0.12)_0%,rgba(2,6,24,0.72)_100%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutTrustSection />
      <ServicesSection />
      <TaxStructureSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
