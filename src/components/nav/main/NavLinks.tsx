import Link from "next/link";
import React from "react";
import {
  Home,
  FileText,
  Pencil,
  Construction,
  Sofa,
  Calculator,
  Cog,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const mainLinks = [
  { name: "Home", route: "/home", icon: Home },
  { name: "Text to Dwg", route: "/text-to-dwg", icon: FileText },
  { name: "Draw", route: "/draw", icon: Pencil },
  { name: "Find Builders", route: "/builders", icon: Construction },
  { name: "Interior Design", route: "/interior", icon: Sofa },
  { name: "Estimate", route: "/estimate", icon: Calculator },
  { name: "Settings", route: "/settings", icon: Settings },
];

const NavLinks = () => {
  const pathname = usePathname();
  const rootPathname = pathname.split("/")[1];

  return (
    <>
      {mainLinks.map((link) => (
        <React.Fragment key={link.name}>
          <Link
            href={link.route}
            className={`flex py-1.5 px-3 rounded-xl text-sm space-x-3 items-center ${
              link.route === `/${rootPathname}`
                ? "border border-primary/30 text-primary bg-primary/10"
                : "text-gray-500"
            }`}>
            <link.icon className={"w-4 h-4"} />
            <p>{link.name}</p>
          </Link>
        </React.Fragment>
      ))}
    </>
  );
};

export default NavLinks;
