"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";
import { Button } from "./ui/button";
import { PokemonCardList } from "./pokemon-card_List";

interface PokemonGridProps {
  pokemonList2: any;
}

export function PokemonGrid({ pokemonList2 }: PokemonGridProps) {
  const [searchText, setSearchText] = useState("");
  const [pages, setPage] = useState({ action: "" });

  const searchFileter = (pokemonList2: any) => {
    return pokemonList2.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredPokemonList = searchFileter(pokemonList2);

  const onSearch = async (name: string) => {
    if (searchText !== "" && searchText !== null) {
      setPage({ action: "Srch" });
    }else{
      setPage({ action: "" });
    }
  };

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search Pokemon</h3>
        <div className="grid w-full max-w-sm items-center gap-2">
          <Label htmlFor="pokemonname">Pokemon Name</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            id="pokemonname"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button onClick={() => onSearch(searchText)}>Search Pokemon</Button>
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">Pokemon Collection</h3>
      </div>

      {pages.action === "Srch" ? (
        <>
          <PokemonCard name={searchText} />
        </>
      ) : (
        <>
          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-center">
            {filteredPokemonList.map((pokemon: any) => {
              return (
                <>
                  <PokemonCardList name={pokemon.name} />
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
