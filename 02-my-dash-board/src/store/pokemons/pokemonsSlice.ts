import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { SimplePokemon } from "@/interfaces/pokemon/simplePokemon";

interface FavoritePokemonsState {
  // Encerralo entre corchetes, que es un objeto donde cada llave es un SimplePokemon
  favorites: {
    [key: string]: SimplePokemon
  }
}

const getInitialState = (): FavoritePokemonsState => {
  // NO ES LO IDEAL, si bien ayuda a generar la build de producción, en desarrollo
  // genera problemas de hidratacion
  //if ( typeof localStorage === "undefined") return {};

  const savedFavoritePokemons: FavoritePokemonsState = JSON.parse(localStorage.getItem("favoritePokemons") ?? "{}");
  return savedFavoritePokemons;
};

const initialState: FavoritePokemonsState = { 
  favorites: {}
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons: (state, action: PayloadAction<{[key: string]: SimplePokemon}>) => {
      state.favorites = action.payload;
    },

    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;

      if (state.favorites[pokemon.id]) {
        delete state.favorites[pokemon.id];
        return;
      } 
      
      state.favorites[pokemon.id] = pokemon;
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;