const { User } = require("../models");

const createUser = async (req, res) => {
  const createNewUser = await User.create(req.body);
  res.send(createNewUser);
};

const getUser = async (req, res) => {
  const userData = await User.findById(req.params.userId);
  res.send(userData);
};

module.exports = {
  createUser,
  getUser
};
