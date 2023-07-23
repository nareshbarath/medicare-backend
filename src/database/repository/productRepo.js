const { Op } = require("sequelize");
const DB = require("../databaseConnection");
const { Products, Sellers, Categories } = DB;

class productService {
  constructor() {}

  async findProductbyName(name) {
    return await Products.findOne({ where: { name: name } });
  }

  async createProduct(Obj) {
    return await Products.create(Obj);
  }

  async findProductbyId(id) {
    return await Products.findByPk(id);
  }

  async findAllProducts() {
    return await Products.findAll({
      include: [
        { model: Categories, attributes: ["category"] },
        { model: Sellers, attributes: ["sellerName"] }
      ]
    });
  }

  async deleteProduct(id) {
    return await Products.destroy({ where: { id: id } });
  }

  async getActiveProducts() {
    return await Products.findAll({
      where: { isactive: true },
      include: [
        { model: Categories, attributes: ["category"] },
        { model: Sellers, attributes: ["sellerName"] }
      ]
    });
  }
}

module.exports = { productService };
