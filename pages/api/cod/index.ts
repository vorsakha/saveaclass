import { NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import auth from "../../../utils/authMiddleware";
const API = require("call-of-duty-api")();

dbConnect();

const activision = {
  email: process.env.ACTIVISION_EMAIL,
  password: process.env.ACTIVISION_PASSWORD,
};

// @route api/loadouts
// @access Public

export default auth(async (req: any, res: NextApiResponse) => {
  const { method } = req;
  const { gamertag, platform } = req.body;

  switch (method) {
    case "POST":
      // @desc Get mp data
      try {
        const logged = await API.isLoggedIn();

        if (!logged) {
          await API.login(activision.email, activision.password);
          console.log("Connected to Activision.");
        }

        const data = await API.MWcombatmp(gamertag, platform);

        res.send(data);
        return;
      } catch (error) {
        if (error) console.error(error);
        if (error) return res.status(400).send(error);
      }
      break;

    default:
      res.status(400).json({ msg: "Wrong Method." });
      break;
  }
});
