module.exports = function buildPackageBuilder({
  packageAPI,
  findProductInOperatorProductListBuilder,
}) {
  if (!packageAPI) {
    throw new Error("buildPackageBuilder must have packageAPI");
  }

  if (!findProductInOperatorProductListBuilder) {
    throw new Error(
      "buildPackageBuilder must have findProductInOperatorProductListBuilder"
    );
  }

  return function packageBuilder({
    operator,
    operator_type,
    makeMobileNumber,
  }) {
    if (!operator) {
      throw new Error("packageBuilder must have operator");
    }

    if (!makeMobileNumber) {
      throw new Error("buildPackageBuilder must have makeMobileNumber");
    }

    const findProductInOperatorProductList =
      findProductInOperatorProductListBuilder({
        operator: operator,
      });

    return async function package({ product_id, mobile, webservice_code }) {
      const foundProduct = findProductInOperatorProductList({
        product_id,
      });

      const standardMobileNumber = makeMobileNumber({
        mobileNumber: mobile,
      }).getStandardMobileNumber();

      if (foundProduct) {
        const result = await packageAPI({
          product_id,
          mobile: standardMobileNumber,
          price: foundProduct.price,
          webservice_code,
          operator_type,
        });
        return result;
      } else {
        throw new Error(
          `سرویس با کد ${product_id} در لیست سرویس های فعال ${operator_type} وجود ندارد.`
        );
      }
    };
  };
};
