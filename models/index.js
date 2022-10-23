const mongoose = require("mongoose");
const userSchema = require("./User");
const raceSchema = require("./Race");
const attackUnitSchema = require("./AttackUnit");

const User = mongoose.model("User", userSchema);
const Race = mongoose.model("Race", raceSchema);
const AttackUnit = mongoose.model("AttackUnit", attackUnitSchema);

module.exports = {
  User,
  Race,
  AttackUnit
};
