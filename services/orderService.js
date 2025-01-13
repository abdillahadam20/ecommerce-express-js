const Order = require("../models/Order");

const createOrder = async (
  userId,
  status,
  deliveryAddressId,
  deliveryFee,
  orderItems
) => {
  const newOrder = new Order({
    user: userId,
    status,
    delivery_fee: deliveryFee,
    delivery_address: deliveryAddressId,
    order_items: orderItems,
  });

  await newOrder.save();
  return newOrder;
};

const getOrderById = async (orderId) => {
  return await Order.findById(orderId).populate(
    "user delivery_address order_items.product"
  );
};

module.exports = {
  createOrder,
  getOrderById,
};
