const { Race } = require("../models");

const createRace = async (req, res) => {
  const createNewRace = await Race.create(req.body);
  res.send(createNewRace);
};

const getAllRace = async (req, res) => {
  const raceData = await Race.find();
  res.send(raceData);
};

module.exports = {
  createRace,
  getAllRace
};
