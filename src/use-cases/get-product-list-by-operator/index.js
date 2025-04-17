const buildGetProductListByOperator = require("./src/get-product-list-by-operator");

module.exports = function ({
  getProductListByOperatorAPI,
  setOperatorProductListInMemoryCache,
}) {
  const getProductListByOperator = buildGetProductListByOperator({
    getProductListByOperatorAPI,
    setOperatorProductListInMemoryCache,
  });

  return getProductListByOperator;
};
