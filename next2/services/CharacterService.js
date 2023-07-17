async function getCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character", {
    cache: "no-cache",
  });
  const data = await response.json();
  return data.results;
}

export default {
  getCharacters,
};
