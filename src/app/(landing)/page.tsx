import AboutSectionOne from "@/components/landing/about/AboutSectionOne";
import AboutSectionTwo from "@/components/landing/about/AboutSectionTwo";
import HeroSection from "@/components/landing/hero/HeroSection";
import PricingSection from "@/components/landing/pricing/PricingSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSectionOne />
      <AboutSectionTwo />
      <PricingSection />
    </div>
  );
}
