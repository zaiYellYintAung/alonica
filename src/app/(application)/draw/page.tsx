"use client";

import UnicornBoard from "@/components/application/UnicornBoard";
import ViewBox from "@/components/application/ViewBox";
import DrawingForm from "./_components/DrawingForm";
import DrawingBoard from "@/components/application/DrawingBoard";

export default function DrawingPage() {
  return (
    <>
      <div className="flex gap-6">
        <DrawingBoard />
      </div>
    </>
  );
}
