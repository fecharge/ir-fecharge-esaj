const buildGetProductListByOperatorBuilder = require("./src/get-product-list-by-operator");

module.exports = function ({ getProductListByOperatorAPI }) {
  const getProductListByOperatorBuilder = buildGetProductListByOperatorBuilder({
    getProductListByOperatorAPI,
  });

  return getProductListByOperatorBuilder;
};
