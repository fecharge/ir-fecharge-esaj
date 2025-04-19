module.exports = async function ({ ESAJ_ACCESS_TOKEN }) {
  if (!ESAJ_ACCESS_TOKEN) {
    throw new Error("ESAJ Provider must have ESAJ_ACCESS_TOKEN");
  }

  const useCases = await require("./src")({
    ESAJ_ACCESS_TOKEN,
  });

  return useCases;
};
