import type { Metadata } from "next";

import { PokemonGrid } from "@/components/pokemon/PokemonGrid";

export const metadata: Metadata = {
  title: "Pokemons favoritos",
  description: "Lista de pokemon agregados a favoritos"
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global state</small></span>

      <PokemonGrid pokemons={[]} />      
    </div> 
  );
}