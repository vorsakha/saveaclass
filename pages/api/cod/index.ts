import { NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import auth from "../../../utils/authMiddleware";
const API = require("call-of-duty-api")();

dbConnect();

const token = {
  sso: process.env.TOKEN_SSO,
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
        await API.loginWithSSO(token.sso);

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
