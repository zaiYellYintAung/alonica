import UnicornBoard from "@/components/application/UnicornBoard";
import ViewBox from "@/components/application/ViewBox";
import ToDrawingForm from "./_components/ToDrawingForm";
import { PageHeader } from "@/components/ui/page-header";

export default function TextToDwgPage() {
  return (
    <>
      <PageHeader
        title={"Generate Drawing"}
        subTitle={
          "Generate your floor plan within seconds using the power of Ai"
        }
      />
    </>
  );
}
