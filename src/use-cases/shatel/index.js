module.exports = async function ({
  getProductListByOperatorBuilder,
  topupBuilder,
  packageBuilder,
  makeShatelDirectChargePrice,
  makeGeneralMobileNumber,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "shatel",
  });

  //await getProductListByOperator();

  const directCharge = topupBuilder({
    operator_type: 1,
    product_id: 19,
    makePriceModel: makeShatelDirectChargePrice,
  });

  const activatePrepaidPackage = packageBuilder({
    operator: "shatel",
    operator_type: "2",
    makeMobileNumber: makeGeneralMobileNumber,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    activatePrepaidPackage,
  });

  return services;
};
