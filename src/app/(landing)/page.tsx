import AboutSectionOne from "@/components/landing/about/AboutSectionOne";
import AboutSectionThree from "@/components/landing/about/AboutSectionThree";
import AboutSectionTwo from "@/components/landing/about/AboutSectionTwo";
import FeatureSection from "@/components/landing/feature/FeatureSection";
import FeatureSectionTwo from "@/components/landing/feature/FeatureSectionTwo";
import HeroSection from "@/components/landing/hero/HeroSection";
import IntroSection from "@/components/landing/intro/IntroSection";
import PricingSection from "@/components/landing/pricing/PricingSection";
import ServiceNewSection from "@/components/landing/services/ServiceNewSection";
import ServiceSection from "@/components/landing/services/ServiceSection";
import TestimonialSection from "@/components/landing/testimonial/TestimonialSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <IntroSection />
      <ServiceNewSection />
      <FeatureSectionTwo />
      <AboutSectionThree />
      <ServiceSection />
      <AboutSectionTwo />
      <AboutSectionOne />

      {/* <FeatureSection /> */}
    </div>
  );
}
