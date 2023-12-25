import { Metadata } from "next";
import { cookies } from "next/headers";

import { TabBar } from "@/components/TabBar";

export const metadata: Metadata = {
  title: "Cookies page",
  description: "Descripción de la página de cookies"
};

export default function CookiesPage() {
  const cookieStore = cookies();
  const cookieTab = Number(cookieStore.get("selectedTab")?.value ?? "1");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl inline-block mb-3">Tabs</span>

        <TabBar currentTab={cookieTab}/>
      </div>
    </div>
  );
}