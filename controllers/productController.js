const productService = require("../services/productService");
const cloudinary = require("../config/cloudinary");

// Menambahkan produk baru
const addProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const image = req.file;

    if (image) {
      const result = await cloudinary.uploader.upload(image.path, {
        folder: "uploads",
      });

      const image_url = result.secure_url;
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
    } else {
      res.status(400).json({ message: "Image is required" });
    }
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
    const imageUrl = await productService.removeProduct(productId);
    const publicId = imageUrl.split("/").pop().split(".")[0];

    // Hapus file gambar dari Cloudinary
    await cloudinary.uploader.destroy(`uploads/${publicId}`);

    res.status(200).json({
      message: "Produk berhasil dihapus",
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
