module.exports = function ({ getProductListByOperatorBuilder }) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "aptel",
  });
  const services = Object.freeze({
    getProductList: getProductListByOperator,
  });

  return services;
};
