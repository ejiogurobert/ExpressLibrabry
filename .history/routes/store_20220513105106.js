var express = require('express');
var router = express.Router();


let storeController = require("../controllers/storeController")

router.get("/", storeController.index)

router.update("/", function (req, res, next) {
  res.send("respond with a resource");
}storeController.updateProducts);

module.exports = router;
