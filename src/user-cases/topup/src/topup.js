module.exports = function buildTopupBuilder({ topupAPI }) {
  if (!topupAPI) {
    throw new Error("buildTopupBuilder must have topupAPI");
  }
  return function topupBuilder({ operator_type, product_id }) {
    if (!product_id) {
      throw new Error("topupBuilder must have product_id");
    }

    return async function topup({ mobile, price, webservice_code }) {
      const result = await topupAPI({
        product_id,
        mobile,
        price,
        webservice_code,
        operator_type,
      });
      return result;
    };
  };
};
