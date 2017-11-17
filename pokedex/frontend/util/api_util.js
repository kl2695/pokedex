
export const fetchAllPokemon = () => {
  return $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/pokemon'
  });
};

export const fetchOnePokemon = (pokemonId) => {
  console.log(pokemonId);
  return $.ajax({
    method: 'GET',
    url: `http://localhost:3000/api/pokemon/${pokemonId}`
  });
};
