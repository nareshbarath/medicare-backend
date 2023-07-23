require("dotenv").config();
require("./src/database/databaseConnection");
const cors = require('cors');
const express = require("express");
const {
  userRouter,
  authRouter,
  sellerRoute,
  categoryRoute,
  productRoute,
  orderRoute
} = require("./src/routes/index");
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.get("/", (req, res) => {
  res.status(200).json({ status: true, message: "Medicare backend" });
});

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/sellers", sellerRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/order", orderRoute);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App running on port ${process.env.PORT || 3000}`);
  }
});
