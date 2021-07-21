import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import dbConnect from "../../../utils/dbConnect";
const User = require("../../../models/User");

dbConnect();

// @route api/auth
// @access Public

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { email, password } = req.body;

  switch (method) {
    case "POST":
      // @desc Log user
      try {
        const user = await User.findOne({ email });

        if (!user) {
          res.status(401).json({ errors: [{ msg: "Invalid Credentials." }] });
          return;
        }

        // If user found check if password matches
        compare(password, user.password, function (err, result) {
          if (!result || err) {
            res.status(401).json({ errors: [{ msg: "Invalid Credentials." }] });
          } else {
            // Return jsonwebtoken
            const payload = {
              user: {
                id: user.id,
              },
            };

            sign(
              payload,
              process.env.JWT_SECRET as string,
              { expiresIn: 3600 },
              (err: any, token) => {
                if (err) throw err;
                res.json({ user: user.email, token });
              }
            );
          }
        });

        return mongoose.connection.close();
      } catch (error) {
        if (error) return res.status(400).send(error);
      }
      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
};
