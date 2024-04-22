import { getPokemon2 } from '../lib/pokemonAPI'
 
const bulbasaur = { name: "Bulbasaur", type: "Grass" };
const charmander = { name: "Charmander", type: "Fire" };
const squirtle = { name: "Squirtle", type: "Water" };

describe("Pokemon types", () => {
  it("asserts that Bulbasaur is a Grass type", () => {
    const type = getPokemon2(bulbasaur.name);
    expect(type.types[0]).toBe("Grass");
  });

  it("asserts that Charmander is a Fire type", () => {
    const type = getPokemon2(charmander.name);
    expect(type.types[0]).toBe("Fire");
  });

  it("asserts that Squirtle is a Water type", () => {
    const type = getPokemon2(squirtle);
    expect(type.types[0]).toBe("Water");
  });
});