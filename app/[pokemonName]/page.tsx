import { PokemonImage } from "@/components/pokemon-image";
import { Progress } from "@/components/ui/progress";
import { getPokemon2 } from "@/lib/pokemonAPI";

type Props = {
  params: {
    pokemonName: string;
  };
};

const PokemonPage = async ({ params: { pokemonName } }: Props) => {
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
              {statObject.attacks.special.map((val: any) => {
                return (
                  <>
                    <div
                      className="flex items-stretch"
                      style={{ width: "500px" }}
                      key={val.name}
                    >
                      <h3 className="p-3 w-2/4">
                        {val.name}: {val.damage}
                      </h3>
                      <Progress className="w-2/4 m-auto" value={val.damage} />
                    </div>
                  </>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

export default PokemonPage;
