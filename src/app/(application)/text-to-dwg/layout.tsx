import { ReactNode } from "react";

export default function TextToDrawingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
