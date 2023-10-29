"use client";

import UnicornBoard from "@/components/application/UnicornBoard";
import VisionaryBoard from "@/components/application/VisionaryBoard";
import { useState } from "react";
import RedrawForm from "../_components/forms/RedrawForm";
import { Button } from "@/components/ui/button";

export default function NewReDrawPage() {
  const [unicorn, setUnicorn] = useState(false);
  const loading = false;
  return (
    <div className="flex gap-6">
      <section>
        {unicorn ? (
          <main>
            <UnicornBoard />
          </main>
        ) : (
          <main>
            <VisionaryBoard loading={loading}>
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
              <Button className="relative">Start Generating</Button>
            </VisionaryBoard>
          </main>
        )}
      </section>

      <section>
        <RedrawForm />
      </section>
    </div>
  );
}
