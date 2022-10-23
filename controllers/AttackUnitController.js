const { AttackUnit } = require("../models");

const createAttackUnit = async (req, res) => {
  const createData = await AttackUnit.create(req.body);
  res.send(createData);
};

const getAllAttackUnits = async (req, res) => {
  const data = await AttackUnit.find();
  res.send(data);
};

module.exports = {
  createAttackUnit,
  getAllAttackUnits
};
