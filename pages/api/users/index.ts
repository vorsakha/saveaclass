import { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import dbConnect from "../../../utils/dbConnect";
const User = require("../../../models/User");

dbConnect();

type LoadoutRequest = NextApiRequest & {
  user: {
    id: string;
  };
};

// @route api/users
// @access Public

export default async (req: LoadoutRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    // @desc Create user
    case "POST":
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

          return;
        });
      } catch (error) {
        if (error) return res.status(400).send(error);
      }
      break;

    // @desc Get user by token
    case "GET":
      try {
        const user = await User.findById(req.user.id).select("-password");

        res.json(user);
      } catch (error) {
        if (error) return res.status(400).send(error);
      }

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
};
