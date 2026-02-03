const { verifyAcessToken } = require("../utils/jwt");

const authenticate = (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) 
    return res.status(401).send("authorization header mission");


  const [ type , token ] = auth.split(" ")
  if( type !== "Bearer" ||  !token  )
        return res.status(401).json({ error : "error message "});
    
  try {

    const payload = verifyAcessToken(token); 
    req.user  = payload; ;
    next();

  } catch (err) {
    return res.status(401).send("invalid or expired token");
  }
};

module.exports = { authenticate };
