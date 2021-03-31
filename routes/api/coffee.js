const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/inventory"
/*
  app.post("/api/authors", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

*/
router.post('/', (req, res) => {
  db.Coffee.create(req.body).then((dbInventory) => {
      res.json(dbInventory);
    })
});


router.get('/', (req, res) => {
    db.Coffee.findAll({
        //include: [db.Consumption_stats, db.Purchase_stats],
      }).then((dbInventory) => {
        res.json(dbInventory);
      })
  });

module.exports = router;