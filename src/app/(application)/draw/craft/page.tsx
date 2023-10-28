"use client";

import UnicornBoard from "@/components/application/UnicornBoard";
import VisionaryBoard from "@/components/application/VisionaryBoard";
import { useState } from "react";
import DrawingForm from "../_components/forms/DrawingForm";

export default function NewDrawingPage() {
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
              <div>Hello</div>
            </VisionaryBoard>
          </main>
        )}
      </section>

      <section>
        <DrawingForm />
      </section>
    </div>
  );
}
