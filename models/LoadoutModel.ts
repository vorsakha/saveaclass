import mongoose from "mongoose";

const LoadoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  primary: { type: String, required: true },
  secondary: { type: String, required: true },
  perks: { type: Array, required: true },
  tactical: { type: String, required: true },
  lethal: { type: String, required: true },
  kdRatio: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const model = mongoose.model("Loadout", LoadoutSchema);

module.exports = model;
