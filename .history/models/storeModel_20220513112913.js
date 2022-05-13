var cachedDB = require("../db/inventories");

/**
 * return all active products
 * @returns
 */
exports.index = function () {
  return store();
};
