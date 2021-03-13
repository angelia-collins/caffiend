module.exports = function (sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Coffee.associate = function (models) {
    Coffee.hasMany(models.Stats, {
      onDelete: "cascade",
    });
  };

  return Coffee;
};
