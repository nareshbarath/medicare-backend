const { orderService } = require("../database/repository/orderRepo");

const getOrder = async (req, res) => {
  try {
    const os = new orderService();
    const order = await os.findOrderbyUserId(res.user_id);
    res.status(200).json({ status: true, message: "Data found", data: order });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { orderJSON } = req.body;
    const os = new orderService();
    const order = await os.findOrderbyUserId(res.user_id);
    if (!order)
      return res.status(400).json({ status: false, message: "No order found" });

    order.orderJSON = orderJSON;
    await order.save();

    res
      .status(200)
      .json({ status: true, message: "Order updated successfully" });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { orderJSON } = req.body;
    const os = new orderService();
    const order = await os.findOrderbyUserId(res.user_id);
    if (order)
      return res
        .status(400)
        .json({ status: false, message: "Order already exist" });

    await os.addOrder({ orderJSON, user_id: res.user_id });

    res
      .status(200)
      .json({ status: true, message: "Order created successfully" });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

const completeOrder = async (req, res) => {
  try {
    const os = new orderService();
    const order = await os.findOrderbyUserId(res.user_id);
    if (!order)
      return res.status(400).json({ status: false, message: "No order found" });

    order.order_status = true;
    await order.save();

    res
      .status(200)
      .json({ status: true, message: "Order placed successfully" });
  } catch (err) {
    res.status(400).json({ status: false, message: err.message });
  }
};

module.exports = { getOrder, updateOrder, createOrder, completeOrder };
