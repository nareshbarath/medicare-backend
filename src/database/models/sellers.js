module.exports = (sequelize, DataTypes) => {
  const Sellers = sequelize.define("sellers", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    sellerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sellerDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
  return Sellers;
};
