import ViewBox from "@/components/application/ViewBox";
import { ReactNode } from "react";

export default async function BuildersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className="flex gap-6">
        {/* <ViewBox /> */}
        <div>{children}</div>
      </div>
    </>
  );
}
