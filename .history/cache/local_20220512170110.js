var inventories = require("../db/inventories");

function populateLocalStorage(){
    if (localStorage.length === 0) {
    localStorage.setItem("cache", JSON.stringify(inventories));
    }
}

function getAllActiveProducts(){
    populateLocalStorage()
    localStorage.getItem("cache")
}

module.exports = { populateLocalStorage }
