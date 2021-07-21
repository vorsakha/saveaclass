import { verify } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

//Types
type NextApiRequestWithUser = NextApiRequest & {
  user?: {
    id: string;
  };
};
type WithUser = {
  user: {
    id: string;
  };
};

const auth =
  (fn: NextApiHandler<WithUser>) =>
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

      // Save user ID on req.user
      req.user = decoded.user;

      return await fn(req, res);
    } catch (err) {
      return res.status(401).json({ msg: "Token is not valid" });
    }
  };

export default auth;
