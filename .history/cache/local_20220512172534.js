var inventories = require("../db/inventories");

function populateLocalStorage() {
  if (Win localStorage.length === 0) {
    localStorage.setItem("cache", JSON.stringify(inventories));
  }
}

function getAllActiveProducts() {
  populateLocalStorage();
  return JSON.parse(localStorage.getItem("cache")).filter(
    (product) => product.active === true
  );
}

module.exports = { getAllActiveProducts };
