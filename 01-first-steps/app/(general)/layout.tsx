import { ReactNode } from "react";

import { Navbar } from "@/components/UI/Navbar";

export default function AboutLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo</span>
        {children}
      </main>
    </>
  );
}