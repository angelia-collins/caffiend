module.exports = function (sequelize, DataTypes) {
    const Budget = sequelize.define("Budget", {
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
    return Budget;
  };