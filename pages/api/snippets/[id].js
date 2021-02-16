import db from "../../../utils/db";
export default async function handler(req, res) {
  const snap = await db.collection("snippets").doc(req.query.id).get();
  const data = { id: snap.id, ...snap.data() };

  res.status(200).json(data);
}
