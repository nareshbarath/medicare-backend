const { productService } = require("../database/repository/productRepo");

const addProduct = async (req, res) => {
  try {
    const ps = new productService();
    const { name, description, seller_id, category_id, price } = req.body;

    if (await ps.findProductbyName(name))
      return res
        .status(400)
        .json({ status: true, message: "Product name already exist" });

    await ps.createProduct({
      name,
      description,
      sellerId: seller_id,
      categoryId: category_id,
      price
    });
    res
      .status(200)
      .json({ status: true, message: "Product created successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: true, message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const ps = new productService();
    const { id } = req.params;
    const { name, description, category_id, price } = req.body;

    if (await ps.findProductbyName(name))
      return res
        .status(400)
        .json({ status: true, message: "Product name already exist" });

    const Product = await ps.findProductbyId(id);
    Product.name = name ? name : Product.name;
    Product.description = description ? description : Product.description;
    Product.categoryId = category_id ? category_id : Product.categoryId;
    Product.price = price ? price : Product.price;
    await Product.save();

    res
      .status(200)
      .json({ status: true, message: "Product updated successfully" });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const ps = new productService();
    const Product = await ps.findAllProducts();
    res
      .status(200)
      .json({ status: true, message: "Data found", data: Product });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const activeInactiveProduct = async (req, res) => {
  try {
    const ps = new productService();
    const { id } = req.params;
    const Product = await ps.findProductbyId(id);
    Product.isactive = !Product.isactive;
    await Product.save();

    res
      .status(200)
      .json({ status: true, message: "Product status updated successfully" });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const ps = new productService();
    const { id } = req.params;
    await ps.deleteProduct(id);
    res
      .status(200)
      .json({ status: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const listActiveProducts = async (req, res) => {
  try {
    const ps = new productService();
    const Product = await ps.getActiveProducts();
    res
      .status(200)
      .json({ status: true, message: "Data found", data: Product });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

module.exports = {
  addProduct,
  listProduct,
  updateProduct,
  activeInactiveProduct,
  deleteProduct,
  listActiveProducts
};
