
const express = require("express");
const { authenticate } = require("../middlewares/auth.middleware");
const { profile } = require("../controllers/user.controller");

const router = express.Router(); 

router.get("/user", authenticate, profile )

module.exports = router ;