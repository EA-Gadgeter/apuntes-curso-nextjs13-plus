import type { Metadata } from "next";

// Metada especifica para esta pagina, ademas sobrescribir a la del
// RootLayout
export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Esta es la pagina de pricing",
  keywords: ["page", "pricing", "emiliano", "acevedo", "gadgeter"]
};

export default function PricingPage() {
  return (
    <>
      <span className="text-5xl">Pricing page</span>
    </>
    
  );
}