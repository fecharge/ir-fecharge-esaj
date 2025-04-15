const buildGetProductListByOperatorBuilder = require("./src/get-product-list-by-operator-builder");

module.exports = function ({ getProductListByOperatorAPI }) {
  const getProductListByOperatorBuilder = buildGetProductListByOperatorBuilder({
    getProductListByOperatorAPI,
  });

  return getProductListByOperatorBuilder;
};
