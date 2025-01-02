const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  status: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderStatus",
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
    type: [mongoose.Schema.Types.ObjectId],
    ref: "OrderItems",
    required: true,
  },
});
