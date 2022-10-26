const mongoose = require("mongoose");
const userSchema = require("./user");
const raceSchema = require("./race");
const attackUnitSchema = require("./attackUnit");
const defenseUnitSchema = require("./defenseUnit");
const deckSchema = require("./deck");

const User = mongoose.model("User", userSchema);
const Race = mongoose.model("Race", raceSchema);
const AttackUnit = mongoose.model("AttackUnit", attackUnitSchema);
const DefenseUnit = mongoose.model("DefenseUnit", attackUnitSchema);
const Deck = mongoose.model("Deck", deckSchema);

module.exports = {
  User,
  Race,
  AttackUnit,
  DefenseUnit,
  Deck
};
