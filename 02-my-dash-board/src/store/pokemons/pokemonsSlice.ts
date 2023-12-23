import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { SimplePokemon } from "@/interfaces/pokemon/simplePokemon";

interface FavoritePokemonsState {
  // Encerralo entre corchetes, que es un objeto donde cada llave es un SimplePokemon
  [key: string]: SimplePokemon
}

const getInitialState = (): FavoritePokemonsState => {
  const savedFavoritePokemons: FavoritePokemonsState = JSON.parse(localStorage.getItem("favoritePokemons") ?? "{}");
  return savedFavoritePokemons;
};

const initialState: FavoritePokemonsState = { 
  ...getInitialState(),
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;

      if (state[pokemon.id]) {
        delete state[pokemon.id];
        return;
      } 
      
      state[pokemon.id] = pokemon;
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;