module.exports = async function ({
  getProductListByOperatorBuilder,
  topupBuilder,
  packageBuilder,
  makeMciDirectChargePrice,
  makeGeneralMobileNumber,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "mci",
  });

  await getProductListByOperator();

  const directCharge = topupBuilder({
    product_id: 1,
    makePriceModel: makeMciDirectChargePrice,
  });

  const activatePrepaidPackage = packageBuilder({
    operator: "mci",
    makeMobileNumber: makeGeneralMobileNumber,
  });
  const activatePostpaidPackage = packageBuilder({
    operator: "mci",
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
