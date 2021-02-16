import db from "../../../utils/db";
export default async function handler(req, res) {
  const snap = await db.collection(`data/codeNotes/${req.query.id}`).get();
  const data = { ...snap.docs };

  res.status(200).json(data);
}
