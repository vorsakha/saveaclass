import dbConnect from "../../../utils/dbConnect";
const UserModel = require("../../../models/UserModel");
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    // Log user
    case "POST":
      try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

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

            jwt.sign(
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
      } catch (error) {
        if (error) return res.status(400).send(error);
      }
      break;

    default:
      break;
  }
};
