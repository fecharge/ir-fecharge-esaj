module.exports = function buildClearMemoryCache({ cacheStorage }) {
  if (!cacheStorage) {
    throw new Error("buildClearMemoryCache must have cacheStorage");
  }

  return function clearMemoryCache() {
    cacheStorage = [];
  };
};
