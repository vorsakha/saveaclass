import { NextApiRequest, NextApiResponse } from "next";
import auth from "../../../../utils/authMiddleware";
import dbConnect from "../../../../utils/dbConnect";
const User = require("../../../../models/User");

dbConnect();

type LoadoutRequest = NextApiRequest & {
  user?: {
    id?: string;
  };
};

// @route api/users
// @access Public

export default auth(async (req: LoadoutRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    // @desc Get user by token
    case "GET":
      try {
        if (req.user) {
          const user = await User.findById(req.user.id).select("-password");

          return res.send(user);
        }

        return res.json({ msg: "No token provided" });
      } catch (error) {
        if (error) return res.status(400).send(error);
      }

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
});
