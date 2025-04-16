module.exports = async function ({
  getProductListByOperatorBuilder,
  topupBuilder,
  packageBuilder,
  makeIrancellDirectChargePrice,
  makeIrancellPayBillPrice,
  makeGeneralMobileNumber,
  makeTDLTESimNumber,
}) {
  const getProductListByOperator = getProductListByOperatorBuilder({
    operator: "irancell",
  });

  const directCharge = topupBuilder({
    product_id: 7,
    makePriceModel: makeIrancellDirectChargePrice,
  });

  await getProductListByOperator();

  const activatePrepaidPackage = packageBuilder({
    operator: "irancell",
    operator_type: "5",
    makeMobileNumber: makeGeneralMobileNumber,
  });
  const activatePostpaidPackage = packageBuilder({
    operator: "irancell",
    operator_type: "4",
    makeMobileNumber: makeGeneralMobileNumber,
  });

  const activateTDLTEPackage = packageBuilder({
    operator: "irancell",
    makeMobileNumber: makeTDLTESimNumber,
  });

  const payBill = topupBuilder({
    operator_type: "4",
    product_id: 13,
    makePriceModel: makeIrancellPayBillPrice,
  });

  const services = Object.freeze({
    getProductList: getProductListByOperator,
    directCharge,
    payBill,
    activatePrepaidPackage,
    activatePostpaidPackage,
    activateTDLTEPackage,
  });

  return services;
};
