"use client";
import { IoHeartOutline } from "react-icons/io5";

import { useAppSelector } from "@/store";

import { PokemonGrid } from "@/components/pokemon/PokemonGrid";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(state => Object.values(state.pokemonsReducer.favorites));
  // Usamos un useState para que los pokemons que se borren se queden por lo menos hasta la siguiente
  // ves que se entra a la página
  /* const [pokemons, setPokemons] = useState(favoritePokemons);

  useEffect(() => {
    setPokemons(favoritePokemons);
  }, [favoritePokemons]); */
  

  return (
    <>
      {
        favoritePokemons.length === 0
          ?
          (
            <div className="flex flex-col h-[50vh] items-center justify-center">
              <IoHeartOutline size={100} className="text-red-500"/>
              <span>No hay favoritos</span>
            </div>
          )
          : <PokemonGrid pokemons={favoritePokemons} />
      }
    </>
  );
};