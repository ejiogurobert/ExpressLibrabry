var inventories = require("../db/inventories");

function 
if (localStorage.length === 0) {
  localStorage.setItem("cache", JSON.stringify(inventories));
}
