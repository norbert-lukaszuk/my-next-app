import db from "../../../utils/db";
export default async function handler(req, res) {
  const collections = await db
    .collection("data")
    .doc("codeNotes")
    .listCollections();

  const collectionId = collections.map(
    (collection) => collection._queryOptions.collectionId
  );
  const getAllCollections = async () => {
     collectionId.forEach((doc) => {
     let arr = 
     await db.collection(doc)
        .get()
        .then((singleCollection) => arr.push(singleCollection));
    });
    return arr;
  };
  const allColletions = getAllCollections();
  // const snap = await db.collection("data/codeNotes/CSS").get();

  // const snippets = snap.docs.map((snap) => ({
  //   id: snap.id,
  //   ...snap.data(),
  // }));
  res.status(200).json(allColletions);
}
