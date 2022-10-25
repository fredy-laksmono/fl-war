const { Schema } = require("mongoose");

const deckSchema = new Schema(
  {
    race_id: { type: Schema.Types.ObjectId, ref: "Race", required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    attack1_id: {
      type: Schema.Types.ObjectId,
      ref: "AttackUnit",
      required: true
    },
    attack2_id: {
      type: Schema.Types.ObjectId,
      ref: "AttackUnit",
      required: true
    },
    attack3_id: {
      type: Schema.Types.ObjectId,
      ref: "AttackUnit",
      required: true
    },
    defense1_id: {
      type: Schema.Types.ObjectId,
      ref: "DefenseUnit",
      required: true
    },
    defense2_id: {
      type: Schema.Types.ObjectId,
      ref: "DefenseUnit",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = deckSchema;
