const Router = require("express").Router();

const htmlRoutes = require("./html");
const apiRoutes = require("./api");

// HTML ROUTES
Router.use(htmlRoutes);

// API ROUTES
Router.use("/api", apiRoutes);

module.exports = Router;
