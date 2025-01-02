// controllers/productController.js

const productService = require("../services/productService");

// Menambahkan produk baru
const addProduct = async (req, res) => {
  try {
    const { name, description, price, image_url, categoryId } = req.body;
    const newProduct = await productService.addProduct(
      name,
      description,
      price,
      image_url,
      categoryId
    );
    res.status(201).json({
      message: "Produk berhasil ditambahkan",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mengambil semua produk
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mengambil produk berdasarkan ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await productService.getProductById(productId);
    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mengupdate produk
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updatedData = req.body;
    const updatedProduct = await productService.updateProduct(
      productId,
      updatedData
    );
    res.status(200).json({
      message: "Produk berhasil diperbarui",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menghapus produk
const removeProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const removedProduct = await productService.removeProduct(productId);
    res.status(200).json({
      message: "Produk berhasil dihapus",
      product: removedProduct,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  removeProduct,
};
