"use client";

import { FC } from "react";
import { LinkType, UnicornRoute } from "../ui/unicorn-route";

interface Props {
  links: LinkType[];
}

const ViewBox: FC<Props> = ({ links }) => {
  return (
    <div className="hidden xl:block w-[200px] h-full rounded-md space-y-2">
      <h1 className="text-sm font-semibold pl-3 mb-2">Prompting</h1>
      {links.map((link, index) => (
        <UnicornRoute item={link} key={index} />
      ))}
    </div>
  );
};

export default ViewBox;
