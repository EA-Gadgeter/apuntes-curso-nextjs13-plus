import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carro de productos",
  description: "Carrito de la página de productos"
};

export default function CartPage() {
  return (
    <div>
      <h1 className="text-4xl">Productos del carrito</h1>

      <hr className="mb-2"/>

      <div className="flex flex-col sm:flex-row gap-2 w-full">

      </div>
    </div>
  );
}