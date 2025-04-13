module.exports = function buildCreateGetProductListByOperatorOptions({
  authorizedHeader,
}) {
  if (!authorizedHeader) {
    throw new Error(
      "buildCreateGetProductListByOperatorOptions must have authorizedHeader"
    );
  }

  return async function createGetProductListByOperatorOptions({ operator }) {
    if (!operator) {
      throw new Error(
        "createGetProductListByOperatorOptions must have operator"
      );
    }

    let jsonData = {
      table: "product",
      items: {
        operator: operator,
        pagination: "false",
      },
    };

    const body = JSON.stringify(jsonData);

    const options = {
      method: "POST",
      headers: authorizedHeader,
      body: body,
    };

    return options;
  };
};
