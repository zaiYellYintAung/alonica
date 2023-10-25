import UnicornBoard from "@/components/application/UnicornBoard";
import ViewBox from "@/components/application/ViewBox";
import ToDrawingForm from "./_components/ToDrawingForm";

export default function TextToDwgPage() {
  return (
    <>
      <div className="flex gap-6">
        <ViewBox />
        <UnicornBoard />
        <div className="">
          <ToDrawingForm />
        </div>
      </div>
    </>
  );
}
