const { Op } = require("sequelize");
const DB = require("../databaseConnection");
const { Categories } = DB;

class categoryService {
  constructor() {}

  async findCategorybyName(name) {
    return await Categories.findOne({ where: { category: name } });
  }

  async createCategory(Obj) {
    return await Categories.create(Obj);
  }

  async findCategorybyId(id) {
    return await Categories.findByPk(id);
  }

  async findAllCategories() {
    return await Categories.findAll();
  }
}

module.exports = { categoryService };
