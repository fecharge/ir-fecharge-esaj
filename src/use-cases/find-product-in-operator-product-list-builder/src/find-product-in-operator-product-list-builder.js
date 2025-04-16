module.exports = function buildFindProductInOperatorProductListBuilder({
  cacheStorage,
}) {
  if (!cacheStorage) {
    throw new Error(
      "buildFindProductInOperatorProductListBuilder must have cacheStorage"
    );
  }
  return function findProductInOperatorProductListBuilder({ operator }) {
    var productList = [];
    if (!operator) {
      throw new Error(
        "findProductInOperatorProductListBuilder must have operator"
      );
    }

    let foundOperatorCacheStorage = cacheStorage.find(
      (cacheStorageItem) => cacheStorageItem.operator === operator
    );

    if (foundOperatorCacheStorage) {
      productList = foundOperatorCacheStorage.productList;
    } else {
      throw new Error(`No cache for operator in memory ${operator}`);
    }

    return function findProductInOperatorProductList({ product_id }) {
      if (!product_id) {
        throw new Error(
          "findProductInOperatorProductList must have product_id"
        );
      }

      const foundProduct = productList.find(
        (product) => product.id === product_id
      );

      return foundProduct;
    };
  };
};
