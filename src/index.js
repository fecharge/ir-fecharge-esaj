module.exports = async function ({ ESAJ_ACCESS_TOKEN }) {
  const models = require("./models")();
  const provider = require("./provider")({
    ESAJ_ACCESS_TOKEN,
  });
  const useCases = await require("./use-cases")({
    provider,
    models,
  });

  return useCases;
};
