const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    deck_id: { type: Boolean }
  },
  { timestamps: true }
);

module.exports = userSchema;
