module.exports = function makeShatelDirectChargePrice({ price }) {
  if (!price) {
    throw new Error(
      "مبلغ شارژ مستقیم شاتل را وارد کنید",
      "makeShatelDirectChargePrice must have price"
    );
  } else if (typeof price != "number") {
    throw new Error(
      "مبلغ شارژ مستقیم شاتل را به صورت عدد وارد کنید",
      "makeShatelDirectChargePrice price must be number"
    );
  } else if (price < 10000) {
    throw new Error(
      "مبلغ شارژ مستقیم شاتل باید بیشتر از هزار تومان باشد.",
      "makeShatelDirectChargePrice price must be upper than 1 thousand Toman"
    );
  } else if (price > 2000000) {
    throw new Error(
      "مبلغ شارژ مستقیم شاتل باید کمتر از 200 هزار تومان باشد.",
      "makeShatelDirectChargePrice price must be lower than 200 thousand Toman"
    );
  }

  return Object.freeze({
    getPrice: () => price,
    getType: () => "ShatelDirectChargePrice",
  });
};
