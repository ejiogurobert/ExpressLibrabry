var storeModel = require("../models/storeModel")

exports.index = function( req, res, next) {
    // res.send("This is all we have in store")
    const allProducts = storeModel.index()

    console.log(allProducts)
    // res.send(allProducts)
    res.render("allourproducts", { p :  allProducts})
}

exportd.updateProducts = function(req, res, next )