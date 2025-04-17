module.exports = function buildGetProductListByOperator({
  getProductListByOperatorAPI,
  setOperatorProductListInMemoryCache,
}) {
  if (!getProductListByOperatorAPI) {
    throw new Error(
      "buildGetProductListByOperator must have getProductListByOperatorAPI"
    );
  }

  if (!setOperatorProductListInMemoryCache) {
    throw new Error(
      "buildGetProductListByOperator must have setOperatorProductListInMemoryCache"
    );
  }
  return async function getProductListByOperator({ operator }) {
    if (!operator) {
      throw new Error("getProductListByOperator must have operator");
    }

    const productList = await getProductListByOperatorAPI({ operator });
    setOperatorProductListInMemoryCache({ operator, productList });
    return productList;
  };
};
