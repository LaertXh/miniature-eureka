// DEPENDENCIES
const apiRouts = require("./routes/api.js");
const htmlRouts = require("./routes/html.js");

const express = require("express");

//create app and a custom port;
const app = express();
const port = process.env.PORT || 4000;

// start listening on the port
app.listen(port, () => console.log("App started"));
