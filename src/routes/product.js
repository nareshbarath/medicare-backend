const express = require("express");
const router = express();
const { verifyAuth } = require("../middlewares/verifyToken");
const {
  activeInactiveProduct,
  addProduct,
  listProduct,
  updateProduct,
  deleteProduct,
  listActiveProducts
} = require("../controller/productController");

router.use(verifyAuth);

router.post("/addproduct", async (req, res) => {
  await addProduct(req, res);
});

router.post("/updateproduct/:id", async (req, res) => {
  await updateProduct(req, res);
});

router.get("/listproduct", async (req, res) => {
  await listProduct(req, res);
});

router.patch("/productstatus/:id", async (req, res) => {
  await activeInactiveProduct(req, res);
});

router.patch("/deleteproduct/:id", async (req, res) => {
  await deleteProduct(req, res);
});

router.get("/getproducts", async (req, res) => {
  await listActiveProducts(req, res);
});

module.exports = router;
