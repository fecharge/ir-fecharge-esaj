module.exports = function ({
  getProductListByOperatorBuilder,
  topupBuilder,
  makeMciDirectChargePrice,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "mci",
  });

  const directCharge = topupBuilder({
    product_id: 1,
    makePriceModel: makeMciDirectChargePrice,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
  });

  return services;
};
