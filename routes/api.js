const api = require("express").Router();
const { getParsedStr, addData } = require("../interactions/write.js");

const fs = require("fs");

api.get("/notes", async (req, res) => {
  const parsedStr = await getParsedStr();

  res.status(200).json(parsedStr);
});

api.post("/notes", async (req, res) => {
  addData(req.body).then((data) => res.json("New Data Logged"));
});

module.exports = api;
