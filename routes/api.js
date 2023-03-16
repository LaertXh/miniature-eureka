const api = require("express").Router();
const {
  getParsedStr,
  addData,
  deleteNote,
} = require("../interactions/write.js");

const fs = require("fs");

api.get("/notes", async (req, res) => {
  const parsedStr = await getParsedStr();

  res.status(200).json(parsedStr);
});

api.post("/notes", async (req, res) => {
  addData(req.body).then((data, err) =>
    err ? console.log(err) : res.json("New Data Logged")
  );
});

api.delete("/notes/:id", (req, res) => {
  deleteNote(req.params.id).then(() => res.json({ ok: true }));
});

module.exports = api;
