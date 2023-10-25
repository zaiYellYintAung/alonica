import UnicornBoard from "@/components/application/UnicornBoard";
import ViewBox from "@/components/application/ViewBox";
import DrawingForm from "./_components/DrawingForm";

export default function DrawingPage() {
  return (
    <>
      <div className="flex gap-6">
        <ViewBox />
        <UnicornBoard />
        <div className="">
          <DrawingForm />
        </div>
      </div>
    </>
  );
}
