import db from "../../../utils/db";
export default async function handler(req, res) {
  const snap = await db.collection("data").doc("codeNotes").listCollections();
  const data = snap.map((doc) => doc._queryOptions.collectionId);

  //   .doc(req.query.id)
  res.status(200).json(data);
}
