const { DefenseUnit, Race } = require("../models");

const createDefenseUnit = async (req, res) => {
  const createData = await DefenseUnit.create(req.body);
  res.send(createData);
};

const getAllDefenseUnits = async (req, res) => {
  const data = await DefenseUnit.find();
  res.send(data);
};

const getAllDefenseUnitRace = async (req, res) => {
  const raceId = await Race.find({ name: `${req.params.race}` });
  const data = await DefenseUnit.find({ race_id: `${raceId[0]._id}` });
  res.send(data);
};

module.exports = {
  createDefenseUnit,
  getAllDefenseUnits,
  getAllDefenseUnitRace
};
