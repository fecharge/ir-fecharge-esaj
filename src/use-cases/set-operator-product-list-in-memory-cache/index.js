const buildSetOperatorProductListInMemoryCache = require("./src/set-operator-product-list-in-memory-cache");

module.exports = function ({ cacheStorage }) {
  const setOperatorProductListInMemoryCache =
    buildSetOperatorProductListInMemoryCache({ cacheStorage });

  return setOperatorProductListInMemoryCache;
};
