import { Metadata } from "next";

import { FavoritePokemons } from "@/components/pokemon/FavoritePokemons";

export const metadata: Metadata = {
  title: "Pokemons favoritos",
  description: "Lista de pokemon agregados a favoritos"
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global state</small></span>

      <FavoritePokemons />
    </div> 
  );
}