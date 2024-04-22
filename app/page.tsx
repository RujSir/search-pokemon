import { PokemonGrid } from "@/components/pokemon-grid";
import {  getPokemonList2 } from "@/lib/pokemonAPI";




export default async function Home() {

  const pokemonList2 = await getPokemonList2();

  

  return (
    <>
     <PokemonGrid  pokemonList2={pokemonList2} />
    </>

  );
}
