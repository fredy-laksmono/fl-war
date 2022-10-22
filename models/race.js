const { Schema } = require("mongoose");

const raceSchema = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = raceSchema;
