import { Separator } from "@/components/ui/separator";

const CoverView = () => {
  return (
    <div>
      <div className="space-y-0.5">
        <h2 className="text-3xl font-semibold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6" />
    </div>
  );
};

export default CoverView;
