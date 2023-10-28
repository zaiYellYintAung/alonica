"use client";

import UnicornBoard from "@/components/application/UnicornBoard";
import VisionaryBoard from "@/components/application/VisionaryBoard";
import { useState } from "react";
import RedrawForm from "../_components/forms/RedrawForm";

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
              <div>Hello</div>
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
