"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { FC } from "react";
export interface LinkType {
  name: string;
  icon: any;
  route: string;
  disabled: boolean;
}

interface Props {
  item: LinkType;
}

const Test: FC<Props> = ({ item }) => {
  // const pathname = usePathname();

  return (
    <>
      <Link href={item.disabled ? "/" : item.route} className="block">
        <span
          className={cn(
            "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
            null === item.route ? "bg-accent" : "transparent text-gray-500",
            item.disabled && "cursor-not-allowed opacity-80"
          )}>
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.name}</span>
        </span>
      </Link>
    </>
  );
};

export default Test;
