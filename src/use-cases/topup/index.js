const buildTopupBuilder = require("./src/topup");

module.exports = function ({ topupAPI, makePriceModel }) {
  const topupBuilder = buildTopupBuilder({
    topupAPI,
    makePriceModel,
  });

  return topupBuilder;
};
