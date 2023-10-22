import LandingFooter from "@/components/nav/landing/LandingFooter";
import Navbar from "@/components/nav/landing/Navbar";
import { MaxWidthWrapper } from "@/components/ui/wrapper";
import { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Navbar />
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
        <LandingFooter />
      </div>
    </>
  );
}
