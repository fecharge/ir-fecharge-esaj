module.exports = function buildGetProductListByOperator({
  getProductListByOperatorAPI,
}) {
  if (!getProductListByOperatorAPI) {
    throw new Error(
      "buildGetProductListByOperator must have getProductListByOperatorAPI"
    );
  }
  return async function getProductListByOperator({ operator }) {
    if (!operator) {
      throw new Error("getProductListByOperator must have operator");
    }

    const productList = await getProductListByOperatorAPI({ operator });
    return productList;
  };
};
