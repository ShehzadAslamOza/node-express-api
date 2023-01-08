const getAllProductsStatic = async (req, res) => {
  throw new Error("testing async errors");
  res.status(200).json({ msg: "Product testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Product  route" });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
