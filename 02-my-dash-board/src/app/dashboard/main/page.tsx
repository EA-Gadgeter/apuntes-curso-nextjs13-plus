import type { Metadata } from "next";

import { WidgetGrid } from "@/components/dashboard/WidgetGrid";

export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Este es el dashboard de la página",
};

export default function MainCounterPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <WidgetGrid />
    </div>
  );
}