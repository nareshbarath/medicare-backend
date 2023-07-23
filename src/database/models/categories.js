module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define("categories", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoryDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
  return Categories;
};
