import mongoose from "mongoose";

const schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  gamertag: { type: String, required: true },
  platform: { type: String, required: true },
  admin: { type: Boolean, default: false },
});

const model = mongoose.model("User", schema);

module.exports = model;
