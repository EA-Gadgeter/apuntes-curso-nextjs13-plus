import type { Metadata } from "next";

import { PokemonGrid } from "@/components/pokemon/PokemonGrid";

import { getAllPokemons } from "@/services/pokemon/getAllPokemons";

import { POKEMON_STATIC_PAGES } from "@/const/pokemon";

export const metadata: Metadata = {
  title: "Primeros 151 Pokemon",
  description: "Página que muestra los 151 Pokemon originales"
};

export default async function PokemonsPage() {
  const pokemons = await getAllPokemons(POKEMON_STATIC_PAGES);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listados de Pokemons <small>estático</small></span>

      <PokemonGrid pokemons={pokemons} />      
    </div> 
  );
}