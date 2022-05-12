var inventories = require("../db/inventories");

if (localStorage.length === 0) {
  localStorage.setItem("cache", JSON.stringify(inventories));
}
