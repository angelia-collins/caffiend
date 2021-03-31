const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require("../models");

// API Routes
router.use("/api", apiRoutes);

router.get("/api/inventory", (req, res) => {
  db.Coffee.findAll({
      //include: [db.Consumption_stats, db.Purchase_stats],
    }).then((dbInventory) => {
      res.json(dbInventory);
    })
});

// If no API routes are hit, send the React app
router.use((req, res) => {
  // res.sendFile(path.join(__dirname, "../client/build/index.html"));
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;