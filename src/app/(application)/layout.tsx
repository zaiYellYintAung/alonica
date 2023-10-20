import MainNavbar from "@/components/nav/main/MainNavbar";
import { MaxWidthWrapper } from "@/components/ui/wrapper";
import { ReactNode } from "react";

export default function ApplicationLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen">
        <MainNavbar />
        <MaxWidthWrapper className="h-full pt-4">{children}</MaxWidthWrapper>
      </div>
    </>
  );
}
