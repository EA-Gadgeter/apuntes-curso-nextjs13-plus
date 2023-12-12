import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "Esta es la pagina de about",
  keywords: ["page", "about", "emiliano", "acevedo", "gadgeter"]
};

export default function AboutPage() {
  return (
    <span className="text-5xl">About page</span>
  );
}