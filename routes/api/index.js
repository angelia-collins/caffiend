const router = require("express").Router();
const coffeeRoutes = require("./coffee");

// Inventory routes
router.use("/inventory", coffeeRoutes);

module.exports = router;