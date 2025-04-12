module.exports = function createGetProductListByOperatorOptions({ operator }) {
  if (!operator) {
    throw new Error("createGetProductListByOperatorOptions must have operator");
  }
};
