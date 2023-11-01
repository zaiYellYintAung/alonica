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
        <div className="h-full px-16">
          <div className="w-full h-full px-4 pt-5">{children}</div>
        </div>
      </div>
    </>
  );
}
