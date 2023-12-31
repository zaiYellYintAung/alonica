import AboutSectionOne from "@/components/landing/about/AboutSectionOne";
import AboutSectionThree from "@/components/landing/about/AboutSectionThree";
import AboutSectionTwo from "@/components/landing/about/AboutSectionTwo";
import BannerSection from "@/components/landing/banner/BannerSection";
import FeatureSection from "@/components/landing/feature/FeatureSection";
import FeatureSectionTwo from "@/components/landing/feature/FeatureSectionTwo";
import FinalSection from "@/components/landing/final/FinalSection";
import GallerySection from "@/components/landing/gallery/GallerySection";
import HeroSection from "@/components/landing/hero/HeroSection";
import IntroSection from "@/components/landing/intro/IntroSection";
import ServiceNewSection from "@/components/landing/services/ServiceNewSection";
import ServiceSection from "@/components/landing/services/ServiceSection";
import ShowSection from "@/components/landing/show/ShowSection";
import TestimonialNewSection from "@/components/landing/testimonial/TestimonialNewSection";
import TestimonialSection from "@/components/landing/testimonial/TestimonialSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ShowSection />
      {/* <IntroSection /> */}
      <FeatureSectionTwo />
      <AboutSectionThree />
      <GallerySection />

      {/* <TestimonialSection /> */}
      <TestimonialNewSection />
      <AboutSectionTwo />
      <AboutSectionOne />
      <FinalSection />

      {/* <FeatureSection /> */}
    </div>
  );
}
