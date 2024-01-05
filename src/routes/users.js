const express = require("express");
const router = express.Router();
const userAutorization = require("../middlewares/userAutorization")
const {admin} = require("../controllers/userControllers")

router.get("/admin", userAutorization, admin);


module.exports = router