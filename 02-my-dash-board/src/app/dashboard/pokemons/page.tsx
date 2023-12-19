import { PokemonsResponse } from "@/interfaces/pokemon/pokemonsResponse";
import type { SimplePokemon } from "@/interfaces/pokemon/simplePokemon";

import { PokemonGrid } from "@/components/pokemon/PokemonGrid";

const getAllPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`)
    .then(res => res.json());

  const pokemonArray = data.results.map(pokemon => (
    { 
      name: pokemon.name, 
      id: pokemon.url.split("/").at(-2)!
    }
  ));
  
  return pokemonArray;
};

export default async function PokemonsPage() {
  const pokemons = await getAllPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listados de Pokemons <small>estático</small></span>

      <PokemonGrid pokemons={pokemons} />      
    </div> 
  );
}