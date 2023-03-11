const fs = require("fs");
const unique = require("uuid");

const dbParsed = [];
// parse the data from the db and return it, this will allow us to keep what is already there and add to it
const getParsedStr = () => {
  fs.readFile("../db/db.json", "utf8", function (err, data) {
    dbParsed = JSON.parse(data);
    return dbParsed;
  });
};

const addData = (data) => {
  //check that we have data to write
  if (data.title === undefined || data.text === undefined) {
    throw new Error("Input fields need proper values");
  }

  data.id = unique();

  //parse data
  getParsedStr();
  //add new data
  dbParsed.push(data);
  //write the data
  fs.writeFile("../db/db.json", JSON.stringify(dbParsed));
};

module.exports = getParsedStr;
module.exports = addData;
