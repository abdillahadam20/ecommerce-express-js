const orderService = require("../services/orderService");

const createOrder = async (req, res) => {
  try {
    const { status, deliveryAddressId, deliveryFee, orderItems } = req.body;
    const userId = req.user._id;

    const newOrder = await orderService.createOrder(
      userId,
      status,
      deliveryAddressId,
      deliveryFee,
      orderItems
    );

    res.status(201).json({
      message: "Pesanan berhasil dibuat",
      order: newOrder,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await orderService.getOrderById(orderId);

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getOrderById,
};
