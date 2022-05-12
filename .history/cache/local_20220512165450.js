var inventories = require("../db/inventories");

function populate
if (localStorage.length === 0) {
  localStorage.setItem("cache", JSON.stringify(inventories));
}
