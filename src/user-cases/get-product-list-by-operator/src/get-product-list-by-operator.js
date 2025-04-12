module.exports = function buildGetProductListByOperator({ createOptions }) {
  if (!createOptions) {
    throw new Error("buildGetProductListByOperator must have createOptions");
  }
  return async function getProductListByOperator({ operator }) {
    if (!operator) {
      throw new Error("getProductListByOperator must have operator");
    }
    const options = createOptions({ operator });
  };
};
