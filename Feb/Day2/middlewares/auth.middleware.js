const jwt = require("jsonwebtoken");
const SECRET = "superSecret";

const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).send("authorization headers missing ");

  try {
    const token = auth.split(" ")[1]; // removes "Bearer "
    const payLoad = jwt.verify(token, SECRET);
    req.user = payLoad;
    next();
  } catch (err) {
    return res.status(401).send("Invalid or expired token");
  }
};

module.exports = { authenticate };
