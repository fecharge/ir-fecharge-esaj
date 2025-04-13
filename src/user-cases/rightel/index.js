module.exports = function ({ getProductListByOperatorBuilder, topupBuilder }) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "rightel",
  });

  const directCharge = topupBuilder({ operator_type: 1, product_id: 19 });
  const supperCharge = topupBuilder({ operator_type: 2, product_id: 19 });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    supperCharge,
  });

  return services;
};
