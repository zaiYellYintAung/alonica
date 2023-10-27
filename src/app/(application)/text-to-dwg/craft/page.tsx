"use client";

import UnicornBoard from "@/components/application/UnicornBoard";
import VisionaryBoard from "@/components/application/VisionaryBoard";
import { useState } from "react";
import MagicForm from "../_components/forms/MagicForm";

export default function NewGenerateDrawingPage() {
  const [unicorn, setUnicorn] = useState(true);
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
        <MagicForm />
      </section>
    </div>
  );
}
