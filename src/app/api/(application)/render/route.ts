import { replicate } from "@/lib/replicate";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // const { userId } = auth();
    const body = await req.json();
    const { imageUrl, options } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    const imageResponse = await axios.get(imageUrl, {
      responseType: "stream",
    });

    const unicorns = await replicate.run(
      "jagilley/controlnet-hough:854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
      {
        input: {
          image: imageUrl,
          prompt: options.prompt,
        },
      }
    );

    console.log(unicorns);

    return NextResponse.json({});
  } catch (error) {
    console.log("[RENDER]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
