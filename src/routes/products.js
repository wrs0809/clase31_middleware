const express = require("express");
const router = express.Router();
const {products} = require("../controllers/productsControllers")

router.get("/", products);

module.exports = router