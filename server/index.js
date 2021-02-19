const express = require("express");
const Chance = require("chance");
const chance = new Chance();
const PORT = 3001;
const app = express();

const getNames = () => {
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push({
      name: chance.first(),
      lastName: chance.last(),
      age: chance.age(),
      categorie: chance.letter({ casing: "upper" }),
    });
  }
  return arr;
};
const names = getNames();
app.get("/", (req, res) => {
  res.json({ massage: names });
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
