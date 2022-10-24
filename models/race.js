const { Schema } = require("mongoose");

const raceSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    posterPath: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = raceSchema;
