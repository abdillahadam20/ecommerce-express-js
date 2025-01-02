const mongoose = require("mongoose");

const OrderStatusSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["waiting_payment", "processing", "in_delivery", "delivered"],
    default: "waiting_payment",
    required: true,
  },
});

const OrderStatus = mongoose.model("OrderStatus", OrderStatusSchema);

module.exports = OrderStatus;
