module.exports = function makeIrancellDirectChargePrice({ price }) {
  if (!price) {
    throw new Error(
      "مبلغ شارژ مستقیم ایرانسل را وارد کنید",
      "makeIrancellDirectChargePrice must have price"
    );
  } else if (typeof price != "number") {
    throw new Error(
      "مبلغ شارژ مستقیم ایرانسل را به صورت عدد وارد کنید",
      "makeIrancellDirectChargePrice price must be number"
    );
  } else if (price < 5000) {
    throw new Error(
      "مبلغ شارژ مستقیم ایرانسل باید بیشتر از پانصد تومان باشد.",
      "makeIrancellDirectChargePrice price must be upper than 500 Toman"
    );
  } else if (price > 4000000) {
    throw new Error(
      "مبلغ شارژ مستقیم ایرانسل باید کمتر از 400 هزار تومان باشد.",
      "makeIrancellDirectChargePrice price must be lower than 400 thousand Toman"
    );
  }

  return Object.freeze({
    getPrice: () => price,
    getType: () => "IrancellDirectChargePrice",
  });
};
