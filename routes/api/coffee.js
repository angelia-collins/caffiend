const router = require("express").Router();
const db = require("../../models");

// Matches with "/api/inventory"
/*
router.route("/")
  .get((req, res) => {
    db.Coffee.findAll({
      include: [db.Consumption_stats, db.Purchase_stats],
    }).then((dbInventory) => {
      res.json(dbInventory);
    }).catch(err =>
      res.status(422).json(req, res, err))
  });
*/

router.get('/', (req, res) => {
    db.Coffee.findAll({
        //include: [db.Consumption_stats, db.Purchase_stats],
      }).then((dbInventory) => {
        res.json(dbInventory);
      })
  });

module.exports = router;