const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderCOntroller");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, orderController.createOrder);
router.get("/:orderId", authMiddleware, orderController.getOrderById);

module.exports = router;
