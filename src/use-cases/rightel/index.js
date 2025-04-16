module.exports = async function ({
  getProductListByOperatorBuilder,
  topupBuilder,
  packageBuilder,
  makeRightelDirectChargePrice,
  makeGeneralMobileNumber,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "rightel",
  });

  await getProductListByOperator();

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

  const activatePrepaidPackage = packageBuilder({
    operator: "rightel",
    makeMobileNumber: makeGeneralMobileNumber,
  });
  const activatePostpaidPackage = packageBuilder({
    operator: "rightel",
    makeMobileNumber: makeGeneralMobileNumber,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    supperCharge,
    activatePrepaidPackage,
    activatePostpaidPackage,
  });

  return services;
};
