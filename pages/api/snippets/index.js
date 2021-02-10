import db from "../../../utils/db";
export default async function handler(req, res) {
  const snippets = [];
  const snap = await db.collection("gitSnippets").get();
  // .then((snap) =>
  //   snap.forEach((doc) => {
  //     snippets.push({ id: doc.id, ...doc.data() });
  //   })
  // );

  snap.forEach((doc) => {
    snippets.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  res.status(200).json(snippets);
}
