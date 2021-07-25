import mongoose from "mongoose";

const LoadoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  matchId: { type: String, required: true },
  primary: { type: String, required: true },
  secondary: { type: String, required: true },
  perks: { type: Array, required: true },
  extraPerks: { type: Array, required: true },
  killstreaks: { type: Array, required: true },
  tactical: { type: String, required: true },
  lethal: { type: String, required: true },
  kdRatio: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports =
  mongoose.models.Loadout || mongoose.model("Loadout", LoadoutSchema);
