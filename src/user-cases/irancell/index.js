module.exports = function ({ getProductListByOperatorBuilder, topupBuilder }) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "irancell",
  });

  const directCharge = topupBuilder({ product_id: 7 });

  const payBill = topupBuilder({ operator_type: 4, product_id: 13 });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    payBill,
  });

  return services;
};
