module.exports = function buildTopup({
  ESAJ_TOPUP_URL,
  createOptions,
  translateResponse,
}) {
  if (!ESAJ_TOPUP_URL) {
    throw new Error("buildTopup must have ESAJ_TOPUP_URL");
  }

  if (!createOptions) {
    throw new Error("buildTopup must have createOptions");
  }

  if (!translateResponse) {
    throw new Error("buildTopup must have translateResponse");
  }
  return async function topup({
    product_id,
    mobile,
    price,
    webservice_code,
    operator_type,
  }) {
    if (!product_id) {
      throw new Error("topup must have product_id");
    } else if (typeof product_id != "number") {
      throw new Error("topup > product_id must be number");
    }

    if (!mobile) {
      throw new Error("topup must have mobile");
    }

    if (!price) {
      throw new Error("topup must have price");
    } else if (typeof price != "number") {
      throw new Error("topup > price must be number");
    }

    if (!webservice_code) {
      throw new Error("topup must have webservice_code");
    }

    let options = await createOptions({
      product_id,
      mobile,
      price,
      webservice_code,
      operator_type,
    });

    const response = await fetch(ESAJ_TOPUP_URL, options);

    const requestResponse = await translateResponse({
      response: response,
    });

    return requestResponse;
  };
};
