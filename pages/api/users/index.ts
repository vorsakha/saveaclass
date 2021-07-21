import dbConnect from "../../../utils/dbConnect";
const UserModel = require("../../../models/UserModel");
import { hash } from "bcrypt";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      // Create user
      try {
        const userExists = await UserModel.findOne({ email: req.body.email });

        if (userExists) {
          res.status(400).send("User already exists.");
          return;
        }

        hash(req.body.password, 10, async function (err, hash) {
          const { email, gamertag, platform } = req.body;

          const newUser = new UserModel({
            email,
            password: hash,
            gamertag,
            platform,
          });

          const user = await newUser.save();

          res.send(user);
        });
      } catch (error) {
        if (error) return res.status(400).send(error);
      }
      break;

    default:
      break;
  }
};
