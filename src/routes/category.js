const express = require("express");
const router = express();
const { verifyAuth } = require("../middlewares/verifyToken");
const {
  addCategory,
  listCategory,
  updateCategory
} = require("../controller/categoryController");

router.use(verifyAuth);

router.post("/addcategory", async (req, res) => {
  await addCategory(req, res);
});

router.post("/updatecategory/:id", async (req, res) => {
  await updateCategory(req, res);
});

router.get("/listcategory", async (req, res) => {
  await listCategory(req, res);
});

module.exports = router;
