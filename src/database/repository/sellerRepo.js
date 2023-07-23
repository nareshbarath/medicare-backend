const { Op } = require("sequelize");
const DB = require("../databaseConnection");
const { Sellers } = DB;

class sellerServices {
  constructor() {}

  async findSellerbyName(name) {
    return await Sellers.findOne({ where: { sellerName: name } });
  }

  async createSeller(sellerObj) {
    return await Sellers.create(sellerObj);
  }

  async findSellerbyId(id) {
    return await Sellers.findByPk(id);
  }

  async findAllSellers() {
    return await Sellers.findAll();
  }
}

module.exports = { sellerServices };
