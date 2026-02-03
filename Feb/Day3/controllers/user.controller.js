const userService = require("../services/user.service");

const { signAccessToken } = require("../utils/jwt");

const getLogin = (req, res) => {
  const userId = req.body.userId;

  if (!userId) return res.status(401).json({ error: " userId required " });

  const token = signAccessToken({ userId });

  res.json({ token });
};

const profile = (req, res) => {
   const user = userService.getUser(req.user.userId);
  return res.json(user); 
};

module.exports = { getLogin, profile };
