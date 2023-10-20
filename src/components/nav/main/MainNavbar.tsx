"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { MaxWidthWrapper } from "@/components/ui/wrapper";

const MainNavbar = () => {
  const user = "";

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-border bg-background/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-border">
          <Link href="/" className="flex z-40 font-semibold">
            <span>quill.</span>
          </Link>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default MainNavbar;
