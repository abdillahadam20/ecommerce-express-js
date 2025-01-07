const CartItem = require("../models/CartItem");

const createCartItem = async ({
  name,
  qty,
  price,
  image_url,
  user,
  product,
}) => {
  const newCartItem = new CartItem({
    name,
    qty,
    price,
    image_url,
    user,
    product,
  });

  await newCartItem.save();
  return newCartItem;
};

const getCartItems = async (userId) => {
  return await CartItem.find({ user: userId }).populate("product");
};

const updateCartItem = async (cartItemId, qty) => {
  return await CartItem.findByIdAndUpdate(cartItemId, { qty }, { new: true });
};

const removeCartItem = async (cartItemId) => {
  return await CartItem.findByIdAndDelete(cartItemId);
};

module.exports = {
  createCartItem,
  getCartItems,
  updateCartItem,
  removeCartItem,
};
