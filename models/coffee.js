module.exports = function (sequelize, DataTypes) {
  const Coffee = sequelize.define("Coffee", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roast_type: {
        type: DataTypes.STRING
    },
    purchase_stats: {
      type: DataTypes.INTEGER
    },
    date_of_purchase: {
      type: DataTypes.DATEONLY
    },
    purchase_weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    purchase_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    consumption_stats: {
      type: DataTypes.INTEGER
    }
  });

  Coffee.associate = (models) => {
    Coffee.hasMany(models.Purchase_stats, {
      foreignKey: 'purchase_stats',
      sourceKey: 'id',
      onDelete: "cascade",
    });
  };

  Coffee.associate = (models) => {
    Coffee.hasMany(models.Consumption_stats, {
      foreignKey: 'consumption_stats',
      sourceKey: 'id',
      onDelete: "cascade",
    });
  };
  return Coffee;
};


