import dbConnect from "../../../utils/dbConnect";
const LoadoutModel = require("../../../models/LoadoutModel");

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      // Create favorite loadout
      try {
        const { primary, secondary, perks, tactical, lethal, kdRatio } =
          req.body;

        const newLoadout = new LoadoutModel({
          primary,
          secondary,
          perks,
          tactical,
          lethal,
          kdRatio,
        });

        // Save loadout
        const loadout = await newLoadout.save();

        res.send(loadout);
      } catch (error) {
        if (error) return res.status(400).send(error);
      }

      break;
    case "GET":
      // Get all loadouts
      try {
        const loadouts = await LoadoutModel.find().sort({ date: -1 });
      } catch (error) {
        if (error) return res.status(400).send(error);
      }
      break;

    default:
      break;
  }
};
