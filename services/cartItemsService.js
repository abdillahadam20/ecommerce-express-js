const CartItem = require("../models/CartItem");

// Tambah item ke keranjang
const createCartItem = async (
  userId,
  productId,
  { name, qty, price, image_url }
) => {
  try {
    const newCartItem = new CartItem({
      name,
      qty,
      price,
      image_url,
      user: userId,
      product: productId,
    });

    await newCartItem.save();

    return newCartItem;
  } catch (error) {
    throw new Error("Gagal menambah item ke keranjang: ", error.message);
  }
};

// Ambil semua item di keranjang berdasarkan userId
const getCartItems = async (userId) => {
  try {
    const cartItems = await CartItem.find({ user: userId }).populate("product");

    return cartItems;
  } catch (error) {
    throw new Error("Gagal mendapatkan item keranjang: ", error.message);
  }
};

// Mengupdate jumlah item di keranjang
const updateCartItem = async (cartItemId, qty) => {
  try {
    const updatedCartItem = await CartItem.findByIdAndUpdate(
      cartItemId,
      { qty },
      { new: true }
    );
    return updatedCartItem;
  } catch (error) {
    throw new Error("Gagal mengupdate item keranjang: " + error.message);
  }
};

// Hapus item dari keranjang
const removeCartItem = async (cartItemId) => {
  try {
    const removedCartItem = await CartItem.findByIdAndDelete(cartItemId);
    return removedCartItem;
  } catch (error) {
    throw new Error("Gagal menghapus item keranjang: " + error.message);
  }
};

module.exports = {
  createCartItem,
  getCartItems,
  updateCartItem,
  removeCartItem,
};
