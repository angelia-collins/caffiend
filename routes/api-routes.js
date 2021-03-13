var db = require("../models");

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




app.get("/api/authors", function(req, res) {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.Post
  db.Author.findAll({
    
  }).then(function(dbAuthor) {
    res.json(dbAuthor);
  });
});