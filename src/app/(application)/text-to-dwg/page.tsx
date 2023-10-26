"use client";

import UnicornBoard from "@/components/application/UnicornBoard";
import ViewBox from "@/components/application/ViewBox";
import ToDrawingForm from "./_components/ToDrawingForm";
import CoverView from "./_components/CoverView";
import { textToDrawingRoutes } from "./constants";

export default function TextToDwgPage() {
  return (
    <>
      <div className="flex gap-6">
        <ViewBox links={textToDrawingRoutes} />
        {/* <CoverView /> */}
        <UnicornBoard />
        <div className="">
          <ToDrawingForm />
        </div>
      </div>
    </>
  );
}
