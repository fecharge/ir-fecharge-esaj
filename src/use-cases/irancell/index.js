module.exports = function ({
  getProductListByOperatorBuilder,
  topupBuilder,
  makeIrancellDirectChargePrice,
  makeIrancellPayBillPrice,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "irancell",
  });

  const directCharge = topupBuilder({
    product_id: 7,
    makePriceModel: makeIrancellDirectChargePrice,
  });

  const payBill = topupBuilder({
    operator_type: 4,
    product_id: 13,
    makePriceModel: makeIrancellPayBillPrice,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    payBill,
  });

  return services;
};
