const cartItemService = require("../services/cartItemsService");

const createCartItem = async (req, res) => {
  try {
    const { name, qty, price, image_url } = req.body;
    const userId = req.user._id;
    const productId = req.params.productId;

    const newCartItem = await cartItemService.createCartItem(
      userId,
      productId,
      { name, qty, price, image_url }
    );

    res.status(201).json({
      message: "Item berhasil ditambahkan ke keranjang",
      data: newCartItem,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const cartItems = await cartItemService.getCartItems(userId);

    res.status(200).json({ cartItems });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { qty } = req.body;
    const cartItemId = req.params.cartItemId;

    const updatedCartItem = await cartItemService.updateCartItem(
      cartItemId,
      qty
    );

    res.status(200).json({
      message: "Item keranjang berhasil diperbarui",
      cartItem: updatedCartItem,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeCartItem = async (req, res) => {
  try {
    const cartItemId = req.params.cartItemId;

    const removedCartItem = await cartItemService.removeCartItem(cartItemId);

    res.status(200).json({
      message: "Item berhasil dihapus dari keranjang",
      cartItem: removedCartItem,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCartItem,
  getCartItems,
  updateCartItem,
  removeCartItem,
};
