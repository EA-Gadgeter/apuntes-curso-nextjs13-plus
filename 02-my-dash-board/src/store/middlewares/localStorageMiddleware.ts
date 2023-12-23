import type { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import type { RootState } from "@/store";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) =>  (action: Action) => {
    next(action);
    
    if (action.type === "pokemons/toggleFavorite") {
      const { pokemonsReducer: { favorites } } = state.getState() as RootState;
      localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
      return;
    }
  };
};