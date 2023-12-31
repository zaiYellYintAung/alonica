import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-4xl font-semibold tracking-tight">Welcome Back!</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
    </>
  );
}
