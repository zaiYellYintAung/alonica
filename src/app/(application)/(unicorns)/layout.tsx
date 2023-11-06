import ViewBox from "@/components/application/ViewBox";
import { ReactNode } from "react";

export default async function UnicornLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex gap-6 w-full h-full">
        <ViewBox />
        <div className="w-full h-full">{children}</div>
      </div>
    </>
  );
}
