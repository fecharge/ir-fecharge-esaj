module.exports = function buildGetProductListByOperatorBuilder({
  getProductListByOperatorAPI,
  setOperatorProductListInMemoryCache,
}) {
  if (!getProductListByOperatorAPI) {
    throw new Error(
      "buildGetProductListByOperatorBuilder must have getProductListByOperatorAPI"
    );
  }

  if (!setOperatorProductListInMemoryCache) {
    throw new Error(
      "buildGetProductListByOperatorBuilder must have setOperatorProductListInMemoryCache"
    );
  }
  return function getProductListByOperatorBuilder({ operator }) {
    if (!operator) {
      throw new Error("getProductListByOperatorBuilder must have operator");
    }

    return async function getProductListByOperator() {
      const productList = await getProductListByOperatorAPI({ operator });

      setOperatorProductListInMemoryCache({ operator, productList });
      return productList;
    };
  };
};
