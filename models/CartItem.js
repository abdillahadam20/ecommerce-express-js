const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
  image_url: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;
