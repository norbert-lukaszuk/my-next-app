import db from "../../utils/db";
export default async (req, res) => {
  const snap = await db.collection("gitSnippets").get();
  const snippets = [];
  snap.forEach((doc) => {
    snippets.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  res.status(200).json(snippets);
};
