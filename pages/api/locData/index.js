import { data } from "../../../data";
export default async (req, res) => {
  res.status(200).json(data);
};
