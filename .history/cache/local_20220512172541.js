var inventories = require("../db/inventories");

function populateLocalStorage() {
  if (Window.localStorage.length === 0) {
    WindlocalStorage.setItem("cache", JSON.stringify(inventories));
  }
}

function getAllActiveProducts() {
  populateLocalStorage();
  return JSON.parse(localStorage.getItem("cache")).filter(
    (product) => product.active === true
  );
}

module.exports = { getAllActiveProducts };