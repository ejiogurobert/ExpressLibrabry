const store_items = require("../db/inventories");
var cachedDB = require("../db/inventories");

/**
 * return all active products
 * @returns
 */
exports.index = function () {
  return cacstore_items();
};
