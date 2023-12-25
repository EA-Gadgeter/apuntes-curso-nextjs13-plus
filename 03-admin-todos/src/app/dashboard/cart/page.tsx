import { Metadata } from "next";
import { cookies } from "next/headers";

import { ItemCard }  from "@/components/shoppingCart";
import {Product, products} from "@/mocks/products";


export const metadata: Metadata = {
  title: "Carro de compras",
  description: "Carrito de la página de productos"
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

export default function CartPage() {
  const cookieStore = cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}") as { [id: string]: number };

  const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
    const productsInCart: ProductInCart[] = [];

    for (const id of Object.keys(cart)) {
      const product = products.find(prod => prod.id === id);

      if (product) {
        productsInCart.push({ product, quantity: cart[id] });
      }
    }

    return productsInCart;
  };

  const productsInCart = getProductsInCart(cart);


  return (
    <div>
      <h1 className="text-4xl">Productos del carrito</h1>

      <hr className="mb-2"/>

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {
            productsInCart.map(item => (
              <ItemCard key={item.product.id} product={item.product} quantity={item.quantity} />
            ))
          }
        </div>
      </div>
    </div>
  );
}