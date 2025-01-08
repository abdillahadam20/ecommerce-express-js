const express = require("express");
const router = express.Router();
const deliveryController = require("../controllers/deliveryController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, deliveryController.createDeliveryAddress);
router.get("/", authMiddleware, deliveryController.getDeliveryAddresses);
router.put(
  "/:addressId",
  authMiddleware,
  deliveryController.updateDeliveryAddress
);
router.delete(
  "/:addressId",
  authMiddleware,
  deliveryController.removeDeliveryAddress
);

module.exports = router;
