const store_items = require("../db/inventories");

/**
 * return all active products
 * @returns
 */
exports.index = function () {
  return store_items();
};
