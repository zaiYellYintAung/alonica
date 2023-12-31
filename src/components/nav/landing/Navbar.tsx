"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/ui/wrapper";

import MobileNavbar from "./MobileNavbar";
import UserAccount from "./UserAccount";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const user = "";

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between border-b border-border">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Alonica</span>
          </Link>

          <MobileNavbar isAuth={!!user} />

          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
              })}>
              Pricing
            </Link>
            <ThemeToggle />

            <Link href="/" className={cn("block", buttonVariants({}))}>
              Sign In
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
