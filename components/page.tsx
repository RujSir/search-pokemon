import { PokemonImage } from "@/components/pokemon-image";
import { getPokemon2 } from "@/lib/pokemonAPI";

import { useQuery } from "@apollo/client";
import client from "../lib/apolloClient";
import { GET_POKEMON_NAME } from "../lib/pokemonAPI";

interface PokemonPageProps {
  pokemonName: string;
}

export default async function PokemonPage({ pokemonName }: PokemonPageProps) {
  // const { pokemonName } = params;

  const { data } = useQuery(GET_POKEMON_NAME, {
    variables: { name: pokemonName },
    client,
  });

  const pokemonObject2 = await getPokemon2(
    pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)
  );

  return (
    <>
      <h1 className="text-4xl text-bold pt-4">{pokemonName}</h1>
      <div
        className="m-4"
        style={{ position: "relative", width: "300px", height: "300px" }}
      >
        <PokemonImage image={pokemonObject2.image} name={pokemonName} />
      </div>
      <div className="flex-col">
        {[pokemonObject2].map((statObject: any) => {
          const statName = statObject.name;
          return (
            <>
              <div
                className="flex items-stretch"
                style={{ width: "500px" }}
                key={statName}
              >
                <h3 className="p-3 w-2/4">MaxHp: {statObject.maxHP}</h3>
                <h3 className="p-3 w-2/4">MaxCP : {statObject.maxCP}</h3>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
