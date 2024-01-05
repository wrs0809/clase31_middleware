const express = require("express");
const router = express.Router();
const {admin} = require("../controllers/userControllers")

router.get("/admin", admin);

module.exports = router