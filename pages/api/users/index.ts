import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { hash } from "bcrypt";
import dbConnect from "../../../utils/dbConnect";
const User = require("../../../models/User");

dbConnect();

// @route api/users
// @access Public

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST":
      // @desc Create user
      try {
        const userExists = await User.findOne({ email: req.body.email });

        if (userExists) {
          res.status(400).send("User already exists.");
          return;
        }

        hash(req.body.password, 10, async function (err: any, hash: string) {
          const { email, gamertag, platform } = req.body;

          const newUser = new User({
            email,
            password: hash,
            gamertag,
            platform,
            admin: req.body.admin && req.body.admin,
          });

          const user = await newUser.save();

          res.send(user);

          return mongoose.connection.close();
        });
      } catch (error) {
        if (error) return res.status(400).send(error);
      }
      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
};
