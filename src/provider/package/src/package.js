module.exports = function buildPackage({
  ESAJ_PACKAGE_URL,
  createOptions,
  translateResponse,
}) {
  if (!ESAJ_PACKAGE_URL) {
    throw new Error("buildPackage must have ESAJ_PACKAGE_URL");
  }

  if (!createOptions) {
    throw new Error("buildPackage must have createOptions");
  }

  if (!translateResponse) {
    throw new Error("buildPackage must have translateResponse");
  }
  return async function package({
    product_id,
    mobile,
    price,
    webservice_code,
    operator_type,
  }) {
    if (!product_id) {
      throw new Error("package must have product_id");
    } else if (typeof product_id != "number") {
      throw new Error("package > product_id must be number");
    }

    if (!mobile) {
      throw new Error("package must have mobile");
    }

    if (!price) {
      throw new Error("package must have price");
    } else if (typeof price != "number") {
      throw new Error("package > price must be number");
    }

    if (!webservice_code) {
      throw new Error("package must have webservice_code");
    }

    const options = await createOptions({
      product_id,
      mobile,
      price,
      webservice_code,
      operator_type,
    });

    const response = await fetch(ESAJ_PACKAGE_URL, options);

    const requestResponse = await translateResponse({
      response: response,
    });

    return requestResponse;
  };
};
