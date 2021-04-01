module.exports = function (sequelize, DataTypes) {
  const Coffee = sequelize.define("Coffee", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roast_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  });
  Coffee.associate = (models) => {
    Coffee.hasMany(models.Purchase_stats, {
      onDelete: "cascade",
    });
  };
  Coffee.associate = (models) => {
    Coffee.hasMany(models.Consumption_stats, {
      onDelete: "cascade",
    });
  };
  return Coffee;
};


