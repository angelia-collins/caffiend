module.exports = function (sequelize, DataTypes) {
  var Consumption_stats = sequelize.define("Consumption_stats", {
    date_of_consumption: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    consumed_weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    // TODO total_amount shout reffer to amount left in inventory (may need to make it into its own table)
    total_amount: {
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

  return Consumption_stats;
};
