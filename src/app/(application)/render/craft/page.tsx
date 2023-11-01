"use client";

import UnicornBoard from "@/components/application/UnicornBoard";
import VisionaryBoard from "@/components/application/VisionaryBoard";
import { FormEvent, useState } from "react";
import RenderForm from "../_components/forms/RenderForm";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ui/image-upload";
import Image from "next/image";
import { Trash } from "lucide-react";
import { RenderOptionType } from "../_components/forms/constants";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { getBackendUrl, tokenHeader } from "@/lib/memo";

export default function NewRenderPage() {
  const [unicorn, setUnicorn] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (options: RenderOptionType) => {
    try {
      setLoading(true);
      const requestData = { imageUrl, options };

      window.alert("yo");

      const response = await axios.post("/api/render", requestData);

      const images = response.data.unicorns;

      images && setUnicorn(images);
    } catch (error) {
      console.log("err -->", error);
      toast({
        title: "Something Went Wrong",
        description: "Please try again or please contact us",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-12">
      <>
        {unicorn.length ? (
          <main>
            <UnicornBoard unicorns={unicorn} />
          </main>
        ) : (
          <main>
            <VisionaryBoard loading={loading}>
              {imageUrl ? (
                <>
                  <div
                    key={imageUrl}
                    className="relative w-[600px] h-[600px] rounded-md overflow-hidden">
                    <div className="z-10 absolute top-2 right-2">
                      <Button
                        type="button"
                        onClick={() => setImageUrl("")}
                        variant="destructive"
                        size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <Image
                      fill
                      className="object-cover"
                      alt="Image"
                      src={imageUrl}
                    />
                  </div>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10 text-muted-foreground"
                    viewBox="0 0 24 24">
                    <circle cx="12" cy="11" r="1" />
                    <path d="M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5ZM8 14a5 5 0 1 1 8 0" />
                    <path d="M17 18.5a9 9 0 1 0-10 0" />
                  </svg>

                  <h3 className="mt-4 text-lg font-semibold">
                    Property Descriptions
                  </h3>
                  <p className="mb-4 mt-2 text-sm text-muted-foreground">
                    Generate the property description using Ai
                  </p>
                  <ImageUpload
                    value={imageUrl ? [""] : []}
                    disabled={loading}
                    onChange={(url) => {
                      setImageUrl(url);
                    }}
                    onRemove={() => {}}
                  />
                </>
              )}
            </VisionaryBoard>
          </main>
        )}
      </>

      <>
        <RenderForm handleSubmit={handleSubmit} loading={loading} />
      </>
    </div>
  );
}
