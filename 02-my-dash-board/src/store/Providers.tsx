"use client";
import { useEffect } from "react";
import type { FC, ReactNode } from "react";

import { Provider } from "react-redux";
import { store } from "@/store";
import { setFavoritePokemons } from "@/store/pokemons/pokemonsSlice";

interface Props {
  children: ReactNode
}

export const Providers: FC<Props> = ({ children }) => {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoritePokemons") ?? "{}");
    store.dispatch(setFavoritePokemons(favorites));
  }, []);
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
