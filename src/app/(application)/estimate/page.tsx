import UnicornBoard from "@/components/application/UnicornBoard";
import ViewBox from "@/components/application/ViewBox";
import { DataTableDemo } from "./_components/demo/DemoTable";

export default function EstimatePage() {
  return (
    <>
      <div className="flex gap-6">
        <ViewBox />
        {/* <CoverView /> */}
        <DataTableDemo />
      </div>
    </>
  );
}
