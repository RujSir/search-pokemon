import Link from "next/link";
import { PokemonImage } from "./pokemon-image";

import { useQuery } from "@apollo/client";
import client from "../lib/apolloClient";
import { GET_POKEMON_NAME } from "../lib/pokemonAPI";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  const { data } = useQuery(GET_POKEMON_NAME, {
    variables: { name: name },
    client,
  });

  return (
    <>
      {data !== undefined && data.pokemon !== null ? (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-center">
          <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <div
              className="m-7 text-center"
              style={{ position: "relative", width: "300px", height: "300px" }}
            >
              <PokemonImage
                image={data.pokemon.image}
                name={data.pokemon.name}
              />
            </div>
            <div className="m-7 text-center">
              <h2 className={`text-3xl font-semibold text-amber-400`}>
                {/* {name} */}
                <Link
                  href={name}
                  className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                  key={name + "Card"}
                >
                  {name}
                </Link>
              </h2>
            </div>
            <div className="m-3">
              <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h1 className={`text-1xl font-semibold`}>
                  {data.pokemon.types.map((pokemonType: any) => (
                    <span className="grid w-full max-w-sm items-center gap-1.5">
                      Type : {pokemonType}
                    </span>
                  ))}
                </h1>
              </div>
              <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h1 className={`text-2xl font-semibold`}>Attack</h1>
                <h1 className={`text-1xl font-semibold`}>
                  {data.pokemon.attacks.special
                    .slice(0, 3)
                    .map((attack: any) => (
                      <span className="grid w-full max-w-sm items-center gap-1.5">
                        {attack.name} : {attack.damage}
                      </span>
                    ))}
                </h1>
              </div>
              <div className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                <h1 className={`text-2xl font-semibold`}>Evolutions</h1>
                <ul className={`text-1xl font-semibold`}>
                  {data.pokemon.evolutions &&
                    data.pokemon.evolutions.slice(0, 3).map((pokemon: any) => (
                      <li className="grid w-full max-w-sm items-center gap-1.5">
                        <Link
                          href={pokemon.name}
                          className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                          key={pokemon.name + "Card"}
                        >
                          {pokemon.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <hr />
          <h2 className={`text-4xl font-semibold `}>Not Found</h2>
        </div>
      )}
    </>

    // </Link>
  );
}
