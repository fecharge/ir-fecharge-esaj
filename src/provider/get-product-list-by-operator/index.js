const buildCreateGetProductListByOperatorOptions = require("./src/create-get-product-list-by-operator-options");
const buildGetProductListByOperator = require("./src/get-product-list-by-operator");
const translateGetProductListByOperatorResponse = require("./src/translate-get-product-list-by-operator-response");

module.exports = function ({
  authorizedHeader,
  ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL,
}) {
  const createGetProductListByOperatorOptions =
    buildCreateGetProductListByOperatorOptions({
      authorizedHeader,
    });
  const getProductListByOperator = buildGetProductListByOperator({
    ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL,
    createOptions: createGetProductListByOperatorOptions,
    translateResponse: translateGetProductListByOperatorResponse,
  });

  return getProductListByOperator;
};
