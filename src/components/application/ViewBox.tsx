"use client";

import { FC, useEffect, useState } from "react";
import { LinkType } from "../ui/unicorn-route";
import UnicornRoute from "../ui/unicorn-route";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { routeDatas } from "@/config/routes";

interface Props {
  // title: string;
  // links: LinkType[];
}

const ViewBox: FC<Props> = () => {
  const pathname = usePathname();
  const rootPathname = pathname.split("/")[1];
  const [datas, setDatas] = useState<LinkType[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const currentRouteDatas = routeDatas.filter(
      (item) => item.routeName === rootPathname
    );
    setDatas(currentRouteDatas[0].data);
  }, []);

  return (
    <div className="hidden xl:block w-[200px] h-full rounded-md space-y-2">
      <h1 className="text-sm font-semibold pl-3 mb-2">{title}</h1>
      {datas.map((link, index) => (
        <div key={index}>
          <UnicornRoute item={link} />
        </div>
      ))}
    </div>
  );
};

export default ViewBox;
