module.exports = function ({ getProductListByOperatorBuilder }) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "shatel",
  });

  const directCharge = topupBuilder({ operator_type: 1, product_id: 19 });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
  });

  return services;
};
