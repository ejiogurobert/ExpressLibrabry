var express = require('express');
var router = express.Router();


let storeController = require("../controllers/storeController")

router.get("/", storeController.index)

router.update("/product", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
