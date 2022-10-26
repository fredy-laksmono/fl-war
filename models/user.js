const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    deck_id: { type: Schema.Types.ObjectId, ref: "Deck", required: false }
  },
  { timestamps: true }
);

module.exports = userSchema;
