const buildClearMemoryCache = require("./src/clear-memory-cache");

module.exports = function ({ cacheStorage }) {
  const clearMemoryCache = buildClearMemoryCache({ cacheStorage });

  return clearMemoryCache;
};
