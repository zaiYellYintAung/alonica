import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-3xl font-semibold tracking-tight">Home</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
    </>
  );
}
