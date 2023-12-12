import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Esta es la pagina de contact",
  keywords: ["page", "contact", "emiliano", "acevedo", "gadgeter"]
};

export default function ContactPage() {
  return (
    <>
      <span className="text-5xl">Contact page</span>
    </>
    
  );
}