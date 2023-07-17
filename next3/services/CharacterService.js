async function getCharacters() {
  const response = await fetch("https://hp-api.onrender.com/api/characters", {
    cache: "no-cache",
  });
  const data = await response.json();
  return data;
}

export default {
  getCharacters,
};
