module.exports = function buildSetOperatorProductListInMemoryCache({
  cacheStorage,
}) {
  if (!cacheStorage) {
    throw new Error(
      "buildSetOperatorProductListInMemoryCache must have cacheStorage"
    );
  }
  return function setOperatorProductListInMemoryCache({
    operator,
    productList,
  }) {
    if (!operator) {
      throw new Error("setOperatorProductListInMemoryCache must have operator");
    }

    if (!productList) {
      throw new Error(
        `setOperatorProductListInMemoryCache must have productList for ${operator}`
      );
    }

    let foundOperatorCacheStorage = cacheStorage.find(
      (cacheStorageItem) => cacheStorageItem.operator === operator
    );

    if (!foundOperatorCacheStorage) {
      cacheStorage.push({
        operator,
        productList,
      });
    } else {
      foundOperatorCacheStorage.productList = productList;
    }
  };
};
