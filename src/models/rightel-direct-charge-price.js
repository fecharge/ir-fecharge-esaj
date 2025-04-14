module.exports = function makeRightelDirectChargePrice({ price }) {
  if (!price) {
    throw new Error(
      "مبلغ شارژ مستقیم رایتل را وارد کنید",
      "makeRightelDirectChargePrice must have price"
    );
  } else if (typeof price != "number") {
    throw new Error(
      "مبلغ شارژ مستقیم رایتل را به صورت عدد وارد کنید",
      "makeRightelDirectChargePrice price must be number"
    );
  } else if (price < 10000) {
    throw new Error(
      "مبلغ شارژ مستقیم رایتل باید بیشتر از هزار تومان باشد.",
      "makeRightelDirectChargePrice price must be upper than 500 Toman"
    );
  } else if (price > 2000000) {
    throw new Error(
      "مبلغ شارژ مستقیم رایتل باید کمتر از 200 هزار تومان باشد.",
      "makeRightelDirectChargePrice price must be lower than 200 thousand Toman"
    );
  }

  return Object.freeze({
    getPrice: () => price,
    getType: () => "RightelDirectChargePrice",
  });
};
