import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

//Types
interface NextApiRequestWithUser extends NextApiRequest {
  user: {
    id: string;
  };
}

const auth =
  (fn: NextApiHandler) =>
  async (req: NextApiRequestWithUser, res: NextApiResponse) => {
    try {
      //-> Get token from header
      const token = req.headers.authorization;

      //-> Check if no token
      if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
      }

      //-> Verify token

      const decoded: any = verify(token, process.env.JWT_SECRET as string);

      // Save logged user ID on req.user
      req.user = decoded.user;

      return await fn(req, res);
    } catch (err) {
      return res.status(401).json({ msg: "Token is not valid" });
    }
  };

export default auth;
