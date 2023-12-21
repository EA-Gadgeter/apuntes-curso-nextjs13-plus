import { notFound } from "next/navigation";

import type { Pokemon } from "@/interfaces/pokemon/pokemon";

export const getPokemonById = async (id: string): Promise<Pokemon> => {
  try {
    const pokemon: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      cache: "force-cache"
    }).then(res => res.json());
  
    return pokemon;
  } catch (error) {
    return notFound();
  }
};