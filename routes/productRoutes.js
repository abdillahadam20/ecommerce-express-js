// routes/productRoutes.js

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Menambahkan produk baru
router.post("/", productController.addProduct);

// Mengambil semua produk
router.get("/", productController.getAllProducts);

// Mengambil produk berdasarkan ID
router.get("/:productId", productController.getProductById);

// Mengupdate produk
router.put("/:productId", productController.updateProduct);

// Menghapus produk
router.delete("/:productId", productController.removeProduct);

module.exports = router;
