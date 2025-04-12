module.exports = function ({ ESAJ_ACCESS_TOKEN }) {
  const models = require("./models")();
  const useCases = require("./user-cases")({
    ESAJ_ACCESS_TOKEN,
  });

  return useCases;
};
