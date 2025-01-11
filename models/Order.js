const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  qty: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: [
      "waiting_payment",
      "processing",
      "in_delivery",
      "delivered",
      "cancelled",
    ],
    default: "waiting_payment",
    required: true,
  },
  delivery_fee: { type: Number, required: true },
  delivery_address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DeliveryAddress",
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  order_items: {
    type: [orderItemSchema],
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
