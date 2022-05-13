var cachedDB = require(../);

/**
 * return all active products
 * @returns
 */
exports.index = function () {
  return cachedDB.getAllActiveProducts();
};
