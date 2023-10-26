import { LinkType } from "@/components/ui/unicorn-route";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { History, LayoutDashboard, Pencil, SparklesIcon } from "lucide-react";

export const textToDrawingRoutes: LinkType[] = [
  {
    name: "Dashboard",
    route: "/text-to-dwg",
    icon: LayoutDashboard,
    disabled: false,
  },
  {
    name: "Generate New",
    route: "/text-to-dwg/new",
    icon: SparklesIcon,
    disabled: false,
  },
  {
    name: "History",
    route: "/text-to-dwg/history",
    icon: History,
    disabled: false,
  },
];
