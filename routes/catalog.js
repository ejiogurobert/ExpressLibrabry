var express = require('express');
var router = express.Router();

var bookController = require("../controllers/bookController")

  
  
 
//   router.get("/catalogs/:object", function(req,res,next){
//     const p = req.params.object
//     res.send(`Get the ${p} in catalog`)
//   })

router.get("/", function(req,res,next){
  res.send("Home of Cat")
})

/**
 * Retrieve all the books
 */
  router.get("/catalogs/books", bookController.book_list)
  
  router.post("/catalogs/books", bookController.book_create_post)
  
  router.post("/catalogs/:objects/update", bookController.book_update_post)
  
  /**
   * what the 
   */
  router.put("/catalogs/:object/:id", function(req,res,next){
    const p = req.params.object
    const pID = req.params.id
    res.send(`Update the ${p} with id : ${pID} in catalog`)
  
  })
  
  router.put("/catalogs/:objects/:id/update", function(req,res,next){
    const p = req.params.objects
    const pID = req.params.id
    res.send(`Update the ${p} with id : ${pID} in catalog`)
  
  })
  
  
  router.delete("/catalogs/:object/:id", function(req,res, next){
    const p = req.params.object
    const pID = req.params.id
    res.send(`Delete the ${p} with id : ${pID} in catalog`)
  })


  router.delete("/catalogs/:object/:id/delete", function(req,res, next){
    const p = req.params.object
    const pID = req.params.id
    res.send(`Delete the ${p} with id : ${pID} in catalog`)
  })

  
  // retrive all objects (books, genres) in catalogs 
  router.get("/catalogs/:object/:id", function(req,res,next){
    const p = req.params.object
    const pID = req.params.id
    res.send(`Get the ${p} with id : ${pID} in catalog`)
  })

  module.exports = router;
