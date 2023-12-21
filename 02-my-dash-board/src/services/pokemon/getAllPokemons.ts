import { PokemonsResponse } from "@/interfaces/pokemon/pokemonsResponse";
import type { SimplePokemon } from "@/interfaces/pokemon/simplePokemon";

export const getAllPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`)
    .then(res => res.json());

  const pokemonArray = data.results.map(pokemon => (
    { 
      name: pokemon.name, 
      id: pokemon.url.split("/").at(-2)!
    }
  ));

  // Este error termina en el archivo error.tsx
  // throw new Error("Error que no debería de suceder");
  return pokemonArray;
};