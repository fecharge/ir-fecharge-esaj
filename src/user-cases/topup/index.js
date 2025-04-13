const buildTopupBuilder = require("./src/topup");

module.exports = function ({ topupAPI }) {
  const topupBuilder = buildTopupBuilder({
    topupAPI,
  });

  return topupBuilder;
};
