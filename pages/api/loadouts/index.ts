import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import dbConnect from "../../../utils/dbConnect";
const Loadout = require("../../../models/Loadout");
import auth from "../../../utils/authMiddleware";

//Types
type NextApiRequestWithUser = NextApiRequest & {
  user?: {
    id: string;
  };
};

dbConnect();

// @route api/loadouts
// @access Public

export default auth(
  async (req: NextApiRequestWithUser, res: NextApiResponse) => {
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

          return mongoose.connection.close();
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

          return mongoose.connection.close();
        } catch (error) {
          if (error) return res.status(400).send(error);
        }
        break;

      default:
        res.status(400).json({ msg: "Wrong Method." });
        break;
    }
  }
);
