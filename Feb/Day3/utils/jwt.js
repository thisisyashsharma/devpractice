
const jwt = require("jsonwebtoken"); 

const EXPIRES_IN = "10m"; 
const SECRET = "somethingCooking"; 

const signAccessToken = (payload ) =>{
    return jwt.sign(payload, SECRET, {expiresIn: EXPIRES_IN });
}

const verifyAcessToken = (token ) =>{
    return jwt.verify(token, SECRET); 
}

module.exports = {
    signAccessToken,
    verifyAcessToken,
}