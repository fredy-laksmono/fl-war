const mongoose = require("mongoose");
const userSchema = require("./User");
const raceSchema = require("./Race");

const User = mongoose.model("User", userSchema);
const Race = mongoose.model("Race", raceSchema);

module.exports = {
  User,
  Race
};
