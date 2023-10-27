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
  Wand,
  Wand2,
  PenLine,
  BrainCircuit,
  BookCheck,
  Paintbrush,
} from "lucide-react";
import { usePathname } from "next/navigation";

export const mainLinks = [
  { name: "Home ", route: "/home", icon: Home },
  { name: "Generate", route: "/text-to-dwg", icon: Wand2 },
  { name: "Draw", route: "/draw", icon: PenLine },
  { name: "Redraw", route: "/redraw", icon: Paintbrush },
  { name: "Review", route: "/review", icon: BookCheck },
  { name: "Interior", route: "/interior", icon: Sofa },
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
            className={`flex py-1.5 px-3 rounded-xl text-sm space-x-3 items-center font-medium ${
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
