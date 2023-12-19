import type { SimplePokemon } from "@/interfaces/pokemon/simplePokemon";
import type { FC } from "react";

import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[]
}

export const PokemonGrid: FC<Props> = ({ pokemons }) => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))
      }
    </div>
  );
};
