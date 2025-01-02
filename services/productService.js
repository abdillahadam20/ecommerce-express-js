// services/productService.js

const Product = require("../models/Product");

// Menambahkan produk baru
const addProduct = async (name, description, price, image_url, categoryId) => {
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      image_url,
      category: categoryId,
    });
    await newProduct.save();
    return newProduct;
  } catch (error) {
    throw new Error("Gagal menambah produk: " + error.message);
  }
};

// Mengambil semua produk
const getAllProducts = async () => {
  try {
    const products = await Product.find().populate("category");
    return products;
  } catch (error) {
    throw new Error("Gagal mengambil produk: " + error.message);
  }
};

// Mengambil produk berdasarkan ID
const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId).populate("category");
    return product;
  } catch (error) {
    throw new Error("Gagal mengambil produk: " + error.message);
  }
};

// Mengupdate produk
const updateProduct = async (productId, updatedData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true }
    );
    return updatedProduct;
  } catch (error) {
    throw new Error("Gagal mengupdate produk: " + error.message);
  }
};

// Menghapus produk
const removeProduct = async (productId) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    throw new Error("Gagal menghapus produk: " + error.message);
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  removeProduct,
};
