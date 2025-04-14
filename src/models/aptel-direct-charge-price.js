module.exports = function makeAptelDirectChargePrice({ price }) {
  if (!price) {
    throw new Error(
      "مبلغ شارژ مستقیم آپتل را وارد کنید",
      "makeAptelDirectChargePrice must have price"
    );
  } else if (typeof price != "number") {
    throw new Error(
      "مبلغ شارژ مستقیم آپتل را به صورت عدد وارد کنید",
      "makeAptelDirectChargePrice price must be number"
    );
  } else if (price < 10000) {
    throw new Error(
      "مبلغ شارژ مستقیم آپتل باید بیشتر از هزار تومان باشد.",
      "makeAptelDirectChargePrice price must be upper than 500 Toman"
    );
  } else if (price > 2000000) {
    throw new Error(
      "مبلغ شارژ مستقیم آپتل باید کمتر از 200 هزار تومان باشد.",
      "makeAptelDirectChargePrice price must be lower than 200 thousand Toman"
    );
  }

  return Object.freeze({
    getPrice: () => price,
    getType: () => "AptelDirectChargePrice",
  });
};
