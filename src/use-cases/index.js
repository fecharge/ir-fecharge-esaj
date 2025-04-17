var cacheStorage = [];
module.exports = async function ({ provider, models }) {
  const setOperatorProductListInMemoryCache =
    require("./set-operator-product-list-in-memory-cache")({
      cacheStorage,
    });

  const clearMemoryCache = require("./clear-memory-cache")({
    cacheStorage,
  });

  const getProductListByOperatorBuilder =
    require("./get-product-list-by-operator-builder")({
      getProductListByOperatorAPI: provider.getProductListByOperator,
      setOperatorProductListInMemoryCache,
    });

  const getProductListByOperator = require("./get-product-list-by-operator")({
    getProductListByOperatorAPI: provider.getProductListByOperator,
    setOperatorProductListInMemoryCache,
  });

  const findProductInOperatorProductListBuilder =
    require("./find-product-in-operator-product-list-builder")({
      cacheStorage,
    });

  const topupBuilder = require("./topup")({
    topupAPI: provider.topup,
  });

  const packageBuilder = require("./package")({
    packageAPI: provider.package,
    findProductInOperatorProductListBuilder,
  });

  const irancellServices = await require("./irancell")({
    getProductListByOperatorBuilder,
    topupBuilder,
    packageBuilder,
    makeIrancellDirectChargePrice: models.makeIrancellDirectChargePrice,
    makeIrancellPayBillPrice: models.makeIrancellPayBillPrice,
    makeGeneralMobileNumber: models.makeGeneralMobileNumber,
    makeTDLTESimNumber: models.makeTDLTESimNumber,
  });

  const mciServices = await require("./mci")({
    getProductListByOperatorBuilder,
    topupBuilder,
    packageBuilder,
    makeMciDirectChargePrice: models.makeMciDirectChargePrice,
    makeGeneralMobileNumber: models.makeGeneralMobileNumber,
  });

  const rightelServices = await require("./rightel")({
    getProductListByOperatorBuilder,
    topupBuilder,
    packageBuilder,
    makeRightelDirectChargePrice: models.makeRightelDirectChargePrice,
    makeGeneralMobileNumber: models.makeGeneralMobileNumber,
  });

  const shatelServices = await require("./shatel")({
    getProductListByOperatorBuilder,
    topupBuilder,
    packageBuilder,
    makeShatelDirectChargePrice: models.makeShatelDirectChargePrice,
    makeGeneralMobileNumber: models.makeGeneralMobileNumber,
  });

  const aptelServices = await require("./aptel")({
    getProductListByOperatorBuilder,
    topupBuilder,
    packageBuilder,
    makeAptelDirectChargePrice: models.makeAptelDirectChargePrice,
    makeGeneralMobileNumber: models.makeGeneralMobileNumber,
  });

  const services = Object.freeze({
    irancell: irancellServices,
    mci: mciServices,
    rightel: rightelServices,
    shatel: shatelServices,
    aptel: aptelServices,
    getProductListByOperator,
    clearMemoryCache,
  });

  return services;
};
