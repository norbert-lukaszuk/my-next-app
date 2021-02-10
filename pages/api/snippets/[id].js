import db from "../../../utils/db";
export default async function handler(req, res) {
  const snap = await db.collection("gitSnippets").doc(req.query.id).get();

  const snippet = { id: snap.id, ...snap.data() };
  // const snippets = [];
  // snap.forEach((doc) => {
  //   snippets.push({
  //     id: doc.id,
  //     ...doc.data(),
  //   });
  // });
  res.status(200).json(snippet);
}
