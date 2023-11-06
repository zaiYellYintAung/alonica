import { PageHeader } from "@/components/ui/page-header";

export default function RenderPage() {
  return (
    <>
      <PageHeader
        title={"Generate Drawing"}
        subTitle={
          "Generate your floor plan within seconds using the power of Ai"
        }
      />
      <div>{process.env.API_TOKEN}</div>
    </>
  );
}
