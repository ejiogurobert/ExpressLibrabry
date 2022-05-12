var inventories = require("../db/inventories");

function populateLocsl
if (localStorage.length === 0) {
  localStorage.setItem("cache", JSON.stringify(inventories));
}
