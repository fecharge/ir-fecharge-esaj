const buildPackageBuilder = require("./src/package");

module.exports = function ({
  packageAPI,
  findProductInOperatorProductListBuilder,
  makeMobileNumber,
}) {
  const packageBuilder = buildPackageBuilder({
    packageAPI,
    findProductInOperatorProductListBuilder,
    makeMobileNumber,
  });

  return packageBuilder;
};
