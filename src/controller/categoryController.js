const { categoryService } = require("../database/repository/categoryRepo");

const addCategory = async (req, res) => {
  try {
    const sc = new categoryService();
    const { category, categoryDescription } = req.body;

    if (await sc.findCategorybyName(category))
      return res
        .status(400)
        .json({ status: true, message: "Category name already exist" });

    await sc.createCategory({ category, categoryDescription });
    res
      .status(200)
      .json({ status: true, message: "Category created successfully" });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const sc = new categoryService();
    const { id } = req.params;
    const { category, categoryDescription } = req.body;

    if (await sc.findCategorybyName(category))
      return res
        .status(400)
        .json({ status: true, message: "Category name already exist" });

    const Category = await sc.findCategorybyId(id);
    Category.category = category ? category : Category.category;
    Category.categoryDescription = categoryDescription
      ? categoryDescription
      : Category.categoryDescription;
    await Category.save();

    res
      .status(200)
      .json({ status: true, message: "Category updated successfully" });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const listCategory = async (req, res) => {
  try {
    const sc = new categoryService();
    const Category = await sc.findAllCategories();
    res
      .status(200)
      .json({ status: true, message: "Data found", data: Category });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

module.exports = { addCategory, listCategory, updateCategory };
