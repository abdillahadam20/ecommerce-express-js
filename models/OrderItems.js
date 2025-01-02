const mongoose = require("mongoose");

const OrderItemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
});
