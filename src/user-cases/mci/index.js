module.exports = function ({ getProductListByOperatorBuilder }) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "mci",
  });
  const services = Object.freeze({
    getProductList: getProductListByOperator,
  });

  return services;
};
