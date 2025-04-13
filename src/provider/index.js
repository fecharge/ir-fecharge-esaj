const ESAJ_BASE_URL = "https://dev.testesaj.ir";
const ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL = ESAJ_BASE_URL + "/api/filter";
const ESAJ_TOPUP_URL = ESAJ_BASE_URL + "/api/top-up";
const ESAJ_PACKAGE_URL = ESAJ_BASE_URL + "/api/top-up/package";

module.exports = function ({ ESAJ_ACCESS_TOKEN }) {
  const getAuthorizedHeader = require("./get-authorized-header")({
    ESAJ_ACCESS_TOKEN,
  });

  const authorizedHeader = getAuthorizedHeader();

  const getProductListByOperator = require("./get-product-list-by-operator")({
    authorizedHeader,
    ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL,
  });

  const topup = require("./top-up")({
    authorizedHeader,
    ESAJ_TOPUP_URL,
  });

  const package = require("./package")({
    ESAJ_PACKAGE_URL,
    authorizedHeader,
  });

  const services = Object.freeze({
    getProductListByOperator,
    package,
    topup,
  });

  return services;
};
