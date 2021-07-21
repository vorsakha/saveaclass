import { NextApiRequest, NextApiResponse } from "next";
// import mongoose from "mongoose";
import auth from "../../../utils/authMiddleware";
import dbConnect from "../../../utils/dbConnect";
const User = require("../../../models/User");

dbConnect();

// @route api/users/:id
// @access Private

export default auth(async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "DELETE":
      // @desc Delete user by id
      try {
        const user = await User.findById(id);

        if (!user) {
          return res.status(400).json({ error: "No user found." });
        }

        await user.remove();

        res.json({ msg: "User removed." });

        return;
      } catch (error) {
        if (error) console.log(error);
        if (error) return res.status(400).send("Server Error");
      }

      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
});
