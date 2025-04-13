module.exports = function buildGetProductListByOperator({
  ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL,
  createOptions,
  translateResponse,
}) {
  if (!ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL) {
    throw new Error(
      "buildGetProductListByOperator must have ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL"
    );
  }

  if (!createOptions) {
    throw new Error("buildGetProductListByOperator must have createOptions");
  }

  if (!translateResponse) {
    throw new Error(
      "buildGetProductListByOperator must have translateResponse"
    );
  }
  return async function getProductListByOperator({ operator }) {
    if (!operator) {
      throw new Error("getProductListByOperator must have operator");
    }
    const options = await createOptions({ operator });

    const response = await fetch(
      ESAJ_GET_PRODUCT_LIST_BY_OPERATOR_URL,
      options
    );

    const requestResponse = await translateResponse({
      response: response,
    });

    const productList = requestResponse.data;

    return productList;
  };
};
