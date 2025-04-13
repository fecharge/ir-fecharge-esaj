module.exports = function ({ provider }) {
  const getProductListByOperatorBuilder =
    require("./get-product-list-by-operator")({
      getProductListByOperatorAPI: provider.getProductListByOperator,
    });

  const topupBuilder = require("./topup")({
    topupAPI: provider.topup,
  });
  const irancellServices = require("./irancell")({
    getProductListByOperatorBuilder,
    topupBuilder,
  });
  const mciServices = require("./mci")({
    getProductListByOperatorBuilder,
    topupBuilder,
  });
  const rightelServices = require("./rightel")({
    getProductListByOperatorBuilder,
    topupBuilder,
  });
  const shatelServices = require("./shatel")({
    getProductListByOperatorBuilder,
    topupBuilder,
  });
  const aptelServices = require("./aptel")({
    getProductListByOperatorBuilder,
    topupBuilder,
  });

  const services = Object.freeze({
    irancell: irancellServices,
    mci: mciServices,
    rightel: rightelServices,
    shatel: shatelServices,
    aptel: aptelServices,
  });

  return services;
};
