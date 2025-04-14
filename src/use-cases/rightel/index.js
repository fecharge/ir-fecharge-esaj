module.exports = function ({
  getProductListByOperatorBuilder,
  topupBuilder,
  makeRightelDirectChargePrice,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "rightel",
  });

  const directCharge = topupBuilder({
    operator_type: 1,
    product_id: 19,
    makePriceModel: makeRightelDirectChargePrice,
  });
  const supperCharge = topupBuilder({
    operator_type: 2,
    product_id: 19,
    makePriceModel: makeRightelDirectChargePrice,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    supperCharge,
  });

  return services;
};
