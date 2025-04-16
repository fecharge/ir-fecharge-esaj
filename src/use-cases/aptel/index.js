module.exports = async function ({
  makeAptelDirectChargePrice,
  getProductListByOperatorBuilder,
  topupBuilder,
  packageBuilder,
  makeGeneralMobileNumber,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "aptel",
  });

  await getProductListByOperator();

  const directCharge = topupBuilder({
    product_id: 25,
    makePriceModel: makeAptelDirectChargePrice,
  });

  const activatePrepaidPackage = packageBuilder({
    operator: "aptel",
    makeMobileNumber: makeGeneralMobileNumber,
  });

  const activatePostpaidPackage = packageBuilder({
    operator: "aptel",
    makeMobileNumber: makeGeneralMobileNumber,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    activatePrepaidPackage,
    activatePostpaidPackage,
  });

  return services;
};
