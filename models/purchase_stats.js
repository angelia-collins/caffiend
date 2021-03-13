module.exports = function (sequelize, DataTypes) {
  var Purchase_stats = sequelize.define("Purchase_stats", {
    date_of_purchase: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    purchase_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    purchase_weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  });

  Stats.associate = function (models) {
    Stats.belongsTo(models.Coffee, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Purchase_stats;
};
