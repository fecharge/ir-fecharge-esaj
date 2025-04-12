module.exports = function ({ ESAJ_ACCESS_TOKEN }) {
  const getAuthorizedHeader = require("./get-authorized-header")({
    ESAJ_ACCESS_TOKEN,
  });

  const getProductListByOperator = require("./get-product-list-by-operator")({
    getAuthorizedHeader,
  });

  const useCases = Object.freeze({
    getProductListByOperator,
  });

  return useCases;
};
