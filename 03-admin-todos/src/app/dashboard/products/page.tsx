import { Metadata } from "next";

import { ProductCard } from "@/components/products";

import { products } from "@/mocks/products";

export const metadata: Metadata = {
  title: "Products page",
  description: "Productos de la tienda"
};

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>
  );
}