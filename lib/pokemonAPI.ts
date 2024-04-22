import { useQuery, gql } from "@apollo/client";
import client from "./apolloClient";

const POKEMON_API = "https://pokeapi.co/api/v2/";
const POKEMON_API2 = "https://graphql-pokemon2.vercel.app";

export async function getPokemonList2() {
  const data = await fetch(POKEMON_API2, {
    method: "POST",
    body: JSON.stringify({
      query: ` {  pokemons(first: 151) {
                id
                number
                name
                weight {
                  minimum
                  maximum
                }
                height {
                  minimum
                  maximum
                }
                classification
                types
                resistant
                weaknesses
                fleeRate
                maxCP
                maxHP
                image
                types
              }}`,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return data.data.pokemons;
}
export async function getPokemonList() {
  const response = await fetch(POKEMON_API + "pokemon?limit=151&pffset=0");
  const data = await response.json();
  return data.results;
}

export async function getPokemon(name: string) {
  const resposne = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await resposne.json();
  return data;
}

export async function getPokemon2(name: string) {
  const { data } = await client.query({
    query: GET_POKEMON_NAME,
    variables: { name: name },
  });
console.log(data.pokemon.types[0]);

  return data.pokemon;
}

export const GET_POKEMON_NAME = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types
      evolutions {
        id
        number
        name
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
      attacks {
        special {
          name
          damage
        }
      }
      maxCP
      maxHP
      image
    }
  }
`;

// export const { data } =  useQuery(GET_POKEMON_NAME, {
//   variables: { name: name}, // Change 'Bulbasaur' to the desired Pokémon name
//   client,
// });

// console.log(data);
