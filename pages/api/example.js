const admin = require("firebase-admin");

const serviceAccount = require("../../utils/db/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
let num = new Array();
db.collection("data")
  .doc("codeNotes")
  .listCollections()
  .then((resp) => resp.map((coll) => coll._queryOptions.collectionId))
  .then((arr) =>
    arr.forEach((doc) =>
      db
        .collection(`data/codeNotes/${doc}`)
        .get()
        .then((resp) =>
          resp.docs.forEach((snipp) => console.log(snipp.data().lang))
        )
    )
  );
// async function getData() {
//   try {
//     const collections = await db
//       .collection("data")
//       .doc("codeNotes")
//       .listCollections();

//     const docs = collections.map((doc) => doc._queryOptions.collectionId);
//     return docs;
//   } catch (err) {
//     console.log(err);
//   }
//   return docs;
// }
/* async function getDocs() {
  try {
    const allDocs = await docs.forEach(async function (doc) {
      const snipp = await db.collection(`data/codeNotes/${doc}`).get();
      // console.log(snipp.docs);
      return snipp;
    });
  } catch (err) {
    console.log(err);
  }
} */
