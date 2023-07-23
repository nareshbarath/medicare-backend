const express = require("express");
const router = express();
const { verifyAuth } = require("../middlewares/verifyToken");
const {
  addSeller,
  updateSeller,
  listSellers
} = require("../controller/sellerController");

router.use(verifyAuth);

router.post("/addseller", async (req, res) => {
  await addSeller(req, res);
});

router.post("/updateseller/:id", async (req, res) => {
  await updateSeller(req, res);
});

router.get("/listsellers", async (req, res) => {
  await listSellers(req, res);
});

module.exports = router;
