const express = require("express");
const router = express.Router();
const cartItemController = require("../controllers/cartItemsController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, cartItemController.createCartItem);

router.get("/", authMiddleware, cartItemController.getCartItems);

router.put("/:cartItemId", authMiddleware, cartItemController.updateCartItem);

router.delete(
  "/:cartItemId",
  authMiddleware,
  cartItemController.removeCartItem
);

module.exports = router;
