module.exports = function buildCreatePackageOptions({ authorizedHeader }) {
  if (!authorizedHeader) {
    throw new Error("buildCreatePackageOptions must have authorizedHeader");
  }

  return async function createPackageOptions({
    product_id,
    mobile,
    price,
    webservice_code,
    operator_type,
  }) {
    if (!product_id) {
      throw new Error("createPackageOptions must have product_id");
    } else if (typeof product_id != "number") {
      throw new Error("createPackageOptions > product_id must be number");
    }

    if (!mobile) {
      throw new Error("createPackageOptions must have mobile");
    }

    if (!price) {
      throw new Error("createPackageOptions must have price");
    } else if (typeof price != "number") {
      throw new Error("createPackageOptions > price must be number");
    }

    if (!webservice_code) {
      throw new Error("createPackageOptions must have webservice_code");
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
