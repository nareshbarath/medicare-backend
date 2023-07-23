const dbconfig = require("../config/databaseconfig");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("./models/users")(sequelize, DataTypes);
db.Products = require("./models/products")(sequelize, DataTypes);
db.Sellers = require("./models/sellers")(sequelize, DataTypes);
db.Categories = require("./models/categories")(sequelize, DataTypes);
db.Orders = require("./models/orders")(sequelize, DataTypes);

db.Products.belongsTo(db.Categories /*, { foreignKey: "category_id" }*/);
db.Categories.hasMany(db.Products /*, { foreignKey: "id" }*/);

db.Products.belongsTo(db.Sellers /*, { foreignKey: "seller_id" }*/);
db.Sellers.hasMany(db.Products /*, { foreignKey: "id" }*/);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Sync is completed");
  })
  .catch((err) => console.log(err));

module.exports = db;
