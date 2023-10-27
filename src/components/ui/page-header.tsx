import { Separator } from "@/components/ui/separator";
import { Button } from "./button";
import { FC } from "react";

interface Props {
  title: string;
  subTitle: string;
  buttonName?: string;
  onClick?: () => void;
}

export const PageHeader: FC<Props> = ({
  title,
  subTitle,
  buttonName,
  onClick,
}) => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="text-muted-foreground">{subTitle}</p>
        </div>
        {buttonName && (
          <Button size={"lg"} onClick={onClick}>
            {buttonName}
          </Button>
        )}
      </div>
      <Separator className="my-5" />
    </>
  );
};
