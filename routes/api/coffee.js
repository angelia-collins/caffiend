const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/inventory"
/*
app.put("/api/posts", function(req, res) {
    db.Post.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPost) {
      res.json(dbPost);
    });
  });


*/
router.put('/', (req, res) => {
  db.Coffee.update(req.body, {
    where: {
      brand: req.body.brand
    }
  }).then((dbInventory) => {
      res.json(dbInventory);
    })
});

router.post('/', (req, res) => {
  db.Coffee.create(req.body).then((dbInventory) => {
      res.json(dbInventory);
    })
});


router.get('/', (req, res) => {
    db.Coffee.findAll({
        // include: [db.Consumption_stats, db.Purchase_stats],
      }).then((dbInventory) => {
        res.json(dbInventory);
      })
  });

module.exports = router;