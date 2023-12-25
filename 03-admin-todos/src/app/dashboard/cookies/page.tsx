import { Metadata } from "next";

import { TabBar } from "@/components/TabBar";

export const metadata: Metadata = {
  title: "  Cookies page",
  description: "Descripción de la página de cookies"
};

export default function CookiesPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl inline-block mb-3">Tabs</span>

        <TabBar />
      </div>
    </div>
  );
}