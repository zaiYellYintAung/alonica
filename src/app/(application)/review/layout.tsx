import ViewBox from "@/components/application/ViewBox";
import { ReactNode } from "react";
import { routeData, viewTitle } from "./constants";

export default async function ReviewLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex gap-6">
        <ViewBox />
        <div>{children}</div>
      </div>
    </>
  );
}
