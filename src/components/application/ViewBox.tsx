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
    setTitle(currentRouteDatas[0].viewTitle);
    setDatas(currentRouteDatas[0].data);
  }, [pathname]);

  console.log("pathname ->", pathname);
  console.log("rootPathname ->", rootPathname);

  return (
    <div className="hidden xl:block w-[220px] h-full rounded-md space-y-2 flex-shrink-0">
      <h1 className="text-base font-semibold pl-4 my-3">{title}</h1>
      {datas.map((link, index) => (
        <div key={index}>
          <UnicornRoute item={link} />
        </div>
      ))}
    </div>
  );
};

export default ViewBox;
