var express = require('express');
var router = express.Router();


// router.get("/", function(req,res,next){
//   res.redirect
// })
// retrive all catalogs
router.get("/catalogs", function(req,res,next){
  res.send("Home Of Catalogs")
})

/* GET home page. */
router.get('/rob', function(req, res, next) {
  console.log( req )
  res.render('index', { title: 'Express' });
});
router.get('/williams', function(req, res, next) {
  console.log( res )
  // res.render('index', { title: 'Express' });
  const a = [
    {
      l : 6
    },
    {
      p : 9
    }
  ]
  res.send(a)
});
router.get('/palour', function(req, res, next) {
  res.render('index', { title: 'Kitchen' });
});

router.get("/customers", function( req,res, next) {
  res.send("retrive all cusomters")
})

router.post("/customers", function(req, res, next){
  res.send(" create a new customer ")
})

router.delete("/customers", function(req, res, next){
  res.send("delete all customers")
})

router.put("customers", function(){

})


router.put("/customers/:id", function(req,res, next) {
  const id = req.params.id

})


router.get("/customers/search", function(req,res,next){
  const q = req.query
  const p = req.params
  res.send(q)
})
router.get("/customers/:id", function( req, res, next) {
  const id = req.params.id
  // query a db
  res.send(" fetch data for cutomer with id ==> " + id)
})

module.exports = router;


// req == request ( what does the client want ) - question
/**
 * object
 * any information about the client 
 */
// res = response ( what the server is giving to ) -  answer
/**
 * object
 *  all information about the reply is inside this res
 */
// next = next
/**
 * function
 * what should happen next
 */

/**
 * What is a middleware
 * 
 * -set of things to be performed
 */