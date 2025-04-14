module.exports = function ({
  makeAptelDirectChargePrice,
  getProductListByOperatorBuilder,
  topupBuilder,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "aptel",
  });

  const directCharge = topupBuilder({
    product_id: 25,
    makePriceModel: makeAptelDirectChargePrice,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
  });

  return services;
};
