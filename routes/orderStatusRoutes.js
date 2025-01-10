const express = require("express");
const router = express.Router();
const orderStatusController = require("../controllers/orderStatusController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, orderStatusController.createOrderStatus);
router.get(
  "/:statusId",
  authMiddleware,
  orderStatusController.getOrderStatusById
);
router.get("/", authMiddleware, orderStatusController.getAllOrderStatuses);
router.put(
  "/:statusId",
  authMiddleware,
  orderStatusController.updateOrderStatus
);
router.delete(
  "/:statusId",
  authMiddleware,
  orderStatusController.deleteOrderStatus
);

module.exports = router;
