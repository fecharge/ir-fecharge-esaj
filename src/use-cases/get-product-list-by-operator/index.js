const buildGetProductListByOperator = require("./src/get-product-list-by-operator");

module.exports = function ({ getProductListByOperatorAPI }) {
  const getProductListByOperator = buildGetProductListByOperator({
    getProductListByOperatorAPI,
  });

  return getProductListByOperator;
};
