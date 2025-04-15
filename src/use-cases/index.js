module.exports = function ({ provider, models }) {
  const getProductListByOperatorBuilder =
    require("./get-product-list-by-operator-builder")({
      getProductListByOperatorAPI: provider.getProductListByOperator,
    });

  const topupBuilder = require("./topup")({
    topupAPI: provider.topup,
  });

  const getProductListByOperator = require("./get-product-list-by-operator")({
    getProductListByOperatorAPI: provider.getProductListByOperator,
  });

  const irancellServices = require("./irancell")({
    getProductListByOperatorBuilder,
    topupBuilder,
    makeIrancellDirectChargePrice: models.makeIrancellDirectChargePrice,
    makeIrancellPayBillPrice: models.makeIrancellPayBillPrice,
  });
  const mciServices = require("./mci")({
    getProductListByOperatorBuilder,
    topupBuilder,
    makeMciDirectChargePrice: models.makeMciDirectChargePrice,
  });
  const rightelServices = require("./rightel")({
    getProductListByOperatorBuilder,
    topupBuilder,
    makeRightelDirectChargePrice: models.makeRightelDirectChargePrice,
  });
  const shatelServices = require("./shatel")({
    getProductListByOperatorBuilder,
    topupBuilder,
    makeShatelDirectChargePrice: models.makeShatelDirectChargePrice,
  });
  const aptelServices = require("./aptel")({
    getProductListByOperatorBuilder,
    topupBuilder,
    makeAptelDirectChargePrice: models.makeAptelDirectChargePrice,
  });

  const services = Object.freeze({
    irancell: irancellServices,
    mci: mciServices,
    rightel: rightelServices,
    shatel: shatelServices,
    aptel: aptelServices,
    getProductListByOperator,
  });

  return services;
};
