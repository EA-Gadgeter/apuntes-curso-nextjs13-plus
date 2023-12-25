import {Metadata} from "next";
import {cookies} from "next/headers";

import {ItemCard} from "@/components/shoppingCart";
import {Product, products} from "@/mocks/products";
import {WidgetItem} from "@/components/WidgetItem";


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

  const totalToPay = productsInCart.reduce((prev, current) => {
    return current.product.price * current.quantity + prev;
  }, 0);
  const totalWithTaxes = totalToPay * 1.15;

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

        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Total a pagar">
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-700">Total: ${totalWithTaxes}</h3>
            </div>
            <span className="font-bold text-center text-gray-500">Impuestos 15%: ${totalWithTaxes - totalToPay}</span>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}