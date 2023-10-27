"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/ui/wrapper";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import NavLinks from "./NavLinks";
import { CommandMenu } from "./CommandMenu";

const MainNavbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-lg transition-all">
      <div>
        <div className="flex h-14 items-center justify-between border-b border-border px-4">
          <section>
            <CommandMenu />
          </section>

          <section className="flex space-x-2">
            <NavLinks />
          </section>

          <section className="flex items-center space-x-4 w-40 justify-end">
            <ThemeToggle />
            <div className="w-8 h-8 bg-primary rounded-full" />
          </section>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
