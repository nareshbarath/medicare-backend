const { sellerServices } = require("../database/repository/sellerRepo");

const addSeller = async (req, res) => {
  try {
    const ss = new sellerServices();
    const { sellerName, sellerDescription } = req.body;
    if (await ss.findSellerbyName(sellerName))
      return res
        .status(400)
        .json({ status: true, message: "Seller name already exist" });

    await ss.createSeller({ sellerName, sellerDescription });
    res
      .status(200)
      .json({ status: true, message: "Seller created successfully" });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const updateSeller = async (req, res) => {
  try {
    const ss = new sellerServices();
    const { id } = req.params;
    const { sellerName, sellerDescription } = req.body;
    if (await ss.findSellerbyName(sellerName))
      return res
        .status(400)
        .json({ status: true, message: "Seller name already exist" });

    const seller = await ss.findSellerbyId(id);
    seller.sellerName = sellerName ? sellerName : seller.sellerName;
    seller.sellerDescription = sellerDescription
      ? sellerDescription
      : seller.sellerDescription;
    await seller.save();

    res
      .status(200)
      .json({ status: true, message: "Seller updated successfully" });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

const listSellers = async (req, res) => {
  try {
    const ss = new sellerServices();
    const sellers = await ss.findAllSellers();
    res
      .status(200)
      .json({ status: true, message: "Data found", data: sellers });
  } catch (err) {
    res.status(400).json({ status: true, message: err.message });
  }
};

module.exports = { addSeller, updateSeller, listSellers };
