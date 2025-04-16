const buildGetProductListByOperatorBuilder = require("./src/get-product-list-by-operator-builder");

module.exports = function ({
  getProductListByOperatorAPI,
  setOperatorProductListInMemoryCache,
}) {
  const getProductListByOperatorBuilder = buildGetProductListByOperatorBuilder({
    getProductListByOperatorAPI,
    setOperatorProductListInMemoryCache,
  });

  return getProductListByOperatorBuilder;
};
