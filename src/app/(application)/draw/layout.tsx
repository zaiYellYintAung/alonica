import ViewBox from "@/components/application/ViewBox";
import { ReactNode } from "react";

export default async function DrawingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex gap-6 w-full">
        <ViewBox />
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
