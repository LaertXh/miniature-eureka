const api = require("express").Router();
const { getParsedStr, addData } = require("../interactions/write");

api.get("/notes", (req, res) => {
  getParsedStr().then((data) => {
    return res.json(data);
  });
});

api.post("/notes", (req, res) => {
  addData(req.body);
  res.json("New Data Logged");
});

module.exports = api;
