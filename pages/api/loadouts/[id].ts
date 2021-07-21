import { NextApiRequest, NextApiResponse } from "next";
// import mongoose from "mongoose";
import auth from "../../../utils/authMiddleware";
import dbConnect from "../../../utils/dbConnect";
const Loadout = require("../../../models/Loadout");

dbConnect();

// @route api/loadouts/:id
// @access Private

export default auth(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "DELETE":
      // @desc Delete loadout by id
      try {
        const loadout = await Loadout.findById(id);

        if (!loadout) {
          return res.status(404).json({ msg: "Loadout not found." });
        }

        await loadout.remove();

        res.json({ msg: "Loadout Removed" });

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
