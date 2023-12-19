import type { Metadata } from "next";

import { CartCounter } from "@/components/shoppingCart/CartCounter";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Un simple contador",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos del carrito de compras</span>      

      <CartCounter />
    </div>
  );
}