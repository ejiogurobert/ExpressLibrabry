// var storeModel = require("../models/storeModel")

var allProducts = require("../db/inventories");

exports.index = function( req, res, next) {
    // res.send("This is all we have in store")
    const allProducts = storeModel.index()

    console.log(allProducts)
    // res.send(allProducts)
    res.render("allourproducts", { p :  allProducts})
}
exports.getAnItem = function (req, res) {
    const id = req.params.id;

    // const allProducts = storeModel.index();
    const newItem = allProducts.filter((product) => product.id === Number(id))
    return res.status(200).render('getitem', {success: true, item: newItem})
}