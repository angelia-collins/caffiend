const db = require("../models");

module.exports = function (app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/budget", function (req, res) {
    db.Budget.findAll({}).then(function (dbBudget) {
      res.json(dbBudget);
    });
  });
  app.get("/api/inventory", function (req, res) {
    db.Coffee.findAll({
      include: [db.Consumption_stats]
    }).then(function (dbInventory) {
      res.json(dbInventory);
    });
  });
};


