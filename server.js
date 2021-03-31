// Server.js - This file is the initial starting point for the Node/Express server.
// *** Dependencies
require("dotenv").config("");
const express = require("express");
const routes = require("./routes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.DB_PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Static directory
app.use(express.static("public"));

// Routes
app.use(routes);
// require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(
      " ➡️  🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
