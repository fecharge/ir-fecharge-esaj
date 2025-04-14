module.exports = function makeMciDirectChargePrice({ price }) {
  if (!price) {
    throw new Error(
      "مبلغ شارژ مستقیم همراه اول را وارد کنید",
      "makeMciDirectChargePrice must have price"
    );
  } else if (typeof price != "number") {
    throw new Error(
      "مبلغ شارژ مستقیم همراه اول را به صورت عدد وارد کنید",
      "makeMciDirectChargePrice price must be number"
    );
  } else if (price < 50000) {
    throw new Error(
      "مبلغ شارژ مستقیم همراه اول باید بیشتر از 5 هزار تومان باشد.",
      "makeMciDirectChargePrice price must be upper than 5 thousand Toman"
    );
  } else if (price > 5000000) {
    throw new Error(
      "مبلغ شارژ مستقیم همراه اول باید کمتر از 500 هزار تومان باشد.",
      "makeMciDirectChargePrice price must be lower than 500 thousand Toman"
    );
  }

  return Object.freeze({
    getPrice: () => price,
    getType: () => "MciDirectChargePrice",
  });
};
