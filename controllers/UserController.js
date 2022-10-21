const { User } = require("../models");

const createUser = async (req, res) => {
  console.log("createUser controller called");
  const createNewUser = await User.create(req.body);
  res.send(createNewUser);
  //res.send(req.body);
};

module.exports = {
  createUser
};
