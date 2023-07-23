const express = require("express");
const router = express();
const { verifyAuth } = require("../middlewares/verifyToken");
const {
  getOrder,
  updateOrder,
  createOrder,
  completeOrder
} = require("../controller/orderController");

router.use(verifyAuth);

router.get("/getorder", async (req, res) => {
  await getOrder(req, res);
});

router.post("/updateorder", async (req, res) => {
  await updateOrder(req, res);
});

router.post("/createorder", async (req, res) => {
  createOrder(req, res);
});

router.patch("/completeorder", async (req, res) => {
  completeOrder(req, res);
});

module.exports = router;
