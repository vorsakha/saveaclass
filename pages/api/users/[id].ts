import dbConnect from "../../../utils/dbConnect";
const UserModel = require("../../../models/UserModel");

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "DELETE":
      // Delete user by id
      try {
        const user = await UserModel.findById(id);

        await user.remove();
      } catch (error) {
        if (error) return res.status(400).send(error);
      }

      break;

    default:
      break;
  }
};
