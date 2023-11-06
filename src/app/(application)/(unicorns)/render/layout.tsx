import ViewBox from "@/components/application/ViewBox";
import { ReactNode } from "react";

export default async function RenderLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;

}
