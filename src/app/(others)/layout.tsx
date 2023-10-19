import { ReactNode } from "react";

export default function OthersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
