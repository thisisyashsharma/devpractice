

const express = require("express"); 
const { getLogin } = require("../controllers/user.controller");

const router = express.Router(); 

router.post( "/login", getLogin ); 

module.exports =  router; 