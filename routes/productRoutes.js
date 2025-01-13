const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middleware/multerMiddleware");
const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  productController.addProduct
);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductById);
router.put(
  "/:productId",
  authMiddleware,
  upload.single("image"),
  productController.updateProduct
);
router.delete("/:productId", authMiddleware, productController.removeProduct);

module.exports = router;
