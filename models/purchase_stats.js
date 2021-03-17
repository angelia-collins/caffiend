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

  Purchase_stats.associate = function (models) {
    Purchase_stats.belongsTo(models.Coffee, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Purchase_stats;
};
