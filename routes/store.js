var express = require('express');
var router = express.Router();


let storeController = require("../controllers/storeController")

router.get("/", storeController.index)
router.delete("/:id/", storeController.removeItem)

router.put("/", storeController.updateProducts);

module.exports = router;
