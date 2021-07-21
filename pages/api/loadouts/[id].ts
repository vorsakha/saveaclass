import dbConnect from "../../../utils/dbConnect";
const LoadoutModel = require("../../../models/LoadoutModel");

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "DELETE":
      // Delete loadout by id
      try {
        const loadout = await LoadoutModel.findById(id);

        await loadout.remove();
      } catch (error) {
        if (error) return res.status(400).send(error);
      }

      break;

    default:
      break;
  }
};
