"use client";

import type { FC } from "react";

import Link from "next/link";
import Image from "next/image";

import { IoHeartOutline, IoHeart } from "react-icons/io5";

import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";

import type { SimplePokemon } from "@/interfaces/pokemon/simplePokemon";

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { id, name } = pokemon;

  const isFavorite = useAppSelector(state => state.pokemonsReducer.favorites[id] !== undefined);
  const dispatch = useAppDispatch();

  const onToggle = () => dispatch(toggleFavorite(pokemon));

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center p-6 bg-gray-800 border-b">
          <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
            width={100}
            height={100}
            priority={false}
          />

          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          
          <div className="mt-5">
            <Link
              href={`pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>

        <div className="border-b">
          <div className="px-4 py-2 hover:bg-gray-100 flex items-center">
            <div className="text-red-600">
              {isFavorite 
                ? 
                <IoHeart className="cursor-pointer" onClick={onToggle}/> 
                :
                <IoHeartOutline  className="cursor-pointer" onClick={onToggle}/>
              }
            </div>

            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFavorite ? "Es favorito" : "No es favorito"}
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
