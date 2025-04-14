module.exports = function buildTopupBuilder({ topupAPI }) {
  if (!topupAPI) {
    throw new Error("buildTopupBuilder must have topupAPI");
  }
  return function topupBuilder({ makePriceModel, operator_type, product_id }) {
    if (!makePriceModel) {
      throw new Error("topupBuilder must have makePriceModel");
    }

    if (!product_id) {
      throw new Error("topupBuilder must have product_id");
    }

    return async function topup({ mobile, price, webservice_code }) {
      const topupPriceModel = makePriceModel({ price });
      const result = await topupAPI({
        product_id,
        mobile,
        price: topupPriceModel.getPrice(),
        webservice_code,
        operator_type,
      });
      return result;
    };
  };
};
