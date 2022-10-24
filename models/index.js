const mongoose = require("mongoose");
const userSchema = require("./User");
const raceSchema = require("./Race");
const attackUnitSchema = require("./AttackUnit");
const defenseUnitSchema = require("./DefenseUnit");

const User = mongoose.model("User", userSchema);
const Race = mongoose.model("Race", raceSchema);
const AttackUnit = mongoose.model("AttackUnit", attackUnitSchema);
const DefenseUnit = mongoose.model("DefenseUnit", attackUnitSchema);

module.exports = {
  User,
  Race,
  AttackUnit,
  DefenseUnit
};
