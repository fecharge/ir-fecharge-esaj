module.exports = function buildCreateTopupOptions({ authorizedHeader }) {
  if (!authorizedHeader) {
    throw new Error("buildCreateTopupOptions must have authorizedHeader");
  }

  return async function createTopupOptions({
    product_id,
    mobile,
    price,
    webservice_code,
    operator_type,
  }) {
    if (!product_id) {
      throw new Error("createTopupOptions must have product_id");
    } else if (typeof product_id != "number") {
      throw new Error("createTopupOptions > product_id must be number");
    }

    if (!mobile) {
      throw new Error("createTopupOptions must have mobile");
    }

    if (!price) {
      throw new Error("createTopupOptions must have price");
    } else if (typeof price != "number") {
      throw new Error("createTopupOptions > price must be number");
    }

    if (!webservice_code) {
      throw new Error("createTopupOptions must have webservice_code");
    }

    let jsonData = {
      product_id,
      mobile,
      price,
      webservice_code,
    };

    if (operator_type) {
      jsonData.operator_type = operator_type;
    }

    const body = JSON.stringify(jsonData);

    const options = {
      method: "POST",
      headers: authorizedHeader,
      body: body,
    };

    return options;
  };
};
