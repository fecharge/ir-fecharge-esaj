module.exports = function makeIrancellPayBillPrice({ price }) {
  if (!price) {
    throw new Error(
      "مبلغ پرداخت قبض ایرانسل را وارد کنید",
      "makeIrancellDirectChargePrice must have price"
    );
  } else if (typeof price != "number") {
    throw new Error(
      "مبلغ پرداخت قبض ایرانسل را به صورت عدد وارد کنید",
      "makeIrancellDirectChargePrice price must be number"
    );
  }

  return Object.freeze({
    getPrice: () => price,
    getType: () => "IrancellPayBillPrice",
  });
};
