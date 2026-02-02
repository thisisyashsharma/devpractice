const userServices = require("../services/user.service");
 
const jwt = require("jsonwebtoken");
const SECRET = "superSecret";


const getLogin = (req, res) => {
    const userId = req.body.userId;
    
    const token = jwt.sign({ userId }, SECRET, {
    expiresIn: "10m",
});

res.json({ token });
};

const getProfile = (req, res) => {
  const user = userServices.getUser(req.body.userId);
  
  res.send(user);
};

module.exports = { getLogin, getProfile };
