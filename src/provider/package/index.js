const buildPackage = require("./src/package");
const buildCreatePackageOptions = require("./src/create-package-options");
const translatePackageResponse = require("./src/translate-package-response");

module.exports = function ({ ESAJ_PACKAGE_URL, authorizedHeader }) {
  const createPackageOptions = buildCreatePackageOptions({ authorizedHeader });
  const package = buildPackage({
    ESAJ_PACKAGE_URL,
    createOptions: createPackageOptions,
    translateResponse: translatePackageResponse,
  });

  return package;
};
