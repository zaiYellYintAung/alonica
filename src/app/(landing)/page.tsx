import AboutSectionOne from "@/components/landing/about/AboutSectionOne";
import AboutSectionTwo from "@/components/landing/about/AboutSectionTwo";
import HeroSection from "@/components/landing/hero/HeroSection";
import IntroSection from "@/components/landing/intro/IntroSection";
import PricingSection from "@/components/landing/pricing/PricingSection";
import ServiceSection from "@/components/landing/services/ServiceSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <IntroSection />
      <AboutSectionOne />
      <AboutSectionTwo />
      <ServiceSection />
      <PricingSection />
    </div>
  );
}
