const Router = require("express").Router();
const path = require("path");

// GET Route for homepage
Router.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for feedback page
Router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

module.exports = Router;
