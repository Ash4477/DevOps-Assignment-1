import http from "http";
import url from "url";

const pokeList = [
  {
    pokeName: "metapod",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  },
  {
    pokeName: "butterfree",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  },
  {
    pokeName: "weedle",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
  },
  {
    pokeName: "kakuna",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
  },
  {
    pokeName: "beedrill",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
  },
  {
    pokeName: "pidgey",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
  },
  {
    pokeName: "pidgeotto",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
  },
  {
    pokeName: "pidgeot",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
  },
  {
    pokeName: "rattata",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  },
  {
    pokeName: "raticate",
    pokeImageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
  },
];

const server = http.createServer((req, res) => {
  const queryObj = url.parse(req.url, true).query;
  const limit = queryObj.limit || 5;
  let pokemonList = [];
  for (let i = 0; i < limit; i++) {
    pokemonList.push(pokeList[i]);
  }
  res.writeHead(200, {
    "content-type": "application/json",
    "access-control-allow-origin": "*",
  });
  res.write(JSON.stringify(pokemonList));
  res.end();
});

server.listen(8080, () => console.log("Server listening..."));
