const buildFindProductInOperatorProductListBuilder = require("./src/find-product-in-operator-product-list-builder");

module.exports = function ({ cacheStorage }) {
  const findProductInOperatorProductListBuilder =
    buildFindProductInOperatorProductListBuilder({ cacheStorage });

  return findProductInOperatorProductListBuilder;
};
