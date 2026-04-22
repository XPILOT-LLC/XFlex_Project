import CTASection from "../../components/landing/CTASection";
import FeaturesSection from "../../components/landing/FeaturesSection";
import FooterSection from "../../components/landing/FooterSection";
import HeroSection from "../../components/landing/HeroSection";
import ServicesSection from "../../components/landing/ServicesSection";
import TestimonialsSection from "../../components/landing/TestimonialsSection";

export default function LandingPage() {
  return (
    <main className="landing-shell font-poppins">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
