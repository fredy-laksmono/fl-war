const { AttackUnit, Race } = require("../models");

const createAttackUnit = async (req, res) => {
  const createData = await AttackUnit.create(req.body);
  res.send(createData);
};

const getAllAttackUnits = async (req, res) => {
  const data = await AttackUnit.find();
  res.send(data);
};

const getAllAttackUnitRace = async (req, res) => {
  const raceId = await Race.find({ name: `${req.params.race}` });
  const data = await AttackUnit.find({ race_id: `${raceId[0]._id}` });
  res.send(data);
};

module.exports = {
  createAttackUnit,
  getAllAttackUnits,
  getAllAttackUnitRace
};
