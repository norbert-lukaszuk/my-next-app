import db from "../../../utils/db";
export default async function handler(req, res) {
  const snap = await db.collection("data/codeNotes/CSS").get();

  const snippets = snap.docs.map((snap) => ({
    id: snap.id,
    ...snap.data(),
  }));
  res.status(200).json(snippets);
}
