const makeShatelDirectChargePrice = require("./shatel-direct-charge-price");
const makeIrancellDirectChargePrice = require("./irancell-direct-charge-price");
const makeAptelDirectChargePrice = require("./aptel-direct-charge-price");
const makeMciDirectChargePrice = require("./mci-direct-charge-price");
const makeRightelDirectChargePrice = require("./rightel-direct-charge-price");
const makeIrancellPayBillPrice = require("./irancell-pay-bill-price");

module.exports = function () {
  const models = Object.freeze({
    makeShatelDirectChargePrice,
    makeIrancellDirectChargePrice,
    makeAptelDirectChargePrice,
    makeMciDirectChargePrice,
    makeRightelDirectChargePrice,
    makeIrancellPayBillPrice,
  });

  return models;
};
