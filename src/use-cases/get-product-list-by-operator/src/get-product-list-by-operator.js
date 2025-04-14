module.exports = function buildGetProductListByOperatorBuilder({
  getProductListByOperatorAPI,
}) {
  if (!getProductListByOperatorAPI) {
    throw new Error(
      "buildGetProductListByOperatorBuilder must have getProductListByOperatorAPI"
    );
  }
  return function getProductListByOperatorBuilder({ operator }) {
    if (!operator) {
      throw new Error("getProductListByOperatorBuilder must have operator");
    }

    return async function getProductListByOperator() {
      const productList = await getProductListByOperatorAPI({ operator });
      return productList;
    };
  };
};
