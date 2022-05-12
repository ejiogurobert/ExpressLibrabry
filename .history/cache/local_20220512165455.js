var inventories = require("../db/inventories");

function populateLocalS
if (localStorage.length === 0) {
  localStorage.setItem("cache", JSON.stringify(inventories));
}
