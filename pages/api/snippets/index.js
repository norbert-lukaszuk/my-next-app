import db from "../../../utils/db";
export default async function handler(req, res) {
  const myData = await db
    .collection("data")
    .doc("codeNotes")
    .listCollections()
    .then((resp) => {
      resp.forEach((item) => {
        const singleCollection = `data/codeNotes/${item._queryOptions.collectionId}`;
        db.collection(singleCollection)
          .get()
          .then((collection) => collection.forEach((doc) => [...doc.data()]));
        // .then((collection) => {
        //   collection.forEach((docs) => {
        //     return { id: docs.id };
        //   });
        //   return collection;
        // });
        return item;
      });
      // resp.map((coll) => coll._queryOptions.collectionId);
      return resp;
    });
  // console.log(myData);
  res.status(200).json(myData);
}
