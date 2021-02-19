const admin = require("firebase-admin");

const serviceAccount = require("./utils/db/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function putData() {
  const data = {
    code: `const all = arr.reduce((acc,item)=>{
      return acc+" "+item
  },'')`,
    created: new Date(),
    description: "Raduce method for array",
    lang: "JavaScript",
    tags: ["reduce", "method", "array"],
  };
  await db
    .collection("snippets")
    .add(data)
    .catch((err) => console.log(err));
}
putData();
export default putData;
