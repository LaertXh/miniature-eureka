// DEPENDENCIES
const apiRouts = require("./Develop/routes/api.js");
const htmlRouts = require("./Develop/routes/html.js");

const express = require("express");

//create app and a custom port;
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRouts);
app.use("/", htmlRouts);

// start listening on the port
app.listen(port, () => console.log("App started"));
