module.exports = function (sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
      month: {
        type: DataTypes.STRING,
        allowNull: false,
        // TODO want value to to default to current month
      },
      allocated_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        // TODO want value to to default value of 0
      },
      spent_amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        // TODO want value to to default value of 0
      },
    //   balance: {
    //     type: DataTypes.DECIMAL,
    //     allowNull: false,
    // },
      
    });
  
    // Coffee.associate = function (models) {
    //   Coffee.hasMany(models.Stats, {
    //     onDelete: "cascade",
    //   });
    // };
  
    return Budget;
  };