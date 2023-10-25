import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import { SettingSidebarNav } from "./_components/mini/sidebar";
import { settingSidebarNavItems } from "./_components/constants";

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="space-y-0.5">
        <h2 className="text-3xl font-semibold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <SettingSidebarNav items={settingSidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </>
  );
}
