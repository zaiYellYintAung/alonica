import { replicate } from "@/lib/replicate";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const response = await replicate.run(
      "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
      {
        input: {
          image: "...",
          prompt: "",
        },
      }
    );

    return NextResponse.json(response);
  } catch (error) {
    console.log("[RENDER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
