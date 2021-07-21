import dbConnect from "../../utils/dbConnect";

// export default function helloAPI(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

dbConnect();

export default async (req, res) => {
  res.json({ test: "test" });
};
