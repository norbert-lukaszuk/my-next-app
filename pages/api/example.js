const admin = require("firebase-admin");

const serviceAccount = require("../../utils/db/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function putData() {
  const data = {
    code:
      "/*exporting module from user.js file*/exports.getNane = getName /*import module in second file*/ const user = require('./user'); /*using module*/ const name = user.getName()",
    created: new Date(),
    description: "Import and export module in node.js",
    lang: "node",
    tags: ["import", "export", "module"],
  };
  await db
    .collection("snippets")
    .add(data)
    .catch((err) => console.log(err));
}
async function getData() {
  const myData = await db
    .collection("data")
    .doc("codeNotes")
    .listCollections()
    .then((resp) => {
      resp.forEach((item) => {
        const singleCollection = `data/codeNotes/${item._queryOptions.collectionId}`;
        db.collection(singleCollection)
          .get()
          .then((collection) => [...collection.docs]);
        return item;
      });
      // resp.map((coll) => coll._queryOptions.collectionId);
      return resp;
    });
  console.log(myData);

  //   .then((arr) =>
  //     arr.forEach((doc) =>
  //       db
  //         .collection(`data/codeNotes/${doc}`)
  //         .get()
  //         .then((resp) =>
  //           resp.docs.forEach((snipp) => {
  //             // console.log(snipp.data().lang);
  //             arr.push({ ...snipp.data() });
  //             console.log(arr);
  //           })
  //         )
  //     )
  //   );
  // return myData;
}

// getData();
putData();
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
