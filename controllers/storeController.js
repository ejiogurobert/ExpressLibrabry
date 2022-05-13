var storeModel = require("../models/storeModel")

exports.index = function( req, res, next) {
    // res.send("This is all we have in store")
    const allProducts = storeModel.index()
    
    
   
    res.render("allourproducts", { p :  allProducts})
}


//DELETING AN ITEM.

exports.removeItem = function(req, res, next){
    const { id } = req.params
   
    const allProducts = storeModel.index()
   
    // const isProductAvailable = allProducts.find(p => p.id === Number(id))
   
    // console.log(isProductAvailable);

    // if(!isProductAvailable){

    //     return res
    //     .status(404)
    //     .render({success: false, message: `There is no item with id: ${id}`})
    // }
    const remainingProducts = allProducts.filter(product => product.id !== Number(id))
   
    console.log(remainingProducts);
    return res.status(200).render("remove", {success: true, product: remainingProducts})
}
































