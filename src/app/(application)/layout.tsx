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
      <div className="h-screen">
        <MainNavbar />
        <div className="h-full px-16 pt-14">
          <div className="w-full h-full px-4 py-4">{children}</div>
        </div>
      </div>
    </>
  );
}
