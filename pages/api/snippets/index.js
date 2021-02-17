import db from "../../../utils/db";
export default async function handler(req, res) {
  const snap = await db.collection("snippets").get();

  const snippets = snap.docs.map((snap) => ({
    id: snap.id,
    date: snap.data().created.toDate(),
    ...snap.data(),
  }));
  res.status(200).json(snippets);
}
