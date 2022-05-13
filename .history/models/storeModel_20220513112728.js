var cachedDB = require("../db/");

/**
 * return all active products
 * @returns
 */
exports.index = function () {
  return cachedDB.getAllActiveProducts();
};
