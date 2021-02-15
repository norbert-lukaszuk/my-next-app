const admin = require("firebase-admin");

const serviceAccount = require("../../utils/db/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function getData() {
  try {
    const collections = await db
      .collection("data")
      .doc("codeNotes")
      .listCollections();

    const docs = collections.map((doc) => doc._queryOptions.collectionId);

    console.log(docs);
  } catch (err) {
    console.log(err);
  }
}
getData();
