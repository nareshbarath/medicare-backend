const userRouter = require("./users");
const authRouter = require("./auth");
const sellerRoute = require("./seller");
const categoryRoute = require("./category");
const productRoute = require("./product");
const orderRoute = require("./order");

module.exports = {
  userRouter,
  authRouter,
  sellerRoute,
  categoryRoute,
  productRoute,
  orderRoute
};
