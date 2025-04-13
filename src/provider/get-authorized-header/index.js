const buildGetAuthorizedHeader = require("./src/get-authorized-header");

module.exports = function ({ ESAJ_ACCESS_TOKEN }) {
  const getAuthorizedHeader = buildGetAuthorizedHeader({
    ESAJ_ACCESS_TOKEN,
  });

  return getAuthorizedHeader;
};
