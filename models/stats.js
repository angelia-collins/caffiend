module.exports = function (sequelize, DataTypes) {
  var Stats = sequelize.define("Stats", {
    roast_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
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
    date_of_consumption: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    consumed_weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
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

  return Stats;
};
