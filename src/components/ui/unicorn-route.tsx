"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
export interface LinkType {
  name: string;
  icon: any;
  route: string;
  disabled: boolean;
}

interface Props {
  item: LinkType;
  key: any;
}

export const UnicornRoute: FC<Props> = ({ item, key }) => {
  const path = usePathname();

  return (
    <>
      <Link key={key} href={item.disabled ? "/" : item.route} className="block">
        <span
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            path === item.route ? "bg-accent" : "transparent",
            item.disabled && "cursor-not-allowed opacity-80"
          )}>
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.name}</span>
        </span>
      </Link>
    </>
  );
};
