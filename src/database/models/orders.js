module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define("orders", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    orderJSON: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
  return Orders;
};
