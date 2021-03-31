module.exports = function (sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roast_type: {
        type: DataTypes.STRING
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


