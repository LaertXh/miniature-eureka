const fs = require("fs");
const unique = require("uuid");

// parse the data from the db and return it, this will allow us to keep what is already there and add to it
const getParsedStr = async () => {
  dbParsed = [];
  const data = await fs.promises.readFile("./db/db.json", "utf8");
  return JSON.parse(data);
};

const addData = async (data) => {
  //check that we have data to write
  if (data && (!data.title || !data.text)) {
    throw new Error("Input fields need proper values");
  }

  data = {
    title: data.title,
    text: data.text,
    id: unique.v1(),
  };

  //parse data
  let dbParsed = await getParsedStr();
  //add new data
  dbParsed.push(data);
  //write the data
  await fs.promises.writeFile("./db/db.json", JSON.stringify(dbParsed));
};

const deleteNote = async (id) => {
  let dbParsed = await getParsedStr();
  let newDb = [];
  for (let note of dbParsed) {
    if (note.id !== id) {
      newDb.push(note);
    }
  }
  await fs.promises.writeFile("./db/db.json", JSON.stringify(newDb));
};

module.exports = { getParsedStr, addData, deleteNote };
