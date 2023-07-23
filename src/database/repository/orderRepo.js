const DB = require("../databaseConnection");
const { Orders } = DB;

class orderService {
  constructor() {}

  async addOrder(obj) {
    return await Orders.create(obj);
  }

  async findOrderbyUserId(id) {
    return await Orders.findOne({
      where: { user_id: id, order_status: false }
    });
  }

  async findAllOrders() {
    return await Orders.findAll();
  }
}

module.exports = { orderService };
