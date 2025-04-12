const createGetProductListByOperatorOptions = require("./src/create-get-product-list-by-operator-options");
const buildGetProductListByOperator = require("./src/get-product-list-by-operator");
const translateGetProductListByOperatorResponse = require("./src/translate-get-product-list-by-operator-response");

module.exports = function ({ getAuthorizedHeader }) {
  const getProductListByOperator = buildGetProductListByOperator({
    createOptions: createGetProductListByOperatorOptions,
    translateResponse: translateGetProductListByOperatorResponse,
  });

  return getProductListByOperator;
};
