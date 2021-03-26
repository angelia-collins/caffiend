const db = require("../models");

module.exports = function (app) {
  //  BUDGET ROUTES
  // =====================================================
  app.get("/api/budget", (req, res) => {
    db.Budget.findAll().then((dbBudget) => {
      res.json(dbBudget);
    });
  });
  app.post("/api/budget", (req, res) => {
    db.Budget.create(req.body).then((dbBudget) => {
      res.json(dbBudget);
    });
  });
  app.put("/api/budget", ({ body }, res) => {
    db.Budget.update(
      {
        allocated_amount: body.complete,
        spent_amount: body.spent_amount,
      },
      {
        where: {
          id: body.id,
        },
      }
    ).then((dbBudget) => {
      res.json(dbBudget);
    });
  });
  //  CONSUMPTION ROUTES
  // =====================================================
  app.get("/api/consumption", (req, res) => {
    db.Consumption_stats.findAll().then(
      (dbConsumption) => {
        res.json(dbConsumption);
      }
    );
  });
  //  INVENTORY ROUTES
  // =====================================================
  app.get("/api/inventory", (req, res) => {
    db.Coffee.findAll({
      include: [db.Consumption_stats, db.Purchase_stats],
    }).then((dbInventory) => {
      res.json(dbInventory);
    });
  });
  app.post("/api/inventory", (req, res) => {
    db.Coffee.create(
      { include: [db.Consumption_stats, db.Purchase_stats] },
      req.body
    ).then((dbInventory) => {
      res.json(dbInventory);
    });
  });
  app.put("/api/inventory", ({ body }, res) => {
    db.Coffee.update(
      { incldue: [db.Consumption_stats, db.Purchase_stats] },
      {
        type: body.type,
        roast_type: body.roast_type,
        date_of_consumption: body.date_of_consumption,
        consumed_weight: body.consumed_weight,
        date_of_purchase: body.date_of_purchase,
        purchase_price: body.purchase_price,
        purchase_weight: body.purchase_weight,
        total_amount: body.total_amount,
      },
      {
        where: {
          id: body.id,
        },
      }
    ).then((dbInventory) => {
      res.json(dbInventory);
    });
  });
// TODO check to ensur that DELETE route doesn't mess up consumtption report 
  app.delete("/api/inventory/:id", ({ params }, res) => {
    db.Coffee.destroy(
      { incldue: [db.Consumption_stats, db.Purchase_stats] },
      {
        where: {
          id: params.id,
        },
      }
    ).then((dbInventory) => {
      res.json(dbInventory);
    });
  });
};
