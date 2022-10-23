const { Schema } = require("mongoose");

const attackUnitSchema = new Schema(
  {
    race_id: { type: Schema.Types.ObjectId, ref: "Race", required: true },
    name: { type: String, required: true },
    maxHealth: { type: Number, required: true },
    health: { type: Number, required: true },
    damage: { type: Number, required: true },
    armor: { type: Number, required: true },
    maxShield: { type: Number, required: true },
    shield: { type: Number, required: true },
    regen: { type: Boolean, required: true },
    cost: { type: Number, required: true },
    buildTime: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = attackUnitSchema;
