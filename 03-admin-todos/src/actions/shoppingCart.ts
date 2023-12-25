import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = ():{ [id: string]: number } => {
  if (!hasCookie("cart")) return {};

  return JSON.parse(getCookie("cart") ?? "{}");
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();

  if (cookieCart[id]) {
    cookieCart[id] += 1;
  } else {
    cookieCart[id] = 1;
  }

  setCookie("cart", JSON.stringify(cookieCart));
};