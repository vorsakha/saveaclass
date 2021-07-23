import { NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
const Loadout = require("../../../models/Loadout");
import auth from "../../../utils/authMiddleware";

dbConnect();

// @route api/loadouts
// @access Public

export default auth(async (req: any, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST":
      // @desc Create favorite loadout
      try {
        const { primary, secondary, perks, tactical, lethal, kdRatio } =
          req.body;

        const newLoadout = new Loadout({
          user: req.user.id,
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

        return;
      } catch (error) {
        if (error) return res.status(400).send(error);
      }

      break;
    case "GET":
      // @desc Get all loadouts
      try {
        const loadouts = await Loadout.find({ user: req.user.id }).sort({
          date: -1,
        });

        res.send(loadouts);

        return;
      } catch (error) {
        if (error) return res.status(400).send(error);
      }
      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
});
