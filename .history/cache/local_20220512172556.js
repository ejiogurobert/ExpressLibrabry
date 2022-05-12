var inventories = require("../db/inventories");

function populateLocalStorage() {
  if (Window.localStorage.length === 0) {
    Window.localStorage.setItem("cache", JSON.stringify(inventories));
  }
}

function getAllActiveProducts() {
  populateLocalStorage();
  return JSON.parse(Window. localStorage.getItem("cache")).filter(
    (product) => product.active === true
  );
}

module.exports = { getAllActiveProducts };
