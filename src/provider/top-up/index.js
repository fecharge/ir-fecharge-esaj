const buildTopup = require("./src/topup");
const translateTopupResponse = require("./src/translate-topup-response");
const buildCreateTopupOptions = require("./src/create-topup-options");

module.exports = function ({ ESAJ_TOPUP_URL, authorizedHeader }) {
  const createTopupOptions = buildCreateTopupOptions({ authorizedHeader });
  const topup = buildTopup({
    ESAJ_TOPUP_URL,
    createOptions: createTopupOptions,
    translateResponse: translateTopupResponse,
  });

  return topup;
};
