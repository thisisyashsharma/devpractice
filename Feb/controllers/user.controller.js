const userServices = require("../services/user.service");

const getUser = (req, res) => {
  const user = userServices.getUser(req.params.id);
  res.send(user);
};

module.exports = { getUser };
