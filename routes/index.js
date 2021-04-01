const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
const apiRoutes = require("./api-routes.js ");
=======
const apiRoutes = require("./api");
const db = require("../models");
>>>>>>> 73138e27dc23ab06e4802f41fededdf43f8a9f04

router.use("/api", apiRoutes);

<<<<<<< HEAD

=======
router.get("/api/inventory", (req, res) => {
  db.Coffee.findAll({
      //include: [db.Consumption_stats, db.Purchase_stats],
    }).then((dbInventory) => {
      res.json(dbInventory);
    })
});

// If no API routes are hit, send the React app
>>>>>>> 73138e27dc23ab06e4802f41fededdf43f8a9f04
router.use((req, res) => {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;